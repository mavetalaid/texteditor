function Run() {
    let url = location.search;

    if (url.indexOf("id=") !== -1) {
        let id = url.split("id=");

        if (id.length > 1) {
            let view = new MainView();
            view.Share(id[1]);
        }

    } else {
        let view = new MainView();
        view.Show();
    }
}