System.register("src/main.ts", ['./vigi'], function(exports_1) {
    var vigi_1;
    var __hotReload, vigi, test, bob;
    return {
        setters:[
            function (_vigi_1) {
                vigi_1 = _vigi_1;
            }],
        execute: function() {
            exports_1("__hotReload", __hotReload = true);
            exports_1("vigi", vigi = function () {
                //let http = new HTTP(_fetch);
                return new vigi_1.Vigi();
            });
            test = vigi();
            test.baseUrl = 'http://jsonplaceholder.typicode.com';
            test.one('posts');
            console.log(test.one('posts'));
            test.one('posts').get().then(function (data) {
                console.log(data);
            });
            test.one('todos').get().then(function (data) {
                console.log(data);
            });
            bob = Object.assign({}, { a: 1 }, { b: 2 });
            console.log(bob);
        }
    }
});

System.register("src/vigi.ts", ['./request', './http'], function(exports_1) {
    var request_1, http_1;
    var __hotReload, Vigi;
    return {
        setters:[
            function (_request_1) {
                request_1 = _request_1;
            },
            function (_http_1) {
                http_1 = _http_1;
            }],
        execute: function() {
            exports_1("__hotReload", __hotReload = true);
            Vigi = (function () {
                function Vigi() {
                }
                Object.defineProperty(Vigi.prototype, "baseUrl", {
                    get: function () {
                        return this._baseUrl;
                    },
                    set: function (url) {
                        this._baseUrl = url;
                    },
                    enumerable: true,
                    configurable: true
                });
                Vigi.prototype.one = function (path) {
                    var resource = this._baseUrl + "/" + path;
                    var _http = new http_1.HTTP(resource, request_1._fetch);
                    return _http;
                };
                return Vigi;
            })();
            exports_1("Vigi", Vigi);
        }
    }
});

System.register("src/http.ts", [], function(exports_1) {
    var HTTP;
    return {
        setters:[],
        execute: function() {
            HTTP = (function () {
                function HTTP(path, fetchFactory) {
                    this.path = path;
                    this._fetch = fetchFactory;
                }
                HTTP.prototype.get = function (url, HttpOptions) {
                    var _this = this;
                    var request = new Request(this.path, { METHOD: 'GET' });
                    return this._fetch(request).then(function (data) {
                        _this.enhance(data);
                        _this.data = data;
                        return _this;
                    });
                };
                HTTP.prototype.post = function () {
                };
                HTTP.prototype.put = function () {
                };
                HTTP.prototype.delete = function () {
                };
                HTTP.prototype.enhance = function (data) {
                    var _this = this;
                    return data.map(function (item) {
                        return _this;
                    });
                };
                return HTTP;
            })();
            exports_1("HTTP", HTTP);
        }
    }
});

System.register("src/request.ts", [], function(exports_1) {
    var __hotReload, _fetch;
    return {
        setters:[],
        execute: function() {
            exports_1("__hotReload", __hotReload = true);
            exports_1("_fetch", _fetch = function (request) {
                return window.fetch(request).then(function (data) { return data.json().then(function (rest) {
                    return rest;
                }); });
            });
        }
    }
});
