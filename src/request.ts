export let __hotReload = true;

export const _fetch = (request: any) => {
		return  window.fetch(request).then((data) => data.json().then((rest) => {
         return rest;
       }));
	};


