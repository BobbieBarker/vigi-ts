export let __hotReload = true;

const _fetch = (request: any) => {
  return  window.fetch(request).then((data) => data.json().then((rest) => {
    return rest;
  }));
};

const _createRequest = (instance: any, method: string, params?: string, payload?: any) => {
  let resource = instance.resource;
  
  if(instance.hasOwnProperty('id')) {
    resource = `${resource}/${instance.id}`;
  }
  
  resource = params ? `${resource}/${params}` : resource;
  return new Request(resource, {method: method, body: JSON.stringify(payload)});
}

const	_enhance = (instance, data) => {
  if(Array.isArray(data)){
    return data.map(item => Object.assign({}, instance, item));
  }
  return Object.assign({}, instance, data);
}

export const _getResource = (instance: any, method: string, queryParams?: string, payload?: any) => {
  return _fetch(_createRequest(instance, method, queryParams, payload)).then(data => _enhance(instance, data));
}