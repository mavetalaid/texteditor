const { cp } = require('fs');
const basecontroller = require('../framework/basecontroller.js');
const mongodb = require('../framework/mongodbserver.js');
const userscontroller = require('./userscontroller.js');
// const modulescontroller = require('./modulescontroller.js');

module.exports = function (response, mongodbport) {
    basecontroller.call(this, response, mongodbport);

    let self = this;
    let mongo = new mongodb(mongodbport);
    let database = "naturalresources";

    //------ Material Use ------------

    this.GetNRAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "nrasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };
                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetNRAsiaPacificMaterial = async function (data) {
        let arraydata = [];

        let query = { type: "nrasiapacificmaterial" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };

                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetNRAsiaPacificWorld = async function (data) {
        let arraydata = [];

        let query = { type: "nrasiapacificworld" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetNRAsiaPacificDeveloping = async function (data) {
        let arraydata = [];

        let query = { type: "nrasiapacificdeveloping" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetNRAsiaPacificIndustrialized = async function (data) {
        let arraydata = [];

        let query = { type: "nrasiapacificindustrialized" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    //------ Energy Use ------------

    this.GetREAsiaPacificWorld = async function (data) {
        let arraydata = [];

        let query = { type: "reasiapacificworld" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetREAsiaPacificDeveloping = async function (data) {
        let arraydata = [];

        let query = { type: "reasiapacificdeveloping" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    //------ Water Use ------------

    this.GetTotalWaterAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "totalwaterasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };
    
    this.GetWaterSecAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "watersecasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetWaterCapitaAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "watercapitaasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetWaterIntensityAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "waterintensityasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetAgriWaterAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "agriwaterasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetWaterAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "waterasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetWaterFPAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "waterFPAsiaPacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    //------ Land Use ------------

    this.GetTotalLand = async function (data) {
        let arraydata = [];

        let query = { type: "totalland" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetTotalLandCapita = async function (data) {
        let arraydata = [];

        let query = { type: "totallandcapita" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetLandSector2015 = async function (data) {
        let arraydata = [];

        let query = { type: "landsector2015" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetLandIntensity = async function (data) {
        let arraydata = [];

        let query = { type: "landintensity" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetLandProductivity = async function (data) {
        let arraydata = [];

        let query = { type: "landproductivity" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetLandMajorSector = async function (data) {
        let arraydata = [];

        let query = { type: "landmajorsector" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };



                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    //------------ GHG from agriculture (Agricultural productivity) ---------------

    this.GetGHGEmissions = async function (data) {
        let arraydata = [];

        let query = { type: "ghgemissions" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetGHGResultAgri = async function (data) {
        let arraydata = [];

        let query = { type: "ghgresultagri" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetGHGCompare = async function (data) {
        let arraydata = [];

        let query = { type: "ghgcompare" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetGHGCO2 = async function (data) {
        let arraydata = [];

        let query = { type: "ghgco2" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetGHGIntensity = async function (data) {
        let arraydata = [];

        let query = { type: "ghgintensity" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetCereal = async function (data) {
        let arraydata = [];

        let query = { type: "cereal" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetCompareAgri = async function (data) {
        let arraydata = [];

        let query = { type: "compareagri" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetAgriAsiaPacific = async function (data) {
        let arraydata = [];

        let query = { type: "agriasiapacific" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    //------------ Greenhouse Gas Emissions ---------------

    this.GetGHGEmissionEnergy = async function (data) {
        let arraydata = [];

        let query = { type: "ghgemissionEnergy" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };
    //------------ Waste Management ---------------

    this.GetMWCove = async function (data) {
        let arraydata = [];

        let query = { type: "mwcove" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetMWRecycled = async function (data) {
        let arraydata = [];

        let query = { type: "mwrecycled" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetHWGenerated = async function (data) {
        let arraydata = [];

        let query = { type: "hwgenerated" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetHWIncinerated = async function (data) {
        let arraydata = [];

        let query = { type: "hwincinerated" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };

    this.GetMWCollected = async function (data) {
        let arraydata = [];

        let query = { type: "mwcollected" };
        let collection = await mongo.FindRecord(database, query, {}, {});
        if (collection) {

            let collection_ = await mongo.FindRecord("charts", query, {}, {});
            if (collection_) {
                let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit, chartdesc:collection_[0].description };


                let query1 = { name: collection[0].indicator };
                let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
                collection_1.push({ units: collection_[0].unit });
                if (collection_1) {

                    arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
                    return self.Return(arraydata);
                }
            }
        }
    };
};