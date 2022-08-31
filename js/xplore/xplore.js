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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var XORIENTATION;
(function (XORIENTATION) {
    XORIENTATION[XORIENTATION["HORIZONTAL"] = 1] = "HORIZONTAL";
    XORIENTATION[XORIENTATION["VERTICAL"] = 2] = "VERTICAL";
})(XORIENTATION || (XORIENTATION = {}));
var XPOSITION;
(function (XPOSITION) {
    XPOSITION[XPOSITION["NONE"] = 0] = "NONE";
    XPOSITION[XPOSITION["TOP"] = 1] = "TOP";
    XPOSITION[XPOSITION["BOTTOM"] = 2] = "BOTTOM";
    XPOSITION[XPOSITION["LEFT"] = 3] = "LEFT";
    XPOSITION[XPOSITION["RIGHT"] = 4] = "RIGHT";
})(XPOSITION || (XPOSITION = {}));
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
    XINPUTTYPE["TEXTAREA"] = "textarea";
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
                this.classes = __spreadArray(__spreadArray([], this.classes, true), param.classes, true);
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
        this.object.innerHTML = "";
        if (this.icon) {
            var icon = this.DisplayIcon(this.icon);
            this.object.appendChild(icon);
            if (this.iconcolor)
                icon.style.color = this.iconcolor;
        }
        if (this.text) {
            var text = document.createElement("div");
            text.classList.add("text");
            text.innerHTML = this.text;
            this.object.append(text);
        }
        this.RefreshChildren();
        this.AfterRefresh();
        this.Events();
    };
    Xplore.prototype.RefreshChildren = function () {
        //Children
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].Show(this.object);
        }
    };
    ;
    Xplore.prototype.AfterRefresh = function () {
    };
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
        child.parentcontrol = this;
        this.children.push(child);
        return child;
    };
    Xplore.prototype.Clear = function () {
        this.children.forEach(function (element) {
            element.Dispose();
        });
        this.children = [];
    };
    Xplore.prototype.Dispose = function () {
        this.children.forEach(function (element) {
            element.Dispose();
        });
        if (this.object)
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
    Xplore.POST = function (url, data, resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
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
        xhttp.send(data);
    };
    Xplore.FormatDate = function (date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    Xplore.SaveFile = function (data, filename, type) {
        var file = new Blob([data], { type: type });
        var a = document.createElement("a");
        var url = URL.createObjectURL(file);
        if (type === "image/jpg" || type === "image/jpeg" || type === "image/png")
            a.href = data;
        else
            a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    };
    Xplore.SaveExcel = function (filename, table, title) {
        var path = filename + ".xlsx";
        var wb = window.XLSX.utils.table_to_book(table, { sheet: title });
        window.XLSX.writeFile(wb, path);
    };
    ;
    Xplore.SaveExcel2 = function (filename, table, info, title, title2) {
        var path = filename + ".xlsx";
        var ws = window.XLSX.utils.aoa_to_sheet(info);
        var wb = window.XLSX.utils.table_to_book(table, { sheet: title });
        window.XLSX.utils.book_append_sheet(wb, ws, title2);
        window.XLSX.writeFile(wb, path);
    };
    ;
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
    var Card = /** @class */ (function (_super) {
        __extends(Card, _super);
        function Card(param) {
            return _super.call(this, param, "card") || this;
        }
        Card.prototype.Refresh = function () {
            this.object.innerHTML = "";
            if (this.icon)
                this.object.appendChild(this.DisplayIcon(this.icon));
            if (this.text) {
                var text = document.createElement("div");
                text.classList.add("text");
                text.append(this.text);
                this.object.append(text);
            }
        };
        return Card;
    }(Xplore));
    Xplore.Card = Card;
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
        function ScrollContainer(classes) {
            var _this = _super.call(this, undefined, "scroll-container") || this;
            if (classes)
                _this.classes = __spreadArray(__spreadArray([], _this.classes, true), classes, true);
            return _this;
        }
        return ScrollContainer;
    }(Xplore));
    Xplore.ScrollContainer = ScrollContainer;
    var HorizontalContainer = /** @class */ (function (_super) {
        __extends(HorizontalContainer, _super);
        function HorizontalContainer(orientation) {
            return _super.call(this, undefined, "horizontal-container") || this;
        }
        HorizontalContainer.prototype.Refresh = function () {
            this.object.innerHTML = "";
            this.body = document.createElement("div");
            this.object.appendChild(this.body);
            this.RefreshChildren();
            this.Events();
        };
        HorizontalContainer.prototype.RefreshChildren = function () {
            //Children
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].Show(this.body);
            }
        };
        ;
        return HorizontalContainer;
    }(Xplore));
    Xplore.HorizontalContainer = HorizontalContainer;
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
                self.size = [e.clientX - self.parent.offsetLeft - self.splittersize / 2, undefined];
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
            param = param || {};
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
                    icon: "close",
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
        };
        ;
        Form.prototype.SetLocation = function (left, top) {
            this.object.style.left = left + "px";
            this.object.style.top = top + "px";
        };
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
            Xplore.zindex = 2;
            if (this.object) {
                this.object.remove();
                delete this.object;
            }
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
    var Tab = /** @class */ (function (_super) {
        __extends(Tab, _super);
        function Tab(param) {
            var _this = _super.call(this, param, "form") || this;
            _this.position = XPOSITION.TOP;
            _this.tabs = [];
            _this.index = 0;
            _this.classes.push("tab");
            return _this;
        }
        Tab.prototype.Refresh = function () {
            var self = this;
            this.object.innerHTML = "";
            if (this.position === XPOSITION.TOP) {
                //Header
                this.header = document.createElement("div");
                this.header.classList.add("form-header");
                this.object.appendChild(this.header);
                this.RefreshHeader();
            }
            else {
                this.object.classList.add("no-header");
            }
            //Body
            this.body = document.createElement("div");
            this.body.classList.add("form-body");
            this.object.appendChild(this.body);
            this.RefreshBody();
            if (this.position === XPOSITION.BOTTOM) {
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
        Tab.prototype.RefreshHeader = function () {
            var self = this;
            this.header.innerHTML = "";
            var buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.header.appendChild(buttons);
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].button.Show(buttons);
            }
        };
        ;
        Tab.prototype.RefreshBody = function () {
            this.body.innerHTML = "";
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].container.Show(this.body);
            }
            this.RefreshTab();
        };
        ;
        Tab.prototype.RefreshTab = function () {
            var width = this.object.clientWidth;
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].container.object.style.left = (i - this.index) * width + "px";
                this.tabs[i].container.object.style.right = (this.index - i) * width + "px";
            }
            this.tabs[this.index].container.Refresh();
        };
        Tab.prototype.RefreshFooter = function () {
            var self = this;
            this.footer.innerHTML = "";
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].button.tag = i;
                this.tabs[i].button.onclick = function (object) {
                    self.index = object.tag;
                    if (self.tabs[self.index].onclick)
                        self.tabs[self.index].onclick();
                    self.RefreshTab();
                };
                this.tabs[i].button.Show(this.footer);
            }
        };
        ;
        return Tab;
    }(Xplore));
    Xplore.Tab = Tab;
    var Expander = /** @class */ (function (_super) {
        __extends(Expander, _super);
        function Expander(param) {
            var _this = _super.call(this, param, "expander") || this;
            _this.collapsed = true;
            _this.icon = "chevron-down";
            return _this;
        }
        Expander.prototype.Refresh = function () {
            this.object.innerHTML = "";
            this.header = document.createElement("div");
            this.header.classList.add("expander-header");
            this.object.appendChild(this.header);
            if (this.icon) {
                var icon = this.DisplayIcon(this.icon);
                this.header.appendChild(icon);
                if (this.iconcolor)
                    icon.style.color = this.iconcolor;
            }
            if (this.text) {
                var text = document.createElement("div");
                text.classList.add("text");
                text.innerHTML = this.text;
                this.header.append(text);
            }
            this.RefreshChildren();
            this.AfterRefresh();
            this.Events();
        };
        Expander.prototype.Events = function () {
            var self = this;
            this.header.onclick = function () {
                self.collapsed = !self.collapsed;
                var icon = self.object.querySelector(".icon");
                if (!self.collapsed) {
                    self.object.classList.add("expand");
                    icon.classList.remove("mdi-chevron-down");
                    icon.classList.add("mdi-chevron-up");
                }
                else {
                    self.object.classList.remove("expand");
                    icon.classList.remove("mdi-chevron-up");
                    icon.classList.add("mdi-chevron-down");
                }
            };
        };
        return Expander;
    }(Xplore));
    Xplore.Expander = Expander;
    //Element
    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text(param) {
            return _super.call(this, param, "text") || this;
        }
        Text.prototype.Refresh = function () {
            this.object.innerHTML = this.text;
        };
        return Text;
    }(Xplore));
    Xplore.Text = Text;
    var TextEditor = /** @class */ (function (_super) {
        __extends(TextEditor, _super);
        function TextEditor(param) {
            return _super.call(this, param, "texteditor") || this;
        }
        TextEditor.prototype.Refresh = function () {
            var self = this;
            this.object.innerHTML = "";
            var buttons = document.createElement("div");
            buttons.classList.add("texteditor-buttons");
            this.object.appendChild(buttons);
            var btnbold = document.createElement("button");
            btnbold.appendChild(this.DisplayIcon("format-bold"));
            btnbold.classList.add("button");
            btnbold.onclick = function () {
                self.buttonclick = "bold";
                self.RefreshValue();
            };
            buttons.appendChild(btnbold);
            var btnitalic = document.createElement("button");
            btnitalic.appendChild(this.DisplayIcon("format-italic"));
            btnitalic.classList.add("button");
            btnitalic.onclick = function () {
                self.buttonclick = "italic";
                self.RefreshValue();
            };
            buttons.appendChild(btnitalic);
            var btnunderline = document.createElement("button");
            btnunderline.appendChild(this.DisplayIcon("format-underline"));
            btnunderline.classList.add("button");
            btnunderline.onclick = function () {
                self.buttonclick = "underline";
                self.RefreshValue();
            };
            buttons.appendChild(btnunderline);
            var btnupper = document.createElement("button");
            btnupper.appendChild(this.DisplayIcon("format-letter-case-upper"));
            btnupper.classList.add("button");
            btnupper.onclick = function () {
                self.buttonclick = "upper";
                self.RefreshValue();
            };
            buttons.appendChild(btnupper);
            var btnlower = document.createElement("button");
            btnlower.appendChild(this.DisplayIcon("format-letter-case-lower"));
            btnlower.classList.add("button");
            btnlower.onclick = function () {
                self.buttonclick = "lower";
                self.RefreshValue();
            };
            buttons.appendChild(btnlower);
            var btnparagraph = document.createElement("button");
            btnparagraph.appendChild(this.DisplayIcon("format-paragraph"));
            btnparagraph.classList.add("button");
            btnparagraph.onclick = function () {
                self.buttonclick = "paragraph";
                self.RefreshValue();
            };
            buttons.appendChild(btnparagraph);
            var btnlink = document.createElement("button");
            btnlink.appendChild(this.DisplayIcon("link"));
            btnlink.classList.add("button");
            btnlink.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink);
            //----------------------
            var btnlink1 = document.createElement("button");
            btnlink1.appendChild(this.DisplayIcon("link"));
            btnlink1.classList.add("button");
            btnlink1.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink1);
            var btnlink2 = document.createElement("button");
            btnlink2.appendChild(this.DisplayIcon("link"));
            btnlink2.classList.add("button");
            btnlink2.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink2);
            var btnlink3 = document.createElement("button");
            btnlink3.appendChild(this.DisplayIcon("link"));
            btnlink3.classList.add("button");
            btnlink3.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink3);
            var btnlink4 = document.createElement("button");
            btnlink4.appendChild(this.DisplayIcon("link"));
            btnlink4.classList.add("button");
            btnlink4.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink4);
            var btnlink5 = document.createElement("button");
            btnlink5.appendChild(this.DisplayIcon("link"));
            btnlink5.classList.add("button");
            btnlink5.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink5);
            var btnlink6 = document.createElement("button");
            btnlink6.appendChild(this.DisplayIcon("link"));
            btnlink6.classList.add("button");
            btnlink6.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            };
            buttons.appendChild(btnlink6);
            var input = document.createElement("textarea");
            if (this.placeholder) {
                input.placeholder = this.placeholder;
                input.value = "";
            }
            this.object.appendChild(input);
        };
        ;
        TextEditor.prototype.RefreshValue = function () {
            var self = this;
            var input = this.object.querySelector("textarea");
            var text = input.value;
            var selectionstart = input.selectionStart;
            var selectend = input.selectionEnd;
            var addcode;
            var replaceval;
            var selectendtext = text.substring(selectionstart, selectend);
            // let selectendtext = text.slice(0, selectionstart) + "[B]" + text.slice(0, selectend) + "[B]";
            switch (self.buttonclick) {
                case "bold":
                    addcode = "[B]" + selectendtext + "[B]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
                case "italic":
                    addcode = "[I]" + selectendtext + "[I]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
                case "underline":
                    addcode = "[U]" + selectendtext + "[U]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
                case "upper":
                    addcode = "[UP]" + selectendtext + "[UP]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
                case "lower":
                    addcode = "[LOw]" + selectendtext + "[LOw]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
                case "paragraph":
                    addcode = "[P]" + selectendtext + "[P]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
                case "link":
                    addcode = "[L]" + selectendtext + "[L]";
                    replaceval = text.replace(selectendtext, addcode);
                    input.value = replaceval;
                    break;
            }
            self.value = input.value;
        };
        ;
        return TextEditor;
    }(Xplore));
    Xplore.TextEditor = TextEditor;
    var TextBlock = /** @class */ (function (_super) {
        __extends(TextBlock, _super);
        function TextBlock(param) {
            return _super.call(this, param, "textblock") || this;
        }
        return TextBlock;
    }(Xplore));
    Xplore.TextBlock = TextBlock;
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(param) {
            return _super.call(this, param, "button") || this;
        }
        return Button;
    }(Xplore));
    Xplore.Button = Button;
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(source) {
            var _this = _super.call(this, undefined, "text") || this;
            _this.source = source;
            return _this;
        }
        Image.prototype.Refresh = function () {
            this.object.innerHTML = "";
            var image = document.createElement("img");
            image.src = this.source;
            this.object.appendChild(image);
        };
        return Image;
    }(Xplore));
    Xplore.Image = Image;
    var List = /** @class */ (function (_super) {
        __extends(List, _super);
        function List(param) {
            var _this = _super.call(this, param, "list") || this;
            _this.buttons = [];
            _this.buttons = param.buttons;
            return _this;
        }
        List.prototype.AfterRefresh = function () {
            if (this.buttons && this.buttons.length) {
                var container = document.createElement("div");
                container.classList.add("button-container");
                this.object.appendChild(container);
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var button = _a[_i];
                    button.Show(container);
                }
            }
        };
        return List;
    }(Xplore));
    Xplore.List = List;
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
    //Tree
    var Tree = /** @class */ (function (_super) {
        __extends(Tree, _super);
        function Tree(param) {
            return _super.call(this, param, "tree") || this;
        }
        Tree.prototype.Refresh = function () {
            this.object.innerHTML = "";
            var header = document.createElement("div");
            header.classList.add("tree-header");
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
        return Tree;
    }(Xplore));
    Xplore.Tree = Tree;
    var TreeNode = /** @class */ (function (_super) {
        __extends(TreeNode, _super);
        function TreeNode(param) {
            var _this = _super.call(this, param, "treenode") || this;
            _this.data = param.data;
            return _this;
        }
        TreeNode.prototype.Refresh = function () {
            this.object.innerHTML = "";
            if (this.children.length)
                this.object.appendChild(this.DisplayIcon("chevron-right"));
            // else
            //     this.object.appendChild(this.DisplayIcon("circle-small"));
            if (this.icon)
                this.object.appendChild(this.DisplayIcon(this.icon));
            if (this.text)
                this.object.append(this.text);
            this.RefreshChildren();
            this.Events();
        };
        TreeNode.prototype.Events = function () {
            var self = this;
            this.object.onclick = function (e) {
                e.stopPropagation();
                var inner = this;
                if (inner.children.length === 1) {
                    self.onclick(self);
                }
                else {
                    if (inner.classList.contains("expand")) {
                        inner.classList.remove("expand");
                        inner.children[0].classList.remove("mdi-chevron-down");
                        inner.children[0].classList.add("mdi-chevron-right");
                    }
                    else {
                        inner.classList.add("expand");
                        inner.children[0].classList.remove("mdi-chevron-right");
                        inner.children[0].classList.add("mdi-chevron-down");
                    }
                    self.onclick(self);
                }
            };
        };
        return TreeNode;
    }(Xplore));
    Xplore.TreeNode = TreeNode;
    //Calendar
    var Calendar = /** @class */ (function (_super) {
        __extends(Calendar, _super);
        function Calendar() {
            var _this = _super.call(this, undefined, "calendar") || this;
            _this.value = new Date();
            _this.todayyear = _this.value.getFullYear();
            _this.todaymonth = _this.value.getMonth();
            _this.todaydate = _this.value.getDate();
            return _this;
        }
        Calendar.prototype.Refresh = function () {
            this.header = new Xplore.Container({ classes: ["calendar-header"] });
            this.calendar = new Xplore.Container();
            this.list = new Xplore.ScrollContainer();
            var splitter = new Xplore.SplitContainer();
            splitter.orientation = XORIENTATION.VERTICAL;
            splitter.size = [52];
            splitter.children = [
                this.header,
                this.calendar
            ];
            splitter.Show(this.object);
            var mainsplitter = new Xplore.SplitContainer();
            mainsplitter.orientation = XORIENTATION.VERTICAL;
            mainsplitter.children = [
                splitter,
                this.list
            ];
            mainsplitter.Show(this.object);
            this.RefreshMonth(this.value);
        };
        Calendar.prototype.RefreshMonth = function (value) {
            this.RefreshHeader();
            this.RefreshCalendar(value);
            this.RefreshList();
        };
        Calendar.prototype.RefreshCalendar = function (value) {
            this.RefreshHeader();
            var data = [];
            var calendar = [];
            var year = value.getFullYear();
            var month = value.getMonth();
            var date = value.getDate();
            var day = new Date(value.getFullYear(), value.getMonth(), 1).getDay();
            var previousdays = new Date(value.getFullYear(), value.getMonth(), 0).getDate();
            var days = new Date(value.getFullYear(), value.getMonth() + 1, 0).getDate();
            var cellyear;
            var cellmonth;
            var cellday;
            //Previous Month
            for (var i = 0; i < day; i++) {
                cellday = previousdays - day + i + 1;
                if (month === 0)
                    cellyear = year - 1;
                else
                    cellyear = year;
                if (month === 0)
                    cellmonth = 12;
                else
                    cellmonth = month;
                data.push(this.AddDay(cellyear, cellmonth - 1, cellday, year, month));
                if (data.length === 7) {
                    calendar.push(data);
                    data = [];
                }
            }
            //Current Month
            for (var i = 1; i <= days; i++) {
                data.push(this.AddDay(year, month, i, year, month));
                if (data.length === 7) {
                    calendar.push(data);
                    data = [];
                }
            }
            var j = 1;
            //Next Month
            for (var i = data.length; i <= 7; i++) {
                cellday = j++;
                if (month === 11)
                    cellyear = year + 1;
                else
                    cellyear = year;
                if (month === 11)
                    cellmonth = 0;
                else
                    cellmonth = month;
                data.push(this.AddDay(cellyear, cellmonth + 1, cellday, year, month));
                if (data.length === 7) {
                    calendar.push(data);
                    data = [];
                }
            }
            var table = new Xplore.Table({
                columns: [
                    { name: "0", text: "Sun" },
                    { name: "1", text: "Mon" },
                    { name: "2", text: "Tue" },
                    { name: "3", text: "Wed" },
                    { name: "4", text: "Thu" },
                    { name: "5", text: "Fri" },
                    { name: "6", text: "Sat" },
                ],
                data: calendar
            });
            this.calendar.Clear();
            table.Show(this.calendar);
        };
        Calendar.prototype.RefreshHeader = function () {
            this.header.Clear();
            this.header.Add(new Xplore.Button({ text: "Today", classes: ["calendar-header-today"] }));
            this.header.Add(new Xplore.Button({ icon: "chevron-left" }));
            this.header.Add(new Xplore.Button({ icon: "chevron-right" }));
            this.header.Add(new Xplore.Button({ text: "October 2021" }));
            this.header.Refresh();
        };
        Calendar.prototype.RefreshList = function () {
            this.list.Clear();
            var events = [];
            events.push({
                text: "Holiday"
            });
            events.push({
                text: "Webinar"
            });
            this.list.Add(new Xplore.CalendarList(new Date(), events));
            this.list.Refresh();
        };
        Calendar.prototype.AddDay = function (year, month, day, currentyear, currentmonth) {
            var cellyear;
            var cellmonth;
            var cellday = day.toString();
            var listevent;
            var container = new Xplore.Container({});
            var text = container.Add(new Xplore({ text: cellday, classes: ["calendar-day"] }));
            if (year !== currentyear || month !== currentmonth)
                text.classes.push("disable");
            cellyear = year.toString();
            if (month < 9)
                cellmonth = "0" + (month + 1);
            else
                cellmonth = (month + 1).toString();
            if (day < 10)
                cellday = "0" + cellday;
            container.tag = cellyear + "-" + cellmonth + "-" + cellday;
            //Highlight current date
            if (this.todaydate === day && this.todaymonth === month && this.todayyear === year) {
                container.classes.push("current");
            }
            // //Add events
            // let icon;
            // for (let j = 0; j < this.events.length; j++) {
            //     event = this.events[j];
            //     event.index = j;
            //     if (event.year === year && event.month === (month + 1) && event.day === day) {
            //         if (event.text && event.text.Show)
            //             container.Add(event.text);
            //         else {
            //             icon = "circle";
            //             if (event.time)
            //                 icon = new mobiwork({ class: "calendar-event-time", text: event.time });
            //             listevent = container.Add(new Xplore.List({
            //                 icon: icon,
            //                 data: event,
            //                 text: event.text,
            //                 onclick: function (object) {
            //                     let day = $(this.parent[0].parentElement.parentElement);
            //                     let date = day.attr("data-cell");
            //                     if (self.onclick) {
            //                         self.onclick(object);
            //                     } else if (self.showeditor) {
            //                         self.ShowEditor(new Date(date));
            //                     }
            //                 }
            //             }));
            //         }
            //         if (event.icon) {
            //             listevent.class += " has-icon";
            //             listevent.icon = event.icon;
            //         }
            //         listevent.Add(new mobiwork({
            //             class: "tooltip",
            //             text: event.text
            //         }));
            //         listevent.class += " calendar-event";
            //         //Past events
            //         if (event.class === "holiday") {
            //             listevent.class += " calendar-event-holiday";
            //         } else if (((todaymonth + 1) === event.month && todaydate > event.day) || (todaymonth + 1) > event.month)
            //             listevent.class += " calendar-event-expired";
            //         if (event.class)
            //             container.cellclass = event.class;
            //     }
            // }
            return container;
        };
        ;
        return Calendar;
    }(Xplore));
    Xplore.Calendar = Calendar;
    var CalendarList = /** @class */ (function (_super) {
        __extends(CalendarList, _super);
        function CalendarList(date, events) {
            var _this = _super.call(this, undefined, "calendar-list") || this;
            _this.date = date;
            _this.events = events;
            return _this;
        }
        CalendarList.prototype.Refresh = function () {
            var left = new Xplore.Container();
            var date = this.date.getDay();
            var week = this.date.getDate();
            left.Add(new Xplore.Text({ text: date }));
            left.Add(new Xplore.Text({ text: week }));
            left.Show(this.object);
        };
        return CalendarList;
    }(Xplore));
    Xplore.CalendarList = CalendarList;
    //Table
    var Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        function Table(param) {
            var _this = _super.call(this, undefined, "table") || this;
            _this.columns = param.columns;
            _this.data = param.data;
            return _this;
        }
        Table.prototype.Refresh = function () {
            this.object.innerHTML = "";
            this.guid = "table-" + new Date().getTime();
            this.object.classList.add(this.guid);
            this.fragment = new DocumentFragment();
            // Table
            this.table = document.createElement("table");
            this.fragment.appendChild(this.table);
            //Header
            this.header = document.createElement("thead");
            this.header.classList.add("table-header");
            this.table.appendChild(this.header);
            this.RefreshHeader();
            //Body
            this.body = document.createElement("tbody");
            this.body.classList.add("table-body");
            this.table.appendChild(this.body);
            this.RefreshBody();
            //Footer
            this.footer = document.createElement("div");
            this.footer.classList.add("table-footer");
            this.fragment.appendChild(this.footer);
            this.RefreshFooter();
            this.object.appendChild(this.fragment);
        };
        Table.prototype.RefreshHeader = function () {
            var th;
            var tr = document.createElement("tr");
            this.header.appendChild(tr);
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                th = document.createElement("th");
                th.innerHTML = column.text;
                tr.appendChild(th);
            }
        };
        Table.prototype.RefreshBody = function () {
            var tr;
            var td;
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var cell = _a[_i];
                tr = document.createElement("tr");
                this.body.appendChild(tr);
                for (var _b = 0, _c = this.columns; _b < _c.length; _b++) {
                    var column = _c[_b];
                    td = document.createElement("td");
                    if (cell[column.name] instanceof Xplore) {
                        cell[column.name].Show(td);
                    }
                    else {
                        td.innerHTML = cell[column.name];
                    }
                    tr.appendChild(td);
                }
            }
        };
        Table.prototype.RefreshFooter = function () {
        };
        return Table;
    }(Xplore));
    Xplore.Table = Table;
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