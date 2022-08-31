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
var ResourceHumanDev = /** @class */ (function (_super) {
    __extends(ResourceHumanDev, _super);
    function ResourceHumanDev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //------------------------- Human Development Index (HDI) -----------------------------------
    ResourceHumanDev.prototype.GetrhHDIdmc2010 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhHDIdmc2010", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhHDIdmc2010",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", x: alldata_.y2010_dmc_per_capita, y: alldata_.y2010_hdi, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    // ---------- For Testing Purposes------------
    // GetrhHDIdmc2010_(func: Function) {
    //     let self = this;
    //     this.Get("resources&human/GetHDI", function (data: UNEPTableRow[]) {
    //         let alldata = [];
    //         for (let alldata_ of data) {
    //             alldata.push({
    //                 country: alldata_.country,
    //                 sharename: "rhHDIdmc2010",
    //                 // charttitle: data[0].chartinfo.charttitle,
    //                 data: [
    //                     { year: "2010", x: alldata_.y2010_dmc_per_capita, y: alldata_.y2010_hdi, value: 0 },
    //                     // { year: "2010", value: alldata_.y2010_hdi }
    //                 ]
    //             })
    //         }
    //         // let dataset: XChartDataSet = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
    //         let dataset: XChartDataSet = self.ScatterPlotDataSet(alldata, "Year", "Units");
    //         func(dataset);
    //     });
    // }
    ResourceHumanDev.prototype.GetrhHDIdmc2017 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhHDIdmc2017", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhHDIdmc2017",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2017", x: alldata_.y2017_dmc_per_capita, y: alldata_.y2017_hdi, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhHDImf2010 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhHDImf2010", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhHDImf2010",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", x: alldata_.y2010_mf_per_capita, y: alldata_.y2010_hdi, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhHDImf2017 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhHDImf2017", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhHDImf2017",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2017", x: alldata_.y2017_mf_per_capita, y: alldata_.y2017_hdi, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhGDPdmc2010 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhGDPdmc2010", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhGDPdmc2010",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", x: alldata_.y2010_dmc_per_capita, y: alldata_.y2010_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhGDPdmc2017 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhGDPdmc2017", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhGDPdmc2017",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2017", x: alldata_.y2017_dmc_per_capita, y: alldata_.y2017_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhGDPmf2010 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhGDPmf2010", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhGDPmf2010",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", x: alldata_.y2010_mf_per_capita, y: alldata_.y2010_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhGDPmf2017 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhGDPmf2017", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhGDPmf2017",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2017", x: alldata_.y2017_mf_per_capita, y: alldata_.y2017_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Economic Growth (GDP) -----------------------------------
    ResourceHumanDev.prototype.GetrhEGDPdmc2010 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhEGDPdmc2010", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhEGDPdmc2010",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", x: alldata_.y2010_dmc_per_capita, y: alldata_.y2010_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhEGDPdmc2017 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhEGDPdmc2017", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhEGDPdmc2017",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2017", x: alldata_.y2017_dmc_per_capita, y: alldata_.y2017_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhEGDPmf2010 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhEGDPmf2010", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhEGDPmf2010",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", x: alldata_.y2010_mf_per_capita, y: alldata_.y2010_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetrhEGDPmf2017 = function (func) {
        var self = this;
        this.Get("resourceshuman/GetrhEGDPmf2017", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhEGDPmf2017",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2017", x: alldata_.y2017_mf_per_capita, y: alldata_.y2017_gdp_per_capita, value: 0 }
                    ]
                });
            }
            var dataset = self.ScatterPlotDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Investment and consumption -----------------------------------
    ResourceHumanDev.prototype.GetRHFDIIndiaChina = function (func) {
        var self = this;
        this.Get("resourceshuman/GetRHFDIIndiaChina", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "RHFDIIndiaChina",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1990", value: alldata_.y1990 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2016", value: alldata_.y2016 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                        { year: "2019", value: alldata_.y2019 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.GetRHFDIAsiaPacific = function (func) {
        var self = this;
        this.Get("resourceshuman/GetRHFDIAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "RHFDIAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1990", value: alldata_.y1990 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2016", value: alldata_.y2016 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                        { year: "2019", value: alldata_.y2019 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Debt, inflation -----------------------------------
    ResourceHumanDev.prototype.Getrhgggasiapacificdeveloping = function (func) {
        var self = this;
        this.Get("resourceshuman/Getrhgggasiapacificdeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhgggasiapacificdeveloping",
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
    ResourceHumanDev.prototype.Getrhirasiapacificdeveloping = function (func) {
        var self = this;
        this.Get("resourceshuman/Getrhirasiapacificdeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhirasiapacificdeveloping",
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
    //------------------------- Access to energy, water, sanitation -----------------------------------
    ResourceHumanDev.prototype.Getrhaeasiapacific = function (func) {
        var self = this;
        this.Get("resourceshuman/Getrhaeasiapacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhaeasiapacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2019", value: alldata_.y2019 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.Getrhawater = function (func) {
        var self = this;
        this.Get("resourceshuman/Getrhawater", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhawater",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2020", value: alldata_.y2020 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    ResourceHumanDev.prototype.Getrhasanitation = function (func) {
        var self = this;
        this.Get("resourceshuman/Getrhasanitation", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "rhasanitation",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2020", value: alldata_.y2020 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    return ResourceHumanDev;
}(CategoryBase));
//# sourceMappingURL=resourcehumandev.js.map