class NaturalResources extends CategoryBase {
    // GetNRAsiaPacific(func: Function) {
    //     let self = this;

    //     this.Get("naturalresources/GetNRAsiaPacific", function (data: UNEPTableRow[]) {
    //         let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // }

    // GetNRAsiaPacificWorld(func: Function) {
    //     let self = this;

    //     this.Get("naturalresources/GetNRAsiaPacificWorld", function (data: UNEPTableRow[]) {
    //         let dataset : XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // } 

    // GetNRAsiaPacificMaterial(func: Function) {
    //     let self = this;

    //     this.Get("naturalresources/GetNRAsiaPacificMaterial", function (data: UNEPTableRow[]) {
    //         let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // }

    // GetNRAsiaPacificDeveloping(func: Function) {
    //     let self = this;

    //     this.Get("naturalresources/GetNRAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
    //         let dataset: XChartDataSet = self.VerticalDataSet(data, "Year", "Value");
    //         func(dataset);
    //     });
    // }

    //------------ Material Use ---------------

    GetNRAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetNRAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacific",
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

    GetNRAsiaPacificMaterial(func: Function) {
        let self = this;

        this.Get("naturalresources/GetNRAsiaPacificMaterial", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificMaterial",
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

    GetNRAsiaPacificWorld(func: Function) {
        let self = this;

        this.Get("naturalresources/GetNRAsiaPacificWorld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificWorld",
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

    GetNRAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("naturalresources/GetNRAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificDeveloping",
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


    GetNRAsiaPacificIndustrialized(func: Function) {
        let self = this;

        this.Get("naturalresources/GetNRAsiaPacificIndustrialized", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "NRAsiaPacificIndustrialized",
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

    //------------ Energy Use ---------------

    GetREAsiaPacificWorld(func: Function) {
        let self = this;

        this.Get("naturalresources/GetREAsiaPacificWorld", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "REAsiaPacificWorld",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },
                        { year: "2013", value: alldata_.y2013 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2015", value: alldata_.y2015 },
                        { year: "2016", value: alldata_.y2016 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetREAsiaPacificDeveloping(func: Function) {
        let self = this;

        this.Get("naturalresources/GetREAsiaPacificDeveloping", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "REAsiaPacificDeveloping",
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

    //------------ Water Use ---------------

    GetTotalWaterAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetTotalWaterAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TotalWaterAsiaPacific",
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

    GetWaterSecAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetWaterSecAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterSecAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "Domiestic", value: alldata_.domiestic },
                        { year: "Industry", value: alldata_.industry },
                        { year: "Agriculture", value: alldata_.agriculture }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetWaterCapitaAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetWaterCapitaAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterCapitaAsiaPacific",
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


    GetWaterIntensityAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetWaterIntensityAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterIntensityAsiaPacific",
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

    GetAgriWaterAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetAgriWaterAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "AgriWaterAsiaPacific",
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

    GetWaterAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetWaterAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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

    GetWaterFPAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetWaterFPAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "WaterFPAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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

    //------------ Land Use ---------------

    GetTotalLand(func: Function) {
        let self = this;

        this.Get("naturalresources/GetTotalLand", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TotalLand",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "1993", value: alldata_.y1993 },
                        { year: "1994", value: alldata_.y1994 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "1996", value: alldata_.y1996 },
                        { year: "1997", value: alldata_.y1997 },
                        { year: "1998", value: alldata_.y1998 },
                        { year: "1999", value: alldata_.y1999 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
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

    GetTotalLandCapita(func: Function) {
        let self = this;

        this.Get("naturalresources/GetTotalLandCapita", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "TotalLandCapita",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "2015", value: alldata_.y2015 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetLandSector2015(func: Function) {
        let self = this;

        this.Get("naturalresources/GetLandSector2015", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandSector2015",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "Agriculture", value: alldata_.agriculture },
                        { year: "Forest", value: alldata_.forest },
                        { year: "Urban", value: alldata_.urban }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetLandIntensity(func: Function) {
        let self = this;

        this.Get("naturalresources/GetLandIntensity", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandIntensity",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2015", value: alldata_.y2015 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetLandProductivity(func: Function) {
        let self = this;

        this.Get("naturalresources/GetLandProductivity", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandProductivity",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "1993", value: alldata_.y1993 },
                        { year: "1994", value: alldata_.y1994 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "1996", value: alldata_.y1996 },
                        { year: "1997", value: alldata_.y1997 },
                        { year: "1998", value: alldata_.y1998 },
                        { year: "1999", value: alldata_.y1999 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
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

    GetLandMajorSector(func: Function) {
        let self = this;

        this.Get("naturalresources/GetLandMajorSector", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "LandMajorSector",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "1992", value: alldata_.y1992 },
                        { year: "1993", value: alldata_.y1993 },
                        { year: "1994", value: alldata_.y1994 },
                        { year: "1995", value: alldata_.y1995 },
                        { year: "1996", value: alldata_.y1996 },
                        { year: "1997", value: alldata_.y1997 },
                        { year: "1998", value: alldata_.y1998 },
                        { year: "1999", value: alldata_.y1999 },
                        { year: "2000", value: alldata_.y2000 },
                        { year: "2001", value: alldata_.y2001 },
                        { year: "2002", value: alldata_.y2002 },
                        { year: "2003", value: alldata_.y2003 },
                        { year: "2004", value: alldata_.y2004 },
                        { year: "2005", value: alldata_.y2005 },
                        { year: "2006", value: alldata_.y2006 },
                        { year: "2007", value: alldata_.y2007 },
                        { year: "2008", value: alldata_.y2008 },
                        { year: "2009", value: alldata_.y2009 },
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

    //------------ GHG from agriculture (Agricultural productivity) ---------------

    GetGHGEmissions(func: Function) {
        let self = this;

        this.Get("naturalresources/GetGHGEmissions", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGEmissions",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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

    GetGHGResultAgri(func: Function) {
        let self = this;

        this.Get("naturalresources/GetGHGResultAgri", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGResultAgri",
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
                        { year: "2017", value: alldata_.y2017 },

                        { year: "2030", value: alldata_.y2030 },
                        { year: "2050", value: alldata_.y2050 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetGHGCompare(func: Function) {
        let self = this;

        this.Get("naturalresources/GetGHGCompare", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGCompare",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
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

    GetGHGCO2(func: Function) {
        let self = this;

        this.Get("naturalresources/GetGHGCO2", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGCO2",
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

    GetGHGIntensity(func: Function) {
        let self = this;

        this.Get("naturalresources/GetGHGIntensity", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGIntensity",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2014", value: alldata_.y2014 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetCereal(func: Function) {
        let self = this;

        this.Get("naturalresources/GetCereal", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "Cereal",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetCompareAgri(func: Function) {
        let self = this;

        this.Get("naturalresources/GetCompareAgri", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "CompareAgri",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2019", value: alldata_.y2019 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetAgriAsiaPacific(func: Function) {
        let self = this;

        this.Get("naturalresources/GetAgriAsiaPacific", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "AgriAsiaPacific",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [
                        { year: "2010", value: alldata_.y2010 },
                        { year: "2011", value: alldata_.y2011 },
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    //------------ Greenhouse Gas Emissions ---------------

    GetGHGEmissionEnergy(func: Function) {
        let self = this;

        this.Get("naturalresources/GetGHGEmissionEnergy", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "GHGEmissionEnergy",
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

    //------------ Waste Management ---------------

    GetMWCove(func: Function) {
        let self = this;

        this.Get("naturalresources/GetMWCove", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "MWCove",
                    charttitle: data[0].chartinfo.charttitle,
                    indicatorinfo: data[0].indicatorinfo,
                    chartdesc: data[0].chartinfo.chartdesc,
                    data: [

                        { year: "2011", value: alldata_.y2011 },
                        { year: "2012", value: alldata_.y2012 },

                        { year: "2015", value: alldata_.y2015 },

                        { year: "2018", value: alldata_.y2018 }

                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetMWRecycled(func: Function) {
        let self = this;

        this.Get("naturalresources/GetMWRecycled", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "MWRecycled",
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
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                        { year: "2019", value: alldata_.y2019 }


                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetHWGenerated(func: Function) {
        let self = this;

        this.Get("naturalresources/GetHWGenerated", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "HWGenerated",
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
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                        { year: "2019", value: alldata_.y2019 }


                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }

    GetHWIncinerated(func: Function) {
        let self = this;

        this.Get("naturalresources/GetHWIncinerated", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "HWIncinerated",
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

    GetMWCollected(func: Function) {
        let self = this;

        this.Get("naturalresources/GetMWCollected", function (data: UNEPTableRow[]) {
            let alldata = [];

            for (let alldata_ of data[0].chartdata) {
                alldata.push({
                    country: alldata_.country,
                    sharename: "MWCollected",
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
                        { year: "2017", value: alldata_.y2017 },
                        { year: "2018", value: alldata_.y2018 },
                        { year: "2019", value: alldata_.y2019 }
                    ]
                })
            }

            let dataset: XChartDataSet = self.VerticalDataSet(alldata, "Year", data[0].chartinfo.units);
            func(dataset);
        });
    }
}