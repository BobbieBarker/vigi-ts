System.register("src/main.ts", [], function(exports_1) {
    var __hotReload, Vigi, vigi;
    return {
        setters:[],
        execute: function() {
            exports_1("__hotReload", __hotReload = true);
            Vigi = (function () {
                function Vigi() {
                }
                Object.defineProperty(Vigi.prototype, "baseUrl", {
                    get: function () {
                        return this._url;
                    },
                    set: function (url) {
                        this._url = url;
                    },
                    enumerable: true,
                    configurable: true
                });
                Vigi.prototype.demo = function () {
                    console.log(this.baseUrl + "/posts");
                    var demoPath = new Request(this.baseUrl + "/posts", { method: 'GET' });
                    window.fetch(demoPath).then(function (data) { return data.json().then(function (rest) {
                        console.log(rest);
                    }); });
                };
                return Vigi;
            })();
            exports_1("Vigi", Vigi);
            vigi = new Vigi();
            vigi.baseUrl = 'http://jsonplaceholder.typicode.com';
            console.log(vigi.baseUrl);
            vigi.demo();
        }
    }
});
