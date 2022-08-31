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
var ResourceEfficiency = /** @class */ (function (_super) {
    __extends(ResourceEfficiency, _super);
    function ResourceEfficiency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // GetMIAsiaPacific(func: Function) {
    //     let self = this;
    //     // this.Get("resourceefficiency/GetMIDMC", function (data: UNEPTableRow[]) {
    //     //     let dataset : XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //     //     func(dataset);
    //     // });
    // } 
    // --------- Material Intensity of the economy---------------
    ResourceEfficiency.prototype.GetREAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("resourceefficiency/GetREAsiaPacificWorld", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "MREAsiaPacificWorld",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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
    ResourceEfficiency.prototype.GetREAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("resourceefficiency/GetREAsiaPacificDeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "MREAsiaPacificDeveloping",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceEfficiency.prototype.GetREAsiaPacificIndustry = function (func) {
        var self = this;
        this.Get("resourceefficiency/GetREAsiaPacificIndustry", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "MREAsiaPacificIndustry",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    // --------- Energy intensity of the economy---------------
    ResourceEfficiency.prototype.Geteigdpasiapacificworld = function (func) {
        var self = this;
        this.Get("resourceefficiency/Geteigdpasiapacificworld", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "eigdpasiapacificworld",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1990", value: alldata_.y1990 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceEfficiency.prototype.Geteiasiapacificdeveloping = function (func) {
        var self = this;
        this.Get("resourceefficiency/Geteiasiapacificdeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "eiasiapacificdeveloping",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    // --------- GHG intensity of the economy---------------
    ResourceEfficiency.prototype.Getco2asiapacific = function (func) {
        var self = this;
        this.Get("resourceefficiency/Getco2asiapacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "co2asiapacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    // --------- Water intensity of the economy---------------
    ResourceEfficiency.prototype.GetWaterIntensityAsiaPacific = function (func) {
        var self = this;
        this.Get("resourceefficiency/GetWaterIntensityAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "REWaterIntensityAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    return ResourceEfficiency;
}(CategoryBase));
//# sourceMappingURL=resourceefficiency.js.map