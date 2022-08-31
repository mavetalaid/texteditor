class GeneralCategory extends CategoryBase {
    GetAllCategory(func: Function) {
        let self = this;

        this.Get("general/GetGeneral", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data) {
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
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", "Value");
            func(dataset);
        });
    }

    GetUniqueDataByType(data: any, func: Function) {
        let self = this;
        let pushitems_ = { country: data };

        this.POST("general/GetGeneral", JSON.stringify(pushitems_), function (response) {
            func(response);
        });
    }

    GetUniqueDataByIndicator(func: Function) {
        let self = this;

        this.Get("general/GetGeneralByIndicator", function (response) {
            func(response);
        });
    }

    GetHWIncinerated(func: Function) {
        let self = this;

        this.Get("naturalresources/GetHWIncinerated", function (data: UNEPTableRow[]) {
            let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
            func(dataset);
        });
    }
}