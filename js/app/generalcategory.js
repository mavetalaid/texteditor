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
var GeneralCategory = /** @class */ (function (_super) {
    __extends(GeneralCategory, _super);
    function GeneralCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralCategory.prototype.GetAllCategory = function (func) {
        var self = this;
        this.Get("general/GetGeneral", function (data) {
            var alldata = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var alldata_ = data_1[_i];
                alldata.push({
                    country: alldata_.country,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2016", value: alldata_.y2016 },
                        { year: "2017", value: alldata_.y2017 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", "Value");
            func(dataset);
        });
    };
    GeneralCategory.prototype.GetUniqueDataByType = function (data, func) {
        var self = this;
        var pushitems_ = { country: data };
        this.POST("general/GetGeneral", JSON.stringify(pushitems_), function (response) {
            func(response);
        });
    };
    GeneralCategory.prototype.GetUniqueDataByIndicator = function (func) {
        var self = this;
        this.Get("general/GetGeneralByIndicator", function (response) {
            func(response);
        });
    };
    GeneralCategory.prototype.GetHWIncinerated = function (func) {
        var self = this;
        this.Get("naturalresources/GetHWIncinerated", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    return GeneralCategory;
}(CategoryBase));
//# sourceMappingURL=generalcategory.js.map