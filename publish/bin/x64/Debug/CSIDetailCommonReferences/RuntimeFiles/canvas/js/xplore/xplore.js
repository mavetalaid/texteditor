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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var XORIENTATION;
(function (XORIENTATION) {
    XORIENTATION[XORIENTATION["HORIZONTAL"] = 1] = "HORIZONTAL";
    XORIENTATION[XORIENTATION["VERTICAL"] = 2] = "VERTICAL";
})(XORIENTATION || (XORIENTATION = {}));
var XINPUTTYPE;
(function (XINPUTTYPE) {
    XINPUTTYPE["BUTTON"] = "button";
    XINPUTTYPE["CHECKBOX"] = "checkbox";
    XINPUTTYPE["COLOR"] = "color";
    XINPUTTYPE["DATE"] = "date";
    XINPUTTYPE["DATETIME"] = "datetime-local";
    XINPUTTYPE["EMAIL"] = "email";
    XINPUTTYPE["FILE"] = "file";
    XINPUTTYPE["HIDDEN"] = "hidden";
    XINPUTTYPE["IMAGE"] = "image";
    XINPUTTYPE["MONTH"] = "month";
    XINPUTTYPE["NUMBER"] = "number";
    XINPUTTYPE["PASSWORD"] = "password";
    XINPUTTYPE["RADIO"] = "radio";
    XINPUTTYPE["RANGE"] = "range";
    XINPUTTYPE["RESET"] = "reset";
    XINPUTTYPE["SEARCH"] = "search";
    XINPUTTYPE["SUBMIT"] = "submit";
    XINPUTTYPE["TELEPHONE"] = "tel";
    XINPUTTYPE["TEXT"] = "text";
    XINPUTTYPE["TIME"] = "time";
    XINPUTTYPE["URL"] = "url";
    XINPUTTYPE["WEEK"] = "week";
})(XINPUTTYPE || (XINPUTTYPE = {}));
var XMENUTYPE;
(function (XMENUTYPE) {
    XMENUTYPE["DEFAULT"] = "menu-default";
    XMENUTYPE["MINIRIBBON"] = "menu-mini-ribbon";
    XMENUTYPE["RIBBON"] = "menu-ribbon";
})(XMENUTYPE || (XMENUTYPE = {}));
var Xplore = /** @class */ (function () {
    function Xplore(param, classname) {
        this.element = "div";
        this.children = [];
        this.enabled = true;
        this.readonly = false;
        this.classes = [];
        if (param != null) {
            this.icon = param.icon;
            this.text = param.text;
            this.onclick = param.onclick;
            if (param.classes) {
                this.classes = __spreadArray(__spreadArray([], this.classes), param.classes);
            }
        }
        if (classname)
            this.classes.push(classname);
    }
    Xplore.prototype.Show = function (parent) {
        this.object = document.createElement(this.element);
        for (var _i = 0, _a = this.classes; _i < _a.length; _i++) {
            var classname = _a[_i];
            this.object.classList.add(classname);
        }
        if (parent instanceof HTMLElement) {
            this.parent = parent;
            parent.appendChild(this.object);
        }
        else if (parent instanceof Xplore) {
            this.parent = parent.object;
            parent.object.appendChild(this.object);
        }
        else {
            this.parent = document.body;
            document.body.appendChild(this.object);
        }
        this.Refresh();
    };
    Xplore.prototype.Refresh = function () {
        this.Clear();
        if (this.icon)
            this.object.appendChild(this.DisplayIcon(this.icon));
        if (this.text)
            this.object.append(this.text);
        this.RefreshChildren();
        this.Events();
    };
    Xplore.prototype.RefreshChildren = function () {
        //Children
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].Show(this.object);
        }
    };
    ;
    Xplore.prototype.Events = function () {
        var self = this;
        if (this.onclick) {
            if (!this.readonly) {
                this.object.onclick = function () {
                    if (self.enabled) {
                        if (self.onclick)
                            self.onclick(self);
                    }
                };
            }
        }
    };
    ;
    Xplore.prototype.Bind = function (object) {
        for (var prop in object) {
            if (object[prop] instanceof Xplore) {
                this.Add(object[prop]);
            }
        }
    };
    Xplore.prototype.Add = function (child) {
        this.children.push(child);
        return child;
    };
    Xplore.prototype.Clear = function () {
        this.object.innerHTML = "";
    };
    Xplore.prototype.Dispose = function () {
        this.children.forEach(function (element) {
            element.Dispose();
        });
        this.object.remove();
    };
    Xplore.prototype.Resize = function () {
    };
    Xplore.prototype.DisplayIcon = function (icon) {
        if (icon.includes(".jpg") || icon.includes(".png")) {
            var element = void 0;
            element = document.createElement("img");
            element.classList.add("icon");
            element.src = icon;
            return element;
        }
        else {
            var element = void 0;
            element = document.createElement("i");
            element.classList.add("icon");
            element.classList.add("mdi");
            element.classList.add("mdi-" + icon);
            return element;
        }
    };
    ;
    //Static functions
    Xplore.GetJSON = function (url, resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (resolve)
                    resolve(JSON.parse(this.responseText));
            }
            else {
                if (reject)
                    resolve(this.responseText);
            }
        };
        xhttp.send();
    };
    ;
    Xplore.FormatDate = function (date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        if (!date)
            date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    Xplore.zindex = 100;
    Xplore.shortcuts = {};
    return Xplore;
}());
(function (Xplore) {
    //View
    var AppView = /** @class */ (function (_super) {
        __extends(AppView, _super);
        function AppView(param) {
            var _this = _super.call(this, param, "view") || this;
            _this.buttons = [];
            _this.showmenu = true;
            return _this;
        }
        AppView.prototype.Refresh = function () {
            this.object.innerHTML = "";
            //Header
            this.header = document.createElement("div");
            this.header.classList.add("view-header");
            this.object.appendChild(this.header);
            this.RefreshHeader();
            //Body
            this.body = document.createElement("div");
            this.body.classList.add("view-body");
            this.object.appendChild(this.body);
            this.RefreshBody();
            this.Events();
        };
        ;
        AppView.prototype.RefreshHeader = function () {
            var self = this;
            this.header.innerHTML = "";
            if (this.showmenu) {
                var menu = new Xplore.Button({
                    icon: "menu",
                    onclick: function () {
                        var container = new Xplore.Container();
                        return container;
                    }
                });
                menu.Show(this.header);
            }
            var text = document.createElement("div");
            text.innerHTML = this.text;
            text.classList.add("text");
            this.header.appendChild(text);
            var buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.header.appendChild(buttons);
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].Show(buttons);
            }
        };
        ;
        AppView.prototype.RefreshBody = function () {
            this.body.innerHTML = "";
            //Children
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].Show(this.body);
            }
        };
        ;
        return AppView;
    }(Xplore));
    Xplore.AppView = AppView;
    //Container
    var Container = /** @class */ (function (_super) {
        __extends(Container, _super);
        function Container(param) {
            return _super.call(this, param, "container") || this;
        }
        return Container;
    }(Xplore));
    Xplore.Container = Container;
    var ScrollContainer = /** @class */ (function (_super) {
        __extends(ScrollContainer, _super);
        function ScrollContainer(param) {
            return _super.call(this, param, "scroll-container") || this;
        }
        return ScrollContainer;
    }(Xplore));
    Xplore.ScrollContainer = ScrollContainer;
    var SplitContainer = /** @class */ (function (_super) {
        __extends(SplitContainer, _super);
        function SplitContainer() {
            var _this = _super.call(this, undefined, "split-container") || this;
            _this.splittersize = 0;
            _this.expanded = false;
            _this.children = [];
            return _this;
        }
        SplitContainer.prototype.Refresh = function () {
            this.object.innerHTML = "";
            this.panel1 = document.createElement("div");
            this.gap = document.createElement("div");
            this.panel2 = document.createElement("div");
            this.object.appendChild(this.panel1);
            this.object.appendChild(this.gap);
            this.object.appendChild(this.panel2);
            this.Resize();
            //Children
            for (var i = 0; i < this.children.length && i < 2; i++) {
                this.Set(this.children[i], i);
            }
            var self = this;
            window.onresize = function () {
                for (var _i = 0, _a = self.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.Resize();
                }
            };
            this.Events();
        };
        SplitContainer.prototype.Set = function (child, index) {
            var panel = index === 0 ? this.panel1 : this.panel2;
            this.children[index] = child;
            if (panel) {
                panel.innerHTML = "";
                child.Show(panel);
            }
            return child;
        };
        ;
        SplitContainer.prototype.Resize = function () {
            var gap = this.splittersize / 2;
            if (this.size) {
                if (this.orientation) {
                    //Vertical
                    if (this.size[0] !== undefined) {
                        this.panel1.setAttribute("style", "top: 0; height: " + this.size[0] + "px; left: 0; right: 0 ");
                        this.panel2.setAttribute("style", "bottom: 0; top: " + (this.size[0] + this.splittersize) + "px; left: 0; right: 0 ");
                        if (this.splittersize !== 0)
                            this.gap.setAttribute("style", "top: " + this.size[0] + "px; height: " + this.splittersize + "px; left: 0; right: 0 ");
                    }
                    else if (this.size[1] !== undefined) {
                        this.panel1.setAttribute("style", "top: 0; bottom: " + this.size[1] + "px; left: 0; right: 0 ");
                        this.panel2.setAttribute("style", "bottom: 0; height: " + (this.size[1] + this.splittersize) + "px; left: 0; right: 0 ");
                        if (this.splittersize !== 0)
                            this.gap.setAttribute("style", "bottom: " + this.size[1] + "px; height: " + this.splittersize + "px; left: 0; right: 0 ");
                    }
                }
                else {
                    //Horizontal
                    if (this.size[0] !== undefined) {
                        this.panel1.setAttribute("style", "left: 0; width: " + this.size[0] + "px; top: 0; bottom: 0 ");
                        this.panel2.setAttribute("style", "right: 0; left: " + (this.size[0] + this.splittersize) + "px; top: 0; bottom: 0 ");
                        this.gap.setAttribute("style", "left: " + this.size[0] + "px; width: " + this.splittersize + "px; top: 0; bottom: 0 ");
                    }
                    else if (this.size[1] !== undefined) {
                        this.panel1.setAttribute("style", "left: 0; right: " + (this.size[1] + this.splittersize) + "px; top: 0; bottom: 0 ");
                        this.panel2.setAttribute("style", "right: 0; width: " + this.size[1] + "px; top: 0; bottom: 0 ");
                        this.gap.setAttribute("style", "right: " + this.size[1] + "px; width: " + this.splittersize + "px; top: 0; bottom: 0 ");
                    }
                }
            }
            else {
                if (this.orientation) {
                    //Vertical
                    this.panel1.setAttribute("style", "top: 0; height: calc(50% - " + gap + "px); left: 0; right: 0 ");
                    this.panel2.setAttribute("style", "bottom: 0; height: calc(50% - " + gap + "px); left: 0; right: 0 ");
                    if (this.splittersize !== 0)
                        this.gap.setAttribute("style", "top: calc(50% - " + gap + "px); height: " + this.splittersize + "px; left: 0; right: 0 ");
                }
                else {
                    //Horizontal
                    this.panel1.setAttribute("style", "left: 0; width: calc(50% - " + gap + "px); top: 0; bottom: 0 ");
                    this.panel2.setAttribute("style", "right: 0; width: calc(50% - " + gap + "px); top: 0; bottom: 0 ");
                    if (this.splittersize !== 0)
                        this.gap.setAttribute("style", "left: calc(50% - " + gap + "px); width: " + this.splittersize + "px; top: 0; bottom: 0 ");
                }
            }
        };
        ;
        SplitContainer.prototype.Expand = function (index) {
            this._splittersize = this.splittersize;
            this._size = this.size;
            this.expanded = true;
            this.splittersize = 0;
            if (index === 0)
                this.size = [undefined, 0];
            else if (index === 1)
                this.size = [0];
            this.Resize();
        };
        ;
        SplitContainer.prototype.Restore = function () {
            this.splittersize = this._splittersize;
            this.size = this._size;
            this.expanded = false;
            this.Resize();
        };
        ;
        SplitContainer.prototype.Events = function () {
            var self = this;
            var resizing;
            var currentx;
            var currenty;
            this.gap.onmousedown = function (e) {
                resizing = true;
                currentx = e.clientX;
                currenty = e.clientY;
                self.gap.style.zIndex = "1";
                self.gap.style.right = "initial";
                document.body.onmousemove = function (e) {
                    if (resizing) {
                        self.gap.style.left = (e.clientX) + "px";
                        currentx = e.clientX;
                        currenty = e.clientY;
                    }
                };
            };
            this.gap.onmouseup = function (e) {
                resizing = false;
                self.size = [e.clientX - self.splittersize / 2, undefined];
                self.gap.style.zIndex = "";
                document.body.onmousemove = undefined;
                self.Resize();
                for (var _i = 0, _a = self.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.Resize();
                }
            };
        };
        ;
        return SplitContainer;
    }(Xplore));
    Xplore.SplitContainer = SplitContainer;
    var Form = /** @class */ (function (_super) {
        __extends(Form, _super);
        function Form(param) {
            var _this = _super.call(this, param, "form") || this;
            _this.width = 400;
            _this.height = 400;
            _this.buttons = [];
            _this.modal = true;
            _this.showheader = true;
            _this.showfooter = true;
            _this.showclose = true;
            _this.showcancel = true;
            _this.showok = true;
            _this.oktext = "OK";
            _this.canceltext = "Cancel";
            _this.element = "form";
            _this.width = param.width || 400;
            _this.height = param.height || 400;
            return _this;
        }
        Form.prototype.Refresh = function () {
            var self = this;
            if (this.modal) {
                this.background = new Xplore.Background({
                    onclick: function () {
                        self.Dispose();
                    }
                });
                this.background.Show();
            }
            this.object.innerHTML = "";
            if (this.showheader) {
                //Header
                this.header = document.createElement("div");
                this.header.classList.add("form-header");
                this.object.appendChild(this.header);
                this.RefreshHeader();
            }
            //Body
            this.body = document.createElement("div");
            this.body.classList.add("form-body");
            this.object.appendChild(this.body);
            this.RefreshBody();
            if (this.showfooter) {
                //Footer
                this.footer = document.createElement("div");
                this.footer.classList.add("form-footer");
                this.object.appendChild(this.footer);
                this.RefreshFooter();
            }
            else {
                this.object.classList.add("no-footer");
            }
            this.Resize();
            this.Events();
        };
        ;
        Form.prototype.RefreshHeader = function () {
            var self = this;
            this.header.innerHTML = "";
            var text = document.createElement("div");
            text.innerHTML = this.text;
            text.classList.add("text");
            this.header.appendChild(text);
            var buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.header.appendChild(buttons);
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].Show(buttons);
            }
            if (this.showclose) {
                var button = new Xplore.Button({
                    text: this.DisplayIcon("close"),
                    onclick: function () {
                        self.Close();
                    }
                });
                button.Show(buttons);
            }
        };
        ;
        Form.prototype.RefreshBody = function () {
            this.body.innerHTML = "";
            //Children
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].Show(this.body);
            }
        };
        ;
        Form.prototype.RefreshFooter = function () {
            var self = this;
            this.footer.innerHTML = "";
            var buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.footer.appendChild(buttons);
            if (this.showok) {
                var button = new Xplore.Input(XINPUTTYPE.SUBMIT, {
                    onclick: function () {
                        if (self.onok)
                            self.onok();
                        self.Close();
                    }
                });
                button.Show(buttons);
            }
            if (this.showcancel) {
                var button = new Xplore.Button({
                    text: this.canceltext,
                    classes: ["button-cancel"],
                    onclick: function () {
                        if (self.oncancel)
                            self.oncancel();
                        self.Close();
                    }
                });
                button.Show(buttons);
            }
        };
        ;
        Form.prototype.Resize = function () {
            var w = window.innerWidth;
            var h = window.innerHeight;
            if (this.width > w)
                this.width = w - 32;
            if (this.height > h)
                this.height = h;
            var left = (w - this.width) / 2;
            var top = (h - this.height) / 2;
            this.object.style.width = this.width + "px";
            this.object.style.height = this.height + "px";
            this.object.style.left = left + "px";
            this.object.style.top = top + "px";
            this.object.style.zIndex = (++Xplore.zindex).toString();
        };
        ;
        Form.prototype.Events = function () {
            var self = this;
            var resizing;
            var currentx;
            var currenty;
            if (this.showheader) {
                this.header.onmousedown = function (e) {
                    resizing = true;
                    currentx = e.clientX;
                    currenty = e.clientY;
                    document.body.onmousemove = function (e) {
                        if (resizing) {
                            if (self.object.classList.value.indexOf(" dock") !== -1) {
                                if (Math.abs(e.clientX - currentx) > 10 || Math.abs(e.clientY - currenty) > 10) {
                                    var width = self.object.offsetWidth;
                                    self.object.classList.remove("dock");
                                    document.body.appendChild(self.object);
                                    if (e.clientX > width) {
                                        self.object.style.left = (e.clientX - (width - e.offsetX)) + "px";
                                        self.object.style.top = (e.clientY - e.offsetY) + "px";
                                    }
                                    else {
                                        self.object.style.left = (e.clientX - e.offsetX) + "px";
                                        self.object.style.top = (e.clientY - e.offsetY) + "px";
                                    }
                                }
                            }
                            else {
                                self.object.style.left = self.object.offsetLeft + (e.clientX - currentx) + "px";
                                self.object.style.top = self.object.offsetTop + (e.clientY - currenty) + "px";
                                currentx = e.clientX;
                                currenty = e.clientY;
                            }
                        }
                    };
                };
                this.header.onmouseup = function (e) {
                    resizing = false;
                    document.body.onmousemove = undefined;
                };
            }
        };
        ;
        Form.prototype.Dispose = function () {
            Xplore.zindex -= 2;
            this.object.remove();
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                child.Dispose();
            }
            if (this.modal)
                this.background.Dispose();
        };
        ;
        Form.prototype.Close = function () {
            this.Dispose();
        };
        ;
        return Form;
    }(Xplore));
    Xplore.Form = Form;
    var PropertyGrid = /** @class */ (function (_super) {
        __extends(PropertyGrid, _super);
        function PropertyGrid(param) {
            return _super.call(this, param, "propertygrid") || this;
        }
        PropertyGrid.prototype.Refresh = function () {
            this.object.innerHTML = "";
            var header = document.createElement("div");
            header.classList.add("propertygrid-header");
            this.object.appendChild(header);
            //Show icon
            if (this.icon)
                header.appendChild(this.DisplayIcon(this.icon));
            //Show text
            if (this.text)
                header.append(this.text);
            //Children
            this.RefreshChildren();
            this.Events();
        };
        ;
        return PropertyGrid;
    }(Xplore));
    Xplore.PropertyGrid = PropertyGrid;
    var Grid = /** @class */ (function (_super) {
        __extends(Grid, _super);
        function Grid(param) {
            var _this = _super.call(this, param, "grid") || this;
            _this.columns = 2;
            _this.rows = 2;
            _this.items = [];
            _this.element = "table";
            return _this;
        }
        Grid.prototype.Refresh = function () {
            for (var i = 0; i < this.rows; i++) {
                var row = document.createElement("tr");
                this.object.appendChild(row);
                for (var j = 0; j < this.columns; j++) {
                    var column = document.createElement("td");
                    row.appendChild(column);
                    if (this.items[i] && this.items[i][j] && this.items[i][j].Show)
                        this.items[i][j].Show(column);
                }
            }
        };
        Grid.prototype.Set = function (child, rowindex, columnindex) {
            if (!this.items[rowindex])
                this.items[rowindex] = [];
            this.items[rowindex][columnindex] = child;
            return child;
        };
        ;
        return Grid;
    }(Xplore));
    Xplore.Grid = Grid;
    var iFrame = /** @class */ (function (_super) {
        __extends(iFrame, _super);
        function iFrame(source) {
            var _this = _super.call(this, undefined, "iframe") || this;
            _this.source = source;
            return _this;
        }
        iFrame.prototype.Refresh = function () {
            this.object.innerHTML = "";
            var frame = "<iframe src='" + this.source + "'></iframe>";
            this.object.innerHTML = frame;
        };
        return iFrame;
    }(Xplore));
    Xplore.iFrame = iFrame;
    //Element
    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text(param) {
            return _super.call(this, param, "text") || this;
        }
        return Text;
    }(Xplore));
    Xplore.Text = Text;
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(param) {
            return _super.call(this, param, "button") || this;
        }
        return Button;
    }(Xplore));
    Xplore.Button = Button;
    //Input
    var Input = /** @class */ (function (_super) {
        __extends(Input, _super);
        function Input(type, param) {
            if (type === void 0) { type = XINPUTTYPE.TEXT; }
            var _this = _super.call(this, param, "input") || this;
            _this.classes.push("inline");
            _this.classes.push("textbox");
            _this.type = type;
            return _this;
        }
        Input.prototype.Refresh = function () {
            this.object.innerHTML = "";
            if (this.text) {
                var label = document.createElement("label");
                this.object.appendChild(label);
                var text = document.createElement("div");
                text.innerText = this.text;
                label.appendChild(text);
                var input = document.createElement("input");
                input.type = this.type;
                switch (this.type) {
                    case "checkbox":
                        if (this.value !== undefined)
                            input.checked = this.value;
                        break;
                    default:
                        if (this.value !== undefined)
                            input.value = this.value;
                        break;
                }
                if (this.name !== undefined)
                    input.name = this.name;
                label.appendChild(input);
                if (this.readonly)
                    input.setAttribute("disabled", "disabled");
            }
            else {
                var input = document.createElement("input");
                input.type = this.type;
                if (this.value !== undefined)
                    input.value = this.value;
                if (this.name !== undefined)
                    input.name = this.name;
                this.object.appendChild(input);
                if (this.readonly)
                    input.setAttribute("disabled", "disabled");
            }
            this.Events();
        };
        ;
        Input.prototype.Events = function () {
            if (!this.readonly) {
                var input_1 = this.object.querySelector("input");
                var self_1 = this;
                switch (this.type) {
                    case "submit":
                        input_1.addEventListener('click', function (e) {
                            e.preventDefault();
                            if (self_1.onclick)
                                self_1.onclick();
                        });
                        break;
                    case "checkbox":
                        input_1.addEventListener('change', function (e) {
                            e.preventDefault();
                            self_1.value = this.checked;
                            if (self_1.bind) {
                                self_1.bind.object[self_1.bind.name] = self_1.value;
                            }
                            if (self_1.onchange)
                                self_1.onchange(self_1);
                        });
                        break;
                    default:
                        input_1.addEventListener('input', function () {
                            switch (this.type) {
                                case "checkbox":
                                    self_1.value = input_1.checked;
                                    break;
                                default:
                                    self_1.value = input_1.value;
                                    break;
                            }
                            self_1.value = this.value;
                            if (self_1.bind) {
                                self_1.bind.object[self_1.bind.name] = self_1.value;
                            }
                            if (self_1.onchange)
                                self_1.onchange(self_1);
                        });
                        break;
                }
            }
        };
        ;
        return Input;
    }(Xplore));
    Xplore.Input = Input;
    var Checkbox = /** @class */ (function (_super) {
        __extends(Checkbox, _super);
        function Checkbox(param) {
            var _this = _super.call(this, XINPUTTYPE.CHECKBOX, param) || this;
            _this.value = param.value;
            _this.bind = param.bind;
            return _this;
        }
        Object.defineProperty(Checkbox.prototype, "checked", {
            get: function () {
                return this.input.checked;
            },
            set: function (value) {
                this.input.checked = value;
            },
            enumerable: false,
            configurable: true
        });
        return Checkbox;
    }(Input));
    Xplore.Checkbox = Checkbox;
    var Combobox = /** @class */ (function (_super) {
        __extends(Combobox, _super);
        function Combobox(param) {
            var _this = _super.call(this, param, "input") || this;
            _this.options = [];
            _this.classes.push("inline");
            return _this;
        }
        Combobox.prototype.Refresh = function () {
            this.object.innerHTML = "";
            var select;
            if (this.text) {
                var text = document.createElement("div");
                text.innerText = this.text;
                this.object.appendChild(text);
                var label = document.createElement("label");
                this.object.appendChild(label);
                select = document.createElement("select");
                label.appendChild(select);
                if (this.readonly)
                    select.setAttribute("disabled", "disabled");
            }
            else {
                select = document.createElement("select");
                this.object.appendChild(select);
                if (this.readonly)
                    select.setAttribute("disabled", "disabled");
            }
            var option;
            if (this.options) {
                for (var i = 0; i < this.options.length; i++) {
                    option = document.createElement("option");
                    option.value = this.options[i];
                    option.innerHTML = this.options[i];
                    select.appendChild(option);
                }
                select.selectedIndex = this.options.indexOf(this.value);
            }
            this.Events();
        };
        ;
        Combobox.prototype.Events = function () {
            var select = this.object.querySelector("select");
            var self = this;
            select.onchange = function () {
                self.value = this.value;
                if (self.onchange)
                    self.onchange(self);
            };
        };
        ;
        return Combobox;
    }(Xplore));
    Xplore.Combobox = Combobox;
    //Menu
    var MenuContainer = /** @class */ (function (_super) {
        __extends(MenuContainer, _super);
        function MenuContainer(type, param) {
            if (type === void 0) { type = XMENUTYPE.DEFAULT; }
            var _this = _super.call(this, param, "menu-container") || this;
            _this.classes.push(type);
            return _this;
        }
        return MenuContainer;
    }(Xplore));
    Xplore.MenuContainer = MenuContainer;
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        function Menu(param) {
            var _this = _super.call(this, param, "menu") || this;
            _this.children = [];
            _this.shortcut = param.shortcut;
            _this.separator = param.separator;
            if (_this.shortcut) {
                Xplore.shortcuts[param.shortcut] = {
                    menu: _this,
                    action: param.onclick
                };
            }
            return _this;
        }
        Menu.prototype.Refresh = function () {
            this.object.innerHTML = "";
            this.object.tabIndex = 1;
            if (this.separator)
                this.object.classList.add("separator");
            var text = document.createElement("div");
            if (this.icon)
                text.appendChild(this.DisplayIcon(this.icon));
            else
                text.appendChild(document.createElement("div"));
            text.append(this.text);
            if (this.shortcut) {
                var shortcut = document.createElement("div");
                shortcut.innerText = this.shortcut;
                text.appendChild(shortcut);
            }
            else if (this.children.length && this.parentmenu) {
                var shortcut = document.createElement("div");
                shortcut.appendChild(this.DisplayIcon("chevron-right"));
                text.appendChild(shortcut);
            }
            this.object.appendChild(text);
            if (this.children.length) {
                //Children
                var submenu = document.createElement("div");
                this.object.appendChild(submenu);
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i].parentmenu = this;
                    this.children[i].Show(submenu);
                }
            }
            this.Events();
        };
        ;
        Menu.prototype.Events = function () {
            var self = this;
            if (this.children.length !== 0) {
                this.object.tabIndex = -1;
            }
            this.object.onclick = function (e) {
                e.stopPropagation();
                if (self.onclick) {
                    if (self.parentmenu)
                        self.parentmenu.Collapse();
                    self.onclick(self);
                }
                else if (self.children.length) {
                    self.object.classList.add("display");
                    Xplore.activemenu = self;
                }
                else {
                    if (self.parentmenu) {
                        console.error("Menu [" + self.parentmenu.text + " -> " + self.text + "] not implemented!");
                        self.parentmenu.Collapse();
                    }
                    else
                        console.error("Menu [" + self.text + "] not implemented!");
                }
            };
            this.object.onmouseenter = function () {
                self.onmenu = true;
                if (Xplore.activemenu && self.parentmenu !== Xplore.activemenu && self.children.length) {
                    Xplore.activemenu.Collapse();
                    self.object.focus();
                    self.object.classList.add("display");
                    Xplore.activemenu = self;
                }
            };
            this.object.onmouseleave = function () {
                self.onmenu = false;
            };
            this.object.addEventListener('focusout', function (event) {
                if (!self.onmenu) {
                    self.onmenu = false;
                    self.object.classList.remove("display");
                    delete Xplore.activemenu;
                }
            });
        };
        ;
        Menu.prototype.Collapse = function () {
            this.onmenu = false;
            this.object.classList.remove("display");
            delete Xplore.activemenu;
        };
        ;
        return Menu;
    }(Xplore));
    Xplore.Menu = Menu;
    var MenuSeparator = /** @class */ (function (_super) {
        __extends(MenuSeparator, _super);
        function MenuSeparator(param) {
            return _super.call(this, param, "menu-separator") || this;
        }
        return MenuSeparator;
    }(Xplore));
    Xplore.MenuSeparator = MenuSeparator;
    //Toolbar
    var ToolbarContainer = /** @class */ (function (_super) {
        __extends(ToolbarContainer, _super);
        function ToolbarContainer(param) {
            return _super.call(this, param, "toolbar-container") || this;
        }
        return ToolbarContainer;
    }(Xplore));
    Xplore.ToolbarContainer = ToolbarContainer;
    var Toolbar = /** @class */ (function (_super) {
        __extends(Toolbar, _super);
        function Toolbar(param) {
            return _super.call(this, param, "toolbar") || this;
        }
        return Toolbar;
    }(Xplore));
    Xplore.Toolbar = Toolbar;
    //Others
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        function Background(param) {
            return _super.call(this, param, "background") || this;
        }
        Background.prototype.Refresh = function () {
            this.object.style.zIndex = (++Xplore.zindex).toString();
            this.Events();
        };
        ;
        return Background;
    }(Xplore));
    Xplore.Background = Background;
})(Xplore || (Xplore = {}));
window.onload = function () {
    if (this.Run)
        this.Run();
};
document.onkeydown = function (event) {
    var key = "";
    if (event.ctrlKey) {
        key += "ctrl+";
    }
    if (event.shiftKey)
        key += "shift+";
    if (event.altKey)
        key += "alt+";
    key += event.key;
    key = key.toLowerCase();
    for (var shortcutkey in Xplore.shortcuts)
        if (shortcutkey.toLowerCase() === key)
            if (Xplore.shortcuts[shortcutkey].action) {
                event.preventDefault();
                Xplore.shortcuts[shortcutkey].action(Xplore.shortcuts[shortcutkey].menu);
            }
};
//# sourceMappingURL=xplore.js.map