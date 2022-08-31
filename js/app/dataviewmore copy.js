var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MetaDataViewMore = /** @class */ (function (_super) {
    __extends(MetaDataViewMore, _super);
    function MetaDataViewMore(container) {
        var _this = _super.call(this) || this;
        _this.container = container;
        return _this;
    }
    MetaDataViewMore.prototype.Show = function () {
        var self = this;
        // let container_ = document.getElementsByClassName("box-layout");
        // container_[0].remove();
        // let container1 = document.getElementsByClassName("overlay");
        // container1[0].remove();
        // let container5 = document.getElementsByClassName("list");
        // container5[0].remove();
        var container = this.container;
        container.Clear();
        var detailcontainer = new Xplore.Container();
        detailcontainer.Add(new Xplore.Button({
            text: "Back",
            icon: "home",
            classes: ["home-button"],
            onclick: function () {
                var view = new MainView();
                view.Show();
            }
        }));
        detailcontainer.Add(new Xplore.Button({
            text: "Police",
            icon: "police-badge-outline",
            classes: ["app-menu"],
        }));
        container.Add(detailcontainer);
        container.Refresh();
    };
    return MetaDataViewMore;
}(CategoryBase));
//# sourceMappingURL=dataviewmore%20copy.js.map