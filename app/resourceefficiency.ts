class ResourceEfficiency extends CategoryBase {
    // GetMIAsiaPacific(func: Function) {
    //     let self = this;

    //     // this.Get("resourceefficiency/GetMIDMC", function (data: UNEPTableRow[]) {
    //     //     let dataset : XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //     //     func(dataset);
    //     // });
    // } 

    // --------- Material Intensity of the economy---------------

    GetREAsiaPacificWorld(func: Function) {
        let self = this;

        this.Get("resourceefficiency/GetREAsiaPacificWorld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetREAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("resourceefficiency/GetREAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetREAsiaPacificIndustry(func: Function) {
        let self = this;

        this.Get("resourceefficiency/GetREAsiaPacificIndustry", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    // --------- Energy intensity of the economy---------------

    Geteigdpasiapacificworld(func: Function) {
        let self = this;

        this.Get("resourceefficiency/Geteigdpasiapacificworld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    Geteiasiapacificdeveloping(func: Function) {
        let self = this;

        this.Get("resourceefficiency/Geteiasiapacificdeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    // --------- GHG intensity of the economy---------------

    Getco2asiapacific(func: Function) {
        let self = this;

        this.Get("resourceefficiency/Getco2asiapacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    // --------- Water intensity of the economy---------------

    GetWaterIntensityAsiaPacific(func: Function) {
        let self = this;

        this.Get("resourceefficiency/GetWaterIntensityAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }
}