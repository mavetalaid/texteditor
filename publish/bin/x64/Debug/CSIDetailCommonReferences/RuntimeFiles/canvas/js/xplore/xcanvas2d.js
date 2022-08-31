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
var XCanvas2DSettings = /** @class */ (function () {
    function XCanvas2DSettings() {
        this.pointtolerance = 0.001;
        this.showruler = true;
        this.showusergrid = true;
        this.showgrid = true;
        this.showtoolbar = true;
        this.showlabel = true;
        this.allowzoom = true;
        this.allowpan = true;
        this.allowselect = true;
        this.snapongrid = true;
        this.includezero = false;
        this.labelx = "X";
        this.labely = "Y";
        this.background = "#FFFFFF";
        this.axis = "#AAA";
        this.minor = "#EEEEEE";
        this.major = "#DDD";
        this.ruler = "#EEE";
        this.rulerposition = 0;
        this.rulertext = "#555";
        this.rulerline = "#AAA";
        this.fontcolor = "#000";
        this.usergrid = "#880";
        this.pointer = "#88F";
        this.ischart = false;
        this.snaponpoint = true;
        this.showpointer = true;
        this.DarkTheme();
    }
    XCanvas2DSettings.prototype.LightTheme = function () {
        this.background = "#FFF";
        this.axis = "#CCC";
        this.major = "#DDD";
        this.minor = "#EEE";
        this.ruler = "#FFF";
        this.rulerposition = 1; //0 - Outer; 1 - At (0, 0)
        this.rulertext = "#555";
        this.rulerline = "#AAA";
        this.fontcolor = "#000";
        this.usergrid = "#880";
    };
    XCanvas2DSettings.prototype.DarkTheme = function () {
        this.background = "#0b0e10";
        this.axis = "#2d3b42";
        this.major = "#1f292e";
        this.minor = "#11171a";
        this.ruler = "#182024";
        this.rulerposition = 1; //0 - Outer; 1 - At (0, 0)
        this.rulertext = "#888";
        this.rulerline = "#2d3b42";
        this.fontcolor = "#000";
        this.usergrid = "#880";
    };
    return XCanvas2DSettings;
}());
var XCanvas2D = /** @class */ (function (_super) {
    __extends(XCanvas2D, _super);
    function XCanvas2D() {
        var _this = _super.call(this, null, "canvas") || this;
        //Settings
        _this.settings = new XCanvas2DSettings();
        //Dimensions
        _this.width = 100;
        _this.height = 100;
        _this.rulersize = 30;
        //Grid
        _this.defaultgridsize = 100;
        _this.gridsize = 100;
        _this.gridvalue = new XPoint2D(1, 1);
        _this.middle = new XPoint2D();
        _this.center = new XPoint2D();
        _this.gridintervalx = 1;
        _this.gridintervaly = 1;
        //Usergrid
        _this.gridx = [];
        _this.gridy = [];
        _this.drawgrid = 0;
        //Toolbar
        _this.buttons = [];
        //Model
        _this.model = new XCanvas2DModel();
        return _this;
    }
    //Initialization
    XCanvas2D.prototype.Refresh = function () {
        this.Clear();
        //Canvas and context
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("tabindex", "1");
        this.object.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        //Mouse
        this.mouse = new XMouse(this);
        this.Resize();
        this.Events();
        this.ShowToolbar();
        this.RefreshChildren();
        //Subscribe to the resize event
        var self = this;
        window.onresize = function () {
            self.Resize();
            self.ZoomAll();
        };
    };
    XCanvas2D.prototype.Resize = function () {
        var rect = this.object.getBoundingClientRect();
        this.top = rect.top;
        this.left = rect.left;
        this.width = this.object.clientWidth;
        this.height = this.object.clientHeight;
        if (!this.height) {
            this.width = this.canvas.clientWidth;
            this.height = this.canvas.clientHeight;
        }
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.UpdateCenter();
        this.UpdateCanvasScaleRatio();
        this.Render();
    };
    XCanvas2D.prototype.UpdateCenter = function () {
        if (this.settings.showruler && this.settings.rulerposition === 0)
            this.center = new XPoint2D(this.rulersize + Math.round((this.width - this.rulersize) / 2), this.rulersize + Math.round((this.height - this.rulersize) / 2));
        else
            this.center = new XPoint2D(this.width / 2, this.height / 2);
    };
    XCanvas2D.prototype.UpdateCanvasScaleRatio = function () {
        var ratio = window.devicePixelRatio || 1;
        var width = this.width;
        var height = this.height;
        this.canvas.width = width * ratio;
        this.canvas.height = height * ratio;
        this.context.scale(ratio, ratio);
    };
    XCanvas2D.prototype.StoreBuffer = function () {
        var self = this;
        this.buffer = this.RenderToCanvas(function (context) {
            self.context = context;
            self.Render();
        });
        this.context = this.canvas.getContext('2d');
    };
    ;
    XCanvas2D.prototype.RestoreBuffer = function () {
        if (!this.buffer)
            this.StoreBuffer();
        this.context.drawImage(this.buffer, 0, 0);
    };
    ;
    XCanvas2D.prototype.RenderToCanvas = function (renderFunction) {
        var canvas = document.createElement('canvas');
        canvas.width = this.canvas.width;
        canvas.height = this.canvas.height;
        var context = canvas.getContext('2d');
        renderFunction(context);
        return canvas;
    };
    ;
    //Toolbar
    XCanvas2D.prototype.ShowToolbar = function () {
        if (this.settings.showtoolbar) {
            var self_1 = this;
            var toolbar_1 = new Xplore.Toolbar();
            for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                var button = _a[_i];
                toolbar_1.Add(button);
            }
            toolbar_1.Add(new Xplore.Button({
                icon: "magnify-plus-outline",
                onclick: function () {
                    self_1.ZoomIn();
                }
            }));
            toolbar_1.Add(new Xplore.Button({
                icon: "magnify-minus-outline",
                onclick: function () {
                    self_1.ZoomOut();
                }
            }));
            toolbar_1.Add(new Xplore.Button({
                icon: "magnify-scan",
                onclick: function () {
                    self_1.ZoomWindow();
                }
            }));
            toolbar_1.Add(new Xplore.Button({
                icon: "magnify-close",
                onclick: function () {
                    self_1.ZoomAll();
                }
            }));
            toolbar_1.Add(new Xplore.Button({
                icon: "cog-outline",
                onclick: function () {
                    self_1.ShowSettings();
                }
            }));
            toolbar_1.Show(this.object);
        }
    };
    //Rendering
    XCanvas2D.prototype.Render = function () {
        //Clear
        this.PrimitiveRectangle(0, 0, this.width, this.height, this.settings.background);
        if (this.settings.showgrid)
            this.DrawGrid();
        this.model.Render(this);
        if (this.settings.showruler)
            this.DrawRuler();
        // if (this.settings.showusergrid)
        //     this.DrawUserGrid();
    };
    XCanvas2D.prototype.DrawGrid = function () {
        var root = Math.pow(10, Math.round(Math.log(this.gridsize) / Math.LN10)) / 100;
        var majorintervalx = this.ComputeInterval(this.gridvalue.x) / root;
        var majorintervaly = this.ComputeInterval(this.gridvalue.y) / root;
        // let intervalsizex: number = this.ToCoordWidth(majorintervalx);
        // let intervalsizey: number = this.ToCoordWidth(majorintervaly);
        // if (intervalsizex >= 500)
        //     majorintervalx /= 5;
        // else if (intervalsizex >= 250)
        //     majorintervalx /= 2;
        // else if (intervalsizex <= 10)
        //     majorintervalx *= 10;
        // else if (intervalsizex <= 1)
        //     majorintervalx *= 2;
        // if (intervalsizey >= 500)
        //     majorintervaly /= 5;
        // else if (intervalsizey >= 250)
        //     majorintervaly /= 2;
        // else if (intervalsizey <= 10)
        //     majorintervaly *= 10;
        // else if (intervalsizey <= 1)
        //     majorintervaly *= 2;
        majorintervalx = this.ToCoordXWidth(majorintervalx);
        majorintervaly = this.ToCoordYWidth(majorintervaly);
        var minorintervalx = majorintervalx / 10;
        var minorintervaly = majorintervaly / 10;
        if (minorintervalx < 10) {
            majorintervalx *= 10;
            minorintervalx *= 10;
        }
        if (minorintervaly <= 5) {
            majorintervaly *= 10;
            minorintervaly *= 10;
        }
        else if (minorintervaly <= 10) {
            majorintervaly *= 5;
            minorintervaly *= 5;
        }
        this.gridintervalx = this.ToPointXWidth(minorintervalx);
        this.gridintervaly = this.ToPointYWidth(minorintervaly);
        this.SetProperties({
            linecolor: this.settings.minor,
            thickness: 1
        });
        var x1 = this.ToCoordX(0);
        var x2 = x1;
        var y1 = this.ToCoordY(0);
        var y2 = y1;
        var axisx = x1;
        var axisy = y1;
        //Minor x
        if (minorintervalx >= 10) {
            while (x1 > 0 || x2 < this.width) {
                this.PrimitiveLine(x1, 0, x1, this.height);
                x1 -= minorintervalx;
                x2 += minorintervalx;
                this.PrimitiveLine(x2, 0, x2, this.height);
            }
            //Minor Y
            while (y1 > 0 || y2 < this.height) {
                this.PrimitiveLine(0, y1, this.width, y1);
                y1 -= minorintervaly;
                y2 += minorintervaly;
                this.PrimitiveLine(0, y2, this.width, y2);
            }
        }
        x1 = axisx;
        x2 = x1;
        y1 = axisy;
        y2 = y1;
        this.SetProperties({
            linecolor: this.settings.major
        });
        //Major x
        while (x1 > 0 || x2 < this.width) {
            this.PrimitiveLine(x1, 0, x1, this.height);
            x1 -= majorintervalx;
            x2 += majorintervalx;
            this.PrimitiveLine(x2, 0, x2, this.height);
        }
        //Major Y
        while (y1 > 0 || y2 < this.height) {
            this.PrimitiveLine(0, y1, this.width, y1);
            y1 -= majorintervaly;
            y2 += majorintervaly;
            this.PrimitiveLine(0, y2, this.width, y2);
        }
        //Axis
        x1 = axisx;
        x2 = x1;
        y1 = axisy;
        y2 = y1;
        this.SetProperties({
            linecolor: this.settings.axis,
            thickness: 1
        });
        this.PrimitiveLine(x1, 0, x1, this.height);
        this.PrimitiveLine(0, y1, this.width, y1);
    };
    ;
    XCanvas2D.prototype.DrawUserGrid = function () {
        var counter = 0;
        var coord = 7;
        this.SetTextProperties({
            horizontalalignment: "center",
            verticalalignment: "middle"
        });
        if (this.gridx.length > 1) {
            var x1 = void 0;
            var x2 = void 0;
            var xm = void 0;
            for (var i = 0; i < this.gridx.length - 1; i++) {
                x1 = this.ToCoordX(this.gridx[i]);
                x2 = this.ToCoordX(this.gridx[i + 1]);
                xm = (x1 + x2) / 2;
                this.SetFillColor("#FFF");
                this.PrimitiveText((this.gridx[i + 1] - this.gridx[i]).toFixed(3), xm, this.rulersize - coord);
            }
        }
        if (this.gridy.length > 1) {
            var y1 = void 0;
            var y2 = void 0;
            var ym = void 0;
            for (var i = 0; i < this.gridy.length - 1; i++) {
                y1 = this.ToCoordY(this.gridy[i]);
                y2 = this.ToCoordY(this.gridy[i + 1]);
                ym = (y1 + y2) / 2;
                this.SetFillColor("#FFF");
                this.PrimitiveText((this.gridy[i + 1] - this.gridy[i]).toFixed(3), this.rulersize - coord, ym, -Math.PI / 2);
            }
        }
        this.SetProperties({
            linecolor: this.settings.usergrid,
            thickness: 0.5,
            fillcolor: "#FF0"
        });
        for (var _i = 0, _a = this.gridx; _i < _a.length; _i++) {
            var x = _a[_i];
            x = this.ToCoordX(x);
            this.PrimitiveLine(x, 0, x, this.height, [2, 2]);
            this.PrimitiveText(String.fromCharCode(65 + counter), x, this.rulersize - coord);
            counter++;
        }
        counter = 1;
        for (var _b = 0, _c = this.gridy; _b < _c.length; _b++) {
            var y = _c[_b];
            y = this.ToCoordY(y);
            this.PrimitiveLine(0, y, this.width, y, [2, 2]);
            this.PrimitiveText(counter.toString(), this.rulersize - coord, y);
            counter++;
        }
    };
    ;
    XCanvas2D.prototype.DrawRuler = function () {
        if (this.settings.rulerposition === 0)
            this.DrawRulerOuter();
        else
            this.DrawRulerInner();
    };
    ;
    XCanvas2D.prototype.DrawRulerOuter = function () {
        var font = "normal 10px sans-serif";
        var fontcolor = this.settings.rulertext;
        var x1 = 0;
        var y1 = 0;
        var angle = Math.PI * 270 / 180;
        var root = Math.pow(10, Math.round(Math.log(this.gridsize) / Math.LN10)) / 100;
        var intervalx = this.gridvalue.x / root;
        var intervaly = this.gridvalue.y / root;
        var intervalsize = this.ToCoordXWidth(intervalx);
        if (intervalsize <= 50) {
            intervalx *= 5;
            intervaly *= 5;
        }
        else if (intervalsize <= 75) {
            intervalx *= 2;
            intervaly *= 2;
        }
        var x2 = x1 + intervalx;
        var y2 = y1 + intervaly;
        var round = 0;
        if (intervalx <= 10)
            round = 2;
        var x = this.rulersize;
        var y = this.rulersize;
        var cy = this.height - y;
        //Major x
        var px1 = this.ToCoordX(x1);
        var px2 = this.ToCoordX(x2);
        var labelpos = 10;
        this.PrimitiveRectangle(0, 0, this.rulersize, this.height, this.settings.ruler, this.settings.ruler);
        this.PrimitiveRectangle(0, 0, this.width, this.rulersize, this.settings.ruler, this.settings.ruler);
        this.SetTextProperties({
            horizontalalignment: "center",
            verticalalignment: "top",
            font: font,
            color: fontcolor
        });
        while (px1 >= 0 || px2 < this.width) {
            if (this.gridvalue.x >= 1 && this.gridvalue.x <= 100) {
                if (px1 >= x && px1 < this.width) {
                    if (Math.abs(x1) >= 10000)
                        this.PrimitiveText(x1.toExponential(1), px1, labelpos);
                    else
                        this.PrimitiveText(x1.toFixed(round), px1, labelpos);
                    this.PrimitiveLine_2(px1, this.rulersize - 5, px1, this.rulersize, this.settings.rulerline, 2);
                }
                if (px2 < this.width && px2 >= x) {
                    if (Math.abs(x2) >= 10000)
                        this.PrimitiveText(x2.toExponential(1), px2, labelpos);
                    else
                        this.PrimitiveText(x2.toFixed(round), px2, labelpos);
                    this.PrimitiveLine_2(px2, this.rulersize - 5, px2, this.rulersize, this.settings.rulerline, 2);
                }
            }
            else {
                if (px1 >= x && px1 < this.width) {
                    if (Math.abs(x1) >= 10000 || this.gridvalue.x <= 0.01)
                        this.PrimitiveText(x1.toExponential(1), px1, labelpos);
                    else
                        this.PrimitiveText(x1.toFixed(round), px1, labelpos);
                    this.PrimitiveLine_2(px1, this.rulersize - 5, px1, this.rulersize, this.settings.rulerline, 2);
                }
                if (px2 < this.width && px2 >= x) {
                    if (Math.abs(x2) >= 10000 || this.gridvalue.x <= 0.01)
                        this.PrimitiveText(x2.toExponential(1), px2, labelpos);
                    else
                        this.PrimitiveText(x2.toFixed(round), px2, labelpos);
                    this.PrimitiveLine_2(px2, this.rulersize - 5, px2, this.rulersize, this.settings.rulerline, 2);
                }
            }
            x1 -= intervalx;
            x2 += intervalx;
            px1 = this.ToCoordX(x1);
            px2 = this.ToCoordX(x2);
        }
        //Major Y
        var py1 = this.ToCoordY(y1);
        var py2 = this.ToCoordY(y2);
        this.SetTextProperties({
            horizontalalignment: "center",
            verticalalignment: "bottom",
            font: font,
            color: fontcolor
        });
        while (py2 > y || py1 <= this.height) {
            if (this.gridvalue.y >= 1 && this.gridvalue.y <= 100) {
                if (py1 > y && py1 <= this.height) {
                    if (Math.abs(y1) >= 10000)
                        this.PrimitiveText(y1.toExponential(1), x - labelpos, py1, angle);
                    else
                        this.PrimitiveText(y1.toFixed(round), x - labelpos, py1, angle);
                    this.PrimitiveLine_2(x - 5, py1, x, py1, this.settings.rulerline, 2);
                }
                if (py2 <= this.height && py2 > y) {
                    if (Math.abs(y2) >= 10000)
                        this.PrimitiveText(y2.toExponential(1), x - labelpos, py2, angle);
                    else
                        this.PrimitiveText(y2.toFixed(round), x - labelpos, py2, angle);
                    this.PrimitiveLine_2(x - 5, py2, x, py2, this.settings.rulerline, 2);
                }
            }
            else {
                if (py1 > y && py1 <= this.height) {
                    if (Math.abs(y1) >= 10000 || this.gridvalue.x <= 0.01)
                        this.PrimitiveText(y1.toExponential(1), x - labelpos, py1, angle);
                    else
                        this.PrimitiveText(y1.toFixed(round), x - labelpos, py1, angle);
                    this.PrimitiveLine_2(x - 5, py1, x, py1, this.settings.rulerline, 2);
                }
                if (py2 <= this.height && py2 > y) {
                    if (Math.abs(y1) >= 10000 || this.gridvalue.x <= 0.01)
                        this.PrimitiveText(y2.toExponential(1), x - labelpos, py2, angle);
                    else
                        this.PrimitiveText(y2.toFixed(round), x - labelpos, py2, angle);
                    this.PrimitiveLine_2(x - 5, py2, x, py2, this.settings.rulerline, 2);
                }
            }
            y1 -= intervaly;
            y2 += intervaly;
            py1 = this.ToCoordY(y1);
            py2 = this.ToCoordY(y2);
        }
        this.PrimitiveLine_2(x, y, x, this.height, this.settings.rulerline, 2);
        this.PrimitiveLine_2(x, y, this.width, y, this.settings.rulerline, 2);
    };
    ;
    XCanvas2D.prototype.DrawRulerInner = function () {
        var font = "normal 10px sans-serif";
        var fontlabel = "bold 12px sans-serif";
        var fontcolor = this.settings.rulertext;
        var x1 = 0;
        var y1 = 0;
        var root = Math.pow(10, Math.round(Math.log(this.gridsize) / Math.LN10)) / 100;
        var majorintervalx = this.ComputeInterval(this.gridvalue.x) / root;
        var majorintervaly = this.ComputeInterval(this.gridvalue.y) / root;
        var intervalsizex = this.ToCoordXWidth(majorintervalx);
        var intervalsizey = this.ToCoordYWidth(majorintervaly);
        if (intervalsizex >= 500)
            majorintervalx /= 5;
        else if (intervalsizex >= 175)
            majorintervalx /= 4;
        else if (intervalsizex >= 100)
            majorintervalx /= 2;
        else if (intervalsizex <= 1)
            majorintervalx *= 2;
        if (intervalsizey >= 500)
            majorintervaly /= 5;
        else if (intervalsizey >= 150)
            majorintervaly /= 4;
        else if (intervalsizey >= 75)
            majorintervaly /= 2;
        else if (intervalsizey <= 1)
            majorintervaly *= 2;
        var x2 = x1;
        var y2 = y1;
        var round = 0;
        if (majorintervalx <= 10)
            round = 2;
        var x = this.rulersize;
        var y = this.rulersize;
        var cy = this.height - y;
        //X
        var px1 = this.ToCoordX(0);
        var px2 = this.ToCoordX(0);
        var labelpos = this.ToCoordY(0) + 10;
        var align = "top";
        if (labelpos < 10) {
            labelpos = 10;
            this.PrimitiveRectangle(0, 0, this.width, y, this.settings.ruler, this.settings.ruler);
            this.PrimitiveLine_2(0, y, this.width, y, this.settings.rulerline, 2);
        }
        if (labelpos > this.height - 10) {
            labelpos = this.height - 10;
            align = "bottom";
            y = this.height - this.rulersize;
            this.PrimitiveRectangle(0, y, this.width, this.height, this.settings.ruler, this.settings.ruler);
            this.PrimitiveLine_2(0, y, this.width, y, this.settings.rulerline, 2);
        }
        if (this.settings.showlabel)
            this.PrimitiveText_2(this.settings.labelx, 10, labelpos - 20, fontlabel, "#000", 0, "left", "bottom");
        x = 0;
        y = 0;
        while (px1 >= 0 || px2 < this.width) {
            if (this.gridvalue.x >= 1 && this.gridvalue.x <= 100) {
                if (px1 >= x && px1 < this.width) {
                    if (x1 !== 0) {
                        if (Math.abs(x1) >= 100000)
                            this.PrimitiveText_2(x1.toExponential(1), px1, labelpos, font, fontcolor, 0, "center", align);
                        else
                            this.PrimitiveText_2(x1.toFixed(round), px1, labelpos, font, fontcolor, 0, "center", align);
                    }
                    else
                        this.PrimitiveText_2(x1.toFixed(round), px1 + 5, labelpos, font, fontcolor, 0, "left", align);
                    this.PrimitiveLine_2(px1, labelpos - 10, px1, labelpos - 5, this.settings.axis, 2);
                }
                if (px2 < this.width && px2 >= x) {
                    if (x2 !== 0) {
                        if (Math.abs(x2) >= 100000)
                            this.PrimitiveText_2(x2.toExponential(1), px2, labelpos, font, fontcolor, 0, "center", align);
                        else
                            this.PrimitiveText_2(x2.toFixed(round), px2, labelpos, font, fontcolor, 0, "center", align);
                    }
                    this.PrimitiveLine_2(px2, labelpos - 10, px2, labelpos - 5, this.settings.axis, 2);
                }
            }
            else {
                if (px1 >= x && px1 < this.width) {
                    if (x1 !== 0) {
                        if (Math.abs(x1) >= 100000 || this.gridvalue.x <= 0.01)
                            this.PrimitiveText_2(x1.toExponential(1), px1, labelpos, font, fontcolor, 0, "center", align);
                        else
                            this.PrimitiveText_2(x1.toFixed(round), px1, labelpos, font, fontcolor, 0, "center", align);
                    }
                    else
                        this.PrimitiveText_2(x1.toFixed(round), px1 + 5, labelpos, font, fontcolor, 0, "left", align);
                    this.PrimitiveLine_2(px1, labelpos - 10, px1, labelpos - 5, this.settings.axis, 2);
                }
                if (px2 < this.width && px2 >= x) {
                    if (x2 !== 0) {
                        if (Math.abs(x2) >= 100000 || this.gridvalue.x <= 0.01)
                            this.PrimitiveText_2(x2.toExponential(1), px2, labelpos, font, fontcolor, 0, "center", align);
                        else
                            this.PrimitiveText_2(x2.toFixed(round), px2, labelpos, font, fontcolor, 0, "center", align);
                    }
                    this.PrimitiveLine_2(px2, labelpos - 10, px2, labelpos - 5, this.settings.axis, 2);
                }
            }
            x1 -= majorintervalx;
            x2 += majorintervalx;
            px1 = this.ToCoordX(x1);
            px2 = this.ToCoordX(x2);
        }
        //Y
        var py1 = this.ToCoordY(y1);
        var py2 = this.ToCoordY(y2);
        var halign = "left";
        var angle = 0;
        x = this.ToCoordX(0) + 10;
        if (x < 10) {
            halign = "center";
            x = 10;
            angle = Math.PI * 1.5;
            this.PrimitiveRectangle(0, 0, this.rulersize, this.height, this.settings.ruler, this.settings.ruler);
            this.PrimitiveLine_2(this.rulersize, y, this.rulersize, this.height, this.settings.rulerline, 2);
        }
        if (x > this.width - 10) {
            x = this.width - 10;
            halign = "center";
            angle = Math.PI / 2;
            y = this.width - this.rulersize;
            this.PrimitiveRectangle(y, 0, this.width, this.height, this.settings.ruler, this.settings.ruler);
            this.PrimitiveLine_2(y, 0, y, this.height, this.settings.rulerline, 2);
        }
        if (this.settings.showlabel)
            this.PrimitiveText_2(this.settings.labely, x, 10, fontlabel, "#000", 0, "left", "top");
        y = 0;
        while (py2 > y || py1 <= this.height) {
            if (this.gridvalue.y >= 1 && this.gridvalue.y <= 100) {
                if (py1 > y && py1 <= this.height) {
                    if (y1 !== 0) {
                        if (Math.abs(y1) >= 10000)
                            this.PrimitiveText_2(y1.toExponential(1), x, py1, font, fontcolor, angle, halign, "middle");
                        else
                            this.PrimitiveText_2(y1.toFixed(round), x, py1, font, fontcolor, angle, halign, "middle");
                    }
                    this.PrimitiveLine_2(x - 10, py1, x - 5, py1, this.settings.axis, 2);
                }
                if (py2 <= this.height && py2 > y) {
                    if (y2 !== 0) {
                        if (Math.abs(y2) >= 100000)
                            this.PrimitiveText_2(y2.toExponential(1), x, py2, font, fontcolor, angle, halign, "middle");
                        else
                            this.PrimitiveText_2(y2.toFixed(round), x, py2, font, fontcolor, angle, halign, "middle");
                    }
                    this.PrimitiveLine_2(x - 10, py2, x - 5, py2, this.settings.axis, 2);
                }
            }
            else {
                if (py1 > y && py1 <= this.height) {
                    if (y1 !== 0) {
                        if (Math.abs(y1) >= 100000 || this.gridvalue.x <= 0.01)
                            this.PrimitiveText_2(y1.toExponential(1), x, py1, font, fontcolor, angle, halign, "middle");
                        else
                            this.PrimitiveText_2(y1.toFixed(round), x, py1, font, fontcolor, angle, halign, "middle");
                    }
                    this.PrimitiveLine_2(x - 10, py1, x - 5, py1, this.settings.axis, 2);
                }
                if (py2 <= this.height && py2 > y) {
                    if (y2 !== 0) {
                        if (Math.abs(y1) >= 100000 || this.gridvalue.x <= 0.01)
                            this.PrimitiveText_2(y2.toExponential(1), x, py2, font, fontcolor, angle, halign, "bottom");
                        else
                            this.PrimitiveText_2(y2.toFixed(round), x, py2, font, fontcolor, angle, halign, "bottom");
                    }
                    this.PrimitiveLine_2(x - 10, py2, x - 5, py2, this.settings.axis, 2);
                }
            }
            y1 -= majorintervaly;
            y2 += majorintervaly;
            py1 = this.ToCoordY(y1);
            py2 = this.ToCoordY(y2);
        }
    };
    ;
    //Properties
    XCanvas2D.prototype.SetProperties = function (properties) {
        if (properties.linecolor)
            this.context.strokeStyle = properties.linecolor;
        if (properties.thickness) {
            if (properties.scale)
                this.context.lineWidth = properties.thickness * this.gridsize / (this.defaultgridsize * this.gridvalue.x);
            else
                this.context.lineWidth = properties.thickness;
            if (this.context.lineWidth < 1)
                this.context.lineWidth = 1;
        }
        if (properties.fillcolor)
            this.context.fillStyle = properties.fillcolor;
    };
    ;
    XCanvas2D.prototype.SetTextProperties = function (properties) {
        if (properties.horizontalalignment)
            this.context.textAlign = properties.horizontalalignment;
        else
            this.context.textAlign = 'center';
        if (properties.verticalalignment)
            this.context.textBaseline = properties.verticalalignment;
        else
            this.context.textBaseline = "bottom";
        if (properties.color)
            this.context.fillStyle = properties.color;
        if (properties.font)
            this.context.font = properties.font;
    };
    ;
    XCanvas2D.prototype.SetFillColor = function (color) {
        this.context.fillStyle = color;
    };
    ;
    //Primitives
    XCanvas2D.prototype.PrimitiveLine = function (x1, y1, x2, y2, dashline) {
        this.context.beginPath();
        if (dashline) {
            this.context.save();
            if (dashline) {
                var linedash = [];
                for (var i = 0; i < dashline.length; i++)
                    linedash.push(dashline[i] * 2);
                this.context.setLineDash(linedash);
            }
        }
        this.context.moveTo(x1 - 0.5, y1 - 0.5);
        this.context.lineTo(x2 - 0.5, y2 - 0.5);
        this.context.stroke();
        if (dashline)
            this.context.restore();
    };
    ;
    XCanvas2D.prototype.PrimitiveLine_2 = function (x1, y1, x2, y2, color, linewidth, dashline) {
        this.context.beginPath();
        if (dashline) {
            this.context.save();
            if (dashline) {
                var linedash = [];
                for (var i = 0; i < dashline.length; i++)
                    linedash.push(dashline[i] * 2);
                this.context.setLineDash(linedash);
            }
        }
        this.context.moveTo(x1 - 0.5, y1 - 0.5);
        this.context.lineTo(x2 - 0.5, y2 - 0.5);
        this.context.strokeStyle = color;
        if (isNaN(linewidth))
            this.context.lineWidth = 1;
        else
            this.context.lineWidth = linewidth;
        this.context.stroke();
        if (dashline)
            this.context.restore();
    };
    ;
    XCanvas2D.prototype.PrimitiveRectangle = function (x, y, w, h, fillcolor, linecolor, linewidth) {
        if (linewidth === void 0) { linewidth = 1; }
        if (fillcolor) {
            this.context.fillStyle = fillcolor;
            this.context.fillRect(x, y, w, h);
        }
        if (linecolor) {
            this.context.strokeStyle = linecolor;
            this.context.lineWidth = linewidth;
            this.context.strokeRect(x, y, w, h);
        }
    };
    ;
    XCanvas2D.prototype.PrimitiveText = function (text, x, y, a) {
        if (a === void 0) { a = 0; }
        if (a === 0) {
            this.context.fillText(text, x, y);
        }
        else {
            this.context.save();
            this.context.translate(x, y);
            this.context.rotate(a);
            this.context.fillText(text, 0, 0);
            this.context.restore();
        }
    };
    ;
    XCanvas2D.prototype.PrimitiveText_2 = function (text, x, y, font, color, a, ha, va) {
        if (a === null) {
            if (ha !== undefined)
                this.context.textAlign = ha;
            if (va !== undefined)
                this.context.textBaseline = va;
            this.context.fillStyle = color;
            this.context.font = font;
            this.context.fillText(text, x, y);
        }
        else {
            this.context.save();
            if (ha !== undefined)
                this.context.textAlign = ha;
            else
                this.context.textAlign = 'center';
            if (va !== undefined)
                this.context.textBaseline = va;
            else
                this.context.textBaseline = "bottom";
            this.context.fillStyle = color;
            this.context.font = font;
            this.context.translate(x, y);
            this.context.rotate(a);
            this.context.fillText(text, 0, 0);
            this.context.restore();
        }
    };
    ;
    XCanvas2D.prototype.DrawLine = function (x1, y1, x2, y2) {
        x1 = this.ToCoordX(x1);
        y1 = this.ToCoordY(y1);
        x2 = this.ToCoordX(x2);
        y2 = this.ToCoordY(y2);
        this.context.beginPath();
        this.context.moveTo(x1 - 0.5, y1 - 0.5);
        this.context.lineTo(x2 - 0.5, y2 - 0.5);
        this.context.stroke();
    };
    XCanvas2D.prototype.DrawLine_2 = function (x1, y1, x2, y2, properties) {
        x1 = this.ToCoordX(x1);
        y1 = this.ToCoordY(y1);
        x2 = this.ToCoordX(x2);
        y2 = this.ToCoordY(y2);
        this.context.beginPath();
        this.context.moveTo(x1 - 0.5, y1 - 0.5);
        this.context.lineTo(x2 - 0.5, y2 - 0.5);
        this.context.strokeStyle = properties.linecolor;
        if (isNaN(properties.thickness))
            this.context.lineWidth = 1;
        else
            this.context.lineWidth = properties.thickness;
        this.context.stroke();
    };
    XCanvas2D.prototype.DrawRectangle = function (x, y, w, h, showfill, showline) {
        var ratio = this.gridsize / this.gridvalue.x;
        w = ratio * w;
        h = ratio * h;
        x = this.ToCoordX(x) - w / 2;
        y = this.ToCoordY(y) - h / 2;
        var context = this.context;
        if (showfill || showfill === undefined)
            context.fillRect(x, y, w, h);
        if (showline || showline === undefined)
            context.strokeRect(x, y, w, h);
    };
    ;
    XCanvas2D.prototype.DrawPolygon_2 = function (points, properties) {
        if (points.length !== 0) {
            var context = this.context;
            this.SetProperties(properties);
            context.beginPath();
            //First point
            var x = this.ToCoordX(points[0].x);
            var y = this.ToCoordY(points[0].y);
            context.moveTo(x, y);
            //Second to the last point
            for (var i = 1; i < points.length; i++) {
                x = this.ToCoordX(points[i].x);
                y = this.ToCoordY(points[i].y);
                context.lineTo(x, y);
            }
            context.closePath();
            if (properties.showfill)
                context.fill();
            if (properties.showline)
                context.stroke();
        }
    };
    XCanvas2D.prototype.DrawCircle = function (x, y, r, properties, fixedsize) {
        if (fixedsize === void 0) { fixedsize = false; }
        if (!fixedsize)
            r = this.gridsize * r / this.gridvalue.x;
        x = this.ToCoordX(x);
        y = this.ToCoordY(y);
        var context = this.context;
        this.SetProperties(properties);
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2, false);
        context.closePath();
        if (properties.showfill)
            context.fill();
        if (properties.showline)
            context.stroke();
    };
    ;
    XCanvas2D.prototype.SelectRectangle = function (x, y, w, h, linecolor) {
        this.context.save();
        this.context.strokeStyle = linecolor;
        this.context.lineWidth = 1;
        this.context.setLineDash([4, 2]);
        this.context.lineDashOffset = 2;
        this.context.strokeRect(x, y, w, h);
        this.context.restore();
    };
    ;
    //Conversion
    XCanvas2D.prototype.ToCoordX = function (pointx) {
        return Math.round(this.center.x + (pointx / this.gridvalue.x - this.middle.x) * this.gridsize);
    };
    ;
    XCanvas2D.prototype.ToCoordY = function (pointy) {
        return Math.round(this.center.y - (pointy / this.gridvalue.y - this.middle.y) * this.gridsize);
    };
    ;
    XCanvas2D.prototype.ToPointX = function (coordx) {
        return (this.middle.x - (this.center.x - coordx) / this.gridsize) * this.gridvalue.x;
    };
    ;
    XCanvas2D.prototype.ToPointY = function (coordy) {
        return (this.middle.y + (this.center.y - coordy) / this.gridsize) * this.gridvalue.y;
    };
    ;
    XCanvas2D.prototype.ToPointXWidth = function (pointwidth) {
        return (pointwidth / this.gridsize) * this.gridvalue.x;
    };
    ;
    XCanvas2D.prototype.ToCoordXWidth = function (coordwidth) {
        return (coordwidth * this.gridsize) / this.gridvalue.x;
    };
    ;
    XCanvas2D.prototype.ToPointYWidth = function (pointwidth) {
        return (pointwidth / this.gridsize) * this.gridvalue.y;
    };
    ;
    XCanvas2D.prototype.ToCoordYWidth = function (coordwidth) {
        return (coordwidth * this.gridsize) / this.gridvalue.y;
    };
    ;
    //Zoom
    XCanvas2D.prototype.ZoomAll = function () {
        if (this.settings.ischart)
            this.ZoomChart();
        else
            this.ZoomNormal();
    };
    XCanvas2D.prototype.ZoomNormal = function () {
        var bounds;
        var factor = 1.25;
        //Compute bounds
        bounds = this.model.Bounds();
        this.Resize();
        if (bounds.x1 > 1000000000 && this.gridx.length > 1 && this.gridy.length > 1) {
            bounds.x1 = this.gridx[0];
            bounds.x2 = this.gridx[this.gridx.length - 1];
            bounds.y1 = this.gridy[0];
            bounds.y2 = this.gridy[this.gridy.length - 1];
        }
        //Check if width and height is already available
        if (this.width && this.height && bounds.x1 < 1000000000) {
            var x1 = bounds.x1;
            var y1 = bounds.y1;
            var x2 = bounds.x2;
            var y2 = bounds.y2;
            var mid = new XPoint2D((x1 + x2) / 2, (y1 + y2) / 2);
            var difference = new XPoint2D(Math.abs(x1 - x2) / this.gridvalue.x, Math.abs(y1 - y2) / this.gridvalue.y);
            if ((difference.x / difference.y >= this.width / this.height)) {
                if (difference.x === 0)
                    return;
                this.gridsize = this.width / (factor * difference.x);
            }
            else {
                if (difference.y === 0)
                    return;
                this.gridsize = this.height / (factor * difference.y);
            }
            if (this.gridsize > 1000) {
                this.gridsize /= 10;
                this.gridvalue.x /= 10;
                this.gridvalue.y /= 10;
            }
            else if (this.gridsize >= 10) {
            }
            else if (this.gridsize >= 1) {
                this.gridsize *= 5;
                this.gridvalue.x *= 5;
                this.gridvalue.y *= 5;
            }
            else {
                this.gridsize *= 10;
                this.gridvalue.x *= 10;
                this.gridvalue.y *= 10;
            }
            this.middle.x = mid.x / this.gridvalue.x;
            this.middle.y = mid.y / this.gridvalue.y;
            this.Render();
        }
        else {
            this.gridvalue = new XPoint2D(5, 5);
            this.gridsize = 20;
            this.Render();
        }
        this.StoreBuffer();
    };
    XCanvas2D.prototype.ZoomChart = function () {
        //Compute bounds
        var bounds = this.model.Bounds();
        var uniformscale = false;
        this.Resize();
        //Check if width and height is already available
        if (bounds && this.width && this.height && bounds.x1 < 1000000000) {
            bounds.Update(0, 0);
            var x1 = bounds.x1;
            var y1 = bounds.y1;
            var x2 = bounds.x2;
            var y2 = bounds.y2;
            var factor = 1.3;
            var mid = new XPoint2D((x1 + x2) / 2, (y1 + y2) / 2);
            if (uniformscale) {
                var max = Math.max((x2 - x1) * this.gridsize / this.width * factor, (y2 - y1) * this.gridsize / this.height * factor);
                this.gridvalue.x = max;
                this.gridvalue.y = max;
            }
            else {
                this.gridvalue.x = (x2 - x1) * this.gridsize / this.width * factor;
                this.gridvalue.y = (y2 - y1) * this.gridsize / this.height * factor;
            }
            if (this.gridvalue.x === 0)
                this.gridvalue.x = 1;
            if (this.gridvalue.y === 0)
                this.gridvalue.y = 1;
            if (this.settings.showruler) {
                this.middle.x = mid.x / this.gridvalue.x;
                this.middle.y = mid.y / this.gridvalue.y;
            }
            else {
                this.middle.x = mid.x / this.gridvalue.x;
                this.middle.y = mid.y / this.gridvalue.y;
            }
            this.Render();
        }
    };
    ;
    XCanvas2D.prototype.Zoom = function (x, y, d) {
        var prev = new XPoint2D(this.ToPointX(x), this.ToPointY(y));
        this.ZoomRealtime(d);
        var curr = new XPoint2D(this.ToPointX(x), this.ToPointY(y));
        this.MoveByPoint(curr, prev);
        this.Render();
    };
    XCanvas2D.prototype.ZoomIn = function () {
        this.gridsize *= 1.15;
        if (this.gridvalue.x <= 1 && this.gridsize > 200)
            this.gridsize = 200;
        this.Render();
        this.StoreBuffer();
    };
    XCanvas2D.prototype.ZoomOut = function () {
        this.gridsize /= 1.15;
        if (this.gridvalue.x <= 1 && this.gridsize > 200)
            this.gridsize = 200;
        this.Render();
        this.StoreBuffer();
    };
    XCanvas2D.prototype.ZoomRealtime = function (d) {
        var mult = this.gridsize * d;
        var size = this.gridsize + (mult / 100);
        if (size > 1000) {
            this.gridsize = Math.round(size) / 10;
            this.gridvalue.x /= 10;
            this.gridvalue.y /= 10;
        }
        else if (size >= 10)
            this.gridsize = Math.round(size);
        else {
            this.gridsize = size * 10;
            this.gridvalue.x *= 10;
            this.gridvalue.y *= 10;
        }
    };
    XCanvas2D.prototype.ZoomWindow = function () {
    };
    XCanvas2D.prototype.MoveByPoint = function (current, previous) {
        if (!(current.x === previous.x && current.y === previous.y)) {
            this.middle.x -= (current.x - previous.x) / this.gridvalue.x;
            this.middle.y -= (current.y - previous.y) / this.gridvalue.y;
        }
    };
    XCanvas2D.prototype.Pan = function (x, y) {
        this.middle.x -= x / this.gridsize;
        this.middle.y -= y / this.gridsize;
    };
    //Events
    XCanvas2D.prototype.Events = function () {
        var self = this;
        var button = 0;
        var ontouch = 0;
        var onenter = false;
        var onfocus = true;
        var start = 0;
        var onmousedown = false;
        document.body.onkeydown = function (event) {
            var active = document.activeElement;
            if (active.localName === "canvas") {
                if (self.drawgrid && event.key === "Escape") {
                    self.RestoreBuffer();
                    self.drawgrid = -1;
                }
                else {
                    if (!event.ctrlKey && event.key === "x")
                        self.lock = "X";
                    else if (!event.ctrlKey && event.key === "y")
                        self.lock = "Y";
                    else if (!event.ctrlKey && event.key === "a")
                        self.lock = "A";
                    else if (!event.ctrlKey && event.key === "u")
                        self.lock = "";
                    self.shiftkey = event.shiftKey;
                    self.ctrlkey = event.ctrlKey;
                    self.model.KeyDown(self, event);
                }
            }
        };
        document.body.onkeyup = function (event) {
            var active = document.activeElement;
            if (active.localName === "canvas") {
                self.shiftkey = event.shiftKey;
                self.ctrlkey = event.ctrlKey;
                self.model.KeyUp(self, event);
            }
        };
        this.canvas.addEventListener("mouseleave", function (event) {
            onfocus = false;
        });
        this.canvas.addEventListener("mouseenter", function (event) {
            event.preventDefault();
            onenter = true;
        });
        this.canvas.addEventListener("mouseleave", function (event) {
            event.preventDefault();
            onenter = false;
            onfocus = true;
        });
        this.canvas.addEventListener("dblclick", function (event) {
            event.preventDefault();
            button = event.button;
            var x = event.pageX;
            var y = event.pageY;
            self.DoubleClick(x, y, button);
            onmousedown = false;
        });
        this.canvas.addEventListener("mousedown", function (event) {
            event.preventDefault();
            onmousedown = true;
            button = event.buttons;
            var x = event.pageX - self.left;
            var y = event.pageY - self.top;
            self.MouseDown(x, y, button, event.pageX, event.pageY);
            onfocus = true;
        });
        this.canvas.addEventListener("mousemove", function (event) {
            if (onfocus) {
                event.preventDefault();
                button = event.buttons;
                var x = event.pageX - self.left;
                var y = event.pageY - self.top;
                self.MouseMove(x, y, button);
            }
        });
        this.canvas.addEventListener("mouseup", function (event) {
            event.preventDefault();
            onmousedown = false;
            var movebutton = button;
            button = 0;
            var x = event.pageX - self.left;
            var y = event.pageY - self.top;
            self.MouseUp(x, y, movebutton);
        });
        this.canvas.addEventListener('wheel', function (event) {
            event.preventDefault();
            if (onenter) {
                var delta = event.detail ? -event.detail / 4 : event.deltaY / 240;
                if (event.deltaY)
                    delta = event.deltaY / 240;
                var x = event.pageX - self.left;
                var y = event.pageY - self.top;
                self.MouseWheel(x, y, -delta);
            }
        });
    };
    XCanvas2D.prototype.DoubleClick = function (x, y, button) {
        //On ruler
        if (this.settings.rulerposition === 0) {
            if (x < this.rulersize + 20) {
                if (this.gridy.length > 1) {
                    var y1 = void 0, y2 = void 0, ym = void 0;
                    for (var i = 0; i < this.gridy.length - 1; i++) {
                        y1 = this.ToCoordY(this.gridy[i]);
                        y2 = this.ToCoordY(this.gridy[i + 1]);
                        ym = (y1 + y2) / 2;
                        if (y > ym - 20 && x < ym + 20) {
                            this.EditUserGrid("Y");
                            break;
                        }
                    }
                }
            }
            else if (y < this.rulersize + 20) {
                if (this.gridx.length > 1) {
                    var x1 = void 0, x2 = void 0, xm = void 0;
                    for (var i = 0; i < this.gridx.length - 1; i++) {
                        x1 = this.ToCoordX(this.gridx[i]);
                        x2 = this.ToCoordX(this.gridx[i + 1]);
                        xm = (x1 + x2) / 2;
                        if (x > xm - 20 && x < xm + 20) {
                            this.EditUserGrid("X");
                            break;
                        }
                    }
                }
            }
        }
    };
    XCanvas2D.prototype.MouseDown = function (x, y, button, px, py) {
        this.canvas.focus();
        //On ruler
        if (this.settings.rulerposition === 0) {
            if (x < this.rulersize) {
                this.StoreBuffer();
                this.drawgrid = 1;
            }
            else if (y < this.rulersize) {
                this.StoreBuffer();
                this.drawgrid = 2;
            }
        }
        this.mouse.page = new XPoint2D(px, py);
        this.mouse.down.x = this.ToPointX(x);
        this.mouse.down.y = this.ToPointY(y);
        this.mouse.rawdown.x = x;
        this.mouse.rawdown.y = y;
        this.mouse.previous.x = this.mouse.down.x;
        this.mouse.previous.y = this.mouse.down.y;
        this.mouse.rawprevious.x = x;
        this.mouse.rawprevious.y = y;
        if (!this.drawgrid)
            this.model.MouseDown(this, this.mouse, button);
    };
    XCanvas2D.prototype.MouseMove = function (x, y, button) {
        this.mouse.current.x = this.ToPointX(x);
        this.mouse.current.y = this.ToPointY(y);
        this.mouse.rawcurrent.x = x;
        this.mouse.rawcurrent.y = y;
        if (this.drawgrid === 1) {
            if (this.settings.snapongrid)
                x = this.ToCoordX(this.SnapOnGrid(this.mouse.current).x);
            this.RestoreBuffer();
            this.PrimitiveLine_2(x, 0, x, this.height, "#F80", 0.5, [4, 2]);
        }
        else if (this.drawgrid === 2) {
            this.RestoreBuffer();
            this.PrimitiveLine_2(0, y, this.width, y, "#F80", 0.5, [4, 2]);
        }
        else {
            this.model.MouseMove(this, this.mouse, button);
            this.mouse.previous.x = this.mouse.current.x;
            this.mouse.previous.y = this.mouse.current.y;
            this.mouse.rawprevious.x = x;
            this.mouse.rawprevious.y = y;
        }
    };
    XCanvas2D.prototype.MouseUp = function (x, y, button) {
        this.mouse.current.x = this.ToPointX(x);
        this.mouse.current.y = this.ToPointY(y);
        if (this.drawgrid === 1) {
            this.drawgrid = 0;
            if (x > this.rulersize) {
                this.gridx.push(this.mouse.current.x);
                this.gridx.sort(function (a, b) {
                    if (a > b)
                        return 1;
                    else if (a < b)
                        return -1;
                    else
                        return 0;
                });
                this.Render();
            }
        }
        else if (this.drawgrid === 2) {
            this.drawgrid = 0;
            if (y > this.rulersize) {
                this.gridy.push(this.mouse.current.y);
                this.gridy.sort(function (a, b) {
                    if (a > b)
                        return 1;
                    else if (a < b)
                        return -1;
                    else
                        return 0;
                });
                this.Render();
            }
        }
        else if (this.drawgrid === -1) {
            this.drawgrid = 0;
        }
        else {
            this.model.MouseUp(this, this.mouse, button);
        }
        this.StoreBuffer();
    };
    XCanvas2D.prototype.MouseWheel = function (x, y, delta) {
        if (this.settings.allowzoom) {
            //Set current mouse position
            this.mouse.current.x = x;
            this.mouse.current.y = y;
            this.mouse.delta = delta * 10;
            //Zoom
            this.Zoom(this.mouse.current.x, this.mouse.current.y, this.mouse.delta);
            this.StoreBuffer();
        }
    };
    //Other functionalities
    XCanvas2D.prototype.EditUserGrid = function (axis) {
        //let self = this;
        // let form = new xplore.Form({
        //     text: "Edit Grid",
        //     onok: function () {
        //         if (axis === "X") {
        //             for (let i = 1; i < self.gridx.length; i++) {
        //                 self.gridx[i] = self.gridx[i - 1] + parseFloat(data[i - 1][1]);
        //             }
        //         } else {
        //             for (let i = 1; i < self.gridy.length; i++) {
        //                 self.gridy[i] = self.gridy[i - 1] + parseFloat(data[i - 1][1]);
        //             }
        //         }
        //         self.Render();
        //     }
        // });
        // let columns = ["Name", "Length"];
        // let data = [];
        // if (axis === "X") {
        //     for (let i = 0; i < this.gridx.length - 1; i++) {
        //         data.push([String.fromCharCode(65 + i) + "-" + String.fromCharCode(65 + i + 1), (this.gridx[i + 1] - this.gridx[i]).toFixed(3)]);
        //     }
        // } else {
        //     for (let i = 0; i < this.gridy.length - 1; i++) {
        //         data.push([(i + 1) + "-" + (i + 2), (this.gridy[i + 1] - this.gridy[i]).toFixed(3)]);
        //     }
        // }
        // form.Add(new xplore.Table({
        //     columns: columns,
        //     data: data
        // }));
        // form.Show();
    };
    XCanvas2D.prototype.SnapOnGrid = function (mouse) {
        return new XPoint2D(this.Round(mouse.x, this.gridintervalx), this.Round(mouse.y, this.gridintervaly));
    };
    XCanvas2D.prototype.SnapOnKey = function (mouse) {
        if (this.lock === "X") {
            mouse.current.y = mouse.down.y;
            mouse.rawcurrent.y = mouse.rawdown.y;
            return true;
        }
        else if (this.lock === "Y") {
            mouse.current.x = mouse.down.x;
            mouse.rawcurrent.x = mouse.rawdown.x;
            return true;
        }
        else if (this.lock === "A") {
            if (Math.abs(mouse.down.x - mouse.current.x) > Math.abs(mouse.down.y - mouse.current.y)) {
                mouse.current.y = mouse.down.y;
                mouse.rawcurrent.y = this.ToCoordY(mouse.rawdown.y);
            }
            else {
                mouse.current.x = mouse.down.x;
                mouse.rawcurrent.x = this.ToCoordX(mouse.rawdown.x);
            }
            return true;
        }
    };
    XCanvas2D.prototype.Round = function (num, precision) {
        if (!precision)
            return num;
        return Math.round(num / precision) * precision;
    };
    XCanvas2D.prototype.ShowSettings = function () {
        var self = this;
        var form = new Xplore.Form({
            text: "Edit Preferences",
        });
        form.onok = function () {
            self.Render();
            self.StoreBuffer();
        };
        var grid = form.Add(new Xplore.PropertyGrid({ text: "Settings" }));
        //grid.Bind(new xplore.Canvas2DSettingsModel(this.settings));
        form.Show();
    };
    XCanvas2D.prototype.ComputeInterval = function (number) {
        var root = Math.round(Math.log(number) / Math.LN10);
        var range = Math.round(number / Math.pow(10, root));
        if (range === 0) {
            range = Math.round(number);
            root -= 1;
        }
        var result;
        if (range > 7)
            result = 10;
        else if (range > 5)
            result = 5;
        else if (range > 2)
            result = 5;
        else
            result = 1;
        return result * Math.pow(10, root);
    };
    return XCanvas2D;
}(Xplore));
//# sourceMappingURL=xcanvas2d.js.map