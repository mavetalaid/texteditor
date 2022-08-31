class Demo {
    Show(): void {
        //this.BarChart();
        //this.StackedBarChart();
        //this.ColumnChart();
        //this.StackedColumnChart();
        //this.LineChart();
        this.AreaChart();
        //this.Map();
    }

    BarChart(): void {
        let chart = new XChart.BarChart(this.HorizontalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    }

    StackedBarChart(): void {
        let chart = new XChart.StackedBarChart(this.HorizontalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    }

    ColumnChart(): void {
        let chart = new XChart.ColumnChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    }
    
    StackedColumnChart(): void {
        let chart = new XChart.StackedColumnChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    }

    LineChart(): void {
        let chart = new XChart.LineChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    }

    AreaChart(): void {
        let chart = new XChart.AreaChart(this.VerticalDataSet());
        chart.legendposition = XPOSITION.RIGHT;
        chart.Show();
    }

    Map(): void {
        let data: XChartMapData = {
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

        let map = new XChart.MapChart(data);
        map.Show();
    }

    VerticalDataSet(): XChartDataSet {
        let dataset = new XChartDataSet();
        let labelx: string[] = [];

        for (let i = 0; i < 10; i++)
        labelx.push((1979 + i).toString());

        dataset.options = {
            label: { x: "Years", y: "Number Sold (Thousands)" },
            labels: { x: labelx }
           };

        //Apple
        let data = new XChartData();
        data.text = "Apple";
        data.icon = "apple";

        let properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 150, 0, 1)";
        properties.linecolor = properties.fillcolor;
        
        data.properties = properties;

        for (let i = 0; i < 10; i++)
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

        for (let i = 0; i < 10; i++)
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

        for (let i = 0; i < 10; i++)
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

        for (let i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });

        dataset.items.push(data);

        return dataset;
    }

    HorizontalDataSet(): XChartDataSet {
        let dataset = new XChartDataSet();
        let labelx: string[] = [];

        for (let i = 0; i < 10; i++)
        labelx.push((1979 + i).toString());

        dataset.options = {
            label: { x: "Number Sold (Thousands)", y: "Years" },
            labels: { y: labelx }
           };

        //Apple
        let data = new XChartData();
        data.text = "Apple";
        data.icon = "apple";

        let properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 150, 0, 1)";
        properties.linecolor = properties.fillcolor;
        
        data.properties = properties;

        for (let i = 0; i < 10; i++)
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

        for (let i = 0; i < 10; i++)
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

        for (let i = 0; i < 10; i++)
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

        for (let i = 0; i < 10; i++)
            data.list.push({ name: "", value: Math.random() * 10 });

        dataset.items.push(data);

        return dataset;
    }
}