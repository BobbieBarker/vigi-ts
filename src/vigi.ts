import {_makeRequest} from './request';

export class Vigi  {
  private parent: string;
	public get;
	public post;
	public remove;
	public put;
  public one;
  public all;

	constructor(baseUrl: string) {
    this.parent = baseUrl;
    
		this.get = (queryParams?: string) => {
      return _makeRequest(this, 'GET', queryParams);
		}
		
		this.post = (payload: any, queryParams: string) => {
		  return _makeRequest(this, 'POST', queryParams);	
		}
		//put shouldn't accept a payload, put should act on the object
		this.put = (payload: any, queryParams?: string) => {
      return _makeRequest(this, 'PUT', queryParams, payload);
		}
		
		this.remove = (queryParams) => {
			return _makeRequest(this, 'DELETE', queryParams);
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
}// end class

