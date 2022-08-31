var availableD_;
var countryselected;
var indexCategory = 1;
var globaldesc;

class MainView {
    Show = function () {
        this.ShowSearch();
    };
    Showheader = function () {
        var container = document.getElementById("header");
        var header = new Xplore.List({ icon: "leaf", text: "REGIONAL RESOURCE EFFICIENCY INDICATORS IN THE ASIA PACIFIC" });
        header.Show(container);
    };
    ShowBanner = function () {
        var container = document.getElementById("banner");
        // let data = this.DataSet();
        var data = this.ScatterDataSet();
        var chart = new XChart.ScatterPlotChart(data);
        chart.Show(container);
        // let chart = new XChart.StackedColumnChart(data);
        // chart.Show(container);
    };
    ShowSearch = function () {
        var container = document.getElementById("search");
        var searchcont = new Xplore.Container({ classes: ["category-cont"] });

        var textboxvalue = new Xplore.TextEditor();
        textboxvalue.onchange = function () {
            textboxvalue.value = textboxvalue.value;
        }
        searchcont.Add(textboxvalue);

        var convert = searchcont.Add(new Xplore.Button({
            text: "Convert Text!",
            onclick: function () {
                converttext.text = textboxvalue.value;
                converttext.Refresh();
            }
        }));

        var converttext = new Xplore.TextBlock({ text: "" });
        searchcont.Add(converttext);

        converttext.readonly = true;
        converttext.classes = ["converted-text"];

        searchcont.Show(container);
    };
};
