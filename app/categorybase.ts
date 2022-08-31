class CategoryBase {
    //From JSON
    // root: string = "resources/";
    // extension: string = ".json";

    //From server
    // root: string = "http://localhost:3307/";

    root: string = "http://localhost:1998/api/";
    extension: string = "";

    Get(url: string, func: Function): any {
        Xplore.GetJSON(this.root + url + this.extension, function (data: any) {
            func(data);
        });
    }

    POST(url: string, data: any, func: Function): any {
        Xplore.POST(this.root + url + this.extension, data, function (data: any) {
            func(data);
        });
    }

    VerticalDataSet(unepdata: UNEPTableRow[], labelx: string, labely: string): XChartDataSet {
        let dataset = new XChartDataSet();

        if (unepdata.length) {
            let _labelx: string[] = [];

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


            for (let yearvalue of unepdata[0].data) {
                _labelx.push(yearvalue.year.toString());
            }

            dataset.options = {
                label: { x: labelx, y: labely },
                labels: { x: _labelx }
            };

            for (let row of unepdata) {
                let data = new XChartData();
                data.text = row.country;

                let properties = new XDrawProperties();
                properties.fillcolor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 1)";
                properties.linecolor = properties.fillcolor;

                data.properties = properties;

                for (let yearvalue of row.data) {
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
    }

    HorizontalDataSet(unepdata: UNEPTableRow[], labelx: string, labely: string): XChartDataSet {
        let dataset = new XChartDataSet();

        if (unepdata.length) {
            let _labelx: string[] = [];

            // share chart button
            if (unepdata[0].sharename)
                dataset.sharename = unepdata[0].sharename;

            // chart title
            if (unepdata[0].charttitle)
                dataset.charttitle = unepdata[0].charttitle;

            for (let yearvalue of unepdata[0].data) {
                _labelx.push(yearvalue.year.toString());
            }

            dataset.options = {
                label: { x: labelx, y: labely },
                labels: { y: _labelx }
            };

            for (let row of unepdata) {
                let data = new XChartData();
                data.text = row.country;

                let properties = new XDrawProperties();
                properties.fillcolor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 1)";
                properties.linecolor = properties.fillcolor;

                data.properties = properties;

                for (let yearvalue of row.data) {
                    data.list.push({ name: yearvalue.year.toString(), value: yearvalue.value });
                }

                dataset.items.push(data);
            }
        }

        return dataset;
    }

    ScatterPlotDataSet(unepdata: UNEPTableRow[], labelx: string, labely: string): XChartDataSet {
        let dataset = new XChartDataSet();
        if (unepdata.length) {
            let _labelx: string[] = [];

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

            for (let row of unepdata) {
                let data = new XChartData();
                data.text = row.country;

                let properties = new XDrawProperties();
                properties.fillcolor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 1)";
                properties.linecolor = properties.fillcolor;

                data.properties = properties;

                let list: XScatterChartItem[] = [];

                for (let yearvalue of row.data) {
                    list.push({ name: yearvalue.year.toString(), x: Number(yearvalue.x), y: Number(yearvalue.y), value: 0 });
                }

                data.list = list;

                dataset.items.push(data);
            }
        }
        return dataset;
    }
}
