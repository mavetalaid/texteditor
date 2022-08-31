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
var TradeDependency = /** @class */ (function (_super) {
    __extends(TradeDependency, _super);
    function TradeDependency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TradeDependency.prototype.GetTDPTBMaterialCategory = function (func) {
        var self = this;
        this.Get("tradedependency/GetTDPTBMaterialCategory", function (data) {
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
    TradeDependency.prototype.GetTDPTBCSIRO = function (func) {
        var self = this;
        this.Get("tradedependency/GetTDPTBCSIRO", function (data) {
            var alldata = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var alldata_ = data_2[_i];
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
    TradeDependency.prototype.GetTDPTBAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("tradedependency/GetTDPTBAsiaPacificWorld", function (data) {
            var alldata = [];
            for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                var alldata_ = data_3[_i];
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
    TradeDependency.prototype.GetTDPTBAsiaPacific = function (func) {
        var self = this;
        this.Get("tradedependency/GetTDPTBAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                var alldata_ = data_4[_i];
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
    return TradeDependency;
}(CategoryBase));
//# sourceMappingURL=tradedependency%20copy.js.map