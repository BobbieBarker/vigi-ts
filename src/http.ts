interface HttpOptions {
	METHOD: string
}

export class HTTP  {
	constructor(parent, fetchFactory){
		this.parent = parent;
		let _fetch = fetchFactory;
		
		this.get = (route?: string, id?: number, HttpOptions?: string) => {
			return _fetch(this.makeRequest(this, route, id, 'GET')).then(data => {
				return this.enhance(data);
			});
		}
		
		this.post = () => {
			
		}
		
		this.put = (payload: any, route?: string, id?: number) => {
			let request = new Request(this.parent, {method: 'PUT', body: JSON.stringify(payload)})
			console.log(request)
			return _fetch(this.makeRequest(this, route, id, 'PUT', payload)).then(data => {
				return this.enhance(data);
			});
		}
		
		this.remove = () => {
			
		}
	}

	public parent: string;
	public data;
	public get;
	public post;
	public remove;
	public put;

	makeRequest(instance: HTTP, route?: string, id?: number, method?: string, payload?: any){
		if(instance.hasOwnProperty('id')){
			this.parent = `${this.parent}/${instance.id}`
		}
		this.parent = route ? `${this.parent}/${route}` : this.parent;
		this.parent = id ? `${this.parent}/${id}` : this.parent;
		return new Request(this.parent, {method: method, body: JSON.stringify(payload)});
	}
	
	enhance(data){
		if(Array.isArray(data)){
			return data.map(item => {
				return Object.assign(this, item)
			});
		}
		return Object.assign(this, data);
	}
}

