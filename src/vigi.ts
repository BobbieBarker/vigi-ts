export let __hotReload = true;
import {_fetch} from './request';
import {HTTP} from './http';

export class Vigi {
	constructor(){
		
	}
		
	private _baseUrl: string;
	
	get baseUrl(): string {
		return this._baseUrl
	}
	
	set baseUrl(url: string){
		this._baseUrl = url;
	}
	
	one(path: string) {
		let resource = `${this._baseUrl}/${path}`;
		let blah = new HTTP(resource, _fetch)
		return blah
	}
	
}
















