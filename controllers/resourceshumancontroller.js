const basecontroller = require('../framework/basecontroller.js');
const mongodb = require('../framework/mongodbserver.js');
const userscontroller = require('./userscontroller.js');
// const modulescontroller = require('./modulescontroller.js');

module.exports = function (response, mongodbport) {
    basecontroller.call(this, response, mongodbport);

    let self = this;
    let mongo = new mongodb(mongodbport);
    let database = "resourceshuman";

    //------------------------- Human Development Index (HDI) -----------------------------------

    this.GetrhHDIdmc2010 = async function (data) {
        let arraydata = [];

        let query = { type: "rhHDIdmc2010" };
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

    this.GetrhHDIdmc2017 = async function (data) {
        let arraydata = [];

        let query = { type: "rhHDIdmc2017" };
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

    this.GetrhHDImf2010 = async function (data) {
        let arraydata = [];

        let query = { type: "rhHDImf2010" };
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

    this.GetrhHDImf2017 = async function (data) {
        let arraydata = [];

        let query = { type: "rhHDImf2017" };
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

    this.GetrhGDPdmc2010 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPdmc2010", indicator: "Human Development Index (HDI)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPdmc2010" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    this.GetrhGDPdmc2017 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPdmc2017", indicator: "Human Development Index (HDI)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPdmc2017" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    this.GetrhGDPmf2010 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPmf2010", indicator: "Human Development Index (HDI)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPmf2010" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    this.GetrhGDPmf2017 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPmf2017", indicator: "Human Development Index (HDI)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPmf2017" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    //------------------------- Economic Growth (GDP) -----------------------------------

    this.GetrhEGDPdmc2010 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPdmc2010", indicator: "Economic Growth (GDP)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPdmc2010" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    this.GetrhEGDPdmc2017 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPdmc2017", indicator: "Economic Growth (GDP)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPdmc2017" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    this.GetrhEGDPmf2010 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPmf2010", indicator: "Economic Growth (GDP)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPmf2010" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    this.GetrhEGDPmf2017 = async function (data) {
        let arraydata = [];

        let query = { type: "rhGDPmf2017", indicator: "Economic Growth (GDP)" };
        let collection = await mongo.FindRecord(database, query, {}, {});

        if (collection) {
            let query_ = { type: "rhGDPmf2017" };
            let collection_ = await mongo.FindRecord("charts", query_, {}, {});
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

    //------------------------- Investment and consumption -----------------------------------

    this.GetRHFDIIndiaChina = async function (data) {
        let arraydata = [];
        let query = { type: "rhfdiIndiaChina" };
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

    this.GetRHFDIAsiaPacific = async function (data) {
        let arraydata = [];
        let query = { type: "rhfdiAsiaPacific" };
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

    //------------------------- Debt, inflation -----------------------------------

    this.Getrhgggasiapacificdeveloping = async function (data) {
        let arraydata = [];
        let query = { type: "rhgggasiapacificdeveloping" };
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

    this.Getrhirasiapacificdeveloping = async function (data) {
        let arraydata = [];
        let query = { type: "rhirasiapacificdeveloping" };
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

    //------------------------- Access to energy, water, sanitation -----------------------------------

    this.Getrhaeasiapacific = async function (data) {
        let arraydata = [];
        let query = { type: "rhaeasiapacific" };
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

    this.Getrhawater = async function (data) {
        let arraydata = [];
        let query = { type: "rhawater" };
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

    this.Getrhasanitation = async function (data) {
        let arraydata = [];
        let query = { type: "rhasanitation" };
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

    // this.GetNRAsiaPacific = async function (data) {
    //     let arraydata = [];

    //     let query = { type: "nrasiapacific" };
    //     let collection = await mongo.FindRecord(database, query, {}, {});
    //     if (collection) {

    //         let collection_ = await mongo.FindRecord("charts", query, {}, {});
    //         if (collection_) {
    //             let chartinfo_ = { charttitle: collection_[0].title, units: collection_[0].unit };

    //             let query1 = { name: collection[0].indicator };
    //             let collection_1 = await mongo.FindRecord("indicator", query1, {}, {});
    //             collection_1.push({ units: collection_[0].unit });
    //             if (collection_1) {

    //                 arraydata.push({ chartdata: collection, chartinfo: chartinfo_, indicatorinfo: collection_1 });
    //                 return self.Return(arraydata);
    //             }
    //         }
    //     }
    // };
};