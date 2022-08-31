var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.Show = function () {
        //this.BarChart();
        //this.StackedBarChart();
        //this.ColumnChart();
        //this.StackedColumnChart();
        //this.LineChart();
        this.AreaChart();
        //this.Map();
    };
    Demo.prototype.BarChart = function () {
        var chart = new XChart.BarChart(this.HorizontalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    };
    Demo.prototype.StackedBarChart = function () {
        var chart = new XChart.StackedBarChart(this.HorizontalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    };
    Demo.prototype.ColumnChart = function () {
        var chart = new XChart.ColumnChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    };
    Demo.prototype.StackedColumnChart = function () {
        var chart = new XChart.StackedColumnChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    };
    Demo.prototype.LineChart = function () {
        var chart = new XChart.LineChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    };
    Demo.prototype.AreaChart = function () {
        var chart = new XChart.AreaChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    };
    Demo.prototype.Map = function () {
        var data = {
            PH: {
                fillcolor: "#88F", icon: "✪", onhover: function () {
                }
            },
            TH: {
                fillcolor: "#FF0", icon: "😃", onhover: function () {
                }
            },
            MM: {
                fillcolor: "#F0F", icon: "😃", onhover: function () {
                }
            },
        };
        var map = new XChart.MapChart(data);
        map.Show();
    };
    Demo.prototype.VerticalDataSet = function () {
        var dataset = new XChartDataSet();
        var labelx = [];
        for (var i = 0; i < 10; i++)
            labelx.push((1979 + i).toString());
        dataset.options = {
            label: { x: "Years", y: "Number Sold (Thousands)" },
            labels: { x: labelx }
        };
        //Apple
        var data = new XChartData();
        data.text = "Apple";
        data.icon = "apple";
        var properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 150, 0, 1)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: (1979 + i).toString(), value: Math.random() * 10 });
        dataset.items.push(data);
        //Strawberry
        data = new XChartData();
        data.text = "Strawberry";
        data.icon = "bowling";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(0, 100, 0, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });
        dataset.items.push(data);
        //Pineapple
        data = new XChartData();
        data.text = "Pineapple";
        data.icon = "camera-iris";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(0, 0, 255, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });
        dataset.items.push(data);
        //Mango
        data = new XChartData();
        data.text = "Mango";
        data.icon = "file";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 0, 255, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });
        dataset.items.push(data);
        return dataset;
    };
    Demo.prototype.HorizontalDataSet = function () {
        var dataset = new XChartDataSet();
        var labelx = [];
        for (var i = 0; i < 10; i++)
            labelx.push((1979 + i).toString());
        dataset.options = {
            label: { x: "Number Sold (Thousands)", y: "Years" },
            labels: { y: labelx }
        };
        //Apple
        var data = new XChartData();
        data.text = "Apple";
        data.icon = "apple";
        var properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 150, 0, 1)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: (1979 + i).toString(), value: Math.random() * 10 });
        dataset.items.push(data);
        //Strawberry
        data = new XChartData();
        data.text = "Strawberry";
        data.icon = "bowling";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(0, 100, 0, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });
        dataset.items.push(data);
        //Pineapple
        data = new XChartData();
        data.text = "Pineapple";
        data.icon = "camera-iris";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(0, 0, 255, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });
        dataset.items.push(data);
        //Mango
        data = new XChartData();
        data.text = "Mango";
        data.icon = "file";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 0, 255, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });
        dataset.items.push(data);
        return dataset;
    };
    return Demo;
}());
//# sourceMappingURL=demo.js.map