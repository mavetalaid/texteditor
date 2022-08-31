class DataViewMore extends CategoryBase {
    container: Xplore;
    type: string;

    constructor(container: Xplore, type: string) {
        super();
        this.container = container;
        this.type = type;
    }

    Show(): void {
        let self = this;

        let container = this.container;
        container.Clear();

        let type = this.type;

        if (type === "Material use") {
            let category = new NaturalResources();
            category.GetNRAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.legendposition = XPOSITION.TOP;
                barchart.showtooltip = true;

                // expander.Add(barchart);
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });

            category.GetNRAsiaPacificWorld(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetNRAsiaPacificDeveloping(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.legendposition = XPOSITION.TOP;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetNRAsiaPacificMaterial(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetNRAsiaPacificIndustrialized(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });
        } else if (type === "Energy use") {
            let category = new NaturalResources();
            category.GetREAsiaPacificWorld(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetREAsiaPacificDeveloping(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.legendposition = XPOSITION.TOP;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });
        } else if (type === "Water use") {
            let category = new NaturalResources();
            category.GetTotalWaterAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetWaterSecAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetWaterCapitaAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetWaterIntensityAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetAgriWaterAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetWaterAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetWaterFPAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });
        } else if (type === "Land use") {
            let category = new NaturalResources();
            category.GetTotalLand(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetTotalLandCapita(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetLandSector2015(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetLandIntensity(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetLandProductivity(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetLandMajorSector(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });
        } else if (type === "Agricultural productivity") {
            // type_ = "AgriProd";
            let category = new NaturalResources();
            category.GetGHGEmissions(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetGHGResultAgri(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetGHGCompare(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetGHGCO2(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetGHGIntensity(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetCereal(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetCompareAgri(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });

            category.GetAgriAsiaPacific(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });
        } else if (type === "Greenhouse gas emissions") {
            // type_ = "GreenhouseGas";
            let category = new NaturalResources();
            category.GetGHGEmissionEnergy(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;

                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;

                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";

                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));

                let barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;

                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);

                expander.Show(container);
            });
        } else if (type === "Waste management") {
            // type_ = "WasteManage";
            let category = new NaturalResources();
        category.GetMWCove(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetMWRecycled(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetHWGenerated(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetHWIncinerated(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetMWCollected(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Material Intensity of the economy") {
            // type_ = "MaterialIntensity";
            let category = new ResourceEfficiency();
        category.GetREAsiaPacificWorld(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetREAsiaPacificDeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetREAsiaPacificIndustry(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Energy intensity of the economy") {
            // type_ = "EnergyIntensity";
            let category = new ResourceEfficiency();
        category.Geteigdpasiapacificworld(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.Geteiasiapacificdeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Water intensity of the economy") {
            // type_ = "WaterIntensity";
            let category = new ResourceEfficiency();
        category.GetWaterIntensityAsiaPacific(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "GHG intensity of the economy") {
            // type_ = "GHGIntensity";
            let category = new ResourceEfficiency();
        category.Getco2asiapacific(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Emission of the energy sector") {
            // type_ = "EmissionEnSect";
            let category = new ResourceUse();
        category.GetGHGEmissionEnergy(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Material Footprint") {
            // type_ = "MaterialFootprint";
            let category = new Consumption();
        category.GetCBMFAsiaPacificDeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetCBMFAsiaPacificWorld(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetCBMFCompared(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetCBMFCAsiaPacificDeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetCBMFCAsiaPacificIndustralized(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Water Footprint") {
            // type_ = "WaterFootprint";
            let category = new Consumption();
        category.GetCBMFWaterAsiaPacific(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Physical Trade Balance") {
            // type_ = "PTB";
            let category = new TradeDependency();
        category.GetTDPTBMaterialCategory(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetTDPTBCSIRO(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetTDPTBAsiaPacificWorld(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetTDPTBAsiaPacific(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetTDPTBCapitaAsiaPacificWorld(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Unit price of trade") {
            // type_ = "UnitPriceTrade";
            let category = new TradeDependency();
        category.GetTDUPIAsiaPacificDeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetTDUPEAsiaPacificDeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });

        } else if (type === "Human Development Index (HDI)") {
            // type_ = "HDI";
            let category = new ResourceHumanDev();
        category.GetrhHDIdmc2010(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhHDIdmc2017(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhHDImf2010(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhHDImf2017(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhGDPdmc2010(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhGDPdmc2017(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhGDPmf2010(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhGDPmf2017(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Economic Growth (GDP)") {
            // type_ = "EconGrowth";
            let category = new ResourceHumanDev();
        category.GetrhEGDPdmc2010(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhEGDPdmc2017(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhEGDPmf2010(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetrhEGDPmf2017(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;

            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Investment and consumption") {
            // type_ = "InvestmentCons";
            let category = new ResourceHumanDev();
        category.GetRHFDIIndiaChina(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetRHFDIAsiaPacific(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Debt, inflation") {
            // type_ = "DebtInflation";
            let category = new ResourceHumanDev();
        category.Getrhgggasiapacificdeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.Getrhirasiapacificdeveloping(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Access to energy, water, sanitation") {
            // type_ = "AccessEWS";
            let category = new ResourceHumanDev();
        category.Getrhaeasiapacific(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.Getrhawater(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.Getrhasanitation(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "COVID spending") {
            // type_ = "COVIDSpend";
            // let refreshcontent = document.getElementById("indicator");
            let category = new InclusiveGreenRecovery();
        category.GetIGRCovid(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Natural capital") {
            // type_ = "NaturalCapital";
            // let refreshcontent = document.getElementById("indicator");
        
            let category = new InclusiveGreenRecovery();
            category.GetIGRNaturalCapital(function (data: XChartDataSet) {
                let expander = new Xplore.Expander({ text: data.charttitle });
                let description;
    
                let splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
    
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
    
                let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
    
                let barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
    
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
    
                // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
                // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;
    
                expander.Show(container);
            });
        } else if (type === "Green spending") {
            // type_ = "GreenSpend";
            let category = new InclusiveGreenRecovery();
        category.GetIGRTotalGreenRecovery(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Green energy investments") {
            // type_ = "GreenEnergy";
            let category = new InclusiveGreenRecovery();
        category.GetIGRGreenEnergySubregion(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let piechart = new XChart.PieChart(data);
            piechart.classes.push("chart-top-header");
            piechart.showtooltip = true;
            piechart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(piechart, 1);
            expander.Add(splitter);

            expander.Show(container);
        });

        category.GetIGRGreenEnergyCountry(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let piechart = new XChart.PieChart(data);
            piechart.classes.push("chart-top-header");
            piechart.showtooltip = true;
            piechart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(piechart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Green Transport") {
            // type_ = "GreenTransport";
            let category = new InclusiveGreenRecovery();
        category.GetIGRElectric(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Green research and development") {
            // type_ = "GreenResDev";
            let category = new InclusiveGreenRecovery();
        category.GetIGRFinancial(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let piechart = new XChart.PieChart(data);
            piechart.classes.push("chart-top-header");
            piechart.showtooltip = true;
            piechart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(piechart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        } else if (type === "Biofuel production-Green Spending") {
            // type_ = "BiofuelProd";
            let category = new InclusiveGreenRecovery();
        category.GetIGRBiofuelProduction(function (data: XChartDataSet) {
            let expander = new Xplore.Expander({ text: data.charttitle });
            let description;

            let splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;

            if (data.chartdesc)
                description = data.chartdesc;
            else
                description = "";

            let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));

            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.TOP;

            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);

            // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
            // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;

            expander.Show(container);
        });
        }

        container.Refresh();
    }
}