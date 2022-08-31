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
var NaturalResources = /** @class */ (function (_super) {
    __extends(NaturalResources, _super);
    function NaturalResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // GetNRAsiaPacific(func: Function) {
    //     let self = this;
    //     this.Get("naturalresources/GetNRAsiaPacific", function (data: UNEPTableRow[]) {
    //         let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // }
    // GetNRAsiaPacificWorld(func: Function) {
    //     let self = this;
    //     this.Get("naturalresources/GetNRAsiaPacificWorld", function (data: UNEPTableRow[]) {
    //         let dataset : XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // } 
    // GetNRAsiaPacificMaterial(func: Function) {
    //     let self = this;
    //     this.Get("naturalresources/GetNRAsiaPacificMaterial", function (data: UNEPTableRow[]) {
    //         let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // }
    // GetNRAsiaPacificDeveloping(func: Function) {
    //     let self = this;
    //     this.Get("naturalresources/GetNRAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
    //         let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // }
    //------------ Material Use ---------------
    NaturalResources.prototype.GetNRAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacific",
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
    NaturalResources.prototype.GetNRAsiaPacificMaterial = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificMaterial", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificMaterial",
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
    NaturalResources.prototype.GetNRAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificWorld", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificWorld",
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
    NaturalResources.prototype.GetNRAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificDeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificDeveloping",
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
    NaturalResources.prototype.GetNRAsiaPacificIndustrialized = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificIndustrialized", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificIndustrialized",
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
    //------------ Energy Use ---------------
    NaturalResources.prototype.GetREAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("naturalresources/GetREAsiaPacificWorld", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "REAsiaPacificWorld",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2016", value: alldata_.y2016 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetREAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("naturalresources/GetREAsiaPacificDeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "REAsiaPacificDeveloping",
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
    //------------ Water Use ---------------
    NaturalResources.prototype.GetTotalWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetTotalWaterAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "TotalWaterAsiaPacific",
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
    NaturalResources.prototype.GetWaterSecAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterSecAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterSecAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "Domiestic", value: alldata_.domiestic },
                        { year: "Industry", value: alldata_.industry },
                        { year: "Agriculture", value: alldata_.agriculture }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetWaterCapitaAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterCapitaAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterCapitaAsiaPacific",
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
    NaturalResources.prototype.GetWaterIntensityAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterIntensityAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterIntensityAsiaPacific",
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
    NaturalResources.prototype.GetAgriWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetAgriWaterAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "AgriWaterAsiaPacific",
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
    NaturalResources.prototype.GetWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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
    NaturalResources.prototype.GetWaterFPAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterFPAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterFPAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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
    //------------ Land Use ---------------
    NaturalResources.prototype.GetTotalLand = function (func) {
        var self = this;
        this.Get("naturalresources/GetTotalLand", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "TotalLand",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "1993", value: alldata_.y1993 },
                        { year: "1994", value: alldata_.y1994 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "1996", value: alldata_.y1996 },
                        { year: "1997", value: alldata_.y1997 },
                        { year: "1998", value: alldata_.y1998 },
                        { year: "1999", value: alldata_.y1999 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
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
    NaturalResources.prototype.GetTotalLandCapita = function (func) {
        var self = this;
        this.Get("naturalresources/GetTotalLandCapita", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "TotalLandCapita",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "2015", value: alldata_.y2015 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandSector2015 = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandSector2015", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandSector2015",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "Agriculture", value: alldata_.agriculture },
                        { year: "Forest", value: alldata_.forest },
                        { year: "Urban", value: alldata_.urban }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandIntensity = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandIntensity", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandIntensity",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2015", value: alldata_.y2015 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandProductivity = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandProductivity", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandProductivity",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "1993", value: alldata_.y1993 },
                        { year: "1994", value: alldata_.y1994 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "1996", value: alldata_.y1996 },
                        { year: "1997", value: alldata_.y1997 },
                        { year: "1998", value: alldata_.y1998 },
                        { year: "1999", value: alldata_.y1999 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
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
    NaturalResources.prototype.GetLandMajorSector = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandMajorSector", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandMajorSector",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "1993", value: alldata_.y1993 },
                        { year: "1994", value: alldata_.y1994 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "1996", value: alldata_.y1996 },
                        { year: "1997", value: alldata_.y1997 },
                        { year: "1998", value: alldata_.y1998 },
                        { year: "1999", value: alldata_.y1999 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
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
    //------------ GHG from agriculture (Agricultural productivity) ---------------
    NaturalResources.prototype.GetGHGEmissions = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGEmissions", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGEmissions",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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
    NaturalResources.prototype.GetGHGResultAgri = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGResultAgri", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGResultAgri",
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
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2030", value: alldata_.y2030 },
                        { year: "2050", value: alldata_.y2050 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetGHGCompare = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGCompare", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGCompare",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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
    NaturalResources.prototype.GetGHGCO2 = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGCO2", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGCO2",
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
    NaturalResources.prototype.GetGHGIntensity = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGIntensity", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGIntensity",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetCereal = function (func) {
        var self = this;
        this.Get("naturalresources/GetCereal", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "Cereal",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetCompareAgri = function (func) {
        var self = this;
        this.Get("naturalresources/GetCompareAgri", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "CompareAgri",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2019", value: alldata_.y2019 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetAgriAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetAgriAsiaPacific", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "AgriAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------ Greenhouse Gas Emissions ---------------
    NaturalResources.prototype.GetGHGEmissionEnergy = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGEmissionEnergy", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGEmissionEnergy",
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
    //------------ Waste Management ---------------
    NaturalResources.prototype.GetMWCove = function (func) {
        var self = this;
        this.Get("naturalresources/GetMWCove", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "MWCove",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    NaturalResources.prototype.GetMWRecycled = function (func) {
        var self = this;
        this.Get("naturalresources/GetMWRecycled", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "MWRecycled",
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
    NaturalResources.prototype.GetHWGenerated = function (func) {
        var self = this;
        this.Get("naturalresources/GetHWGenerated", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "HWGenerated",
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
    NaturalResources.prototype.GetHWIncinerated = function (func) {
        var self = this;
        this.Get("naturalresources/GetHWIncinerated", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "HWIncinerated",
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
    NaturalResources.prototype.GetMWCollected = function (func) {
        var self = this;
        this.Get("naturalresources/GetMWCollected", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "MWCollected",
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
    return NaturalResources;
}(CategoryBase));
//# sourceMappingURL=naturalresources.js.map