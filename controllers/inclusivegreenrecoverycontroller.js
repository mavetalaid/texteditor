const basecontroller = require('../framework/basecontroller.js');
const mongodb = require('../framework/mongodbserver.js');
const userscontroller = require('./userscontroller.js');
// const modulescontroller = require('./modulescontroller.js');

module.exports = function (response, mongodbport) {
    basecontroller.call(this, response, mongodbport);

    let self = this;
    let mongo = new mongodb(mongodbport);
    let database = "inclusivegreenrecovery";

    //------------------------- COVID spending -----------------------

    this.GetIGRCovid = async function (data) {
        let arraydata = [];
        let query = { type: "igrCovid" };
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

    //------------------------- Natural capital -----------------------

    this.GetIGRNaturalCapital = async function (data) {
        let arraydata = [];
        let query = { type: "igrNaturalCapital" };
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

    //------------------------- Green spending -----------------------

    this.GetIGRTotalGreenRecovery = async function (data) {
        let arraydata = [];
        let query = { type: "igrTotalGreenRecovery" };
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

    //------------------------- Green energy investments -----------------------

    this.GetIGRGreenEnergySubregion = async function (data) {
        let arraydata = [];
        let query = { type: "igrGreenEnergySubregion" };
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

    this.GetIGRGreenEnergyCountry = async function (data) {
        let arraydata = [];
        let query = { type: "igrGreenEnergyCountry" };
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

    //------------------------- Green Transport -----------------------

    this.GetIGRElectric = async function (data) {
        let arraydata = [];
        let query = { type: "igrElectric" };
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

    //------------------------- Biofuel production-Green Spending -----------------------

    this.GetIGRBiofuelProduction = async function (data) {
        let arraydata = [];
        let query = { type: "igrBiofuelProduction" };
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

    //------------------------- Green research and development -----------------------

    this.GetIGRFinancial = async function (data) {
        let arraydata = [];
        let query = { type: "igrFinancial" };
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