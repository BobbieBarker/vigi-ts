export let __hotReload = true;


import {RequestProvider} from './request';


export class Vigi {
	constructor(private http){
		this.http = http;
	}
	
	
	private _url: string;
	
	get baseUrl(): string {
		return this._url
	}
	
	set baseUrl(url: string){
		this._url = url;
	}
	
}

