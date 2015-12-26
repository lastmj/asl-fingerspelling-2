System.register(['angular2/platform/browser', 'www/app/AppComponent.ts'], function(exports_1) {
    var browser_1, AppComponent_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (AppComponent_ts_1_1) {
                AppComponent_ts_1 = AppComponent_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(AppComponent_ts_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map