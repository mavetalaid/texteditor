class TradeDependency extends CategoryBase {

    //--------------------------- Physical trade balance  ---------------------------------
    GetTDPTBMaterialCategory(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDPTBMaterialCategory", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDPTBMaterialCategory",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetTDPTBCSIRO(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDPTBCSIRO", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDPTBCSIRO",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetTDPTBAsiaPacificWorld(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDPTBAsiaPacificWorld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDPTBAsiaPacificWorld",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetTDPTBAsiaPacific(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDPTBAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDPTBAsiaPacific",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetTDPTBCapitaAsiaPacificWorld(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDPTBCapitaAsiaPacificWorld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDPTBCapitaAsiaPacificWorld",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //--------------------------- Unit price of trade ---------------------------------

    GetTDUPIAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDUPIAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDUPIAsiaPacificDeveloping",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetTDUPEAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("tradedependency/GetTDUPEAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TDUPEAsiaPacificDeveloping",
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }
}