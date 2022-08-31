const basecontroller = require('../framework/basecontroller.js');
const mongodb = require('../framework/mongodbserver.js');
const userscontroller = require('./userscontroller.js');
// const modulescontroller = require('./modulescontroller.js');

module.exports = function (response, mongodbport) {
    basecontroller.call(this, response, mongodbport);

    let self = this;
    let mongo = new mongodb(mongodbport);
    let database = "resourceefficiency";

    // --------- Material Intensity of the economy---------------

    this.GetREAsiaPacificWorld = async function (data) {
        let arraydata = [];
        let query = { type: "remiasiapacificworld" };
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
        let query = { type: "remiasiapacificdeveloping" };
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

    this.GetREAsiaPacificIndustry = async function (data) {
        let arraydata = [];
        let query = { type: "remiasiapacificindustry" };
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

    // --------- Energy intensity of the economy---------------

    this.Geteigdpasiapacificworld = async function (data) {
        let arraydata = [];
        let query = { type: "eigdpasiapacificworld" };
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

    this.Geteiasiapacificdeveloping = async function (data) {
        let arraydata = [];
        let query = { type: "eiasiapacificdeveloping" };
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

    // --------- GHG intensity of the economy---------------

    this.Getco2asiapacific = async function (data) {
        let arraydata = [];
        let query = { type: "co2asiapacific" };
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

    // --------- Water intensity of the economy---------------

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
};