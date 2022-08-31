class XChartDataSet {
    items: XChartData[] = [];
    options: XChartDataSetOptions;
    sharename?: string;
    charttitle?: string;
    indicatorinfo?: any;
    chartdesc?: string;
}

interface XChartDataSetOptions {
    label?: { x: string, y: string };
    labels?: XChartDataLabel;
}

class XChartData {
    icon?: string;
    text: string;
    list: XChartItem[] = [];
    properties: XDrawProperties;
    hover?: XDrawProperties;
}

interface XChartItem {
    name: string;
    value: number;
}

interface XScatterChartItem extends XChartItem {
    x: number;
    y: number;
}

interface XChartDataLabel {
    x?: string[];
    y?: string[];
}

interface XChartMapProperties {
    scalerank: number;
    featurecla: string;
    labelrank: number;
    sovereignt: string;
    sov_a3: string;
    adm0_dif: number;
    level: number;
    type: string;
    admin: string;
    adm0_a3: string;
    geou_dif: number;
    geounit: string;
    gu_a3: string;
    su_dif: number;
    subunit: string;
    su_a3: string;
    brk_diff: number;
    name: string;
    name_long: string;
    brk_a3: string;
    brk_name: string;
    brk_group?: any;
    abbrev: string;
    postal: string;
    formal_en: string;
    formal_fr: string;
    note_adm0: string;
    note_brk: string;
    name_sort: string;
    name_alt: string;
    mapcolor7: number;
    mapcolor8: number;
    mapcolor9: number;
    mapcolor13: number;
    pop_est: number;
    gdp_md_est: number;
    pop_year: number;
    lastcensus: number;
    gdp_year: number;
    economy: string;
    income_grp: string;
    wikipedia: number;
    fips_10?: any;
    iso_a2: string;
    iso_a3: string;
    iso_n3: string;
    un_a3: string;
    wb_a2: string;
    wb_a3: string;
    woe_id: number;
    adm0_a3_is: string;
    adm0_a3_us: string;
    adm0_a3_un: number;
    adm0_a3_wb: number;
    continent: string;
    region_un: string;
    subregion: string;
    region_wb: string;
    name_len: number;
    long_len: number;
    abbrev_len: number;
    tiny: number;
    homepart: number;
    filename: string;
}

interface XChartMapGeometry {
    type: string;
    coordinates: any[][][];
}

interface XChartMapFeature {
    type: string;
    properties: XChartMapProperties;
    geometry: XChartMapGeometry;
}

interface XChartMapRootObject {
    type: string;
    features: XChartMapFeature[];
}

interface XChartMapData {
    [key: string]: XChartMapDataItem;
}

interface XChartMapDataItem {
    icon?: string;
    image?: string;
    fillcolor: string;
    onhover?: Function;
}

abstract class XChart extends Xplore {
    canvas: XCanvas2D;
    legendposition: XPOSITION = XPOSITION.NONE;
    container: Xplore.Container;
    titlecontainer: Xplore.Container;
    title: Xplore.Text;
    ischart: boolean = true;

    constructor() {
        super(undefined, "chart");
    }

    Refresh(): void {
        this.object.innerHTML = "";

        let mainsplitter = new Xplore.SplitContainer();

        if (this.legendposition === XPOSITION.NONE)
            mainsplitter.size = [0, undefined];
        else
            mainsplitter.size = [48, undefined];

        mainsplitter.orientation = XORIENTATION.VERTICAL;
        mainsplitter.Show(this.object);

        this.titlecontainer = new Xplore.Container();
        mainsplitter.Set(this.titlecontainer, 0)

        let splitter = new Xplore.SplitContainer();
        let index = 0;
        let orientation;
        let self = this;

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
        let toolbar = this.canvas.Add(new Xplore.Toolbar());

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
    }

    abstract Render();

    abstract SaveImage();

    abstract SaveExcel();

    abstract SaveCSV();

    abstract ShareData();
}

namespace XChart {
    class BaseChart extends XChart {
        data: XChartDataSet;
        form: Xplore.Form;

        selectedindex: number = -1;
        showtooltip: boolean = false;

        uniformscale: boolean = false;

        Render() {
            let self = this;

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

            let list: Xplore.List;
            let index: number = 0;

            let legendchart = [];

            //All
            list = new Xplore.List({
                icon: "circle",
                text: "All",
                onclick: function (object: Xplore) {
                    let element = object.parent.querySelector(".highlight");
                    if (element)
                        element.classList.remove("highlight")

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

            for (let data of this.data.items) {
                list = new Xplore.List({
                    icon: data.icon || "circle",
                    text: data.text,
                    onclick: function (object: Xplore) {
                        let element = object.parent.querySelector(".highlight");
                        if (element)
                            element.classList.remove("highlight")

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

            let model = new XCanvas2DModel();
            this.RenderChart(model);

            this.canvas.model = model;
            this.canvas.settings.fixscale = false;
            this.canvas.ZoomAll(this.uniformscale);
        }

        RenderChart(model: XCanvas2DModel): void {
        }

        RenderActive(canvas: XCanvas2D, mouse: XMouse): void {
        }

        SaveImage(): void {
            // console.log(this.canvas.legend);
            this.canvas.SaveImage(1920, 1080, this.title.text + ".png");
        }

        SaveExcel(): void {
            let table = document.createElement("table");
            let cells: string = "";
            let row: string;

            for (let item of this.data.items) {
                row = "<tr>";
                row += "<th>Name</th>";

                for (let cell of item.list) {
                    if (cell["x"] !== undefined) {
                        row += "<th>" + cell.name + "</th>";
                        row += "<th>" + cell.name + "</th>";
                    } else
                        row += "<th>" + cell.name + "</th>";
                }

                row + "</tr>";
                cells += row;

                break;
            }

            for (let item of this.data.items) {
                row = "<tr>";
                row += "<td>" + item.text + "</td>";

                for (let cell of item.list) {
                    if (cell["x"] !== undefined) {
                        row += "<td>" + cell["x"] + "</td>";
                        row += "<td>" + cell["y"] + "</td>";
                    } else {
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

            let info;

            if (this.data.indicatorinfo) {
                let infodata = this.data.indicatorinfo[0];

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
                ]
            } else {
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
                ]
            }

            Xplore.SaveExcel2("Chart2", table, info, "First Sheet", "Second Sheet");
        }

        SaveCSV(): void {
            let cells: string = "";
            let row: string;

            for (let item of this.data.items) {
                row = "Name";

                for (let cell of item.list) {
                    if (cell["x"] !== undefined) {
                        row += "," + cell.name;
                        row += "," + cell.name;
                    } else
                        row += "," + cell.name;
                }

                row += "\n";
                cells += row;

                break;
            }

            for (let item of this.data.items) {
                row = item.text;

                for (let cell of item.list) {
                    if (cell["x"] !== undefined) {
                        row += "," + cell["x"];
                        row += "," + cell["y"];
                    } else {
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
        }

        ShareData(): void {
            if (this.data.sharename) {
                window.open(location.href + "?id=" + this.data.sharename, 'width=800, height=900');
            } else {
                alert("No data to share!");
            }
        }
    }

    export class BarChart extends BaseChart {
        width: number = 0.5;

        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let counter: number = 1;
            let rectangle: XCanvas2DGraphics.Rectangle;
            let datacount = this.data.items.length;
            let width = this.width / datacount;
            let y: number;
            let index = 0;

            for (let data of this.data.items) {
                counter = 1;
                y = - 0.5 * this.width + 0.5 * width + index * width;

                for (let item of data.list) {
                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(item.value, counter + y - width / 2, 0, counter + y + width / 2)) as XCanvas2DGraphics.Rectangle;
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;

                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;
                    counter++;
                }

                index++;
            }

            if (this.showtooltip) {
                let self = this;
                let item: XChartItem;
                let list: Xplore.List;

                model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
                    canvas.Render();

                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        let index = Math.round(mouse.current.y) - 1;
                        let x = canvas.ToCoordX(0);
                        let y = canvas.ToCoordY(index);

                        self.RenderActive(canvas, mouse);

                        self.form.Clear();

                        for (let data of self.data.items) {
                            item = data.list[index];

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

                            self.form.text = self.data.items[0].list[index].name;
                            self.form.RefreshHeader();

                            x = mouse.rawcurrent.x;
                            y = canvas.ToCoordY(index + 1);

                            self.form.RefreshBody();
                            self.form.Resize();

                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y -= self.form.object.scrollHeight + 20;

                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x -= self.form.object.scrollWidth + 20;

                            self.form.SetLocation(x + 10, y + 10);

                        } else {
                            self.form.Close();
                        }

                    } else {
                        self.form.Close();
                    }
                };
            }
        }
    }

    export class StackedBarChart extends BaseChart {
        width: number = 0.5;

        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let self = this;
            let rectangle: XCanvas2DGraphics.Rectangle;
            let item: XChartItem;
            let length = this.data.items[0].list.length;
            let x: number;
            let list: Xplore.List;
            let index: number = 0;

            for (let i = 0; i < length; i++) {
                x = 0;
                index = 0;

                for (let data of this.data.items) {
                    item = data.list[i];

                    if (self.selectedindex !== -1 && self.selectedindex !== index) {
                        index++;
                        continue;
                    }

                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(x, i - this.width / 2 + 1, x + item.value, i + this.width / 2 + 1)) as XCanvas2DGraphics.Rectangle;
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;

                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;

                    x += item.value;
                    index++;
                }
            }

            if (this.showtooltip) {
                model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
                    canvas.Render();

                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        let index = Math.round(mouse.current.y) - 1;
                        let x = canvas.ToCoordX(0);
                        let y = canvas.ToCoordY(index);

                        self.RenderActive(canvas, mouse);

                        self.form.Clear();

                        for (let data of self.data.items) {
                            item = data.list[index];

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

                            self.form.text = self.data.items[0].list[index].name;
                            self.form.RefreshHeader();

                            x = mouse.rawcurrent.x;
                            y = canvas.ToCoordY(index + 1);

                            self.form.RefreshBody();
                            self.form.Resize();

                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y -= self.form.object.scrollHeight + 20;

                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x -= self.form.object.scrollWidth + 20;

                            self.form.SetLocation(x + 10, y + 10);

                        } else {
                            self.form.Close();
                        }

                    } else {
                        self.form.Close();
                    }
                };
            }
        }
    }

    export class ColumnChart extends BaseChart {
        width: number = 0.5;

        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let counter: number = 1;
            let rectangle: XCanvas2DGraphics.Rectangle;
            let datacount = this.data.items.length;
            let width = this.width / datacount;
            let x: number;
            let index = 0;

            for (let data of this.data.items) {
                counter = 1;
                x = - 0.5 * this.width + 0.5 * width + index * width;

                for (let item of data.list) {
                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(counter + x - width / 2, item.value, counter + x + width / 2, 0)) as XCanvas2DGraphics.Rectangle;
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;

                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;
                    counter++;
                }

                index++;
            }

            let self = this;
            let item: XChartItem;
            let list: Xplore.List;

            if (this.showtooltip) {
                model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
                    canvas.Render();

                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        let index = Math.round(mouse.current.x) - 1;
                        let x = canvas.ToCoordX(index);
                        let y = canvas.ToCoordY(0);

                        self.RenderActive(canvas, mouse);

                        self.form.Clear();

                        for (let data of self.data.items) {
                            item = data.list[index];

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

                            self.form.text = self.data.items[0].list[index].name;
                            self.form.RefreshHeader();

                            x = canvas.ToCoordX(index + 1);
                            y = mouse.rawcurrent.y;

                            self.form.RefreshBody();
                            self.form.Resize();

                            if (mouse.rawcurrent.y > window.innerHeight / 2)
                                y -= self.form.object.scrollHeight + 20;

                            if (mouse.rawcurrent.x > window.innerWidth / 2)
                                x -= self.form.object.scrollWidth + 20;

                            self.form.SetLocation(x + 10, y + 10);

                        } else {
                            self.form.Close();
                        }

                    } else {
                        self.form.Close();
                    }
                };
            }
        }
    }

    export class StackedColumnChart extends BaseChart {
        width: number = 0.75;

        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let self = this;
            let rectangle: XCanvas2DGraphics.Rectangle;
            let text: XCanvas2DGraphics.Text;
            let item: XChartItem;
            let length = this.data.items[0].list.length;
            let x: number = 0;
            let y: number = 0;
            let list: Xplore.List;
            let index: number = 0;

            let x1: number;
            let y1: number;
            let x2: number;
            let y2: number;
            let midx: number;
            let midy: number;

            for (let i = 0; i < length; i++) {
                y = 0;
                index = 0;

                for (let data of this.data.items) {
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

                    rectangle = model.Add(new XCanvas2DGraphics.Rectangle(x1, y1, x2, y2)) as XCanvas2DGraphics.Rectangle;
                    rectangle.properties.linecolor = data.properties.linecolor;
                    rectangle.properties.fillcolor = data.properties.fillcolor;

                    rectangle.hover = true;
                    rectangle.hoverproperties = data.hover;

                    if (self.selectedindex !== -1) {
                        let roundvalue = Math.round(item.value * 100) / 100;
                        text = model.Add(new XCanvas2DGraphics.Text(roundvalue.toString(), midx, midy)) as XCanvas2DGraphics.Text;
                        // text = model.Add(new XCanvas2DGraphics.Text(item.value.toString(), midx, midy)) as XCanvas2DGraphics.Text;
                        text.textproperties.color = "black"; //"#FFF";
                        text.textproperties.horizontalalignment = "center";
                    }

                    y += item.value;
                    index++;
                }
            }

            if (this.showtooltip) {
                model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
                    canvas.Render();

                    if (mouse.current.x >= 0 && mouse.current.y >= 0) {
                        index = Math.round(mouse.current.x) - 1;
                        x = canvas.ToCoordX(index);
                        y = canvas.ToCoordY(0);

                        self.RenderActive(canvas, mouse);

                        self.form.Clear();

                        for (let data of self.data.items) {
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

                        } else {
                            self.form.Close();
                        }

                    } else {
                        self.form.Close();
                    }
                };
            }
        }
    }

    export class LineChart extends BaseChart {
        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let line: XCanvas2DGraphics.Line;
            let item1: XChartItem;
            let item2: XChartItem;

            for (let data of this.data.items) {
                for (let i = 0; i < data.list.length - 1; i++) {
                    item1 = data.list[i];
                    item2 = data.list[i + 1];

                    line = model.Add(new XCanvas2DGraphics.Line(i, item1.value, i + 1, item2.value)) as XCanvas2DGraphics.Line;
                    line.properties.linecolor = data.properties.linecolor;
                }
            }

            if (this.showtooltip) {
                let self = this;

                model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
                    canvas.Render();

                    let index = Math.round(mouse.current.x);
                    let x = canvas.ToCoordX(index);
                    let y = canvas.ToCoordY(0);

                    canvas.SetProperties({ thickness: 1 });
                    canvas.PrimitiveLine(x, 0, x, y);

                    for (let data of self.data.items) {
                        if (data.list[index])
                            canvas.PrimitiveCircle(x, canvas.ToCoordY(data.list[index].value), 5, true, true);
                    }
                };
            }
        }
    }

    export class ScatterPlotChart extends BaseChart {
        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let circle: XCanvas2DGraphics.Circle;
            let item: XScatterChartItem;
            let index: number = 0;
            let self = this;

            for (let data of this.data.items) {
                if (this.selectedindex !== -1 && this.selectedindex !== index) {
                    index++;
                    continue;
                }

                for (let i = 0; i < data.list.length; i++) {
                    item = data.list[i] as XScatterChartItem;

                    circle = model.Add(new XCanvas2DGraphics.Circle(item.x, item.y, 5, true)) as XCanvas2DGraphics.Circle;
                    circle.properties.linecolor = data.properties.linecolor;

                    circle.hover = true;
                    circle.onhover = function (x: number, y: number, object: XCanvas2DGraphics.Circle, canvas: XCanvas2D) {
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
        }
    }

    export class AreaChart extends BaseChart {
        constructor(data: XChartDataSet) {
            super();
            this.data = data;
        }

        RenderChart(model: XCanvas2DModel): void {
            let poly: XCanvas2DGraphics.Polygon;
            let item: XChartItem;
            let points: XPoint2D[];

            for (let data of this.data.items) {
                points = [];

                for (let i = 0; i < data.list.length; i++) {
                    item = data.list[i];
                    points.push(new XPoint2D(i, item.value));
                }

                points.push(new XPoint2D(data.list.length - 1, 0));
                points.push(new XPoint2D(0, 0));

                poly = model.Add(new XCanvas2DGraphics.Polygon(points)) as XCanvas2DGraphics.Polygon;
                poly.properties.linecolor = data.properties.linecolor;
                poly.properties.fillcolor = data.properties.fillcolor;
            }

            if (this.showtooltip) {
                let self = this;

                model.HandleMouseMoveNoButton = function (canvas: XCanvas2D, mouse: XMouse): void {
                    canvas.Render();

                    let index = Math.round(mouse.current.x);
                    let x = canvas.ToCoordX(index);
                    let y = canvas.ToCoordY(0);

                    canvas.SetProperties({ thickness: 1 });
                    canvas.PrimitiveLine(x, 0, x, y);

                    for (let data of self.data.items) {
                        if (data.list[index])
                            canvas.PrimitiveCircle(x, canvas.ToCoordY(data.list[index].value), 5, true, true);
                    }
                };
            }
        }
    }

    export class PieChart extends BaseChart {
        constructor(data: XChartDataSet) {
            super();
            this.data = data;
            this.uniformscale = true;
        }

        RenderChart(model: XCanvas2DModel): void {
            let pie: XCanvas2DGraphics.Pie;
            let item: XChartItem;
            let total: number = 0;
            let startangle: number = 0;
            let endangle: number = 0;

            for (let data of this.data.items) {
                item = data.list[0];
                total += item.value;
            }

            for (let data of this.data.items) {
                item = data.list[0];

                endangle = 2 * Math.PI * item.value / total;

                pie = model.Add(new XCanvas2DGraphics.Pie(0, 0, 1, startangle, startangle + endangle)) as XCanvas2DGraphics.Pie;
                pie.properties.linecolor = data.properties.linecolor;
                pie.properties.fillcolor = data.properties.fillcolor;

                startangle += endangle;
            }

            this.canvas.settings.showgrid = false;
            this.canvas.settings.showruler = false;
        }
    }

    export class MapChart extends XChart {
        map: XChartMapFeature[];
        data: XChartMapData;
        form: Xplore.Form;
        onselect: Function;

        constructor(data?: XChartMapData) {
            super();

            let self = this;
            this.ischart = false;
            this.data = data;

            Xplore.GetJSON("resources/map-small.json", function (data: XChartMapRootObject) {
                self.map = data.features;
                self.Render();
            });
        }

        Render() {
            if (this.map) {
                let model = new XCanvas2DModel();
                let mappoints: XPoint2D[];
                let polygon: XCanvas2DGraphics.Polygon;
                let text: XCanvas2DGraphics.Text;
                let icon: XCanvas2DGraphics.Image;
                let bounds: XBounds2D = new XBounds2D();
                let feature: XChartMapDataItem;
                let polygons: XCanvas2DGraphics.Polygon[] = [];

                let self = this;
                let asia: XCanvas2DGraphics.Polygon[] = [];
                let index: number = 0;

                //Polygon
                for (let item of this.map) {
                    if (item.geometry.type === "Polygon") {
                        mappoints = [];

                        for (let points of item.geometry.coordinates) {
                            for (let point of points) {
                                mappoints.push(new XPoint2D(<number>point[0], <number>point[1]));
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
                            if (self.onselect)
                                self.onselect(poly.data);
                        };

                        model.Add(polygon);

                    } else {
                        for (let points of item.geometry.coordinates) {
                            mappoints = [];

                            for (let point of points) {
                                for (let inpoint of point) {
                                    mappoints.push(new XPoint2D(<number>inpoint[0], <number>inpoint[1]));
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
                                if (self.onselect)
                                    self.onselect(poly.data);
                            };

                            model.Add(polygon);
                        }
                    }

                    polygons.push(polygon);
                }

                //Polygon
                for (let item of this.map) {
                    let localbounds = new XBounds2D();

                    if (item.geometry.type === "Polygon") {
                        polygon = polygons[index];
                        polygon.UpdateBounds(localbounds);

                    } else {
                        for (let points of item.geometry.coordinates) {
                            polygon = polygons[index];
                            polygon.UpdateBounds(localbounds);
                        }
                    }

                    index++;

                    //Features
                    if (this.data) {
                        feature = this.data[item.properties.postal];

                        if (feature) {
                            if (feature.fillcolor)
                                polygon.properties.fillcolor = feature.fillcolor;

                            if (feature.onhover)
                                polygon.onhover = function (mx: number, my: number, object: XCanvas2DGraphics.Polygon) {
                                    let map = document.body.querySelector(".map-info");
                                    if (!map) {
                                        self.form = new Xplore.Form({
                                            text: item.properties.name,
                                            classes: ["map-info"],
                                            width: 240,
                                            height: 300
                                        });

                                        self.form.modal = false;
                                        self.form.showclose = false;
                                        self.form.showfooter = false;
                                        self.form.Show();
                                    }

                                    if (self.form.text !== item.properties.name) {
                                        self.form.text = item.properties.name;
                                        self.form.RefreshHeader();
                                    }

                                    let x = self.canvas.ToCoordX(mx);
                                    let y = self.canvas.ToCoordY(my);

                                    // if (y > self.canvas.height / 2) {
                                    //     y -= 58 / 2; 
                                    // } else {
                                    //     y += 58; 
                                    // }

                                    self.form.SetLocation(x, y);
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
                }

                this.canvas.settings.showgrid = false;
                this.canvas.settings.showruler = false;
                this.canvas.settings.allowzoom = true;
                this.canvas.settings.allowpan = true;
                this.canvas.settings.allowselect = true;
                this.canvas.model = model;

                this.canvas.onhover = function (value) {
                    if (!value) {
                        let map = document.body.querySelector(".map-info");
                        if (map)
                            map.remove();
                    }
                };

                this.canvas.ZoomAll(true, bounds);
            }
        }

        SaveImage(): void {
            this.canvas.SaveImage(1920, 1080, "Map.png");
        }

        SaveCSV(): void {
        }

        SaveExcel(): void {
        }

        ShareData(): void {
        }
    }
}