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
var Consumption = /** @class */ (function (_super) {
    __extends(Consumption, _super);
    function Consumption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //--------------------------- Material Footprint ---------------------------------
    Consumption.prototype.GetCBMFAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("consumption/GetCBMFAsiaPacificDeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CBMFAsiaPacificDeveloping",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
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
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    Consumption.prototype.GetCBMFAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("consumption/GetCBMFAsiaPacificWorld", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CBMFAsiaPacificWorld",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
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
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    Consumption.prototype.GetCBMFCompared = function (func) {
        var self = this;
        this.Get("consumption/GetCBMFCompared", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CBMFCompared",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
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
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    Consumption.prototype.GetCBMFCAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("consumption/GetCBMFCAsiaPacificDeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CBMFCAsiaPacificDeveloping",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                        //----------- TBD (mf & dmc tags) ----------------
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    Consumption.prototype.GetCBMFCAsiaPacificIndustralized = function (func) {
        var self = this;
        this.Get("consumption/GetCBMFCAsiaPacificIndustralized", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CBMFCAsiaPacificIndustralized",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                        //----------- TBD (mf & dmc tags) ----------------
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //--------------------------- Water Footprint ---------------------------------
    Consumption.prototype.GetCBMFWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("consumption/GetCBMFWaterAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CBMFWaterAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    return Consumption;
}(CategoryBase));
//# sourceMappingURL=consumption.js.map