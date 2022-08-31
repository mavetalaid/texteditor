const basecontroller = require('../framework/basecontroller.js');
const mongodb = require('../framework/mongodbserver.js');
const userscontroller = require('./userscontroller.js');
// const modulescontroller = require('./modulescontroller.js');

module.exports = function (response, mongodbport) {
    basecontroller.call(this, response, mongodbport);

    let self = this;
    let mongo = new mongodb(mongodbport);

    this.GetGeneral = async function (data) {

        let alldata = [];
        let alldata_ = [];
        let collectiondbtype = [];
        let fcollectiondbtype = [];

        let query = { country: data.country };

        let collection1 = await mongo.FindRecord("consumption", query, {}, {});
        if (collection1) {
            if (collection1.length !== 0) {
                // let col1 = [...new Set(collection1.map(item => item.type.toLowerCase()))];
                // alldata.push({ datab: "consumption", types: col1 });
                let col1 = [...new Set(collection1.map(item => {
                    if (item.indicator !== undefined && item.indicator !== null)
                        alldata.push(item.indicator);
                }))];
            }

            let collection2 = await mongo.FindRecord("naturalresources", query, {}, {});
            if (collection2) {
                if (collection2.length !== 0) {
                    // let col2 = [...new Set(collection2.map(item => item.type.toLowerCase()))];
                    // alldata.push({ datab: "naturalresources", types: col2 });
                    let col2 = [...new Set(collection2.map(item => {
                        if (item.indicator !== undefined && item.indicator !== null && item.indicator)
                            alldata.push(item.indicator);
                    }))];
                }

                let collection3 = await mongo.FindRecord("resourceefficiency", query, {}, {});
                if (collection3) {
                    if (collection3.length !== 0) {
                        // let col3 = [...new Set(collection3.map(item => item.type.toLowerCase()))];
                        // alldata.push({ datab: "resourceefficiency", types: col3 });
                        let col3 = [...new Set(collection3.map(item => {
                            if (item.indicator !== undefined && item.indicator !== null)
                                alldata.push(item.indicator);
                        }))];
                    }

                    let collection4 = await mongo.FindRecord("inclusivegreenrecovery", query, {}, {});
                    if (collection4) {
                        if (collection4.length !== 0) {
                            // let col4 = [...new Set(collection4.map(item => item.type.toLowerCase()))];
                            // alldata.push({ datab: "inclusivegreenrecovery", types: col4 });
                            let col4 = [...new Set(collection4.map(item => {
                                if (item.indicator !== undefined && item.indicator !== null)
                                    alldata.push(item.indicator);
                            }))];
                        }

                        let collection5 = await mongo.FindRecord("resourceshuman", query, {}, {});
                        if (collection5) {
                            if (collection5.length !== 0) {
                                // let col5 = [...new Set(collection5.map(item => item.type.toLowerCase()))];
                                // alldata.push({ datab: "resourceshuman", types: col5 });
                                let col5 = [...new Set(collection5.map(item => {
                                    if (item.indicator !== undefined && item.indicator !== null)
                                        alldata.push(item.indicator);
                                }))];
                            }

                            let collection6 = await mongo.FindRecord("tradedependency", query, {}, {});
                            if (collection6) {
                                if (collection6.length !== 0) {
                                    // let col6 = [...new Set(collection6.map(item => item.type.toLowerCase()))];
                                    // alldata.push({ datab: "tradedependency", types: col6 });
                                    let col6 = [...new Set(collection6.map(item => {
                                        if (item.indicator !== undefined && item.indicator !== null)
                                            alldata.push(item.indicator);
                                    }))];
                                }
                                alldata_ = [...new Set(alldata.map(item => item))]
                                return self.Return(alldata_);
                            }
                        }
                    }
                }
            }
        }
    };

    this.GetGeneralByIndicator = async function () {

        let alldata = [];

        let collection1 = await mongo.FindRecord("consumption", {}, {}, {});
        if (collection1) {
            if (collection1.length !== 0) {
                let col1 = [...new Set(collection1.map(item => {
                    if (item.indicator !== undefined && item.indicator !== null)
                        alldata.push(item.indicator);
                }))];
            }

            let collection2 = await mongo.FindRecord("naturalresources", {}, {}, {});
            if (collection2) {
                if (collection2.length !== 0) {
                    let col2 = [...new Set(collection2.map(item => {
                        if (item.indicator !== undefined && item.indicator !== null)
                            alldata.push(item.indicator);
                    }))];
                }

                let collection3 = await mongo.FindRecord("resourceefficiency", {}, {}, {});
                if (collection3) {
                    if (collection3.length !== 0) {
                        let col3 = [...new Set(collection3.map(item => {
                            if (item.indicator !== undefined && item.indicator !== null)
                                alldata.push(item.indicator);
                        }))];
                    }

                    let collection4 = await mongo.FindRecord("inclusivegreenrecovery", {}, {}, {});
                    if (collection4) {
                        if (collection4.length !== 0) {
                            let col4 = [...new Set(collection4.map(item => {
                                if (item.indicator !== undefined && item.indicator !== null)
                                    alldata.push(item.indicator);
                            }))];
                        }

                        let collection5 = await mongo.FindRecord("resourceshuman", {}, {}, {});
                        if (collection5) {
                            if (collection5.length !== 0) {
                                let col5 = [...new Set(collection5.map(item => {
                                    if (item.indicator !== undefined && item.indicator !== null)
                                        alldata.push(item.indicator);
                                }))];
                            }

                            let collection6 = await mongo.FindRecord("tradedependency", {}, {}, {});
                            if (collection6) {
                                if (collection6.length !== 0) {
                                    let col6 = [...new Set(collection6.map(item => {
                                        if (item.indicator !== undefined && item.indicator !== null)
                                            alldata.push(item.indicator);
                                    }))];
                                }

                                let _data = [...new Set(alldata.map(item => item))];
                                return self.Return(_data);
                            }
                        }
                    }
                }
            }
        }
    };
};