class ResourceUse extends CategoryBase {
    // --------- Material use for manufacturing---------------

    // --------- Material use for construction---------------

    // --------- Emissions of the energy sector---------------

    GetGHGEmissionEnergy(func: Function) {
        let self = this;

        this.Get("resourceuse/GetGHGEmissionEnergy", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGEmissionEnergy",
                    charttitle: data[0].chartinfo.charttitle,
                    chartdesc: data[0].chartinfo.chartdesc,
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

}