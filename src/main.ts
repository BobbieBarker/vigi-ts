export let __hotReload = true;


import {RequestProvider} from './request';


export class Vigi {
	constructor(){}
	
	private _url: string;
	
	get baseUrl(): string {
		return this._url
	}
	
	set baseUrl(url: string){
		this._url = url;
	}
	
	demo(){
		let demoPath = new Request(`${this.baseUrl}/posts`, {method: 'GET'})
		window.fetch(demoPath).then((data) => data.json().then((rest) => {
			console.log(rest)
		}));
	}
}


let vigi = new Vigi();

vigi.baseUrl = 'http://jsonplaceholder.typicode.com';

console.log(vigi.baseUrl);

vigi.demo()

