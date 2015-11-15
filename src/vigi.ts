interface HttpOptions {
	METHOD: string
}

import {_fetch} from './request';

export class Vigi  {
  private parent: string;
	public get;
	public post;
	public remove;
	public put;
  public one;
  public all;

	constructor(baseUrl: string){
    this.parent = baseUrl;
    
		this.get = (queryParams?: string, HttpOptions?: string) => {
			return _fetch(this.makeRequest(this, queryParams, 'GET')).then(data => {
				return this.enhance(data);
			});
		}
		
		this.post = () => {
			
		}
		
		this.put = (payload: any, queryParams: string) => {
			return _fetch(this.makeRequest(this, queryParams, 'PUT', payload)).then(data => {
				return this.enhance(data);
			});
		}
		
		this.remove = () => {
			
		}
    
    this.one = (path: string, id: number) => {
      this.parent = `${this.parent}/${path}`;
      this.parent = id ? `${this.parent}/${id}` : this.parent;
      return this;
    }
    
    this.all = (path: string) => {
      this.parent = `${this.parent}/${path}`;
      return this;
    }
	}// end constructor
  
  //refactor out into function
	makeRequest(instance: HTTP, params?: string,  method?: string, payload?: any) {
    
    let resource = instance.parent;
    
		if(instance.hasOwnProperty('id')) {
			resource = `${resource}/${instance.id}`;
		}
    
		resource = params ? `${resource}/${params}` : resource;
		return new Request(resource, {method: method, body: JSON.stringify(payload)});
	}
	 
  //refactor out into function
	enhance(data) {
		if(Array.isArray(data)){
			return data.map(item => Object.assign(this, item));
		}
		return Object.assign(this, data);
	}
}

