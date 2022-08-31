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
    NaturalResources.prototype.GetNRAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacific", function (data) {
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
    NaturalResources.prototype.GetNRAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificWorld", function (data) {
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
    NaturalResources.prototype.GetNRAsiaPacificMaterial = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificMaterial", function (data) {
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
    NaturalResources.prototype.GetNRAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("naturalresources/GetNRAsiaPacificDeveloping", function (data) {
            var alldata = [];
            for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                var alldata_ = data_4[_i];
                alldata.push({
                    country: alldata_.country,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetREAsiaPacificWorld = function (func) {
        var self = this;
        this.Get("naturalresources/GetREAsiaPacificWorld", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetREAsiaPacificDeveloping = function (func) {
        var self = this;
        this.Get("naturalresources/GetREAsiaPacificDeveloping", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandMajorSector = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandMajorSector", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetAgriAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetAgriAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetTotalWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetTotalWaterAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetWaterSecAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterSecAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetWaterCapitaAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterCapitaAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetWaterIntensityAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterIntensityAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetAgriWaterAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetAgriWaterAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetWaterFPAsiaPacific = function (func) {
        var self = this;
        this.Get("naturalresources/GetWaterFPAsiaPacific", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetTotalLand = function (func) {
        var self = this;
        this.Get("naturalresources/GetTotalLand", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetTotalLandCapita = function (func) {
        var self = this;
        this.Get("naturalresources/GetTotalLandCapita", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandSector2015 = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandSector2015", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandIntensity = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandIntensity", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetLandProductivity = function (func) {
        var self = this;
        this.Get("naturalresources/GetLandProductivity", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetGHGEmissions = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGEmissions", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetGHGResultAgri = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGResultAgri", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetGHGCompare = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGCompare", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetGHGCO2 = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGCO2", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetGHGIntensity = function (func) {
        var self = this;
        this.Get("naturalresources/GetGHGIntensity", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetCereal = function (func) {
        var self = this;
        this.Get("naturalresources/GetCereal", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetCompareAgri = function (func) {
        var self = this;
        this.Get("naturalresources/GetCompareAgri", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetMWCollected = function (func) {
        var self = this;
        this.Get("naturalresources/GetMWCollected", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetMWCove = function (func) {
        var self = this;
        this.Get("naturalresources/GetMWCove", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetMWRecycled = function (func) {
        var self = this;
        this.Get("naturalresources/GetMWRecycled", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetHWGenerated = function (func) {
        var self = this;
        this.Get("naturalresources/GetHWGenerated", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    NaturalResources.prototype.GetHWIncinerated = function (func) {
        var self = this;
        this.Get("naturalresources/GetHWIncinerated", function (data) {
            var dataset = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    };
    return NaturalResources;
}(CategoryBase));
//# sourceMappingURL=naturalresources%20copy.js.map