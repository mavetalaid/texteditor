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
var ResourceMajorSector = /** @class */ (function (_super) {
    __extends(ResourceMajorSector, _super);
    function ResourceMajorSector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // GetMIAsiaPacific(func: Function) {
    //     let self = this;
    //     // this.Get("resourceefficiency/GetMIDMC", function (data: UNEPTableRow[]) {
    //     //     let dataset : XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //     //     func(dataset);
    //     // });
    // } 
    // --------- Material use for manufacturing---------------
    // --------- Material use for construction---------------
    // --------- Emissions of the energy sector---------------
    ResourceMajorSector.prototype.GetGHGEmissionEnergy = function (func) {
        var self = this;
        this.Get("resourcemajorsector/GetGHGEmissionEnergy", function (data) {
            var alldata = [];
            for (var _i = 0, _a = data[0].chartdata; _i < _a.length; _i++) {
                var alldata_ = _a[_i];
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGEmissionEnergy",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
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
    return ResourceMajorSector;
}(CategoryBase));
//# sourceMappingURL=resourcemajorsector.js.map