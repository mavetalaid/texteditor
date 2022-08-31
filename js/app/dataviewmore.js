var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataViewMore = /** @class */ (function (_super) {
    __extends(DataViewMore, _super);
    function DataViewMore(container, type) {
        var _this = _super.call(this) || this;
        _this.container = container;
        _this.type = type;
        return _this;
    }
    DataViewMore.prototype.Show = function () {
        var self = this;
        var container = this.container;
        container.Clear();
        var type = this.type;
        if (type === "Material use") {
            var category = new NaturalResources();
            category.GetNRAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.legendposition = XPOSITION.TOP;
                barchart.showtooltip = true;
                // expander.Add(barchart);
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetNRAsiaPacificWorld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetNRAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetNRAsiaPacificMaterial(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetNRAsiaPacificIndustrialized(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
        }
        else if (type === "Energy use") {
            var category = new NaturalResources();
            category.GetREAsiaPacificWorld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetREAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
        }
        else if (type === "Water use") {
            var category = new NaturalResources();
            category.GetTotalWaterAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetWaterSecAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetWaterCapitaAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetWaterIntensityAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetAgriWaterAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetWaterAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetWaterFPAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.indicatorinfo)
                    description = data.indicatorinfo[0].description;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
        }
        else if (type === "Land use") {
            var category = new NaturalResources();
            category.GetTotalLand(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetTotalLandCapita(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetLandSector2015(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetLandIntensity(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetLandProductivity(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetLandMajorSector(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
        }
        else if (type === "Agricultural productivity") {
            // type_ = "AgriProd";
            var category = new NaturalResources();
            category.GetGHGEmissions(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetGHGResultAgri(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetGHGCompare(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetGHGCO2(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetGHGIntensity(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetCereal(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetCompareAgri(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetAgriAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
        }
        else if (type === "Greenhouse gas emissions") {
            // type_ = "GreenhouseGas";
            var category = new NaturalResources();
            category.GetGHGEmissionEnergy(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
        }
        else if (type === "Waste management") {
            // type_ = "WasteManage";
            var category = new NaturalResources();
            category.GetMWCove(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetMWRecycled(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetHWGenerated(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetHWIncinerated(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetMWCollected(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.LEFT;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                // refreshcontent.children[1].children[0].textContent = data.indicatorinfo[0].name;
                // refreshcontent.children[1].children[1].textContent = data.indicatorinfo[0].description;
                expander.Show(container);
            });
        }
        else if (type === "Material Intensity of the economy") {
            // type_ = "MaterialIntensity";
            var category = new ResourceEfficiency();
            category.GetREAsiaPacificWorld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetREAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetREAsiaPacificIndustry(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Energy intensity of the economy") {
            // type_ = "EnergyIntensity";
            var category = new ResourceEfficiency();
            category.Geteigdpasiapacificworld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.Geteiasiapacificdeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Water intensity of the economy") {
            // type_ = "WaterIntensity";
            var category = new ResourceEfficiency();
            category.GetWaterIntensityAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "GHG intensity of the economy") {
            // type_ = "GHGIntensity";
            var category = new ResourceEfficiency();
            category.Getco2asiapacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Emission of the energy sector") {
            // type_ = "EmissionEnSect";
            var category = new ResourceUse();
            category.GetGHGEmissionEnergy(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Material Footprint") {
            // type_ = "MaterialFootprint";
            var category = new Consumption();
            category.GetCBMFAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetCBMFAsiaPacificWorld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetCBMFCompared(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetCBMFCAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetCBMFCAsiaPacificIndustralized(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Water Footprint") {
            // type_ = "WaterFootprint";
            var category = new Consumption();
            category.GetCBMFWaterAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Physical Trade Balance") {
            // type_ = "PTB";
            var category = new TradeDependency();
            category.GetTDPTBMaterialCategory(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetTDPTBCSIRO(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetTDPTBAsiaPacificWorld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetTDPTBAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetTDPTBCapitaAsiaPacificWorld(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Unit price of trade") {
            // type_ = "UnitPriceTrade";
            var category = new TradeDependency();
            category.GetTDUPIAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetTDUPEAsiaPacificDeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Human Development Index (HDI)") {
            // type_ = "HDI";
            var category = new ResourceHumanDev();
            category.GetrhHDIdmc2010(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhHDIdmc2017(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhHDImf2010(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhHDImf2017(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhGDPdmc2010(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhGDPdmc2017(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhGDPmf2010(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhGDPmf2017(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
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
        }
        else if (type === "Economic Growth (GDP)") {
            // type_ = "EconGrowth";
            var category = new ResourceHumanDev();
            category.GetrhEGDPdmc2010(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhEGDPdmc2017(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhEGDPmf2010(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
                scatterplot.classes.push("chart-top-header");
                scatterplot.legendposition = XPOSITION.TOP;
                scatterplot.showtooltip = true;
                splitter.Set(desccontainer, 0);
                splitter.Set(scatterplot, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetrhEGDPmf2017(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var scatterplot = new XChart.ScatterPlotChart(data);
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
        }
        else if (type === "Investment and consumption") {
            // type_ = "InvestmentCons";
            var category = new ResourceHumanDev();
            category.GetRHFDIIndiaChina(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetRHFDIAsiaPacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Debt, inflation") {
            // type_ = "DebtInflation";
            var category = new ResourceHumanDev();
            category.Getrhgggasiapacificdeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.Getrhirasiapacificdeveloping(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Access to energy, water, sanitation") {
            // type_ = "AccessEWS";
            var category = new ResourceHumanDev();
            category.Getrhaeasiapacific(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.Getrhawater(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
                barchart.classes.push("chart-top-header");
                barchart.showtooltip = true;
                barchart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(barchart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.Getrhasanitation(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "COVID spending") {
            // type_ = "COVIDSpend";
            // let refreshcontent = document.getElementById("indicator");
            var category = new InclusiveGreenRecovery();
            category.GetIGRCovid(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Natural capital") {
            // type_ = "NaturalCapital";
            // let refreshcontent = document.getElementById("indicator");
            var category = new InclusiveGreenRecovery();
            category.GetIGRNaturalCapital(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Green spending") {
            // type_ = "GreenSpend";
            var category = new InclusiveGreenRecovery();
            category.GetIGRTotalGreenRecovery(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Green energy investments") {
            // type_ = "GreenEnergy";
            var category = new InclusiveGreenRecovery();
            category.GetIGRGreenEnergySubregion(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var piechart = new XChart.PieChart(data);
                piechart.classes.push("chart-top-header");
                piechart.showtooltip = true;
                piechart.legendposition = XPOSITION.TOP;
                splitter.Set(desccontainer, 0);
                splitter.Set(piechart, 1);
                expander.Add(splitter);
                expander.Show(container);
            });
            category.GetIGRGreenEnergyCountry(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var piechart = new XChart.PieChart(data);
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
        }
        else if (type === "Green Transport") {
            // type_ = "GreenTransport";
            var category = new InclusiveGreenRecovery();
            category.GetIGRElectric(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
        else if (type === "Green research and development") {
            // type_ = "GreenResDev";
            var category = new InclusiveGreenRecovery();
            category.GetIGRFinancial(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var piechart = new XChart.PieChart(data);
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
        }
        else if (type === "Biofuel production-Green Spending") {
            // type_ = "BiofuelProd";
            var category = new InclusiveGreenRecovery();
            category.GetIGRBiofuelProduction(function (data) {
                var expander = new Xplore.Expander({ text: data.charttitle });
                var description;
                var splitter = new Xplore.SplitContainer();
                splitter.classes = ["expander-splitter"];
                splitter.orientation = XORIENTATION.VERTICAL;
                if (data.chartdesc)
                    description = data.chartdesc;
                else
                    description = "";
                var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
                desccontainer.Add(new Xplore.Text({ text: description }));
                var barchart = new XChart.StackedColumnChart(data);
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
    };
    return DataViewMore;
}(CategoryBase));
//# sourceMappingURL=dataviewmore.js.map