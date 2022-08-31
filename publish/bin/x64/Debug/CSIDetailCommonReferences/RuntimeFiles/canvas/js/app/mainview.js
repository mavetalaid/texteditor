var CSIBRIDGE;
var WEBVIEW;
var BridgeColor = /** @class */ (function () {
    function BridgeColor() {
        this.Alpha = 1;
        this.Red = 1;
        this.Green = 0;
        this.Blue = 0;
    }
    return BridgeColor;
}());
var BridgeChartOptions = /** @class */ (function () {
    function BridgeChartOptions() {
        this.ShowPoint = true;
    }
    return BridgeChartOptions;
}());
var BridgeDesignRequest = /** @class */ (function () {
    function BridgeDesignRequest() {
        this.LineThickness = 2;
        this.FillColor = new BridgeColor();
        this.LineColor = new BridgeColor();
    }
    return BridgeDesignRequest;
}());
var BridgeView = /** @class */ (function () {
    function BridgeView() {
        this.transparency = 1;
        this.animationtimer = null;
    }
    BridgeView.prototype.Show = function () {
        if (window.chrome.webview) {
            WEBVIEW = window.chrome.webview;
            CSIBRIDGE = window.chrome.webview.hostObjects.CSIBRIDGE;
        }
        var self = this;
        this.ShowContainer();
        // Xplore.GetJSON("resources/report.json", function (report: DefReportDocument) {
        //     self.ShowReport(report);
        // });
        // Xplore.GetJSON("resources/mesh.msh", function (model: any) {
        //   let options = {
        //       ShowGrid: true,
        //       ShowAxis: true,
        //       ShowDimension: false,
        //       ShowText: true
        //   };
        //   self.ShowModel(model, true, options);
        // });
        // Xplore.GetJSON("resources/chart.json", function (model: BridgeDesignRequest[]) {
        //    self.ShowCanvas2D();
        //    self.PlotChart(model, new BridgeChartOptions()); 
        // });
        // Xplore.GetJSON("resources/PM.json", function (model: BridgeDesignRequest[]) {
        //     let PM = model;
        //     Xplore.GetJSON("resources/MM.json", function (model: BridgeDesignRequest[]) {
        //         let MM = model;
        //         Xplore.GetJSON("resources/Forces.json", function (model: BridgeDesignRequest[]) {
        //             let Forces = model;
        //             self.ShowDesignRequestCanvas2D();
        //             self.PlotChartColumn(PM, MM, Forces, new BridgeChartOptions(), new BridgeChartOptions(), new BridgeChartOptions());
        //         });
        //     });
        // });
    };
    BridgeView.prototype.ShowContainer = function () {
        document.body.innerHTML = "";
        this.canvas3D = new XCanvas3D();
        this.canvas3D.Show();
    };
    BridgeView.prototype.ShowCanvas2D = function () {
        document.body.innerHTML = "";
        if (this.designrequestcontainer) {
            this.designrequestcontainer.Dispose();
            this.designrequestcontainer = undefined;
            this.canvas2D = undefined;
            this.canvas2DBottom = undefined;
            this.canvas2DRight = undefined;
        }
        if (this.canvas2D)
            this.canvas2D.Dispose();
        this.canvas2D = new XCanvas2D();
        this.canvas2D.settings.showtoolbar = false;
        this.canvas2D.settings.LightTheme();
        this.canvas2D.Show();
        this.canvas2D.Resize();
    };
    BridgeView.prototype.ShowDesignRequestCanvas2D = function () {
        document.body.innerHTML = "";
        if (this.designrequestcontainer) {
            this.designrequestcontainer.Dispose();
            this.designrequestcontainer = undefined;
            this.canvas2D = undefined;
            this.canvas2DBottom = undefined;
            this.canvas2DRight = undefined;
        }
        if (this.canvas2D)
            this.canvas2D.Dispose();
        var container = new Xplore.SplitContainer();
        container.size = [undefined, 280];
        container.splittersize = 4;
        container.Show();
        var pmcontainer = new Xplore.SplitContainer();
        pmcontainer.orientation = XORIENTATION.VERTICAL;
        pmcontainer.splittersize = 4;
        container.Set(pmcontainer, 0);
        var topcontainer = new Xplore.SplitContainer();
        topcontainer.orientation = XORIENTATION.VERTICAL;
        topcontainer.size = [36];
        pmcontainer.Set(topcontainer, 0);
        //Angle
        var angles = ["0", "30", "60", "90", "120", "150", "180"];
        var toolbar = new Xplore.Toolbar({ classes: ["canvas-toolbar"] });
        var angle = toolbar.Add(new Xplore.Combobox({ text: "Angle" }));
        angle.options = angles;
        angle.value = "0";
        topcontainer.Set(toolbar, 0);
        this.canvas2D = new XCanvas2D();
        this.canvas2D.settings.showtoolbar = false;
        this.canvas2D.settings.LightTheme();
        topcontainer.Set(this.canvas2D, 1);
        this.canvas2D.Resize();
        var rightcontainer = new Xplore.SplitContainer();
        rightcontainer.orientation = XORIENTATION.VERTICAL;
        rightcontainer.size = [36];
        container.Set(rightcontainer, 1);
        //Design Forces
        toolbar = new Xplore.Toolbar({ classes: ["canvas-toolbar"] });
        var forcelist = ["Axial", "Major Shear", "Minor Shear", "Resultant Shear", "Major Moment", "Minor Moment", "Resultant Moment", "Torsion"];
        var forces = toolbar.Add(new Xplore.Combobox({ text: "Force" }));
        forces.onchange = function () {
            WEBVIEW.postMessage(forces.value);
        };
        forces.options = forcelist;
        forces.value = "Axial";
        rightcontainer.Set(toolbar, 0);
        this.canvas2DRight = new XCanvas2D();
        this.canvas2DRight.settings.showtoolbar = false;
        this.canvas2DRight.settings.LightTheme();
        rightcontainer.Set(this.canvas2DRight, 1);
        this.canvas2DRight.Resize();
        var bottomcontainer = new Xplore.SplitContainer();
        bottomcontainer.orientation = XORIENTATION.VERTICAL;
        bottomcontainer.size = [36];
        pmcontainer.Set(bottomcontainer, 1);
        //Pu
        toolbar = new Xplore.Toolbar({ classes: ["canvas-toolbar"] });
        var pvalue = toolbar.Add(new Xplore.Input(XINPUTTYPE.NUMBER, { text: "Pu" }));
        pvalue.value = "0";
        bottomcontainer.Set(toolbar, 0);
        this.canvas2DBottom = new XCanvas2D();
        this.canvas2DBottom.settings.showtoolbar = false;
        this.canvas2DBottom.settings.LightTheme();
        bottomcontainer.Set(this.canvas2DBottom, 1);
        this.canvas2DBottom.Resize();
    };
    BridgeView.prototype.OpenModel = function (file) {
        var self = this;
        Xplore.GetJSON(file, function (model) {
            var options = {
                ShowGrid: false,
                ShowAxis: true,
                ShowDimension: false,
                ShowText: false
            };
            self.ShowModel(model, model.ZoomExtent, options);
        });
    };
    BridgeView.prototype.ShowModel = function (model, zoomextent, options) {
        this.model = model.Meshes;
        this.options = options;
        //this.Convert();
        this.GenerateModel(zoomextent);
    };
    BridgeView.prototype.GenerateModel = function (zoomextent) {
        if (!this.canvas3D)
            this.ShowContainer();
        var object = new THREE.Object3D();
        var bounds = new XBounds3D();
        var triangles;
        var triangle;
        var color;
        var rebar;
        var textgeo;
        var lines;
        var line;
        var opacity;
        var meshcolor;
        var linecolor;
        var rebarcolor;
        var rebaritem;
        var rebars = {
            vertices: [],
            normals: [],
            indices: [],
            uvs: []
        };
        var rebarmesh = new XCanvas3DGraphics.Mesh();
        var rebarmaterial = new THREE.MeshPhongMaterial({
            color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
            side: THREE.DoubleSide, vertexColors: true
        });
        rebarmesh.material = rebarmaterial;
        // for (let geometry of this.model) {
        //     if (geometry.Rebars) {
        //         let points: THREE.Vector3[];
        //         rebarcolor = this.RGBToHex(geometry.RebarColor.Red, geometry.RebarColor.Green, geometry.RebarColor.Blue);
        //         opacity = Math.min(geometry.RebarColor.Alpha, 1) * this.transparency;
        //         for (let item of geometry.Rebars) {
        //             points = [];
        //             for (let vertex of item.Vertices) {
        //                 points.push(new THREE.Vector3(vertex.X, vertex.Y, vertex.Z));
        //             }
        //             rebar = new XCanvas3DGraphics.Rebar(points, [geometry.RebarColor.Red, geometry.RebarColor.Green, geometry.RebarColor.Blue]);
        //             rebar.material = new THREE.MeshPhongMaterial({
        //                 color: rebarcolor,
        //                 emissive: 0x111111,
        //                 side: THREE.DoubleSide,
        //                 transparent: opacity < 1 ? true : false,
        //                 opacity: opacity
        //             });
        //             rebar.radius = item.Dia / 2;
        //             rebaritem = rebar.Generate().geometry;
        //             rebarmesh.Add(rebaritem);
        //         }
        //     }
        // }
        // object.add(rebarmesh.Generate());
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var geometry = _a[_i];
            if (!geometry.Color) {
                geometry.Color = new BridgeColor();
                geometry.Color.Alpha = 1;
                geometry.Color.Red = 0.5;
                geometry.Color.Green = 0.60;
                geometry.Color.Blue = 0.75;
            }
            opacity = Math.min(geometry.Color.Alpha, 1) * this.transparency;
            meshcolor = this.RGBToHex(geometry.Color.Red, geometry.Color.Green, geometry.Color.Blue);
            //Initialize triangles
            triangles = new XCanvas3DGraphics.Triangles();
            //triangles.usepointcolor = geometry.UsePointColor;
            triangles.material = new THREE.MeshPhongMaterial({
                color: meshcolor,
                emissive: 0x111111,
                side: THREE.DoubleSide,
                transparent: opacity < 1 ? true : false,
                opacity: opacity
            });
            // if (!geometry.LineColor) {
            //     geometry.LineColor = new BridgeColor();
            //     geometry.LineColor.Red = 0.5;
            //     geometry.LineColor.Green = 0.60;
            //     geometry.LineColor.Blue = 0.75;
            // }
            // linecolor = this.RGBToHex(geometry.LineColor.Red, geometry.LineColor.Green, geometry.LineColor.Blue);
            // //Initialize lines
            // lines = new XCanvas3DGraphics.LineSegments();
            // lines.material = new THREE.LineBasicMaterial({ color: linecolor, opacity: 1 });
            for (var _b = 0, _c = geometry.Triangles; _b < _c.length; _b++) {
                var item = _c[_b];
                triangle = new XTriangle();
                triangle.point1 = new XPoint3D(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
                triangle.point2 = new XPoint3D(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
                triangle.point3 = new XPoint3D(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
                triangles.triangles.push(triangle);
                color = new XTriangle();
                // color.point1 = new XPoint3D(item.Colors[0].X, item.Colors[0].Y, item.Colors[0].Z);
                // color.point2 = new XPoint3D(item.Colors[1].X, item.Colors[1].Y, item.Colors[1].Z);
                // color.point3 = new XPoint3D(item.Colors[2].X, item.Colors[2].Y, item.Colors[2].Z);
                // triangles.colors.push(color);
                bounds.Update(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
                bounds.Update(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
                bounds.Update(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
            }
            // for (let item of geometry.Quads) {
            //     triangle = new XTriangle();
            //     triangle.point1 = new XPoint3D(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
            //     triangle.point2 = new XPoint3D(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
            //     triangle.point3 = new XPoint3D(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
            //     triangles.triangles.push(triangle);
            //     color = new XTriangle();
            //     color.point1 = new XPoint3D(item.Colors[0].X, item.Colors[0].Y, item.Colors[0].Z);
            //     color.point2 = new XPoint3D(item.Colors[1].X, item.Colors[1].Y, item.Colors[1].Z);
            //     color.point3 = new XPoint3D(item.Colors[2].X, item.Colors[2].Y, item.Colors[2].Z);
            //     triangles.colors.push(color);
            //     triangle = new XTriangle();
            //     triangle.point1 = new XPoint3D(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
            //     triangle.point2 = new XPoint3D(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
            //     triangle.point3 = new XPoint3D(item.Vertices[3].X, item.Vertices[3].Y, item.Vertices[3].Z);
            //     triangles.triangles.push(triangle);
            //     color = new XTriangle();
            //     color.point1 = new XPoint3D(item.Colors[0].X, item.Colors[0].Y, item.Colors[0].Z);
            //     color.point2 = new XPoint3D(item.Colors[2].X, item.Colors[2].Y, item.Colors[2].Z);
            //     color.point3 = new XPoint3D(item.Colors[3].X, item.Colors[3].Y, item.Colors[3].Z);
            //     triangles.colors.push(color);
            //     bounds.Update(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
            //     bounds.Update(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
            //     bounds.Update(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
            //     bounds.Update(item.Vertices[3].X, item.Vertices[3].Y, item.Vertices[3].Z);
            // }
            // for (let item of geometry.Lines) {
            //     line = new XLine3D(item.Point1.X, item.Point1.Y, item.Point1.Z, item.Point2.X, item.Point2.Y, item.Point2.Z);
            //     lines.lines.push(line);
            //     bounds.Update(item.Point1.X, item.Point1.Y, item.Point1.Z);
            //     bounds.Update(item.Point2.X, item.Point2.Y, item.Point2.Z);
            // }
            // if (this.options.ShowText) {
            //     for (let item of geometry.Texts) {
            //         if (item.Text) {
            //             textgeo = new XCanvas3DGraphics.Text(item.Text, item.X, item.Y, item.Z);
            //             textgeo.size = item.Size;
            //             textgeo.rotation = new THREE.Vector3(item.Rotation.X, item.Rotation.Y, item.Rotation.Z);
            //             textgeo.alignx = item.AlignX;
            //             textgeo.aligny = item.AlignY;
            //             textgeo.color = this.RGBToHex(item.Color.Red, item.Color.Green, item.Color.Blue);
            //             object.add(textgeo.Generate());
            //         }
            //     }
            // }
            // if (this.options.ShowDimension) {
            //     for (let dimension of geometry.Dimensions) {
            //         for (let item of dimension.Lines) {
            //             line = new XLine3D(item.Point1.X, item.Point1.Y, item.Point1.Z, item.Point2.X, item.Point2.Y, item.Point2.Z);
            //             lines.lines.push(line);
            //         }
            //         for (let item of dimension.Texts) {
            //             if (item.Text) {
            //                 textgeo = new XCanvas3DGraphics.Text(item.Text, item.X, item.Y, item.Z);
            //                 textgeo.size = item.Size;
            //                 textgeo.rotation = new THREE.Vector3(item.Rotation.X, item.Rotation.Y, item.Rotation.Z);
            //                 textgeo.alignx = item.AlignX;
            //                 textgeo.aligny = item.AlignY;
            //                 textgeo.color = this.RGBToHex(item.Color.Red, item.Color.Green, item.Color.Blue);
            //                 object.add(textgeo.Generate());
            //             }
            //         }
            //     }
            // }
            if (triangles.triangles.length)
                object.add(triangles.Generate());
            // if (lines.lines.length)
            //     object.add(lines.Generate());
        }
        //Grid
        if (this.options.ShowGrid) {
            var interval = 5;
            var midx = (bounds.x1 + bounds.x2) / 2;
            var midy = (bounds.y1 + bounds.y2) / 2;
            var length_1 = Math.max(bounds.x2 - bounds.x1, bounds.y2 - bounds.y1);
            var ext = Math.round(length_1 / (2 * interval)) + 5;
            var grid = new XCanvas3DGraphics.UniformGridXY(midx - interval * ext, midy - interval * ext, 0, midx + interval * ext, midy + interval * ext, 0, interval);
            object.add(grid.Generate());
        }
        //Axis
        if (bounds.x1 !== Number.POSITIVE_INFINITY) {
            if (this.options.ShowAxis) {
                var size = 3;
                var axis = new XCanvas3DGraphics.Axis();
                axis.size = size;
                object.add(axis.Generate());
            }
        }
        //this.canvas3D.ClearObjects();
        this.canvas3D.SetObjects(object);
        if (zoomextent && bounds.x1 !== Number.POSITIVE_INFINITY) {
            this.canvas3D.modelbounds = bounds;
            this.canvas3D.ZoomAll(bounds);
        }
        else
            this.canvas3D.Render();
    };
    BridgeView.prototype.Clear3D = function () {
        this.canvas3D.ClearObjects();
        this.canvas3D.Render();
    };
    BridgeView.prototype.PlotChart = function (canvas, model, options) {
        var point1;
        var point2;
        var length;
        var minlength = Number.MAX_SAFE_INTEGER;
        canvas.settings.ischart = true;
        canvas.model.Clear();
        for (var i = 0; i < model.length; i++) {
            for (var j = 0; j < model[i].Points.length - 1; j++) {
                point1 = model[i].Points[j];
                point2 = model[i].Points[j + 1];
                length = new XLine2D(point1.ValueX, point1.ValueY, point2.ValueX, point2.ValueY).length;
                if (length > 0.001 && minlength > length)
                    minlength = length;
            }
        }
        canvas.settings.pointtolerance = minlength / 5;
        canvas.settings.allowpan = false;
        canvas.settings.allowzoom = false;
        canvas.settings.showlabel = true;
        canvas.settings.labelx = options.UnitX;
        canvas.settings.labely = options.UnitY;
        var line;
        var circle;
        for (var i = 0; i < model.length; i++) {
            for (var j = 0; j < model[i].Points.length - 1; j++) {
                point1 = model[i].Points[j];
                point2 = model[i].Points[j + 1];
                if (options.ShowPoint) {
                    circle = new XCanvas2DGraphics.Circle(point1.ValueX, point1.ValueY, 5, true);
                    circle.properties.fillcolor = this.RGBToHex(model[i].FillColor.Red, model[i].FillColor.Green, model[i].FillColor.Blue);
                    circle.properties.linecolor = this.RGBToHex(model[i].LineColor.Red, model[i].LineColor.Green, model[i].LineColor.Blue);
                    canvas.model.Add(circle);
                    circle = new XCanvas2DGraphics.Circle(point2.ValueX, point2.ValueY, 5, true);
                    circle.properties.fillcolor = this.RGBToHex(model[i].FillColor.Red, model[i].FillColor.Green, model[i].FillColor.Blue);
                    circle.properties.linecolor = this.RGBToHex(model[i].LineColor.Red, model[i].LineColor.Green, model[i].LineColor.Blue);
                    canvas.model.Add(circle);
                }
                line = new XCanvas2DGraphics.Line(point1.ValueX, point1.ValueY, point2.ValueX, point2.ValueY);
                line.properties.thickness = model[i].LineThickness;
                line.properties.linecolor = this.RGBToHex(model[i].LineColor.Red, model[i].LineColor.Green, model[i].LineColor.Blue);
                canvas.model.Add(line);
            }
        }
        if (this.background) {
            this.background.Dispose();
            this.progress.Dispose();
        }
        canvas.Render();
        canvas.ZoomAll();
    };
    BridgeView.prototype.PlotChartCappingBeam = function (model, options) {
        this.PlotChart(this.canvas2D, model, options);
        this.ZoomChart();
    };
    BridgeView.prototype.PlotChartColumn = function (PM, MM, Forces, optionPM, optionMM, optionForces) {
        this.PlotChart(this.canvas2D, PM, optionPM);
        this.PlotChart(this.canvas2DBottom, MM, optionMM);
        this.PlotChart(this.canvas2DRight, Forces, optionForces);
        var self = this;
        setTimeout(function () {
            self.ZoomChart();
        }, 10);
        setTimeout(function () {
            self.ZoomChart();
        }, 100);
    };
    BridgeView.prototype.PlotChartColumnForces = function (Forces, options) {
        this.PlotChart(this.canvas2DRight, Forces, options);
        this.ZoomChart();
    };
    BridgeView.prototype.ClearChart = function () {
        this.canvas2D.model.Clear();
        this.canvas2D.Render();
    };
    BridgeView.prototype.ShowPropgress = function (message) {
        if (this.background) {
            this.background.Dispose();
            this.progress.Dispose();
        }
        this.background = new Xplore.Background();
        this.background.Show();
        this.progress = new Xplore.Text({ text: "Generating response plot...", classes: ["progress-text"] });
        this.progress.Show();
    };
    BridgeView.prototype.HideProgress = function () {
        if (this.background) {
            this.background.Dispose();
            this.progress.Dispose();
        }
    };
    BridgeView.prototype.ShowReport = function (doc) {
        //Design Criteria
        document.body.innerHTML = "";
        this.canvas3D = undefined;
        var reportdoc = new XReport(doc);
        reportdoc.report.header = doc.Header;
        reportdoc.report.footer = doc.Footer;
        reportdoc.Show();
        var sectioncount = 1;
        var subcount = 1;
        //Sections
        for (var _i = 0, _a = doc.Sections; _i < _a.length; _i++) {
            var section = _a[_i];
            reportdoc.report.AddSection(sectioncount + ". " + section.Text);
            subcount = 1;
            //Sub Section
            for (var _b = 0, _c = section.Items; _b < _c.length; _b++) {
                var subsection = _c[_b];
                reportdoc.report.AddSubSection(sectioncount + "." + subcount + ". " + subsection.Text);
                //Items
                for (var _d = 0, _e = subsection.Items; _d < _e.length; _d++) {
                    var item = _e[_d];
                    reportdoc.report.AddReportTable(item);
                }
                subcount++;
            }
            sectioncount++;
        }
        // report.report.AddText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        // report.report.AddText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        // let header: string[] = ["Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6", "Column 7", "Column 8"];
        // let data: string[][] = [];
        // let row: string[];
        // for (let i = 0; i < 100; i++) {
        //     row = [];
        //     for (let j = 0; j < header.length; j++) {
        //         row.push("Cell " + i + "-" + j);
        //     }
        //     data.push(row);
        // }
        // report.report.AddTable(header, data);
        reportdoc.Render();
    };
    BridgeView.prototype.UpdateOptions = function (options) {
        this.options = options;
        this.GenerateModel(false);
    };
    BridgeView.prototype.Convert = function () {
        var factor = 1000;
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var geometry = _a[_i];
            for (var _b = 0, _c = geometry.Triangles; _b < _c.length; _b++) {
                var item = _c[_b];
                item.Vertices[0].X /= factor;
                item.Vertices[1].X /= factor;
                item.Vertices[2].X /= factor;
                item.Vertices[0].Y /= factor;
                item.Vertices[1].Y /= factor;
                item.Vertices[2].Y /= factor;
                item.Vertices[0].Z /= factor;
                item.Vertices[1].Z /= factor;
                item.Vertices[2].Z /= factor;
            }
            for (var _d = 0, _e = geometry.Quads; _d < _e.length; _d++) {
                var item = _e[_d];
                item.Vertices[0].X /= factor;
                item.Vertices[1].X /= factor;
                item.Vertices[2].X /= factor;
                item.Vertices[3].X /= factor;
                item.Vertices[0].Y /= factor;
                item.Vertices[1].Y /= factor;
                item.Vertices[2].Y /= factor;
                item.Vertices[3].Y /= factor;
                item.Vertices[0].Z /= factor;
                item.Vertices[1].Z /= factor;
                item.Vertices[2].Z /= factor;
                item.Vertices[3].Z /= factor;
            }
            for (var _f = 0, _g = geometry.Lines; _f < _g.length; _f++) {
                var item = _g[_f];
                item.Point1.X /= factor;
                item.Point1.Y /= factor;
                item.Point1.Z /= factor;
                item.Point2.X /= factor;
                item.Point2.Y /= factor;
                item.Point2.Z /= factor;
            }
            for (var _h = 0, _j = geometry.Texts; _h < _j.length; _h++) {
                var item = _j[_h];
                item.X /= factor;
                item.Y /= factor;
                item.Z /= factor;
                item.Size /= factor;
            }
            for (var _k = 0, _l = geometry.Dimensions; _k < _l.length; _k++) {
                var dimension = _l[_k];
                for (var _m = 0, _o = dimension.Lines; _m < _o.length; _m++) {
                    var item = _o[_m];
                    item.Point1.X /= factor;
                    item.Point1.Y /= factor;
                    item.Point1.Z /= factor;
                    item.Point2.X /= factor;
                    item.Point2.Y /= factor;
                    item.Point2.Z /= factor;
                }
                for (var _p = 0, _q = dimension.Texts; _p < _q.length; _p++) {
                    var item = _q[_p];
                    item.X /= factor;
                    item.Y /= factor;
                    item.Z /= factor;
                    item.Size /= factor;
                }
            }
            for (var _r = 0, _s = geometry.Rebars; _r < _s.length; _r++) {
                var item = _s[_r];
                item.Dia /= factor;
                for (var _t = 0, _u = item.Vertices; _t < _u.length; _t++) {
                    var vertex = _u[_t];
                    vertex.X /= factor;
                    vertex.Y /= factor;
                    vertex.Z /= factor;
                    vertex.W /= factor;
                }
            }
        }
    };
    BridgeView.prototype.Animate = function (models, refresh) {
        this.animationframes = [];
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var model = models_1[_i];
            this.ShowModel(model, refresh, { ShowGrid: false, ShowAxis: false });
            this.animationframes.push(this.canvas3D.sceneobject);
        }
        this.animationindex = 0;
        this.animationforward = true;
        BridgeView.animatemodel = this;
        if (this.animationtimer) {
            clearInterval(this.animationtimer);
            this.animationtimer = null;
            return;
        }
        this.PlayAnimation();
    };
    BridgeView.prototype.PlayAnimation = function () {
        var self = BridgeView.animatemodel;
        if (self.animate) {
            setTimeout(function () {
                requestAnimationFrame(self.PlayAnimation);
                self.AnimateFrame();
                self.canvas3D.Render();
            }, self.animationspeed);
        }
    };
    BridgeView.prototype.AnimateFrame = function () {
        var self = BridgeView.animatemodel;
        self.canvas3D.ClearObjects();
        self.canvas3D.SetObjects(self.animationframes[self.animationindex]);
        if (self.animationforward) {
            self.animationindex++;
            if (self.animationindex === self.animationframes.length - 1)
                self.animationforward = false;
        }
        else {
            self.animationindex--;
            if (self.animationindex === 0)
                self.animationforward = true;
        }
    };
    BridgeView.prototype.RGBToHex = function (r, g, b) {
        return "#" + this.ComponentToHex(Math.round(r * 255)) + this.ComponentToHex(Math.round(g * 255)) + this.ComponentToHex(Math.round(b * 255));
    };
    BridgeView.prototype.ComponentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    BridgeView.prototype.ZoomAll = function () {
        var bounds = new XBounds3D();
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var geometry = _a[_i];
            for (var _b = 0, _c = geometry.Triangles; _b < _c.length; _b++) {
                var item = _c[_b];
                bounds.Update(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
                bounds.Update(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
                bounds.Update(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
            }
            for (var _d = 0, _e = geometry.Quads; _d < _e.length; _d++) {
                var item = _e[_d];
                bounds.Update(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
                bounds.Update(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
                bounds.Update(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
                bounds.Update(item.Vertices[3].X, item.Vertices[3].Y, item.Vertices[3].Z);
            }
            for (var _f = 0, _g = geometry.Lines; _f < _g.length; _f++) {
                var item = _g[_f];
                bounds.Update(item.Point1.X, item.Point1.Y, item.Point1.Z);
                bounds.Update(item.Point2.X, item.Point2.Y, item.Point2.Z);
            }
        }
        this.canvas3D.ZoomAll(bounds);
    };
    BridgeView.prototype.ZoomIn = function () {
        this.canvas3D.ZoomIn();
    };
    BridgeView.prototype.ZoomOut = function () {
        this.canvas3D.ZoomOut();
    };
    BridgeView.prototype.ZoomWindow = function () {
    };
    BridgeView.prototype.ZoomSelection = function () {
    };
    BridgeView.prototype.ZoomObject = function () {
        this.ZoomGroup();
    };
    BridgeView.prototype.ZoomGroup = function () {
        var bounds = new XBounds3D();
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var geometry = _a[_i];
            for (var _b = 0, _c = geometry.Triangles; _b < _c.length; _b++) {
                var item = _c[_b];
                bounds.Update(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
                bounds.Update(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
                bounds.Update(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
            }
            for (var _d = 0, _e = geometry.Quads; _d < _e.length; _d++) {
                var item = _e[_d];
                bounds.Update(item.Vertices[0].X, item.Vertices[0].Y, item.Vertices[0].Z);
                bounds.Update(item.Vertices[1].X, item.Vertices[1].Y, item.Vertices[1].Z);
                bounds.Update(item.Vertices[2].X, item.Vertices[2].Y, item.Vertices[2].Z);
                bounds.Update(item.Vertices[3].X, item.Vertices[3].Y, item.Vertices[3].Z);
            }
        }
        this.canvas3D.ZoomAll(bounds);
    };
    BridgeView.prototype.ZoomChart = function () {
        this.canvas2D.ZoomAll();
        if (this.canvas2DRight)
            this.canvas2DRight.ZoomAll();
        if (this.canvas2DBottom)
            this.canvas2DBottom.ZoomAll();
    };
    return BridgeView;
}());
//# sourceMappingURL=mainview.js.map