function Run() {
    var url = location.search;
    if (url.indexOf("id=") !== -1) {
        var id = url.split("id=");
        if (id.length > 1) {
            var view = new MainView();
            // view.Share(id[1]);
        }
    }
    else {
        var view = new MainView();
        view.Show();
    }
}
//# sourceMappingURL=app.js.map