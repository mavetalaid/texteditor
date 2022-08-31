class Consumption extends CategoryBase {

    //--------------------------- Material Footprint ---------------------------------

    GetCBMFAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("consumption/GetCBMFAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                   country: alldata_.country,
                    sharename: "CBMFAsiaPacificDeveloping",
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

    GetCBMFAsiaPacificWorld(func: Function) {
        let self = this;

        this.Get("consumption/GetCBMFAsiaPacificWorld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                   country: alldata_.country,
                    sharename: "CBMFAsiaPacificWorld",
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

    GetCBMFCompared(func: Function) {
        let self = this;

        this.Get("consumption/GetCBMFCompared", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                   country: alldata_.country,
                    sharename: "CBMFCompared",
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

    GetCBMFCAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("consumption/GetCBMFCAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                   country: alldata_.country,
                    sharename: "CBMFCAsiaPacificDeveloping",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                        //----------- TBD (mf & dmc tags) ----------------
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetCBMFCAsiaPacificIndustralized(func: Function) {
        let self = this;

        this.Get("consumption/GetCBMFCAsiaPacificIndustralized", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                   country: alldata_.country,
                    sharename: "CBMFCAsiaPacificIndustralized",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2017", value: alldata_.y2017 }
                        //----------- TBD (mf & dmc tags) ----------------
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //--------------------------- Water Footprint ---------------------------------

    GetCBMFWaterAsiaPacific(func: Function) {
        let self = this;

        this.Get("consumption/GetCBMFWaterAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                   country: alldata_.country,
                    sharename: "CBMFWaterAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
                    indicatorinfo: data[0].indicatorinfo,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }
}