var CategoryBase = /** @class */ (function () {
    function CategoryBase() {
        //From JSON
        // root: string = "resources/";
        // extension: string = ".json";
        //From server
        // root: string = "http://localhost:3307/";
        this.root = "http://localhost:1998/api/";
        this.extension = "";
    }
    CategoryBase.prototype.Get = function (url, func) {
        Xplore.GetJSON(this.root + url + this.extension, function (data) {
            func(data);
        });
    };
    CategoryBase.prototype.POST = function (url, data, func) {
        Xplore.POST(this.root + url + this.extension, data, function (data) {
            func(data);
        });
    };
    CategoryBase.prototype.VerticalDataSet = function (unepdata, labelx, labely) {
        var dataset = new XChartDataSet();
        if (unepdata.length) {
            var _labelx = [];
            // share chart button
            if (unepdata[0].sharename)
                dataset.sharename = unepdata[0].sharename;
            // chart title
            if (unepdata[0].charttitle)
                dataset.charttitle = unepdata[0].charttitle;
            // indicator info
            if (unepdata[0].indicatorinfo)
                dataset.indicatorinfo = unepdata[0].indicatorinfo;
            // chart description
            if (unepdata[0].chartdesc)
                dataset.chartdesc = unepdata[0].chartdesc;
            for (var _i = 0, _a = unepdata[0].data; _i < _a.length; _i++) {
                var yearvalue = _a[_i];
                _labelx.push(yearvalue.year.toString());
            }
            dataset.options = {
                label: { x: labelx, y: labely },
                labels: { x: _labelx }
            };
            for (var _b = 0, unepdata_1 = unepdata; _b < unepdata_1.length; _b++) {
                var row = unepdata_1[_b];
                var data = new XChartData();
                data.text = row.country;
                var properties = new XDrawProperties();
                properties.fillcolor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 1)";
                properties.linecolor = properties.fillcolor;
                data.properties = properties;
                for (var _c = 0, _d = row.data; _c < _d.length; _c++) {
                    var yearvalue = _d[_c];
                    data.list.push({ name: yearvalue.year.toString(), value: Number(yearvalue.value) });
                }
                dataset.items.push(data);
            }
        }
        // dataset.items.sort(function (a, b) {
        //     if (a.text.toString() < b.text.toString())
        //         return -1
        //     if (a.text.toString() > b.text.toString())
        //         return 1
        //     return 0
        // });
        return dataset;
    };
    CategoryBase.prototype.HorizontalDataSet = function (unepdata, labelx, labely) {
        var dataset = new XChartDataSet();
        if (unepdata.length) {
            var _labelx = [];
            // share chart button
            if (unepdata[0].sharename)
                dataset.sharename = unepdata[0].sharename;
            // chart title
            if (unepdata[0].charttitle)
                dataset.charttitle = unepdata[0].charttitle;
            for (var _i = 0, _a = unepdata[0].data; _i < _a.length; _i++) {
                var yearvalue = _a[_i];
                _labelx.push(yearvalue.year.toString());
            }
            dataset.options = {
                label: { x: labelx, y: labely },
                labels: { y: _labelx }
            };
            for (var _b = 0, unepdata_2 = unepdata; _b < unepdata_2.length; _b++) {
                var row = unepdata_2[_b];
                var data = new XChartData();
                data.text = row.country;
                var properties = new XDrawProperties();
                properties.fillcolor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 1)";
                properties.linecolor = properties.fillcolor;
                data.properties = properties;
                for (var _c = 0, _d = row.data; _c < _d.length; _c++) {
                    var yearvalue = _d[_c];
                    data.list.push({ name: yearvalue.year.toString(), value: yearvalue.value });
                }
                dataset.items.push(data);
            }
        }
        return dataset;
    };
    CategoryBase.prototype.ScatterPlotDataSet = function (unepdata, labelx, labely) {
        var dataset = new XChartDataSet();
        if (unepdata.length) {
            var _labelx = [];
            // share chart button
            if (unepdata[0].sharename)
                dataset.sharename = unepdata[0].sharename;
            // chart title
            if (unepdata[0].charttitle)
                dataset.charttitle = unepdata[0].charttitle;
            // indicator info
            if (unepdata[0].indicatorinfo)
                dataset.indicatorinfo = unepdata[0].indicatorinfo;
            // indicator info for units
            if (unepdata[0].indicatorinfo)
                dataset.indicatorinfo = unepdata[0].indicatorinfo;
            // for (let yearvalue of unepdata) {
            //     _labelx.push(yearvalue.data[0].y.toString());
            // }
            // for (let i = 0; i < unepdata.length; i++) {
            //     _labelx.push((unepdata[i].data[0].y).toString());
            // }
            dataset.options = {
                label: { x: labelx, y: labely },
                labels: { y: _labelx }
            };
            for (var _i = 0, unepdata_3 = unepdata; _i < unepdata_3.length; _i++) {
                var row = unepdata_3[_i];
                var data = new XChartData();
                data.text = row.country;
                var properties = new XDrawProperties();
                properties.fillcolor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 1)";
                properties.linecolor = properties.fillcolor;
                data.properties = properties;
                var list = [];
                for (var _a = 0, _b = row.data; _a < _b.length; _a++) {
                    var yearvalue = _b[_a];
                    list.push({ name: yearvalue.year.toString(), x: Number(yearvalue.x), y: Number(yearvalue.y), value: 0 });
                }
                data.list = list;
                dataset.items.push(data);
            }
        }
        return dataset;
    };
    return CategoryBase;
}());
//# sourceMappingURL=categorybase.js.map