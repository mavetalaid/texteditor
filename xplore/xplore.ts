interface Window {
    XLSX: any;
}

interface XploreParam {
    text?: any,
    icon?: string,
    classes?: string[],
    onclick?: Function;
}

interface XploreParamMenu extends XploreParam {
    shortcut?: string;
    onclick?: Function;
    separator?: boolean;
}

interface XploreParamList extends XploreParam {
    buttons?: Xplore[];
}

interface XploreBindParam {
    name: string;
    object: Object;
}

interface XploreParamCheckbox extends XploreParam {
    value?: boolean;
    bind?: XploreBindParam;
}

interface XploreParamForm extends XploreParam {
    width?: number;
    height?: number;
    showheader?: boolean;
    showfooter?: boolean;
}

interface XploreParamTree extends XploreParam {
    data?: any;
}

interface XMenu {
    action: Function;
    menu?: Xplore.Menu;
}

interface Dictionary<T> {
    [Key: string]: T;
}

interface XBind {
    object?: Object;
    name?: string;
}

interface XTabItem {
    button: Xplore;
    container: Xplore;
    onclick?: Function;
}

interface XTableParam {
    columns: XTableParamColumn[];
    data: Object[];
    showheader?: boolean;
    showfooter?: boolean;
}

interface XTableParamColumn {
    name: string;
    text: string;
    readonly?: boolean;
    sort?: boolean;
    filter?: boolean;
}

interface XCalendarItem {
    text: string;
    image?: string;
    details?: string;
}

enum XORIENTATION {
    HORIZONTAL = 1,
    VERTICAL = 2
}

enum XPOSITION {
    NONE = 0,
    TOP = 1,
    BOTTOM = 2,
    LEFT = 3,
    RIGHT = 4
}

enum XINPUTTYPE {
    BUTTON = "button",
    CHECKBOX = "checkbox",
    COLOR = "color",
    DATE = "date",
    DATETIME = "datetime-local",
    EMAIL = "email",
    FILE = "file",
    HIDDEN = "hidden",
    IMAGE = "image",
    MONTH = "month",
    NUMBER = "number",
    PASSWORD = "password",
    RADIO = "radio",
    RANGE = "range",
    RESET = "reset",
    SEARCH = "search",
    SUBMIT = "submit",
    TELEPHONE = "tel",
    TEXT = "text",
    TEXTAREA = "textarea",
    TIME = "time",
    URL = "url",
    WEEK = "week"
}

enum XMENUTYPE {
    DEFAULT = "menu-default",
    MINIRIBBON = "menu-mini-ribbon",
    RIBBON = "menu-ribbon"
}

class Xplore {
    element: string = "div";
    object: HTMLElement;
    parent: HTMLElement;
    children: Xplore[] = [];
    parentcontrol: Xplore;
    classes: string[];

    onclick: Function;

    icon: string;
    iconcolor: string;
    text: string;

    enabled: boolean = true;
    readonly: boolean = false;
    tag: any;

    static zindex: number = 100;
    static activemenu: Xplore.Menu;
    static shortcuts: Dictionary<XMenu> = {};

    constructor(param?: XploreParam, classname?: string) {
        this.classes = [];

        if (param != null) {
            this.icon = param.icon;
            this.text = param.text;
            this.onclick = param.onclick;

            if (param.classes) {
                this.classes = [...this.classes, ...param.classes];
            }
        }

        if (classname)
            this.classes.push(classname);
    }

    Show(parent?: any): void {
        this.object = document.createElement(this.element);

        for (let classname of this.classes)
            this.object.classList.add(classname);

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
    }

    Refresh(): void {
        this.object.innerHTML = "";

        if (this.icon) {
            let icon = this.DisplayIcon(this.icon);
            this.object.appendChild(icon);

            if (this.iconcolor)
                icon.style.color = this.iconcolor;
        }

        if (this.text) {
            let text = document.createElement("div");
            text.classList.add("text");
            text.innerHTML = this.text;
            this.object.append(text);
        }

        this.RefreshChildren();
        this.AfterRefresh();
        this.Events();
    }

    RefreshChildren(): void {
        //Children
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].Show(this.object);
        }
    };

    AfterRefresh(): void {
    }

    Events(): void {
        let self = this;

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

    Bind(object: Object): void {
        for (let prop in object) {
            if (object[prop] instanceof Xplore) {
                this.Add(object[prop]);
            }
        }
    }

    Add(child: Xplore): Xplore {
        child.parentcontrol = this;
        this.children.push(child);
        return child;
    }

    Clear(): void {
        this.children.forEach(element => {
            element.Dispose();
        });

        this.children = [];
    }

    Dispose(): void {
        this.children.forEach(element => {
            element.Dispose();
        });

        if (this.object)
            this.object.remove();
    }

    Resize(): void {
    }

    DisplayIcon(icon: string): HTMLElement {
        if (icon.includes(".jpg") || icon.includes(".png")) {
            let element: HTMLImageElement;
            element = document.createElement("img");
            element.classList.add("icon");
            element.src = icon;
            return element;

        } else {
            let element: HTMLElement;
            element = document.createElement("i");
            element.classList.add("icon");
            element.classList.add("mdi");
            element.classList.add("mdi-" + icon);

            return element;
        }
    };


    //Static functions

    static GetJSON(url: string, resolve: Function, reject?: Function) {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (resolve)
                    resolve(JSON.parse(this.responseText));
            } else {
                if (reject)
                    resolve(this.responseText);
            }
        };

        xhttp.send();
    }

    static POST(url: string, data: any, resolve: Function, reject?: Function) {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (resolve)
                    resolve(JSON.parse(this.responseText));
            } else {
                if (reject)
                    resolve(this.responseText);
            }
        };

        xhttp.send(data);
    }

    static FormatDate(date: Date): string {
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
    }

    static SaveFile(data: string, filename: string, type?: string): void {
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
    }

    static SaveExcel(filename: string, table: HTMLElement, title: string): void {
        let path = filename + ".xlsx";

        let wb = window.XLSX.utils.table_to_book(table, { sheet: title });
        window.XLSX.writeFile(wb, path);
    };

    static SaveExcel2(filename: string, table: HTMLElement, info: string[][], title: string, title2: string): void {
        let path = filename + ".xlsx";
        let ws = window.XLSX.utils.aoa_to_sheet(info);

        let wb = window.XLSX.utils.table_to_book(table, { sheet: title });
        window.XLSX.utils.book_append_sheet(wb, ws, title2);

        window.XLSX.writeFile(wb, path);
    };
}



namespace Xplore {
    //View

    export class AppView extends Xplore {
        body: HTMLDivElement;
        header: HTMLDivElement;
        buttons: Xplore[] = [];

        showmenu: boolean = true;

        constructor(param?: XploreParam) {
            super(param, "view");
        }

        Refresh(): void {
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

        RefreshHeader(): void {
            var self = this;

            this.header.innerHTML = "";

            if (this.showmenu) {
                let menu = new Xplore.Button({
                    icon: "menu",
                    onclick: function (): Xplore {
                        let container = new Xplore.Container();
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

        RefreshBody(): void {
            this.body.innerHTML = "";

            //Children
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].Show(this.body);
            }
        };

    }

    export class Card extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "card");
        }

        Refresh(): void {
            this.object.innerHTML = "";

            if (this.icon)
                this.object.appendChild(this.DisplayIcon(this.icon));

            if (this.text) {
                let text = document.createElement("div");
                text.classList.add("text");
                text.append(this.text);

                this.object.append(text);
            }
        }
    }


    //Container

    export class Container extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "container");
        }
    }

    export class ScrollContainer extends Xplore {
        constructor(classes?: string[]) {
            super(undefined, "scroll-container");

            if (classes)
                this.classes = [...this.classes, ...classes];
        }
    }

    export class HorizontalContainer extends Xplore {
        body: HTMLDivElement;

        constructor(orientation?: XORIENTATION) {
            super(undefined, "horizontal-container");
        }

        Refresh(): void {
            this.object.innerHTML = "";
            this.body = document.createElement("div");
            this.object.appendChild(this.body);

            this.RefreshChildren();
            this.Events();
        }

        RefreshChildren(): void {
            //Children
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].Show(this.body);
            }
        };
    }

    export class SplitContainer extends Xplore {
        panel1: HTMLDivElement;
        panel2: HTMLDivElement;

        orientation: XORIENTATION;
        splittersize: number = 0;
        gap: HTMLDivElement;
        expanded: boolean = false;
        size: number[];
        children: Xplore[] = [];

        private _splittersize: number;
        private _size: number[];

        constructor() {
            super(undefined, "split-container");
        }

        Refresh(): void {
            this.object.innerHTML = "";

            this.panel1 = document.createElement("div");
            this.gap = document.createElement("div");
            this.panel2 = document.createElement("div");

            this.object.appendChild(this.panel1);
            this.object.appendChild(this.gap);
            this.object.appendChild(this.panel2);
            this.Resize();

            //Children
            for (let i = 0; i < this.children.length && i < 2; i++) {
                this.Set(this.children[i], i);
            }

            let self = this;
            window.onresize = function () {
                for (let child of self.children) {
                    child.Resize();
                }
            };

            this.Events();
        }

        Set(child: Xplore, index: number): Xplore {
            let panel = index === 0 ? this.panel1 : this.panel2;

            this.children[index] = child;

            if (panel) {
                panel.innerHTML = "";
                child.Show(panel);
            }

            return child;
        };

        Resize(): void {
            let gap = this.splittersize / 2;

            if (this.size) {
                if (this.orientation) {
                    //Vertical
                    if (this.size[0] !== undefined) {
                        this.panel1.setAttribute("style", "top: 0; height: " + this.size[0] + "px; left: 0; right: 0 ");
                        this.panel2.setAttribute("style", "bottom: 0; top: " + (this.size[0] + this.splittersize) + "px; left: 0; right: 0 ");

                        if (this.splittersize !== 0)
                            this.gap.setAttribute("style", "top: " + this.size[0] + "px; height: " + this.splittersize + "px; left: 0; right: 0 ");

                    } else if (this.size[1] !== undefined) {
                        this.panel1.setAttribute("style", "top: 0; bottom: " + this.size[1] + "px; left: 0; right: 0 ");
                        this.panel2.setAttribute("style", "bottom: 0; height: " + (this.size[1] + this.splittersize) + "px; left: 0; right: 0 ");

                        if (this.splittersize !== 0)
                            this.gap.setAttribute("style", "bottom: " + this.size[1] + "px; height: " + this.splittersize + "px; left: 0; right: 0 ");
                    }

                } else {
                    //Horizontal
                    if (this.size[0] !== undefined) {
                        this.panel1.setAttribute("style", "left: 0; width: " + this.size[0] + "px; top: 0; bottom: 0 ");
                        this.panel2.setAttribute("style", "right: 0; left: " + (this.size[0] + this.splittersize) + "px; top: 0; bottom: 0 ");
                        this.gap.setAttribute("style", "left: " + this.size[0] + "px; width: " + this.splittersize + "px; top: 0; bottom: 0 ");

                    } else if (this.size[1] !== undefined) {
                        this.panel1.setAttribute("style", "left: 0; right: " + (this.size[1] + this.splittersize) + "px; top: 0; bottom: 0 ");
                        this.panel2.setAttribute("style", "right: 0; width: " + this.size[1] + "px; top: 0; bottom: 0 ");
                        this.gap.setAttribute("style", "right: " + this.size[1] + "px; width: " + this.splittersize + "px; top: 0; bottom: 0 ");
                    }
                }
            } else {
                if (this.orientation) {
                    //Vertical
                    this.panel1.setAttribute("style", "top: 0; height: calc(50% - " + gap + "px); left: 0; right: 0 ");
                    this.panel2.setAttribute("style", "bottom: 0; height: calc(50% - " + gap + "px); left: 0; right: 0 ");

                    if (this.splittersize !== 0)
                        this.gap.setAttribute("style", "top: calc(50% - " + gap + "px); height: " + this.splittersize + "px; left: 0; right: 0 ");

                } else {
                    //Horizontal
                    this.panel1.setAttribute("style", "left: 0; width: calc(50% - " + gap + "px); top: 0; bottom: 0 ");
                    this.panel2.setAttribute("style", "right: 0; width: calc(50% - " + gap + "px); top: 0; bottom: 0 ");

                    if (this.splittersize !== 0)
                        this.gap.setAttribute("style", "left: calc(50% - " + gap + "px); width: " + this.splittersize + "px; top: 0; bottom: 0 ");
                }
            }
        };

        Expand(index: number): void {
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

        Restore(): void {
            this.splittersize = this._splittersize;
            this.size = this._size;
            this.expanded = false;

            this.Resize();
        };

        Events(): void {
            let self = this;
            let resizing: boolean;
            let currentx: number;
            let currenty: number;

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

                for (let child of self.children) {
                    child.Resize();
                }
            };
        };

    }

    export class Form extends Xplore {
        width: number = 400;
        height: number = 400;

        body: HTMLDivElement;
        header: HTMLDivElement;
        footer: HTMLDivElement;

        background: Xplore.Background;

        buttons: Xplore[] = [];

        modal: boolean = true;
        showheader: boolean = true;
        showfooter: boolean = true;
        showclose: boolean = true;
        showcancel: boolean = true;
        showok: boolean = true;

        onok: Function;
        oncancel: Function;
        onclose: Function;

        oktext = "OK";
        canceltext = "Cancel";

        constructor(param?: XploreParamForm) {
            super(param, "form");
            this.element = "form";

            param = param || {};

            this.width = param.width || 400;
            this.height = param.height || 400;
        }

        Refresh(): void {
            let self = this;

            if (this.modal) {
                this.background = new Xplore.Background({
                    onclick: () => {
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

            } else {
                this.object.classList.add("no-footer");
            }

            this.Resize();
            this.Events();
        };

        RefreshHeader(): void {
            let self = this;

            this.header.innerHTML = "";

            let text = document.createElement("div");
            text.innerHTML = this.text;
            text.classList.add("text");
            this.header.appendChild(text);

            let buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.header.appendChild(buttons);

            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].Show(buttons);
            }

            if (this.showclose) {
                let button = new Xplore.Button({
                    icon: "close",
                    onclick: function () {
                        self.Close();
                    }
                });

                button.Show(buttons);
            }
        };

        RefreshBody(): void {
            this.body.innerHTML = "";

            //Children
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].Show(this.body);
            }
        };

        RefreshFooter(): void {
            let self = this;

            this.footer.innerHTML = "";

            let buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.footer.appendChild(buttons);

            if (this.showok) {
                let button = new Xplore.Input(XINPUTTYPE.SUBMIT, {
                    onclick: function () {
                        if (self.onok)
                            self.onok();

                        self.Close();
                    }
                });

                button.Show(buttons);
            }

            if (this.showcancel) {
                let button = new Xplore.Button({
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

        Resize(): void {
            let w = window.innerWidth;
            let h = window.innerHeight;

            if (this.width > w)
                this.width = w - 32;

            if (this.height > h)
                this.height = h;

            let left = (w - this.width) / 2;
            let top = (h - this.height) / 2;

            this.object.style.width = this.width + "px";
            this.object.style.height = this.height + "px";
            this.object.style.left = left + "px";
            this.object.style.top = top + "px";
        };

        SetLocation(left: number, top: number): void {
            this.object.style.left = left + "px";
            this.object.style.top = top + "px";
        }

        Events(): void {
            let self = this;
            let resizing: boolean;
            let currentx: number;
            let currenty: number;

            if (this.showheader) {
                this.header.onmousedown = function (e) {
                    resizing = true;
                    currentx = e.clientX;
                    currenty = e.clientY;

                    document.body.onmousemove = function (e) {
                        if (resizing) {
                            if (self.object.classList.value.indexOf(" dock") !== -1) {
                                if (Math.abs(e.clientX - currentx) > 10 || Math.abs(e.clientY - currenty) > 10) {
                                    let width = self.object.offsetWidth;

                                    self.object.classList.remove("dock");
                                    document.body.appendChild(self.object);

                                    if (e.clientX > width) {
                                        self.object.style.left = (e.clientX - (width - e.offsetX)) + "px";
                                        self.object.style.top = (e.clientY - e.offsetY) + "px";

                                    } else {
                                        self.object.style.left = (e.clientX - e.offsetX) + "px";
                                        self.object.style.top = (e.clientY - e.offsetY) + "px";
                                    }
                                }
                            } else {
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

        Dispose(): void {
            Xplore.zindex = 2;

            if (this.object) {
                this.object.remove();
                delete this.object;
            }

            for (let child of this.children)
                child.Dispose();

            if (this.modal)
                this.background.Dispose();
        };

        Close(): void {
            this.Dispose();
        };
    }

    export class PropertyGrid extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "propertygrid");
        }

        Refresh() {
            this.object.innerHTML = "";

            let header = document.createElement("div");
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

    }

    export class Grid extends Xplore {
        columns: number = 2;
        rows: number = 2;
        items: Xplore[][] = [];

        constructor(param?: XploreParam) {
            super(param, "grid");
            this.element = "table";
        }

        Refresh(): void {
            for (let i = 0; i < this.rows; i++) {
                let row = document.createElement("tr");
                this.object.appendChild(row);

                for (let j = 0; j < this.columns; j++) {
                    let column = document.createElement("td");
                    row.appendChild(column);

                    if (this.items[i] && this.items[i][j] && this.items[i][j].Show)
                        this.items[i][j].Show(column);
                }
            }
        }

        Set(child: Xplore, rowindex: number, columnindex: number): Xplore {
            if (!this.items[rowindex])
                this.items[rowindex] = [];

            this.items[rowindex][columnindex] = child;
            return child;
        };
    }

    export class iFrame extends Xplore {
        source: string;

        constructor(source: string) {
            super(undefined, "iframe");
            this.source = source;
        }

        Refresh(): void {
            this.object.innerHTML = "";
            let frame = "<iframe src='" + this.source + "'></iframe>";
            this.object.innerHTML = frame;
        }
    }

    export class Tab extends Xplore {
        body: HTMLDivElement;
        header: HTMLDivElement;
        footer: HTMLDivElement;

        position: XPOSITION = XPOSITION.TOP;
        tabs: XTabItem[] = [];
        index: number = 0;

        constructor(param?: XploreParamForm) {
            super(param, "form");
            this.classes.push("tab");
        }

        Refresh(): void {
            let self = this;

            this.object.innerHTML = "";

            if (this.position === XPOSITION.TOP) {
                //Header
                this.header = document.createElement("div");
                this.header.classList.add("form-header");
                this.object.appendChild(this.header);
                this.RefreshHeader();
            } else {
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
            } else {
                this.object.classList.add("no-footer");
            }

            this.Resize();
            this.Events();
        };

        RefreshHeader(): void {
            let self = this;

            this.header.innerHTML = "";

            let buttons = document.createElement("div");
            buttons.classList.add("buttons");
            this.header.appendChild(buttons);

            for (let i = 0; i < this.tabs.length; i++) {
                this.tabs[i].button.Show(buttons);
            }
        };

        RefreshBody(): void {
            this.body.innerHTML = "";

            for (let i = 0; i < this.tabs.length; i++) {
                this.tabs[i].container.Show(this.body);
            }

            this.RefreshTab();
        };

        RefreshTab(): void {
            let width = this.object.clientWidth;

            for (let i = 0; i < this.tabs.length; i++) {
                this.tabs[i].container.object.style.left = (i - this.index) * width + "px";
                this.tabs[i].container.object.style.right = (this.index - i) * width + "px";
            }

            this.tabs[this.index].container.Refresh();
        }

        RefreshFooter(): void {
            let self = this;
            this.footer.innerHTML = "";

            for (let i = 0; i < this.tabs.length; i++) {
                this.tabs[i].button.tag = i;

                this.tabs[i].button.onclick = function (object: Xplore) {
                    self.index = object.tag;

                    if (self.tabs[self.index].onclick)
                        self.tabs[self.index].onclick();

                    self.RefreshTab();
                };

                this.tabs[i].button.Show(this.footer);
            }
        };
    }

    export class Expander extends Xplore {
        collapsed: boolean = true;
        header: HTMLElement;

        constructor(param?: XploreParam) {
            super(param, "expander");

            this.icon = "chevron-down";
        }

        Refresh(): void {
            this.object.innerHTML = "";

            this.header = document.createElement("div");
            this.header.classList.add("expander-header");
            this.object.appendChild(this.header);

            if (this.icon) {
                let icon = this.DisplayIcon(this.icon);
                this.header.appendChild(icon);

                if (this.iconcolor)
                    icon.style.color = this.iconcolor;
            }

            if (this.text) {
                let text = document.createElement("div");
                text.classList.add("text");
                text.innerHTML = this.text;
                this.header.append(text);
            }

            this.RefreshChildren();
            this.AfterRefresh();
            this.Events();
        }

        Events(): void {
            let self = this;

            this.header.onclick = function () {
                self.collapsed = !self.collapsed;

                let icon = self.object.querySelector(".icon");

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
        }
    }


    //Element

    export class Text extends Xplore {
        constructor(param: XploreParam) {
            super(param, "text");
        }

        Refresh(): void {
            this.object.innerHTML = this.text;
        }
    }

    export class TextEditor extends Xplore {
        text: string;
        buttonclick: string;
        value: any;
        placeholder: string;

        onchange: Function;

        constructor(param?: XploreParam) {
            super(param, "texteditor");
        }

        Refresh(): void {
            let self = this;

            this.object.innerHTML = "";

            var buttons = document.createElement("div");
            buttons.classList.add("texteditor-buttons");
            this.object.appendChild(buttons);

            let btnbold = document.createElement("button");
            btnbold.appendChild(this.DisplayIcon("format-bold"));
            btnbold.classList.add("button");
            btnbold.onclick = function () {
                self.buttonclick = "bold";
                self.RefreshValue();
            }
            buttons.appendChild(btnbold);

            let btnitalic = document.createElement("button");
            btnitalic.appendChild(this.DisplayIcon("format-italic"));
            btnitalic.classList.add("button");
            btnitalic.onclick = function () {
                self.buttonclick = "italic";
                self.RefreshValue();
            }
            buttons.appendChild(btnitalic);

            let btnunderline = document.createElement("button");
            btnunderline.appendChild(this.DisplayIcon("format-underline"));
            btnunderline.classList.add("button");
            btnunderline.onclick = function () {
                self.buttonclick = "underline";
                self.RefreshValue();
            }
            buttons.appendChild(btnunderline);

            let btnupper = document.createElement("button");
            btnupper.appendChild(this.DisplayIcon("format-letter-case-upper"));
            btnupper.classList.add("button");
            btnupper.onclick = function () {
                self.buttonclick = "upper";
                self.RefreshValue();
            }
            buttons.appendChild(btnupper);

            let btnlower = document.createElement("button");
            btnlower.appendChild(this.DisplayIcon("format-letter-case-lower"));
            btnlower.classList.add("button");
            btnlower.onclick = function () {
                self.buttonclick = "lower";
                self.RefreshValue();
            }
            buttons.appendChild(btnlower);

            let btnparagraph = document.createElement("button");
            btnparagraph.appendChild(this.DisplayIcon("format-paragraph"));
            btnparagraph.classList.add("button");
            btnparagraph.onclick = function () {
                self.buttonclick = "paragraph";
                self.RefreshValue();
            }
            buttons.appendChild(btnparagraph);

            let btnlink = document.createElement("button");
            btnlink.appendChild(this.DisplayIcon("link"));
            btnlink.classList.add("button");
            btnlink.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink);

            //----------------------

            let btnlink1 = document.createElement("button");
            btnlink1.appendChild(this.DisplayIcon("link"));
            btnlink1.classList.add("button");
            btnlink1.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink1);

            let btnlink2 = document.createElement("button");
            btnlink2.appendChild(this.DisplayIcon("link"));
            btnlink2.classList.add("button");
            btnlink2.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink2);

            let btnlink3 = document.createElement("button");
            btnlink3.appendChild(this.DisplayIcon("link"));
            btnlink3.classList.add("button");
            btnlink3.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink3);

            let btnlink4 = document.createElement("button");
            btnlink4.appendChild(this.DisplayIcon("link"));
            btnlink4.classList.add("button");
            btnlink4.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink4);

            let btnlink5 = document.createElement("button");
            btnlink5.appendChild(this.DisplayIcon("link"));
            btnlink5.classList.add("button");
            btnlink5.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink5);

            let btnlink6 = document.createElement("button");
            btnlink6.appendChild(this.DisplayIcon("link"));
            btnlink6.classList.add("button");
            btnlink6.onclick = function () {
                self.buttonclick = "link";
                self.RefreshValue();
            }
            buttons.appendChild(btnlink6);




            let input = document.createElement("textarea");
            if (this.placeholder) {
                input.placeholder = this.placeholder;
                input.value = "";
            }


            this.object.appendChild(input);
        };

        RefreshValue(): void {
            let self = this;

            let input = this.object.querySelector("textarea");

            let text = input.value;
            let selectionstart = input.selectionStart;
            let selectend = input.selectionEnd;

            let addcode;
            let replaceval;

            let selectendtext = text.substring(selectionstart, selectend);

            // let selectendtext = text.slice(0, selectionstart) + "[B]" + text.slice(0, selectend) + "[B]";

            switch (self.buttonclick) {
                case "bold":
                    addcode = "[B]" + selectendtext + "[B]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
                case "italic":
                    addcode = "[I]" + selectendtext + "[I]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
                case "underline":
                    addcode = "[U]" + selectendtext + "[U]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
                case "upper":
                    addcode = "[UP]" + selectendtext + "[UP]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
                case "lower":
                    addcode = "[LOw]" + selectendtext + "[LOw]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
                case "paragraph":
                    addcode = "[P]" + selectendtext + "[P]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
                case "link":
                    addcode = "[L]" + selectendtext + "[L]";
                    replaceval = text.replace(selectendtext, addcode)
                    input.value = replaceval;
                    break;
            }

            self.value = input.value;
        };

        // Events(): void {
        //     let input = this.object.querySelector("textarea");
        //     let self = this;

        //     input.onchange = function (): any {
        //         self.value = (<HTMLInputElement>this).value;
        //     };

        //     if (self.onchange)
        //         self.onchange(self);
        // };
    }

    export class TextBlock extends Xplore {
        constructor(param: XploreParam) {
            super(param, "textblock");
        }
    }

    export class Button extends Xplore {
        constructor(param: XploreParam) {
            super(param, "button");
        }
    }

    export class Image extends Xplore {
        source: string;

        constructor(source: string) {
            super(undefined, "text");

            this.source = source;
        }

        Refresh(): void {
            this.object.innerHTML = "";
            let image = document.createElement("img");
            image.src = this.source;
            this.object.appendChild(image);
        }
    }

    export class List extends Xplore {
        buttons: Xplore[] = [];

        constructor(param: XploreParamList) {
            super(param, "list");

            this.buttons = param.buttons;
        }

        AfterRefresh(): void {
            if (this.buttons && this.buttons.length) {
                let container = document.createElement("div");
                container.classList.add("button-container");
                this.object.appendChild(container);

                for (let button of this.buttons) {
                    button.Show(container);
                }
            }
        }
    }


    //Input
    export class Input extends Xplore {
        protected input: HTMLInputElement;
        type: XINPUTTYPE;
        name: string;
        value: any;
        bind: XBind;
        onchange: Function;

        constructor(type: XINPUTTYPE = XINPUTTYPE.TEXT, param?: XploreParam) {
            super(param, "input");
            this.classes.push("inline");
            this.classes.push("textbox");

            this.type = type;
        }


        Refresh(): void {
            this.object.innerHTML = "";

            if (this.text) {
                let label = document.createElement("label");
                this.object.appendChild(label);

                let text = document.createElement("div");
                text.innerText = this.text;
                label.appendChild(text);

                let input = document.createElement("input");
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

            } else {
                let input = document.createElement("input");
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

        Events(): void {
            if (!this.readonly) {
                let input = this.object.querySelector("input");
                let self = this;

                switch (this.type) {
                    case "submit":
                        input.addEventListener('click', function (e) {
                            e.preventDefault();

                            if (self.onclick)
                                self.onclick();
                        });
                        break;

                    case "checkbox":
                        input.addEventListener('change', function (e) {
                            e.preventDefault();

                            self.value = this.checked;

                            if (self.bind) {
                                self.bind.object[self.bind.name] = self.value;
                            }

                            if (self.onchange)
                                self.onchange(self);
                        });
                        break;

                    default:
                        input.addEventListener('input', function () {
                            switch (this.type) {
                                case "checkbox":
                                    self.value = input.checked;
                                    break;

                                default:
                                    self.value = input.value;
                                    break;
                            }

                            self.value = this.value;

                            if (self.bind) {
                                self.bind.object[self.bind.name] = self.value;
                            }

                            if (self.onchange)
                                self.onchange(self);
                        });
                        break;
                }
            }
        };
    }

    export class Checkbox extends Input {
        constructor(param?: XploreParamCheckbox) {
            super(XINPUTTYPE.CHECKBOX, param);
            this.value = param.value;
            this.bind = param.bind;
        }

        set checked(value: boolean) {
            this.input.checked = value;
        }

        get checked() {
            return this.input.checked;
        }
    }

    export class Combobox extends Xplore {
        options: string[] = [];
        value: any;

        onchange: Function;

        constructor(param?: XploreParam) {
            super(param, "input");
            this.classes.push("inline");
        }

        Refresh(): void {
            this.object.innerHTML = "";

            let select;

            if (this.text) {
                let text = document.createElement("div");
                text.innerText = this.text;
                this.object.appendChild(text);

                let label = document.createElement("label");
                this.object.appendChild(label);

                select = document.createElement("select");
                label.appendChild(select);

                if (this.readonly)
                    select.setAttribute("disabled", "disabled");

            } else {
                select = document.createElement("select");
                this.object.appendChild(select);

                if (this.readonly)
                    select.setAttribute("disabled", "disabled");
            }

            let option;

            if (this.options) {
                for (let i = 0; i < this.options.length; i++) {
                    option = document.createElement("option");
                    option.value = this.options[i];
                    option.innerHTML = this.options[i];
                    select.appendChild(option);
                }

                select.selectedIndex = this.options.indexOf(this.value);
            }

            this.Events();
        };

        Events(): void {
            let select = this.object.querySelector("select") as HTMLSelectElement;
            let self = this;

            select.onchange = function (): any {
                self.value = (<HTMLInputElement>this).value;

                if (self.onchange)
                    self.onchange(self);
            };
        };

    }

    //Menu

    export class MenuContainer extends Xplore {
        constructor(type: XMENUTYPE = XMENUTYPE.DEFAULT, param?: XploreParam) {
            super(param, "menu-container");
            this.classes.push(type);
        }
    }

    export class Menu extends Xplore {
        parentmenu: Menu;
        shortcut: string;
        separator: boolean;
        children: Xplore.Menu[] = [];
        onmenu: boolean;

        constructor(param?: XploreParamMenu) {
            super(param, "menu");

            this.shortcut = param.shortcut;
            this.separator = param.separator;


            if (this.shortcut) {
                Xplore.shortcuts[param.shortcut] = {
                    menu: this,
                    action: param.onclick
                };
            }
        }

        Refresh(): void {
            this.object.innerHTML = "";
            this.object.tabIndex = 1;

            if (this.separator)
                this.object.classList.add("separator");

            let text = document.createElement("div");

            if (this.icon)
                text.appendChild(this.DisplayIcon(this.icon));
            else
                text.appendChild(document.createElement("div"));

            text.append(this.text);

            if (this.shortcut) {
                let shortcut = document.createElement("div");
                shortcut.innerText = this.shortcut;
                text.appendChild(shortcut);

            } else if (this.children.length && this.parentmenu) {
                let shortcut = document.createElement("div");
                shortcut.appendChild(this.DisplayIcon("chevron-right"));
                text.appendChild(shortcut);
            }

            this.object.appendChild(text);

            if (this.children.length) {
                //Children
                let submenu = document.createElement("div");
                this.object.appendChild(submenu);

                for (let i = 0; i < this.children.length; i++) {
                    this.children[i].parentmenu = this;
                    this.children[i].Show(submenu);
                }
            }

            this.Events();
        };

        Events(): void {
            let self = this;

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

                } else {
                    if (self.parentmenu) {
                        console.error("Menu [" + self.parentmenu.text + " -> " + self.text + "] not implemented!");
                        self.parentmenu.Collapse();
                    } else
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

        Collapse(): void {
            this.onmenu = false;
            this.object.classList.remove("display");
            delete Xplore.activemenu;
        };
    }

    export class MenuSeparator extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "menu-separator");
        }
    }


    //Toolbar

    export class ToolbarContainer extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "toolbar-container");
        }
    }

    export class Toolbar extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "toolbar");
        }
    }



    //Tree

    export class Tree extends Xplore {
        constructor(param: XploreParamTree) {
            super(param, "tree");
        }

        Refresh(): void {
            this.object.innerHTML = "";

            let header = document.createElement("div");
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
        }
    }

    export class TreeNode extends Xplore {
        data: object;

        constructor(param: XploreParamTree) {
            super(param, "treenode");
            this.data = param.data;
        }

        Refresh(): void {
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
        }

        Events(): void {
            let self = this;

            this.object.onclick = function (e) {
                e.stopPropagation();

                let inner: HTMLElement = this as HTMLElement;

                if (inner.children.length === 1) {
                    self.onclick(self);

                } else {
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
        }
    }



    //Calendar

    export class Calendar extends Xplore {
        value = new Date();
        todayyear = this.value.getFullYear();
        todaymonth = this.value.getMonth();
        todaydate = this.value.getDate();

        header: Xplore;
        calendar: Xplore;
        list: Xplore.ScrollContainer;

        constructor() {
            super(undefined, "calendar");
        }

        Refresh(): void {
            this.header = new Xplore.Container({ classes: ["calendar-header"] });
            this.calendar = new Xplore.Container();
            this.list = new Xplore.ScrollContainer();

            let splitter = new Xplore.SplitContainer();
            splitter.orientation = XORIENTATION.VERTICAL;
            splitter.size = [52];

            splitter.children = [
                this.header,
                this.calendar
            ];

            splitter.Show(this.object);

            let mainsplitter = new Xplore.SplitContainer();
            mainsplitter.orientation = XORIENTATION.VERTICAL;

            mainsplitter.children = [
                splitter,
                this.list
            ];

            mainsplitter.Show(this.object);
            this.RefreshMonth(this.value);
        }

        RefreshMonth(value: Date): void {
            this.RefreshHeader();
            this.RefreshCalendar(value);
            this.RefreshList();
        }

        RefreshCalendar(value: Date): void {
            this.RefreshHeader();

            let data = [];
            let calendar = [];

            let year = value.getFullYear();
            let month = value.getMonth();
            let date = value.getDate();

            let day = new Date(value.getFullYear(), value.getMonth(), 1).getDay();
            let previousdays = new Date(value.getFullYear(), value.getMonth(), 0).getDate();
            let days = new Date(value.getFullYear(), value.getMonth() + 1, 0).getDate();

            let cellyear: number;
            let cellmonth: number;
            let cellday: number;

            //Previous Month
            for (let i = 0; i < day; i++) {
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
            for (let i = 1; i <= days; i++) {
                data.push(this.AddDay(year, month, i, year, month));

                if (data.length === 7) {
                    calendar.push(data);
                    data = [];
                }
            }

            let j = 1;

            //Next Month
            for (let i = data.length; i <= 7; i++) {
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

            let table = new Xplore.Table({
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
        }

        RefreshHeader(): void {
            this.header.Clear();
            this.header.Add(new Xplore.Button({ text: "Today", classes: ["calendar-header-today"] }));
            this.header.Add(new Xplore.Button({ icon: "chevron-left" }));
            this.header.Add(new Xplore.Button({ icon: "chevron-right" }));
            this.header.Add(new Xplore.Button({ text: "October 2021" }));
            this.header.Refresh();
        }

        RefreshList(): void {
            this.list.Clear();

            let events: XCalendarItem[] = [];
            events.push({
                text: "Holiday"
            });
            events.push({
                text: "Webinar"
            });

            this.list.Add(new Xplore.CalendarList(new Date(), events));
            this.list.Refresh();
        }

        AddDay(year: number, month: number, day: number, currentyear: number, currentmonth: number): Xplore {
            let cellyear: string;
            let cellmonth: string;
            let cellday: string = day.toString();
            let listevent: Xplore.List;

            let container = new Xplore.Container({});
            let text = container.Add(new Xplore({ text: cellday, classes: ["calendar-day"] }));

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
    }

    export class CalendarList extends Xplore {
        date: Date;
        events: XCalendarItem[];

        constructor(date: Date, events: XCalendarItem[]) {
            super(undefined, "calendar-list");
            this.date = date;
            this.events = events;
        }

        Refresh(): void {
            let left = new Xplore.Container();
            let date = this.date.getDay();
            let week = this.date.getDate();

            left.Add(new Xplore.Text({ text: date }));
            left.Add(new Xplore.Text({ text: week }));

            left.Show(this.object);
        }
    }


    //Table

    export class Table extends Xplore {
        columns: XTableParamColumn[];
        data: Object[];

        guid: string;
        table: HTMLTableElement;
        header: HTMLElement;
        body: HTMLElement;
        footer: HTMLElement;

        fragment: DocumentFragment;

        constructor(param: XTableParam) {
            super(undefined, "table");

            this.columns = param.columns;
            this.data = param.data;
        }

        Refresh(): void {
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
        }

        RefreshHeader(): void {
            let th: HTMLTableCellElement;

            let tr = document.createElement("tr");
            this.header.appendChild(tr);

            for (let column of this.columns) {
                th = document.createElement("th");
                th.innerHTML = column.text;
                tr.appendChild(th);
            }
        }

        RefreshBody(): void {
            let tr: HTMLTableRowElement;
            let td: HTMLTableCellElement;

            for (let cell of this.data) {
                tr = document.createElement("tr");
                this.body.appendChild(tr);

                for (let column of this.columns) {
                    td = document.createElement("td");

                    if (cell[column.name] instanceof Xplore) {
                        cell[column.name].Show(td);
                    } else {
                        td.innerHTML = cell[column.name];
                    }
                    tr.appendChild(td);
                }
            }
        }

        RefreshFooter(): void {
        }
    }


    //Others
    export class Background extends Xplore {
        constructor(param?: XploreParam) {
            super(param, "background");
        }

        Refresh(): void {
            this.object.style.zIndex = (++Xplore.zindex).toString();
            this.Events();
        };
    }
}

window.onload = function () {
    if (this.Run)
        this.Run();
};

document.onkeydown = function (event) {
    let key = "";

    if (event.ctrlKey) {
        key += "ctrl+";
    }

    if (event.shiftKey)
        key += "shift+";

    if (event.altKey)
        key += "alt+";

    key += event.key;

    key = key.toLowerCase();

    for (let shortcutkey in Xplore.shortcuts)
        if (shortcutkey.toLowerCase() === key)
            if (Xplore.shortcuts[shortcutkey].action) {
                event.preventDefault();
                Xplore.shortcuts[shortcutkey].action(Xplore.shortcuts[shortcutkey].menu);
            }
};
