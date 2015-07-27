export class Vigi {
	constructor(){}
	
	private _url: string;
	
	get baseUrl(): string {
		return this._url
	}
	
	set baseUrl(url: string){
		this._url = url;
	}
}


let vigi = new Vigi();

vigi.baseUrl = 'stevesauce'

console.log(vigi.baseUrl)