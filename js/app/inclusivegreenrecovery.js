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
var InclusiveGreenRecovery = /** @class */ (function (_super) {
    __extends(InclusiveGreenRecovery, _super);
    function InclusiveGreenRecovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //------------------------- COVID spending -----------------------
    InclusiveGreenRecovery.prototype.GetIGRCovid = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRCovid", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRCovid",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Additional spending & forgone revenue", value: alldata_.additional_spending_or_foregone_revenues },
                        { year: "Equity, loans, & guarantees", value: alldata_.equity_loans_and_guarantees }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Natural capital -----------------------
    InclusiveGreenRecovery.prototype.GetIGRNaturalCapital = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRNaturalCapital", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRNaturalCapital",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2014", value: alldata_.y2014 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Green spending -----------------------
    InclusiveGreenRecovery.prototype.GetIGRTotalGreenRecovery = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRTotalGreenRecovery", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRTotalGreenRecovery",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Total spending", value: alldata_.total_spending },
                        { year: "Recovery spending", value: alldata_.recovery_spending },
                        { year: "Green spending", value: alldata_.green_spending }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Green energy investments -----------------------
    InclusiveGreenRecovery.prototype.GetIGRGreenEnergySubregion = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRGreenEnergySubregion", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRGreenEnergySubregion",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Value", value: alldata_.value }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    InclusiveGreenRecovery.prototype.GetIGRGreenEnergyCountry = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRGreenEnergyCountry", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRGreenEnergyCountry",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Value", value: alldata_.value }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Green Transport -----------------------
    InclusiveGreenRecovery.prototype.GetIGRElectric = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRElectric", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRElectric",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2030 Stated Policies Scenario", value: alldata_.y2030_Stated_Policies_Scenario },
                        { year: "2030 Sustainable Develepment Scenario", value: alldata_.y2030_Sustainable_Development_Scenario }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Biofuel production-Green Spending -----------------------
    InclusiveGreenRecovery.prototype.GetIGRBiofuelProduction = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRBiofuelProduction", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRBiofuelProduction",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2019 Production", value: alldata_.y2019_Production },
                        { year: "2030 Consumption", value: alldata_.y2030_Consumption }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    //------------------------- Green research and development -----------------------
    InclusiveGreenRecovery.prototype.GetIGRFinancial = function (func) {
        var self = this;
        this.Get("inclusivegreenrecovery/GetIGRFinancial", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRFinancial",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010 - 2019", value: alldata_.y2010_2019 }
                    ]
                });
            }
            var dataset = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    };
    return InclusiveGreenRecovery;
}(CategoryBase));
//# sourceMappingURL=inclusivegreenrecovery.js.map