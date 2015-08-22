

interface HttpOptions {
	METHOD: string
}


export class HTTP  {
	constructor(path, fetchFactory){
		this.path = path;
		this._fetch = fetchFactory;
	}
	private path;
	private _fetch;
	
	get(){
		let request = new Request(this.path, {METHOD: 'GET'});
		return this._fetch(request);
	}
	
	post(){
		
	}
	
	put(){
		
	}
	
	delete(){
		
	}
}

