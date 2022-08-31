var availableD_;
var countryselected;
var indexCategory = 1;
var globaldesc;
var MainView = /** @class */ (function () {
    function MainView() {
    }
    MainView.prototype.Show = function () {
        this.ShowSearch();
    };
    MainView.prototype.Showheader = function () {
        var container = document.getElementById("header");
        var header = new Xplore.List({ icon: "leaf", text: "REGIONAL RESOURCE EFFICIENCY INDICATORS IN THE ASIA PACIFIC" });
        header.Show(container);
    };
    MainView.prototype.ShowBanner = function () {
        var container = document.getElementById("banner");
        // let data = this.DataSet();
        var data = this.ScatterDataSet();
        var chart = new XChart.ScatterPlotChart(data);
        chart.Show(container);
        // let chart = new XChart.StackedColumnChart(data);
        // chart.Show(container);
    };
    MainView.prototype.ShowSearch = function () {
        var container = document.getElementById("search");
        var searchcont = new Xplore.Container({ classes: ["category-cont"] });

        // let header = searchcont.Add(new Xplore.Text({ text: "Banner Image" }));
        var textboxvalue = searchcont.Add(new Xplore.TextEditor());

        var convert = searchcont.Add(new Xplore.Button({
            text: "Convert Text!",
            onclick: function () {
                console.log(textboxvalue);
                console.log(converttext);
                // converttext.value = textboxvalue.value;

            }
        }));

        var converttext = searchcont.Add(new Xplore.Input(XINPUTTYPE.TEXT));
        converttext.readonly = true;
        converttext.classes = ["converted-text"];

        searchcont.Show(container);
    };
    return MainView;
}());
