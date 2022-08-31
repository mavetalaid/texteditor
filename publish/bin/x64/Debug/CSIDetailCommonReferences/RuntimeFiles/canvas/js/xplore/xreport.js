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
var DefReportDocument = /** @class */ (function () {
    function DefReportDocument() {
    }
    return DefReportDocument;
}());
var DefReportSection = /** @class */ (function () {
    function DefReportSection() {
    }
    return DefReportSection;
}());
var DefReportSectionItem = /** @class */ (function () {
    function DefReportSectionItem() {
    }
    return DefReportSectionItem;
}());
var DefReportTable = /** @class */ (function () {
    function DefReportTable() {
    }
    return DefReportTable;
}());
var DefReportTableRow = /** @class */ (function () {
    function DefReportTableRow() {
    }
    return DefReportTableRow;
}());
var XReport = /** @class */ (function (_super) {
    __extends(XReport, _super);
    function XReport(document) {
        var _this = _super.call(this) || this;
        _this.report = new XReportDocument();
        _this.zoomvalue = 1;
        _this.report.document = document;
        return _this;
    }
    XReport.prototype.Refresh = function () {
        var self = this;
        var splitter = new Xplore.SplitContainer();
        splitter.orientation = XORIENTATION.VERTICAL;
        splitter.size = [32];
        splitter.Show(this.object);
        //Toolbar
        var toolbarcontainer = new Xplore.ToolbarContainer();
        var toolbar = toolbarcontainer.Add(new Xplore.Toolbar());
        toolbar.Add(new Xplore.Button({
            icon: "printer",
            onclick: function () {
                self.Print();
            }
        }));
        toolbar.Add(new Xplore.Button({
            icon: "magnify-plus-outline", onclick: function () {
                self.zoomvalue *= 1.1;
                self.Zoom(self.zoomvalue);
            }
        }));
        toolbar.Add(new Xplore.Button({
            icon: "magnify-minus-outline", onclick: function () {
                self.zoomvalue /= 1.1;
                self.Zoom(self.zoomvalue);
            }
        }));
        this.combo = toolbar.Add(new Xplore.Combobox());
        this.combo.options = [
            "Page Width",
            "25%",
            "50%",
            "100%",
            "125%",
            "150%",
            "200%"
        ];
        this.combo.value = "100%";
        this.combo.onchange = function () {
            self.page[0].style.transform = "scale(1)";
            var value;
            switch (self.combo.value) {
                case "Page Width":
                    var width = self.report.object.scrollWidth;
                    var pwidth = self.page[0].scrollWidth;
                    value = 0.95 * width / pwidth;
                    break;
                default:
                    var percent = self.combo.value.toString();
                    value = parseFloat(percent.replace("%", "")) / 100;
                    break;
            }
            self.Zoom(value);
        };
        splitter.Set(toolbarcontainer, 0);
        //Add report document
        splitter.Set(this.report, 1);
    };
    XReport.prototype.Render = function () {
        this.report.Render();
        this.page = this.report.object.querySelectorAll(".page");
    };
    XReport.prototype.Zoom = function (value) {
        this.zoomvalue = value;
        if (value === 1) {
            this.page[0].style.transform = null;
            this.page.forEach(function (item) {
                item.style.marginBottom = null;
                item.style.marginTop = null;
                item.style.transform = null;
            });
            this.page[0].style.marginTop = null;
        }
        else {
            this.page[0].style.transform = "scale(1)";
            var pheight_1 = this.page[0].scrollHeight;
            this.page.forEach(function (item) {
                item.style.marginBottom = (value - 1) * pheight_1 + 16 + "px";
                item.style.marginTop = (value - 1) * pheight_1 / 2 + "px";
                item.style.transform = "scale(" + value + ")";
            });
            this.page[0].style.marginTop = (value - 1) * pheight_1 / 2 + 16 + "px";
        }
    };
    XReport.prototype.Print = function () {
        var self = this;
        this.Zoom(1);
        window.REPORT = this.report;
        window.REPORT.onprint = function () {
            frame.Dispose();
        };
        var frame = new Xplore.iFrame("report.html");
        frame.classes.push("hidden");
        frame.Show();
    };
    return XReport;
}(Xplore));
var XReportDocument = /** @class */ (function (_super) {
    __extends(XReportDocument, _super);
    function XReportDocument() {
        var _this = _super.call(this, undefined, "report") || this;
        _this.pagenumber = 0;
        _this.pages = [];
        _this.height = 9.4 * 96;
        _this.showdate = true;
        _this.showpagenumber = true;
        _this.spaceheight = 0;
        return _this;
    }
    XReportDocument.prototype.Refresh = function () {
        this.object.innerHTML = "";
        var innerpage = document.createElement("div");
        innerpage.classList.add("page-inner");
        this.object.appendChild(innerpage);
        this.measure = innerpage;
        this.container = document.createDocumentFragment();
        this.CoverPage();
        this.NewPage();
    };
    XReportDocument.prototype.Render = function () {
        this.object.appendChild(this.container);
    };
    XReportDocument.prototype.CoverPage = function () {
        this.pagenumber++;
        this.currenty = 0;
        this.page = document.createElement("div");
        this.page.classList.add("page");
        this.container.appendChild(this.page);
        this.AddImage("resources/icon.jpg", "cover-icon");
        this.AddText("CSiBridge Analysis and Design Report", "cover-name");
        this.AddText(this.document.ProjectName, "cover-title");
        this.AddText(this.document.Client, "cover-client");
        this.AddText(Xplore.FormatDate(), "cover-date");
        this.pages.push(this.page);
    };
    XReportDocument.prototype.NewPage = function () {
        this.pagenumber++;
        this.currenty = 0;
        this.page = document.createElement("div");
        this.page.classList.add("page");
        this.container.appendChild(this.page);
        this.pages.push(this.page);
        //Header
        if (this.header) {
            var pageheader = document.createElement("div");
            pageheader.classList.add("page-header");
            pageheader.innerHTML = this.header;
            this.page.appendChild(pageheader);
        }
        if (this.showdate) {
            var date = new Date();
            var pagedate = document.createElement("div");
            pagedate.classList.add("page-date");
            pagedate.innerHTML = Xplore.FormatDate(date);
            this.page.appendChild(pagedate);
        }
        //Footer
        if (this.footer) {
            var pagefooter = document.createElement("div");
            pagefooter.classList.add("page-footer");
            pagefooter.innerHTML = this.footer;
            this.page.appendChild(pagefooter);
        }
        //Page Number
        if (this.showpagenumber) {
            var pageno = document.createElement("div");
            pageno.classList.add("page-number");
            pageno.innerHTML = this.pagenumber.toString();
            this.page.appendChild(pageno);
        }
    };
    XReportDocument.prototype.AddText = function (text, classname) {
        var element = document.createElement("p");
        element.innerText = text;
        if (classname)
            element.classList.add(classname);
        this.AddElement(element);
    };
    XReportDocument.prototype.AddSpace = function () {
        var element = document.createElement("div");
        element.innerHTML = "&nbsp;";
        this.AddElement(element);
    };
    XReportDocument.prototype.AddSection = function (text) {
        this.AddText(text, "report-section");
    };
    XReportDocument.prototype.AddSubSection = function (text) {
        this.AddText(text, "report-sub-section");
    };
    XReportDocument.prototype.AddReportTable = function (table) {
        this.AddText(table.Text, "report-table-title");
        var data = [];
        var item = [];
        for (var _i = 0, _a = table.Rows; _i < _a.length; _i++) {
            var row = _a[_i];
            item = [];
            for (var _b = 0, _c = row.Cells; _b < _c.length; _b++) {
                var cell = _c[_b];
                item.push(cell);
            }
            data.push(item);
        }
        this.AddTable(table.Columns, data);
    };
    XReportDocument.prototype.AddTable = function (header, data, classname) {
        var y = 0;
        var index = 0;
        var td;
        var tbl;
        var table = document.createElement("table");
        if (classname)
            table.classList.add(classname);
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        var th;
        //Add header
        for (var _i = 0, header_1 = header; _i < header_1.length; _i++) {
            var column = header_1[_i];
            th = document.createElement("th");
            th.innerHTML = column;
            tr.appendChild(th);
        }
        //Measure header
        tbl = document.createElement("table");
        tbl.classList.add(classname);
        tbl.appendChild(tr);
        this.measure.innerHTML = tbl.innerHTML;
        y = this.measure.scrollHeight + 2.33;
        this.currenty += y;
        thead.appendChild(tr);
        table.appendChild(thead);
        var tbody = document.createElement("tbody");
        for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
            var row = data_1[_a];
            tr = document.createElement("tr");
            //Add row
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var column = row_1[_b];
                td = document.createElement("td");
                td.innerHTML = column;
                tr.appendChild(td);
            }
            //Measure row
            this.measure.innerHTML = "";
            this.measure.appendChild(tr);
            y = this.measure.scrollHeight - 1;
            if (this.currenty + y >= this.height) {
                //Won't fit. Create new page and continue add table.
                table.appendChild(tbody);
                this.page.appendChild(table);
                this.NewPage();
                this.AddTable(header, data.slice(index, data.length - 1), classname);
                return;
            }
            else {
                //Row fits the page.
                this.currenty += y;
                tbody.appendChild(tr);
            }
            index++;
        }
        table.appendChild(tbody);
        this.page.appendChild(table);
        this.currenty += y;
    };
    XReportDocument.prototype.AddImage = function (source, classname) {
        var container = document.createElement("div");
        if (classname)
            container.classList.add(classname);
        var element = document.createElement("img");
        element.title = "image";
        element.src = source;
        container.appendChild(element);
        this.AddElement(container);
    };
    XReportDocument.prototype.AddElement = function (text) {
        var y = 0;
        this.measure.innerHTML = "";
        this.measure.appendChild(text);
        y = this.measure.scrollHeight;
        if (this.currenty !== 0 && this.currenty + y >= this.height) {
            this.NewPage();
        }
        //Fits the page
        this.page.appendChild(text);
        this.currenty += y;
    };
    return XReportDocument;
}(Xplore));
//# sourceMappingURL=xreport.js.map