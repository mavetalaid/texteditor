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
var MataDataViewMore = /** @class */ (function (_super) {
    __extends(MataDataViewMore, _super);
    function MataDataViewMore(container, type) {
        var _this = _super.call(this) || this;
        _this.container = container;
        _this.type = type;
        return _this;
    }
    MataDataViewMore.prototype.Show = function () {
        var self = this;
        var container = this.container;
        container.Clear();
        var type = this.type;
        if (type === "Material use") {
            var category = new NaturalResources();
            category.GetNRAsiaPacific(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Energy use") {
            var category = new NaturalResources();
            category.GetREAsiaPacificWorld(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Water use") {
            var category = new NaturalResources();
            category.GetTotalWaterAsiaPacific(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Land use") {
            var category = new NaturalResources();
            category.GetTotalLand(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Agricultural productivity") {
            // type_ = "AgriProd";
            var category = new NaturalResources();
            category.GetGHGEmissions(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Greenhouse gas emissions") {
            // type_ = "GreenhouseGas";
            var category = new NaturalResources();
            category.GetGHGEmissionEnergy(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Waste management") {
            // type_ = "WasteManage";
            var category = new NaturalResources();
            category.GetMWCove(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Material Intensity of the economy") {
            // type_ = "MaterialIntensity";
            var category = new ResourceEfficiency();
            category.GetREAsiaPacificWorld(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Energy intensity of the economy") {
            // type_ = "EnergyIntensity";
            var category = new ResourceEfficiency();
            category.Geteigdpasiapacificworld(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Water intensity of the economy") {
            // type_ = "WaterIntensity";
            var category = new ResourceEfficiency();
            category.GetWaterIntensityAsiaPacific(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "GHG intensity of the economy") {
            // type_ = "GHGIntensity";
            var category = new ResourceEfficiency();
            category.Getco2asiapacific(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Emission of the energy sector") {
            // type_ = "EmissionEnSect";
            var category = new ResourceUse();
            category.GetGHGEmissionEnergy(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Material Footprint") {
            // type_ = "MaterialFootprint";
            var category = new Consumption();
            category.GetCBMFAsiaPacificDeveloping(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Water Footprint") {
            // type_ = "WaterFootprint";
            var category = new Consumption();
            category.GetCBMFWaterAsiaPacific(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Physical Trade Balance") {
            // type_ = "PTB";
            var category = new TradeDependency();
            category.GetTDPTBMaterialCategory(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Unit price of trade") {
            // type_ = "UnitPriceTrade";
            var category = new TradeDependency();
            category.GetTDUPIAsiaPacificDeveloping(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Human Development Index (HDI)") {
            // type_ = "HDI";
            var category = new ResourceHumanDev();
            category.GetrhHDIdmc2010(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Economic Growth (GDP)") {
            // type_ = "EconGrowth";
            var category = new ResourceHumanDev();
            category.GetrhEGDPdmc2010(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Investment and consumption") {
            // type_ = "InvestmentCons";
            var category = new ResourceHumanDev();
            category.GetRHFDIIndiaChina(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Debt, inflation") {
            // type_ = "DebtInflation";
            var category = new ResourceHumanDev();
            category.Getrhgggasiapacificdeveloping(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Access to energy, water, sanitation") {
            // type_ = "AccessEWS";
            var category = new ResourceHumanDev();
            category.Getrhaeasiapacific(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "COVID spending") {
            // type_ = "COVIDSpend";
            var category = new InclusiveGreenRecovery();
            category.GetIGRCovid(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Natural capital") {
            // type_ = "NaturalCapital";
            var category = new InclusiveGreenRecovery();
            category.GetIGRNaturalCapital(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Green spending") {
            // type_ = "GreenSpend";
            var category = new InclusiveGreenRecovery();
            category.GetIGRTotalGreenRecovery(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Green energy investments") {
            // type_ = "GreenEnergy";
            var category = new InclusiveGreenRecovery();
            category.GetIGRGreenEnergySubregion(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Green Transport") {
            // type_ = "GreenTransport";
            var category = new InclusiveGreenRecovery();
            category.GetIGRElectric(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Green research and development") {
            // type_ = "GreenResDev";
            var category = new InclusiveGreenRecovery();
            category.GetIGRFinancial(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        else if (type === "Biofuel production-Green Spending") {
            // type_ = "BiofuelProd";
            var category = new InclusiveGreenRecovery();
            category.GetIGRBiofuelProduction(function (data) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }
        container.Refresh();
    };
    MataDataViewMore.prototype.ShowContent = function (container, data) {
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].name, classes: ["details-view-value-title"] }));
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].description, classes: ["details-view-value"] }));
        container.Add(new Xplore.Text({ text: "Purpose", classes: ["details-view-value-header"] }));
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].purpose, classes: ["details-view-value"] }));
        container.Add(new Xplore.Text({ text: "Methodology", classes: ["details-view-value-header"] }));
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].methodology, classes: ["details-view-value"] }));
        container.Add(new Xplore.Text({ text: "License", classes: ["details-view-value-header"] }));
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].license, classes: ["details-view-value"] }));
        container.Add(new Xplore.Text({ text: "Sources", classes: ["details-view-value-header"] }));
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].source, classes: ["details-view-value"] }));
        container.Add(new Xplore.Text({ text: "Reference", classes: ["details-view-value-header"] }));
        container.Add(new Xplore.Text({ text: data.indicatorinfo[0].reference, classes: ["details-view-value"] }));
        container.Refresh();
    };
    return MataDataViewMore;
}(CategoryBase));
//# sourceMappingURL=metadataviewmore.js.map