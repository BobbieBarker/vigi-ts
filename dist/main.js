System.register("src/main.ts", ['./main'], function(exports_1) {
    var main_1;
    var __hotReload, vigi;
    return {
        setters:[
            function (_main_1) {
                main_1 = _main_1;
            }],
        execute: function() {
            exports_1("__hotReload", __hotReload = true);
            exports_1("vigi", vigi = function () {
                return new main_1.Vigi();
            });
            vigi.baseUrl = 'http://jsonplaceholder.typicode.com';
            console.log('steve');
            console.log(vigi.baseUrl);
            vigi.demo();
        }
    }
});
