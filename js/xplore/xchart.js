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
var XChartDataSet = /** @class */ (function () {
    function XChartDataSet() {
        this.items = [];
    }
    return XChartDataSet;
}());
var XChartData = /** @class */ (function () {
    function XChartData() {
        this.list = [];
    }
    return XChartData;
}());
var XChart = /** @class */ (function (_super) {
    __extends(XChart, _super);
    function XChart() {
        var _this = _super.call(this, undefined, "chart") || this;
        _this.legendposition = XPOSITION.NONE;
        _this.ischart = true;
        return _this;
    }
    XChart.prototype.Refresh = function () {
        this.object.innerHTML = "";
        var mainsplitter = new Xplore.SplitContainer();
        if (this.legendposition === XPOSITION.NONE)
            mainsplitter.size = [0, undefined];
        else
            mainsplitter.size = [48, undefined];
        mainsplitter.orientation = XORIENTATION.VERTICAL;
        mainsplitter.Show(this.object);
        this.titlecontainer = new Xplore.Container();
        mainsplitter.Set(this.titlecontainer, 0);
        var splitter = new Xplore.SplitContainer();
        var index = 0;
        var orientation;
        var self = this;
        switch (this.legendposition) {
            case XPOSITION.NONE:
                index = 0;
                splitter.size = [undefined, 0];
                orientation = "hidden";
                break;
            case XPOSITION.LEFT:
                index = 1;
                splitter.size = [300, undefined];
                orientation = "horizontal";
                break;
            case XPOSITION.TOP:
                index = 1;
                splitter.size = [30, undefined];
                splitter.orientation = XORIENTATION.VERTICAL;
                orientation = "vertical";
                break;
            case XPOSITION.RIGHT:
                index = 0;
                splitter.size = [undefined, 300];
                orientation = "horizontal";
                break;
            case XPOSITION.BOTTOM:
                index = 0;
                splitter.size = [undefined, 30];
                splitter.orientation = XORIENTATION.VERTICAL;
                orientation = "vertical";
                break;
        }
        mainsplitter.Set(splitter, 1);
        this.canvas = new XCanvas2D();
        this.canvas.settings.ischart = this.ischart;
        this.canvas.settings.allowzoom = false;
        this.canvas.settings.allowpan = false;
        this.canvas.settings.allowselect = false;
        this.canvas.settings.showtoolbar = false;
        this.canvas.rulersize = 60;
        this.canvas.rulersizey = 40;
        //Toolbar
        var toolbar = this.canvas.Add(new Xplore.Toolbar());
        toolbar.Add(new Xplore.Button({
            icon: "file-image",
            onclick: function () {
                self.SaveImage();
            }
        }));
        toolbar.Add(new Xplore.Button({
            icon: "file-excel", onclick: function () {
                self.SaveExcel();
            }
        }));
        toolbar.Add(new Xplore.Button({
            icon: "file-delimited", onclick: function () {
                self.SaveCSV();
            }
        }));
        toolbar.Add(new Xplore.Button({
            icon: "share", onclick: function () {
                self.ShareData();
            }
        }));
        // toolbar.Add(new Xplore.Button({
        //     icon: "arrow-right-circle-outline", onclick: function () {
        //         // self.ShowDetailsView(texts[1], description);
        //         console.log(this.data);
        //     }
        // }));
        splitter.Set(this.canvas, index);
        this.container = new Xplore.Container({ classes: ["chart-legend-container", orientation] });
        splitter.Set(this.container, index ? 0 : 1);
        //Add mainsplitter and splitter in canvas
        // this.canvas.Add(mainsplitter);
        // this.canvas.Add(splitter);
        this.Render();
    };
    return XChart;
}(Xplore));
(function (XChart) {
    var BaseChart = /** @class */ (function (_super) {
        __extends(BaseChart, _super);
        function BaseChart() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.selectedindex = -1;
            _this.showtooltip = false;
            _this.uniformscale = false;
            return _this;
        }
        BaseChart.prototype.Render = function () {
            var self = this;
            this.form = new Xplore.Form({
                classes: ["map-info"],
                width: 200,
                height: 120,
            });
            this.form.showfooter = false;
            this.form.showclose = false;
            this.form.modal = false;
            this.canvas.labelx = this.data.options.labels.x;
            this.canvas.labely = this.data.options.labels.y;
            //Title
            this.titlecontainer.Clear();
            if (this.data.charttitle === undefined)
                this.data.charttitle = "";
            this.title = this.titlecontainer.Add(new Xplore.Text({ text: this.data.charttitle, classes: ["chart-title"] }));
            this.canvas.cheader = this.data.charttitle; // chart title for download image
            this.titlecontainer.Refresh();
            var list;
            var index = 0;
            var legendchart = [];
            //All
            list = new Xplore.List({
                icon: "circle",
                text: "All",
                onclick: function (object) {
                    var element = object.parent.querySelector(".highlight");
                    if (element)
                        element.classList.remove("highlight");
                    object.object.classList.add("highlight");
                    self.selectedindex = object.tag;
                    model.Clear();
                    self.RenderChart(model);
                    self.canvas.model = model;
                    self.canvas.settings.fixscale = false;
                    self.canvas.Resize();
                    if (!self.canvas.settings.fixscale)
                        self.canvas.ZoomAll();
                    self.canvas.Render();
                }
            });
            list.tag = -1;
            list.iconcolor = "#000";
            this.container.Add(list);
            legendchart.push({ text: list.text, color: list.iconcolor, width: 0 });
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                list = new Xplore.List({
                    icon: data.icon || "circle",
                    text: data.text,
                    onclick: function (object) {
                        var element = object.parent.querySelector(".highlight");
                        if (element)
                            element.classList.remove("highlight");
                        object.object.classList.add("highlight");
                        self.selectedindex = object.tag;
                        model.Clear();
                        self.RenderChart(model);
                        self.canvas.model = model;
                        self.canvas.settings.fixscale = false;
                        self.canvas.Resize();
                        if (!self.canvas.settings.fixscale)
                            self.canvas.ZoomAll();
                        self.canvas.Render();
                    }
                });
                list.tag = index++;
                list.iconcolor = data.properties.linecolor;
                this.container.Add(list);
                legendchart.push({ text: list.text, color: list.iconcolor, width: 0 });
            }
            this.canvas.legend = legendchart;
            this.container.Refresh();
            this.canvas.textx = this.data.options.label.x;
            this.canvas.texty = this.data.options.label.y;
            var model = new XCanvas2DModel();
            this.RenderChart(model);
            this.canvas.model = model;
            this.canvas.settings.fixscale = false;
            this.canvas.ZoomAll(this.uniformscale);
        };
        BaseChart.prototype.RenderChart = function (model) {
        };
        BaseChart.prototype.RenderActive = function (canvas, mouse) {
        };
        BaseChart.prototype.SaveImage = function () {
            // console.log(this.canvas.legend);
            this.canvas.SaveImage(1920, 1080, this.title.text + ".png");
        };
        BaseChart.prototype.SaveExcel = function () {
            var table = document.createElement("table");
            var cells = "";
            var row;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var item = _a[_i];
                row = "<tr>";
                row += "<th>Name</th>";
                for (var _b = 0, _c = item.list; _b < _c.length; _b++) {
                    var cell = _c[_b];
                    if (cell["x"] !== undefined) {
                        row += "<th>" + cell.name + "</th>";
                        row += "<th>" + cell.name + "</th>";
                    }
                    else
                        row += "<th>" + cell.name + "</th>";
                }
                row + "</tr>";
                cells += row;
                break;
            }
            for (var _d = 0, _e = this.data.items; _d < _e.length; _d++) {
                var item = _e[_d];
                row = "<tr>";
                row += "<td>" + item.text + "</td>";
                for (var _f = 0, _g = item.list; _f < _g.length; _f++) {
                    var cell = _g[_f];
                    if (cell["x"] !== undefined) {
                        row += "<td>" + cell["x"] + "</td>";
                        row += "<td>" + cell["y"] + "</td>";
                    }
                    else {
                        if (Number.isNaN(cell.value))
                            row += "<td>" + " " + "</td>";
                        else
                            row += "<td>" + cell.value + "</td>";
                    }
                }
                row + "</tr>";
                cells += row;
            }
            table.innerHTML = cells;
            // console.log(this.data);
            // Xplore.SaveExcel("Chart", table, "Chart");
            // let info = [["A", "B", "C"], ["1", "2", "3"]];
            var info;
            if (this.data.indicatorinfo) {
                var infodata = this.data.indicatorinfo[0];
                info = [
                    ["Title", this.data.charttitle],
                    ["Category", infodata.category],
                    ["Indicator", infodata.name],
                    ["Description", infodata.description],
                    ["Unit of measure", this.data.indicatorinfo[1].units],
                    ["Methodology", infodata.methodology],
                    ["Data license", infodata.license],
                    ["Data source", infodata.source],
                    ["References", infodata.reference]
                ];
            }
            else {
                info = [
                    ["Title", ""],
                    ["Category", ""],
                    ["Indicator", ""],
                    ["Description", ""],
                    ["Unit of measure", ""],
                    ["Methodology", ""],
                    ["Data license", ""],
                    ["Data source", ""],
                    ["References", ""]
                ];
            }
            Xplore.SaveExcel2("Chart2", table, info, "First Sheet", "Second Sheet");
        };
        BaseChart.prototype.SaveCSV = function () {
            var cells = "";
            var row;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var item = _a[_i];
                row = "Name";
                for (var _b = 0, _c = item.list; _b < _c.length; _b++) {
                    var cell = _c[_b];
                    if (cell["x"] !== undefined) {
                        row += "," + cell.name;
                        row += "," + cell.name;
                    }
                    else
                        row += "," + cell.name;
                }
                row += "\n";
                cells += row;
                break;
            }
            for (var _d = 0, _e = this.data.items; _d < _e.length; _d++) {
                var item = _e[_d];
                row = item.text;
                for (var _f = 0, _g = item.list; _f < _g.length; _f++) {
                    var cell = _g[_f];
                    if (cell["x"] !== undefined) {
                        row += "," + cell["x"];
                        row += "," + cell["y"];
                    }
                    else {
                        if (Number.isNaN(cell.value))
                            row += "," + " ";
                        else
                            row += "," + cell.value;
                    }
                }
                row += "\n";
                cells += row;
            }
            Xplore.SaveFile(cells, this.title.text + ".csv", "text/csv");
        };
        BaseChart.prototype.ShareData = function () {
            if (this.data.sharename) {
                window.open(location.href + "?id=" + this.data.sharename, 'width=800, height=900');
            }
            else {
                alert("No data to share!");
            }
        };
        return BaseChart;
    }(XChart));
    var BarChart = /** @class */ (function (_super) {
        __extends(BarChart, _super);
        function BarChart(data) {
            var _this = _super.call(this) || this;
            _this.width = 0.5;
            _this.data = data;
            return _this;
        }
        BarChart.prototype.RenderChart = function (model) {
            var counter = 1;
            var rectangle;
            var datacount = this.data.items.length;
            var width = this.width / datacount;
            var y;
            var index = 0;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                counter = 1;
                y = -0.5 * this.width + 0.5 * width + index * width;
                for (var _b = 0, _c = data.list; _b < _c.length; _b++) {
                    var item = _c[_b];
                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(item.value, counter + y - width / 2, 0, counter + y + width / 2));
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;
                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;
                    counter++;
                }
                index++;
            }
            if (this.showtooltip) {
                var self_1 = this;
                var item_1;
                var list_1;
                model.HandleMouseMoveNoButton = function (canvas, mouse) {
                    canvas.Render();
                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        var index_1 = Math.round(mouse.current.y) - 1;
                        var x = canvas.ToCoordX(0);
                        var y_1 = canvas.ToCoordY(index_1);
                        self_1.RenderActive(canvas, mouse);
                        self_1.form.Clear();
                        for (var _i = 0, _a = self_1.data.items; _i < _a.length; _i++) {
                            var data = _a[_i];
                            item_1 = data.list[index_1];
                            if (item_1) {
                                list_1 = new Xplore.List({
                                    icon: data.icon,
                                    text: data.text + ": " + item_1.value
                                });
                                list_1.iconcolor = data.properties.linecolor;
                                self_1.form.Add(list_1);
                            }
                        }
                        if (item_1) {
                            if (!self_1.form.object) {
                                self_1.form.Show();
                            }
                            self_1.form.text = self_1.data.items[0].list[index_1].name;
                            self_1.form.RefreshHeader();
                            x = mouse.rawcurrent.x;
                            y_1 = canvas.ToCoordY(index_1 + 1);
                            self_1.form.RefreshBody();
                            self_1.form.Resize();
                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y_1 -= self_1.form.object.scrollHeight + 20;
                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x -= self_1.form.object.scrollWidth + 20;
                            self_1.form.SetLocation(x + 10, y_1 + 10);
                        }
                        else {
                            self_1.form.Close();
                        }
                    }
                    else {
                        self_1.form.Close();
                    }
                };
            }
        };
        return BarChart;
    }(BaseChart));
    XChart.BarChart = BarChart;
    var StackedBarChart = /** @class */ (function (_super) {
        __extends(StackedBarChart, _super);
        function StackedBarChart(data) {
            var _this = _super.call(this) || this;
            _this.width = 0.5;
            _this.data = data;
            return _this;
        }
        StackedBarChart.prototype.RenderChart = function (model) {
            var self = this;
            var rectangle;
            var item;
            var length = this.data.items[0].list.length;
            var x;
            var list;
            var index = 0;
            for (var i = 0; i < length; i++) {
                x = 0;
                index = 0;
                for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                    var data = _a[_i];
                    item = data.list[i];
                    if (self.selectedindex !== -1 && self.selectedindex !== index) {
                        index++;
                        continue;
                    }
                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(x, i - this.width / 2 + 1, x + item.value, i + this.width / 2 + 1));
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;
                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;
                    x += item.value;
                    index++;
                }
            }
            if (this.showtooltip) {
                model.HandleMouseMoveNoButton = function (canvas, mouse) {
                    canvas.Render();
                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        var index_2 = Math.round(mouse.current.y) - 1;
                        var x_1 = canvas.ToCoordX(0);
                        var y = canvas.ToCoordY(index_2);
                        self.RenderActive(canvas, mouse);
                        self.form.Clear();
                        for (var _i = 0, _a = self.data.items; _i < _a.length; _i++) {
                            var data = _a[_i];
                            item = data.list[index_2];
                            if (item) {
                                list = new Xplore.List({
                                    icon: data.icon,
                                    text: data.text + ": " + item.value
                                });
                                list.iconcolor = data.properties.linecolor;
                                self.form.Add(list);
                            }
                        }
                        if (item) {
                            if (!self.form.object) {
                                self.form.Show();
                            }
                            self.form.text = self.data.items[0].list[index_2].name;
                            self.form.RefreshHeader();
                            x_1 = mouse.rawcurrent.x;
                            y = canvas.ToCoordY(index_2 + 1);
                            self.form.RefreshBody();
                            self.form.Resize();
                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y -= self.form.object.scrollHeight + 20;
                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x_1 -= self.form.object.scrollWidth + 20;
                            self.form.SetLocation(x_1 + 10, y + 10);
                        }
                        else {
                            self.form.Close();
                        }
                    }
                    else {
                        self.form.Close();
                    }
                };
            }
        };
        return StackedBarChart;
    }(BaseChart));
    XChart.StackedBarChart = StackedBarChart;
    var ColumnChart = /** @class */ (function (_super) {
        __extends(ColumnChart, _super);
        function ColumnChart(data) {
            var _this = _super.call(this) || this;
            _this.width = 0.5;
            _this.data = data;
            return _this;
        }
        ColumnChart.prototype.RenderChart = function (model) {
            var counter = 1;
            var rectangle;
            var datacount = this.data.items.length;
            var width = this.width / datacount;
            var x;
            var index = 0;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                counter = 1;
                x = -0.5 * this.width + 0.5 * width + index * width;
                for (var _b = 0, _c = data.list; _b < _c.length; _b++) {
                    var item_2 = _c[_b];
                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(counter + x - width / 2, item_2.value, counter + x + width / 2, 0));
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;
                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;
                    counter++;
                }
                index++;
            }
            var self = this;
            var item;
            var list;
            if (this.showtooltip) {
                model.HandleMouseMoveNoButton = function (canvas, mouse) {
                    canvas.Render();
                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        var index_3 = Math.round(mouse.current.x) - 1;
                        var x_2 = canvas.ToCoordX(index_3);
                        var y = canvas.ToCoordY(0);
                        self.RenderActive(canvas, mouse);
                        self.form.Clear();
                        for (var _i = 0, _a = self.data.items; _i < _a.length; _i++) {
                            var data = _a[_i];
                            item = data.list[index_3];
                            if (item) {
                                list = new Xplore.List({
                                    icon: data.icon,
                                    text: data.text + ": " + item.value
                                });
                                list.iconcolor = data.properties.linecolor;
                                self.form.Add(list);
                            }
                        }
                        if (item) {
                            if (!self.form.object) {
                                self.form.Show();
                            }
                            self.form.text = self.data.items[0].list[index_3].name;
                            self.form.RefreshHeader();
                            x_2 = canvas.ToCoordX(index_3 + 1);
                            y = mouse.rawcurrent.y;
                            self.form.RefreshBody();
                            self.form.Resize();
                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y -= self.form.object.scrollHeight + 20;
                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x_2 -= self.form.object.scrollWidth + 20;
                            self.form.SetLocation(x_2 + 10, y + 10);
                        }
                        else {
                            self.form.Close();
                        }
                    }
                    else {
                        self.form.Close();
                    }
                };
            }
        };
        return ColumnChart;
    }(BaseChart));
    XChart.ColumnChart = ColumnChart;
    var StackedColumnChart = /** @class */ (function (_super) {
        __extends(StackedColumnChart, _super);
        function StackedColumnChart(data) {
            var _this = _super.call(this) || this;
            _this.width = 0.75;
            _this.data = data;
            return _this;
        }
        StackedColumnChart.prototype.RenderChart = function (model) {
            var self = this;
            var rectangle;
            var text;
            var item;
            var length = this.data.items[0].list.length;
            var x = 0;
            var y = 0;
            var list;
            var index = 0;
            var x1;
            var y1;
            var x2;
            var y2;
            var midx;
            var midy;
            for (var i = 0; i < length; i++) {
                y = 0;
                index = 0;
                for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                    var data = _a[_i];
                    item = data.list[i];
                    if (self.selectedindex !== -1 && self.selectedindex !== index) {
                        index++;
                        continue;
                    }
                    x1 = i - this.width / 2 + 1;
                    y1 = y;
                    x2 = i + this.width / 2 + 1;
                    y2 = y + item.value;
                    midx = (x1 + x2) / 2;
                    midy = (y1 + y2) / 2;
                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(x1, y1, x2, y2));
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;
                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;
                    if (self.selectedindex !== -1) {
                        var roundvalue = Math.round(item.value * 100) / 100;
                        text = model.Add(new XCanvas2DGraphics.Text(roundvalue.toString(), midx, midy));
                        // text = model.Add(new XCanvas2DGraphics.Text(item.value.toString(), midx, midy)) as XCanvas2DGraphics.Text;
                        text.textproperties.color = "black"; //"#FFF";
                        text.textproperties.horizontalalignment = "center";
                    }
                    y += item.value;
                    index++;
                }
            }
            if (this.showtooltip) {
                model.HandleMouseMoveNoButton = function (canvas, mouse) {
                    canvas.Render();
                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        index = Math.round(mouse.current.x) - 1;
                        x = canvas.ToCoordX(index);
                        y = canvas.ToCoordY(0);
                        self.RenderActive(canvas, mouse);
                        self.form.Clear();
                        for (var _i = 0, _a = self.data.items; _i < _a.length; _i++) {
                            var data = _a[_i];
                            item = data.list[index];
                            if (item) {
                                list = new Xplore.List({
                                    icon: data.icon || "circle",
                                    text: data.text + ": " + item.value
                                });
                                list.iconcolor = data.properties.linecolor;
                                self.form.Add(list);
                            }
                        }
                        if (item) {
                            if (!self.form.object) {
                                self.form.Show();
                            }
                            self.form.text = self.data.items[0].list[index].name;
                            self.form.RefreshHeader();
                            x = canvas.ToCoordX(index + 1) + canvas.left;
                            y = mouse.client.y;
                            self.form.RefreshBody();
                            self.form.Resize();
                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y -= self.form.object.scrollHeight + 20;
                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x -= self.form.object.scrollWidth + 20;
                            self.form.SetLocation(x + 10, y + 10);
                        }
                        else {
                            self.form.Close();
                        }
                    }
                    else {
                        self.form.Close();
                    }
                };
            }
        };
        return StackedColumnChart;
    }(BaseChart));
    XChart.StackedColumnChart = StackedColumnChart;
    var LineChart = /** @class */ (function (_super) {
        __extends(LineChart, _super);
        function LineChart(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            return _this;
        }
        LineChart.prototype.RenderChart = function (model) {
            var line;
            var item1;
            var item2;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                for (var i = 0; i < data.list.length - 1; i++) {
                    item1 = data.list[i];
                    item2 = data.list[i + 1];
                    line = model.Add(new XCanvas2DGraphics.Line(i, item1.value, i + 1, item2.value));
                    line.properties.linecolor = data.properties.linecolor;
                }
            }
            if (this.showtooltip) {
                var self_2 = this;
                model.HandleMouseMoveNoButton = function (canvas, mouse) {
                    canvas.Render();
                    var index = Math.round(mouse.current.x);
                    var x = canvas.ToCoordX(index);
                    var y = canvas.ToCoordY(0);
                    canvas.SetProperties({ thickness: 1 });
                    canvas.PrimitiveLine(x, 0, x, y);
                    for (var _i = 0, _a = self_2.data.items; _i < _a.length; _i++) {
                        var data = _a[_i];
                        if (data.list[index])
                            canvas.PrimitiveCircle(x, canvas.ToCoordY(data.list[index].value), 5, true, true);
                    }
                };
            }
        };
        return LineChart;
    }(BaseChart));
    XChart.LineChart = LineChart;
    var ScatterPlotChart = /** @class */ (function (_super) {
        __extends(ScatterPlotChart, _super);
        function ScatterPlotChart(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            return _this;
        }
        ScatterPlotChart.prototype.RenderChart = function (model) {
            var circle;
            var item;
            var index = 0;
            var self = this;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                if (this.selectedindex !== -1 && this.selectedindex !== index) {
                    index++;
                    continue;
                }
                for (var i = 0; i < data.list.length; i++) {
                    item = data.list[i];
                    circle = model.Add(new XCanvas2DGraphics.Circle(item.x, item.y, 5, true));
                    circle.properties.linecolor = data.properties.linecolor;
                    circle.hover = true;
                    circle.onhover = function (x, y, object, canvas) {
                        // self.form.Refresh();
                        // x = canvas.ToCoordX(x);
                        // y = canvas.ToCoordY(y);
                        // self.form.SetLocation(x, y);
                    };
                }
                index++;
            }
            // if (this.showtooltip) {
            //     let self = this;
            //     model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
            //         canvas.Render();
            //         let index = mouse.current.x;
            //         let x = canvas.ToCoordX(index);
            //         let y = canvas.ToCoordY(0);
            //         canvas.SetProperties({ thickness: 1 });
            //         //canvas.PrimitiveLine(x, 0, x, y);
            //         for (let data of self.data.items) {
            //             if (data.list[index])
            //                 canvas.PrimitiveCircle(x, canvas.ToCoordY(data.list[index].value), 5, true, true);
            //         }
            //     };
            //}
        };
        return ScatterPlotChart;
    }(BaseChart));
    XChart.ScatterPlotChart = ScatterPlotChart;
    var AreaChart = /** @class */ (function (_super) {
        __extends(AreaChart, _super);
        function AreaChart(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            return _this;
        }
        AreaChart.prototype.RenderChart = function (model) {
            var poly;
            var item;
            var points;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                points = [];
                for (var i = 0; i < data.list.length; i++) {
                    item = data.list[i];
                    points.push(new XPoint2D(i, item.value));
                }
                points.push(new XPoint2D(data.list.length - 1, 0));
                points.push(new XPoint2D(0, 0));
                poly = model.Add(new XCanvas2DGraphics.Polygon(points));
                poly.properties.linecolor = data.properties.linecolor;
                poly.properties.fillcolor = data.properties.fillcolor;
            }
            if (this.showtooltip) {
                var self_3 = this;
                model.HandleMouseMoveNoButton = function (canvas, mouse) {
                    canvas.Render();
                    var index = Math.round(mouse.current.x);
                    var x = canvas.ToCoordX(index);
                    var y = canvas.ToCoordY(0);
                    canvas.SetProperties({ thickness: 1 });
                    canvas.PrimitiveLine(x, 0, x, y);
                    for (var _i = 0, _a = self_3.data.items; _i < _a.length; _i++) {
                        var data = _a[_i];
                        if (data.list[index])
                            canvas.PrimitiveCircle(x, canvas.ToCoordY(data.list[index].value), 5, true, true);
                    }
                };
            }
        };
        return AreaChart;
    }(BaseChart));
    XChart.AreaChart = AreaChart;
    var PieChart = /** @class */ (function (_super) {
        __extends(PieChart, _super);
        function PieChart(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            _this.uniformscale = true;
            return _this;
        }
        PieChart.prototype.RenderChart = function (model) {
            var pie;
            var item;
            var total = 0;
            var startangle = 0;
            var endangle = 0;
            for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                var data = _a[_i];
                item = data.list[0];
                total += item.value;
            }
            for (var _b = 0, _c = this.data.items; _b < _c.length; _b++) {
                var data = _c[_b];
                item = data.list[0];
                endangle = 2 * Math.PI * item.value / total;
                pie = model.Add(new XCanvas2DGraphics.Pie(0, 0, 1, startangle, startangle + endangle));
                pie.properties.linecolor = data.properties.linecolor;
                pie.properties.fillcolor = data.properties.fillcolor;
                startangle += endangle;
            }
            this.canvas.settings.showgrid = false;
            this.canvas.settings.showruler = false;
        };
        return PieChart;
    }(BaseChart));
    XChart.PieChart = PieChart;
    var MapChart = /** @class */ (function (_super) {
        __extends(MapChart, _super);
        function MapChart(data) {
            var _this = _super.call(this) || this;
            var self = _this;
            _this.ischart = false;
            _this.data = data;
            Xplore.GetJSON("resources/map-small.json", function (data) {
                self.map = data.features;
                self.Render();
            });
            return _this;
        }
        MapChart.prototype.Render = function () {
            if (this.map) {
                var model = new XCanvas2DModel();
                var mappoints = void 0;
                var polygon = void 0;
                var text = void 0;
                var icon = void 0;
                var bounds = new XBounds2D();
                var feature = void 0;
                var polygons = [];
                var self_4 = this;
                var asia = [];
                var index = 0;
                //Polygon
                for (var _i = 0, _a = this.map; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.geometry.type === "Polygon") {
                        mappoints = [];
                        for (var _b = 0, _c = item.geometry.coordinates; _b < _c.length; _b++) {
                            var points = _c[_b];
                            for (var _d = 0, points_1 = points; _d < points_1.length; _d++) {
                                var point = points_1[_d];
                                mappoints.push(new XPoint2D(point[0], point[1]));
                            }
                        }
                        polygon = new XCanvas2DGraphics.Polygon(mappoints);
                        polygon.hover = true;
                        polygon.hoverproperties.fillcolor = "#FF0";
                        polygon.data = item;
                        if (item.properties.continent === "Asia") {
                            polygon.properties.fillcolor = "#FF8";
                            asia.push(polygon);
                            polygon.UpdateBounds(bounds);
                        }
                        else {
                            polygon.properties.fillcolor = "#CCC";
                            polygon.properties.linecolor = "#CCC";
                        }
                        polygon.onclick = function (poly) {
                            if (self_4.onselect)
                                self_4.onselect(poly.data);
                        };
                        model.Add(polygon);
                    }
                    else {
                        for (var _e = 0, _f = item.geometry.coordinates; _e < _f.length; _e++) {
                            var points = _f[_e];
                            mappoints = [];
                            for (var _g = 0, points_2 = points; _g < points_2.length; _g++) {
                                var point = points_2[_g];
                                for (var _h = 0, point_1 = point; _h < point_1.length; _h++) {
                                    var inpoint = point_1[_h];
                                    mappoints.push(new XPoint2D(inpoint[0], inpoint[1]));
                                }
                            }
                            polygon = new XCanvas2DGraphics.Polygon(mappoints);
                            polygon.hover = true;
                            polygon.hoverproperties.fillcolor = "#FF0";
                            polygon.data = item;
                            if (item.properties.continent === "Asia") {
                                polygon.properties.fillcolor = "#FF8";
                                asia.push(polygon);
                                polygon.UpdateBounds(bounds);
                            }
                            else {
                                polygon.properties.fillcolor = "#CCC";
                                polygon.properties.linecolor = "#CCC";
                            }
                            polygon.onclick = function (poly) {
                                if (self_4.onselect)
                                    self_4.onselect(poly.data);
                            };
                            model.Add(polygon);
                        }
                    }
                    polygons.push(polygon);
                }
                var _loop_1 = function (item) {
                    var localbounds = new XBounds2D();
                    if (item.geometry.type === "Polygon") {
                        polygon = polygons[index];
                        polygon.UpdateBounds(localbounds);
                    }
                    else {
                        for (var _l = 0, _m = item.geometry.coordinates; _l < _m.length; _l++) {
                            var points = _m[_l];
                            polygon = polygons[index];
                            polygon.UpdateBounds(localbounds);
                        }
                    }
                    index++;
                    //Features
                    if (this_1.data) {
                        feature = this_1.data[item.properties.postal];
                        if (feature) {
                            if (feature.fillcolor)
                                polygon.properties.fillcolor = feature.fillcolor;
                            if (feature.onhover)
                                polygon.onhover = function (mx, my, object) {
                                    var map = document.body.querySelector(".map-info");
                                    if (!map) {
                                        self_4.form = new Xplore.Form({
                                            text: item.properties.name,
                                            classes: ["map-info"],
                                            width: 240,
                                            height: 300
                                        });
                                        self_4.form.modal = false;
                                        self_4.form.showclose = false;
                                        self_4.form.showfooter = false;
                                        self_4.form.Show();
                                    }
                                    if (self_4.form.text !== item.properties.name) {
                                        self_4.form.text = item.properties.name;
                                        self_4.form.RefreshHeader();
                                    }
                                    var x = self_4.canvas.ToCoordX(mx);
                                    var y = self_4.canvas.ToCoordY(my);
                                    // if (y > self.canvas.height / 2) {
                                    //     y -= 58 / 2; 
                                    // } else {
                                    //     y += 58; 
                                    // }
                                    self_4.form.SetLocation(x, y);
                                };
                            if (feature.icon) {
                                text = new XCanvas2DGraphics.Text(feature.icon, localbounds.midx, localbounds.midy);
                                text.textproperties.font = "Material Icons";
                                text.textproperties.size = 24;
                                text.scale = false;
                                model.Add(text);
                            }
                            if (feature.image) {
                                icon = new XCanvas2DGraphics.Image(feature.image, localbounds.midx, localbounds.midy);
                                model.Add(icon);
                            }
                        }
                    }
                };
                var this_1 = this;
                //Polygon
                for (var _j = 0, _k = this.map; _j < _k.length; _j++) {
                    var item = _k[_j];
                    _loop_1(item);
                }
                this.canvas.settings.showgrid = false;
                this.canvas.settings.showruler = false;
                this.canvas.settings.allowzoom = true;
                this.canvas.settings.allowpan = true;
                this.canvas.settings.allowselect = true;
                this.canvas.model = model;
                this.canvas.onhover = function (value) {
                    if (!value) {
                        var map = document.body.querySelector(".map-info");
                        if (map)
                            map.remove();
                    }
                };
                this.canvas.ZoomAll(true, bounds);
            }
        };
        MapChart.prototype.SaveImage = function () {
            this.canvas.SaveImage(1920, 1080, "Map.png");
        };
        MapChart.prototype.SaveCSV = function () {
        };
        MapChart.prototype.SaveExcel = function () {
        };
        MapChart.prototype.ShareData = function () {
        };
        return MapChart;
    }(XChart));
    XChart.MapChart = MapChart;
})(XChart || (XChart = {}));
//# sourceMappingURL=xchart.js.map