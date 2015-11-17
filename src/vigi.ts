import {_getResource} from './request';

export class Vigi {
  private resource: string;
  public get;
  public post;
  public remove;
  public put;
  public one;
  public all;
  
  /**
   * API methods are defined inside the constructor to deliberately make them a property of the class
   * and not a property of the class prototype. This enables the use of Object.assign in the _enhance
   * function to enrich the API responses with the class methods. 
   */
  constructor(baseUrl: string) {
    this.resource = baseUrl;
    
    this.get = function(queryParams?: string) {
      return _getResource(this, 'get', queryParams);
    }
    
    this.post = function(payload: any, queryParams: string) {
      return _getResource(this, 'post', queryParams, payload);
    }
    
    this.put = function(queryParams?: string) {
      return _getResource(this, 'put', queryParams, this);
    }
    
    this.remove = function(queryParams?: string) {
      return _getResource(this, 'delete', queryParams);
    }
    
    this.one = function(path: string, id: number) {
      this.resource = `${this.resource}/${path}`;
      this.resource = id ? `${this.resource}/${id}` : this.resource;
      return this;
    }
    
    this.all = function(path: string) {
      this.resource = `${this.resource}/${path}`;
      return this;
    }
    
  }// end constructor
}// end class