export let __hotReload = true;


export class RequestProvider {
	constructor(){
		this._request = {};
	};
	
	private _request: any;
	
	
	get Request(): any {
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

