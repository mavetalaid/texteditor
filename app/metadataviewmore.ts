class MataDataViewMore extends CategoryBase {
    container: Xplore;
    type: string;

    constructor(container: Xplore, type: string) {
        super();
        this.container = container;
        this.type = type;
    }

    Show(): void {
        let self = this;
        let container = this.container;
        container.Clear();

        let type = this.type;

        if (type === "Material use") {
            let category = new NaturalResources();
            category.GetNRAsiaPacific(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Energy use") {
            let category = new NaturalResources();
            category.GetREAsiaPacificWorld(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Water use") {
            let category = new NaturalResources();
            category.GetTotalWaterAsiaPacific(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Land use") {
            let category = new NaturalResources();
            category.GetTotalLand(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Agricultural productivity") {
            // type_ = "AgriProd";
            let category = new NaturalResources();
            category.GetGHGEmissions(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Greenhouse gas emissions") {
            // type_ = "GreenhouseGas";
            let category = new NaturalResources();
            category.GetGHGEmissionEnergy(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Waste management") {
            // type_ = "WasteManage";
            let category = new NaturalResources();
            category.GetMWCove(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Material Intensity of the economy") {
            // type_ = "MaterialIntensity";
            let category = new ResourceEfficiency();
            category.GetREAsiaPacificWorld(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Energy intensity of the economy") {
            // type_ = "EnergyIntensity";
            let category = new ResourceEfficiency();
            category.Geteigdpasiapacificworld(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Water intensity of the economy") {
            // type_ = "WaterIntensity";
            let category = new ResourceEfficiency();
            category.GetWaterIntensityAsiaPacific(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "GHG intensity of the economy") {
            // type_ = "GHGIntensity";
            let category = new ResourceEfficiency();
            category.Getco2asiapacific(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Emission of the energy sector") {
            // type_ = "EmissionEnSect";
            let category = new ResourceUse();
            category.GetGHGEmissionEnergy(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Material Footprint") {
            // type_ = "MaterialFootprint";
            let category = new Consumption();
            category.GetCBMFAsiaPacificDeveloping(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Water Footprint") {
            // type_ = "WaterFootprint";
            let category = new Consumption();
            category.GetCBMFWaterAsiaPacific(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Physical Trade Balance") {
            // type_ = "PTB";
            let category = new TradeDependency();
            category.GetTDPTBMaterialCategory(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Unit price of trade") {
            // type_ = "UnitPriceTrade";
            let category = new TradeDependency();
            category.GetTDUPIAsiaPacificDeveloping(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Human Development Index (HDI)") {
            // type_ = "HDI";
            let category = new ResourceHumanDev();
            category.GetrhHDIdmc2010(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Economic Growth (GDP)") {
            // type_ = "EconGrowth";
            let category = new ResourceHumanDev();
            category.GetrhEGDPdmc2010(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Investment and consumption") {
            // type_ = "InvestmentCons";
            let category = new ResourceHumanDev();
            category.GetRHFDIIndiaChina(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Debt, inflation") {
            // type_ = "DebtInflation";
            let category = new ResourceHumanDev();
            category.Getrhgggasiapacificdeveloping(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Access to energy, water, sanitation") {
            // type_ = "AccessEWS";
            let category = new ResourceHumanDev();
            category.Getrhaeasiapacific(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "COVID spending") {
            // type_ = "COVIDSpend";
            let category = new InclusiveGreenRecovery();
            category.GetIGRCovid(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Natural capital") {
            // type_ = "NaturalCapital";
            let category = new InclusiveGreenRecovery();
            category.GetIGRNaturalCapital(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Green spending") {
            // type_ = "GreenSpend";
            let category = new InclusiveGreenRecovery();
            category.GetIGRTotalGreenRecovery(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Green energy investments") {
            // type_ = "GreenEnergy";
            let category = new InclusiveGreenRecovery();
            category.GetIGRGreenEnergySubregion(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Green Transport") {
            // type_ = "GreenTransport";
            let category = new InclusiveGreenRecovery();
            category.GetIGRElectric(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Green research and development") {
            // type_ = "GreenResDev";
            let category = new InclusiveGreenRecovery();
            category.GetIGRFinancial(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        } else if (type === "Biofuel production-Green Spending") {
            // type_ = "BiofuelProd";
            let category = new InclusiveGreenRecovery();
            category.GetIGRBiofuelProduction(function (data: XChartDataSet) {
                self.ShowContent(container, data);
                // datainformation = data;
            });
        }

        container.Refresh();
    }

    ShowContent(container: Xplore, data: any): void {
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
    }
}