const basecontroller = require('../framework/basecontroller.js');
const mongodb = require('../framework/mongodbserver.js');
const userscontroller = require('./userscontroller.js');
// const modulescontroller = require('./modulescontroller.js');

module.exports = function (response, mongodbport) {
    basecontroller.call(this, response, mongodbport);

    let self = this;
    let mongo = new mongodb(mongodbport);
    let database = "charts";

    this.GetTitle = async function (data) {

        let query = { type: data.checkdata };
        let collection = await mongo.FindRecord(database, query, {}, {});

        return self.Return(collection);
    };
};