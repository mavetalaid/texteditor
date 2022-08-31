class InclusiveGreenRecovery extends CategoryBase {
    //------------------------- COVID spending -----------------------

    GetIGRCovid(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRCovid", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRCovid",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Additional spending & forgone revenue", value: alldata_.additional_spending_or_foregone_revenues },
                        { year: "Equity, loans, & guarantees", value: alldata_.equity_loans_and_guarantees }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------------------- Natural capital -----------------------

    GetIGRNaturalCapital(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRNaturalCapital", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------------------- Green spending -----------------------

    GetIGRTotalGreenRecovery(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRTotalGreenRecovery", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------------------- Green energy investments -----------------------

    GetIGRGreenEnergySubregion(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRGreenEnergySubregion", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRGreenEnergySubregion",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Value", value: alldata_.value }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetIGRGreenEnergyCountry(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRGreenEnergyCountry", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRGreenEnergyCountry",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "Value", value: alldata_.value }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------------------- Green Transport -----------------------

    GetIGRElectric(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRElectric", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRElectric",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2030 Stated Policies Scenario", value: alldata_.y2030_Stated_Policies_Scenario },
                        { year: "2030 Sustainable Develepment Scenario", value: alldata_.y2030_Sustainable_Development_Scenario }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------------------- Biofuel production-Green Spending -----------------------

    GetIGRBiofuelProduction(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRBiofuelProduction", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRBiofuelProduction",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2019 Production", value: alldata_.y2019_Production },
                        { year: "2030 Consumption", value: alldata_.y2030_Consumption }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------------------- Green research and development -----------------------

    GetIGRFinancial(func: Function) {
        let self = this;

        this.Get("inclusivegreenrecovery/GetIGRFinancial", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "IGRFinancial",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010 - 2019", value: alldata_.y2010_2019 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

}