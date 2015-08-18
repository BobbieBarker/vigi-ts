export let __hotReload = true;

interface __Request {
	url: string,
	method: string,
	bodyUsed?: boolean,
	context?: string,
	headers?: any,
	mode?: string,
	referrer?: string,	
}  

export class RequestProvider implements __Request {
	constructor(){
//		this._request = {};
	};
	
	private _request: __Request;
	
	
	get Resource(): any {
		return new Request(this._request.url, this._request);
	}
	
	set url(url: string) {
		this._request.url = url;
	}
	
	set method(method: string){
		this._request.method = method;
	}
	
	_fetch(request){
		return  window.fetch(request).then((data) => data.json().then((rest) => {
         return rest;
       }));
	}
}

