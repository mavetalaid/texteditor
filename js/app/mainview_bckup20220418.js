var availableD_;
var countryselected;
var indexCategory = 1;
var MainView__ = /** @class */ (function () {
    function MainView__() {
    }
    MainView__.prototype.Show = function () {
        this.ShowCategory();
        this.ShowCategory1();
        // this.ShowCategory2();
        // this.ShowCategory3();
        // this.ShowCategory4();
        // this.ShowCategory5();
        // this.ShowCategory6();
        // this.ShowCategory7();
        // this.Showheader();
        // this.ShowBanner();
        this.ShowVisualization("Material use"); // Temporary
        // this.ShowAll("");
        // this.ShowFooter();
    };
    MainView__.prototype.Showheader = function () {
        var container = document.getElementById("header");
        var header = new Xplore.List({ icon: "leaf", text: "REGIONAL RESOURCE EFFICIENCY INDICATORS IN THE ASIA PACIFIC" });
        header.Show(container);
    };
    MainView__.prototype.ShowBanner = function () {
        var container = document.getElementById("banner");
        // let data = this.DataSet();
        var data = this.ScatterDataSet();
        var chart = new XChart.ScatterPlotChart(data);
        chart.Show(container);
        // let chart = new XChart.StackedColumnChart(data);
        // chart.Show(container);
    };
    MainView__.prototype.ShowBanner1 = function () {
        var container = document.getElementById("banner");
        var image = new Xplore.Image("resources/background.jpg");
        image.Show(container);
        var header = new Xplore.Text({ text: "Banner Image" });
        header.Show(container);
        var description = new Xplore.TextBlock({ text: "The indicators could help to obtain the region-specific quantitative values of different variables measuring the state or change in the system. The availability of regional data will assist in perceiving and analyzing the interlinkage between resource efficiency and regional issues." });
        description.Show(container);
    };
    MainView__.prototype.ShowCategory = function () {
        var container = document.getElementById("category");
        // let headercontainer = new Xplore.Container({ text: "CATEGORIES", classes: ["catheader"] });
        // headercontainer.Show(container);
        var data = {
            PH: {
                fillcolor: "#88F", icon: "✪", onhover: function () {
                }
            },
            TH: {
                fillcolor: "#FF0", icon: "😃", onhover: function () {
                }
            },
            VN: {
                fillcolor: "#F0F", image: "resources/flags/vietnam.png", onhover: function () {
                }
            },
        };
        // let map = new XChart.MapChart(data);
        // map.onselect = function (country) {
        //     alert(country.properties.name_long);
        // };
        // let listcountry = map.Add(new Xplore.Combobox({ classes: ["list-country"] })) as Xplore.Combobox;
        var listcountry = new Xplore.Combobox({ classes: ["list-country"] });
        listcountry.options = [
            "All Countries",
            "Afghanistan",
            "Bangladesh",
            "Bhutan",
            "Cambodia",
            "China",
            "India",
            "Indonesia",
            "Lao PDR",
            "Malaysia",
            "Maldives",
            "Mongolia",
            "Myanmar",
            "Nepal",
            "Pakistan",
            "Philippines",
            "Sri Lanka",
            "Thailand",
            "Vietnam"
        ];
        listcountry.value = "All Countries";
        countryselected = listcountry.value;
        listcountry.onchange = function () {
            // let gencategory = new GeneralCategory();
            // gencategory.GetUniqueDataByType(listcountry.value, function (data: XChartDataSet) {
            //     // console.log(data);
            //     availableD_ = data;
            //     self.ShowCategory1();
            // });
            if (listcountry.value !== "All Countries") {
                countryselected = listcountry.value;
                self["ShowCategory" + indexCategory]();
            }
            else {
                countryselected = listcountry.value;
                self.ShowCategory1();
                self.ShowAll("");
            }
        };
        // map.Show(container);
        listcountry.Show(container);
        var self = this;
        var category1 = new Xplore.List({
            buttons: [
                new Xplore.Button({
                    text: "Natural<br/>Resources",
                    // icon: "image-filter-hdr",
                    onclick: function () {
                        indexCategory = 1;
                        self.ShowCategory1();
                        var description = new Xplore.TextBlock({ text: "Natural Resources" });
                        description.Show(container);
                    },
                    classes: ["natural"]
                }),
                new Xplore.Button({
                    text: "Resource<br/>Efficiency",
                    // icon: "water-pump",
                    onclick: function () {
                        indexCategory = 2;
                        self.ShowCategory2();
                        var description = new Xplore.TextBlock({ text: "Resource Efficiency" });
                        description.Show(container);
                    },
                    classes: ["reseff"]
                }),
                new Xplore.Button({
                    text: "Resource<br/>Use In<br/>Major Sectors",
                    // icon: "home",
                    onclick: function () {
                        indexCategory = 3;
                        self.ShowCategory3();
                        var description = new Xplore.TextBlock({ text: "Resource Use In<br/>Major Sectors" });
                        description.Show(container);
                    },
                    classes: ["resuse"]
                }),
                new Xplore.Button({
                    text: "Consumption-based<br/>Indicators for<br/>Natural Resource Use",
                    // icon: "water",
                    onclick: function () {
                        indexCategory = 4;
                        self.ShowCategory4();
                    },
                    classes: ["consmp"]
                }),
                new Xplore.Button({
                    text: "Trade<br/>Dependency",
                    // icon: "currency-usd",
                    onclick: function () {
                        indexCategory = 5;
                        self.ShowCategory5();
                    },
                    classes: ["trade"]
                }),
                new Xplore.Button({
                    text: "Resources<br/>and Human<br/>Development",
                    // icon: "human-male",
                    onclick: function () {
                        indexCategory = 6;
                        self.ShowCategory6();
                    },
                    classes: ["humandev"]
                }),
                new Xplore.Button({
                    text: "Inclusive<br/>Green<br/>Recovery",
                    // icon: "virus",
                    onclick: function () {
                        indexCategory = 7;
                        self.ShowCategory7();
                    },
                    classes: ["incgreen"]
                })
            ],
            classes: ["catlist"]
        });
        category1.Show(container);
        var description = new Xplore.TextBlock({ text: "The indicators could help to obtain the region-specific quantitative values of different variables measuring the state or change in the system. The availability of regional data will assist in perceiving and analyzing the interlinkage between resource efficiency and regional issues." });
        description.Show(container);
    };
    MainView__.prototype.ShowCategory1 = function () {
        this.ShowIndicators("Natural resources", "Materials, energy, water and land are considered as main resource uses, thus emissions, impacts and waste related to these resource uses are taken into consideration. As agricultural sector is a key significant sector in the Asia Pacific region, so that a focus is placed on the productivity of this sector. With regards to emissions, impacts and waste, greenhouse gas emissions and waste management are selected to represent those aspects. Hence, material use, energy use, water use, land use, agricultural productivity, greenhouse gas emissions, and waste management are selected as regional resource efficiency indicators by means of natural resources.", [
            "Material use",
            "Energy use",
            "Water use",
            "Land use",
            "Agricultural productivity",
            "Greenhouse gas emissions",
            "Waste management"
        ]);
    };
    MainView__.prototype.ShowCategory2 = function () {
        this.ShowIndicators("Resource efficiency", "Material intensity refers to the amount of material (in physical mass terms) used to produce one unit of GDP (in monetary terms). In other words, material intensity is simply the inverse of material productivity. These two terms are often misunderstood as simply consuming less which results in the loss of economic and social gains that can be obtained from resource use. The Asia Pacific developing countries are continuing to industrialize which causes the demand of primary materials to further escalate in these countries. The efficient use of materials can aid these to attain a more competitive and environmentally sustainable development route. In this report, the material intensity indicator is defined as the domestic material consumption per unit of gross domestic product (DMC per GDP).", [
            "Material Intensity of the economy",
            "Energy intensity of the economy",
            "Water intensity of the economy",
            "GHG intensity of the economy"
        ]);
    };
    MainView__.prototype.ShowCategory3 = function () {
        this.ShowIndicators("Resource use in major sectors", "Direct GHG emissions that are produced in the generation and transmission of energy are a relevant indicator of both the carbon efficiency with which energy services are provided, and the scale of the energy needs of a society. This section looks at the environmental impacts from the perspective of climate change. While many countries in the Asia Pacific region have reduced their energy intensity in terms of megajoules per unit of GDP, a great deal of this energy transition has come about through new coal-fired power. This investment may even replace more emissions-intensive technology, but the total emissions produced from the energy sector are due to a combination of the carbon intensity of energy production, the consumption of energy per capita and the population growth.", [
            "Material use for manufacturing",
            "Material use for construction",
            "Emissions of the energy sector"
        ]);
    };
    MainView__.prototype.ShowCategory4 = function () {
        this.ShowIndicators("Consumption-based indicators for natural resource use", "When economies develop, they import final goods to replace a large portion of the domestic production of final goods, and the extractive activities on which they rely. The upstream primary material requirements for those commodities, as well as the associated environmental impact, remain in the country of production. This is how developed economies outsource their material-intensive activities to developing countries. This process has enabled wealthier economies to minimize their dependence on resource extraction. Material footprint of consumption is an attribute of global material extraction to final demand including the final consumption of households, governments, and capital investment. The indicator provides information about the actual primary material demand of any economy without including the extraterritorial trade intervention. Also, the indicator reports the actual quantity of primary materials consumption and the capital investment a country relies upon independently from where the material extraction has occurred in the global economy.", [
            "Material Footprint",
            "Water Footprint"
        ]);
    };
    MainView__.prototype.ShowCategory5 = function () {
        this.ShowIndicators("Trade dependency", "International trade has been increasing due to the wave of globalization. The specific policy context is essential, as to whether a country is a net importer or net exporter of primary resources. Importer countries can reduce their dependency on imported primary resources by pursuing higher resource productivity whereas exporter countries might seek policies by strengthening export diversification. It is also important for the prevention of the Dutch Disease (an economic phenomenon entailing rapid development of one sector while declining in other sectors) via reducing the serious imbalances of payments between countries’ unit prices of imports and exports.", [
            "Physical Trade Balance",
            "Unit price of trade"
        ]);
    };
    MainView__.prototype.ShowCategory6 = function () {
        this.ShowIndicators("Resources and human development", "The major goal of human development is to lead society towards greater mutual well-being via productive economic activities. Every additional natural resource use and their corresponding environmental emission support positive human resource development. Therefore, in this section of the report we examined the relationship between the Human Development Index (HDI) – a measure of human development - and the growth in natural resource use and emissions. HDI consists of three different domains, viz., literacy rate, life expectancy, and standard of living, while natural resource use here refers to the material use and emissions refers to the energy use which is the dominant sector regarding emissions.", [
            "Human Development Index (HDI)",
            "Economic Growth (GDP)",
            "Investment and consumption",
            "Debt, inflation",
            "Access to energy, water, sanitation"
        ]);
    };
    MainView__.prototype.ShowCategory7 = function () {
        this.ShowIndicators("Inclusive green recovery", "During the period of disaster/crisis, the financial supports provided to recover while focusing the environmentally friendly approaches are termed as green stimulus (UNEP, 2020b). In this report, a focus is put on fiscal supports for a COVID crisis and its effect on natural capital and natural budget including in energy, transportation, building, and research and development sectors. Overall, global green recovery spending has been incommensurate with the scale of the planetary crises of climate change, nature loss, and pollution. O’Callaghan and Murdock (2021) raised the following key questions, while highlighting the dire need for prompt response by the countries to align for the sustainable recovery", [
            "COVID spending",
            "Natural capital",
            "Green spending",
            "Green energy investments",
            "Green Transport",
            "Biofuel production-Green Spending",
            "Green research and development"
        ]);
    };
    MainView__.prototype.ShowIndicators = function (indicator, description, texts) {
        var self = this;
        var container = document.getElementById("indicator");
        container.innerHTML = "";
        // let expander = new Xplore.Expander({ text: "Indicator" });
        // expander.Add(new Xplore.Container({ text: "INDICATORS", classes: ["catheader"] }));
        // expander.Add(new Xplore.Text({ text: indicator, classes: ["catheader"] }));
        // expander.Add(new Xplore.TextBlock({ text: description, classes: ["indicator-desc"] }));
        // let header = new Xplore.Container({ text: " ", classes: ["catheader"] });
        // header.Show(container);
        var catcontainer = new Xplore.Container({ classes: ["catcontainer"] });
        var title = catcontainer.Add(new Xplore.Text({ text: indicator, classes: ["catheader"] }));
        var desc = catcontainer.Add(new Xplore.TextBlock({ text: description, classes: ["indicator-desc"] }));
        catcontainer.Show(container);
        var gencategory = new GeneralCategory();
        gencategory.GetUniqueDataByType(countryselected, function (data) {
            self["ShowIndicators" + texts.length](container, texts, data);
        });
        // let availabledata;
        // if (availableD_ === undefined) {
        //     let gencategory = new GeneralCategory();
        //     gencategory.GetUniqueDataByIndicator(function (data: XChartDataSet) {
        //         console.log(data);
        //         if (data) {
        //             availabledata = data;
        //             self["ShowIndicators" + texts.length](container, texts, availabledata);
        //         }
        //     });
        // } else {
        //     availabledata = availableD_;
        //     self["ShowIndicators" + texts.length](container, texts, availabledata);
        // }
        // expander.Show(container);
    };
    MainView__.prototype.ShowDescriptions = function (indicator, description) {
        var self = this;
        var container = document.getElementById("indicator");
        container.innerHTML = "";
        var catcontainer = new Xplore.Container({ classes: ["descontainer"] });
        var title = catcontainer.Add(new Xplore.Text({ text: indicator, classes: ["catheader"] }));
        var desc = catcontainer.Add(new Xplore.TextBlock({ text: description, classes: ["indicator-desc"] }));
        catcontainer.Show(container);
    };
    MainView__.prototype.ShowIndicators2 = function (container, texts, availabledata) {
        var self = this;
        var grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 2;
        grid.columns = 1;
        var text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                // if (availabledata.indexOf(texts[0]) > -1)
                self.ShowVisualization(texts[0]);
            }
        });
        grid.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                // if (availabledata.indexOf(texts[1]) > -1)
                self.ShowVisualization(texts[1]);
            }
        });
        grid.Set(text, 1, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        grid.Show(container);
    };
    MainView__.prototype.ShowIndicators3 = function (container, texts, availabledata) {
        var self = this;
        var grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 2;
        grid.columns = 1;
        var gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);
        var text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                // if (availabledata.indexOf(texts[0]) > -1)
                self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                // if (availabledata.indexOf(texts[1]) > -1)
                self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                //  if (availabledata.indexOf(texts[2]) > -1)
                self.ShowVisualization(texts[2]);
            }
        });
        grid.Set(text, 1, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }
        grid.Show(container);
    };
    MainView__.prototype.ShowIndicators4 = function (container, texts, availabledata) {
        var self = this;
        var grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 2;
        grid.columns = 2;
        var text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                // if (availabledata.indexOf(texts[0]) > -1)
                self.ShowVisualization(texts[0]);
            }
        });
        grid.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                // if (availabledata.indexOf(texts[1]) > -1)
                self.ShowVisualization(texts[1]);
            }
        });
        grid.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                //  if (availabledata.indexOf(texts[2]) > -1)
                self.ShowVisualization(texts[2]);
            }
        });
        grid.Set(text, 1, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                //  if (availabledata.indexOf(texts[3]) > -1)
                self.ShowVisualization(texts[3]);
            }
        });
        grid.Set(text, 1, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }
        grid.Show(container);
    };
    MainView__.prototype.ShowIndicators5 = function (container, texts, availabledata) {
        var self = this;
        var grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 3;
        grid.columns = 1;
        var gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);
        var text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                // if (availabledata.indexOf(texts[0]) > -1)
                self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                // if (availabledata.indexOf(texts[1]) > -1)
                self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        gridinner = new Xplore.Grid();
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 1, 0);
        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                //  if (availabledata.indexOf(texts[2]) > -1)
                self.ShowVisualization(texts[2]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                //  if (availabledata.indexOf(texts[3]) > -1)
                self.ShowVisualization(texts[3]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[4],
            onclick: function () {
                // if (availabledata.indexOf(texts[4]) > -1)
                self.ShowVisualization(texts[4]);
            }
        });
        grid.Set(text, 2, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[4]) === -1)
                text.classes = ["no-data-available"];
        }
        grid.Show(container);
    };
    MainView__.prototype.ShowIndicators6 = function (container, texts, availabledata) {
        var self = this;
        var grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 3;
        grid.columns = 1;
        var gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);
        var text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                // if (availabledata.indexOf(texts[0]) > -1)
                self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                // if (availabledata.indexOf(texts[1]) > -1)
                self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        gridinner = new Xplore.Grid();
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 1, 0);
        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                //  if (availabledata.indexOf(texts[2]) > -1)
                self.ShowVisualization(texts[2]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                //  if (availabledata.indexOf(texts[3]) > -1)
                self.ShowVisualization(texts[3]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }
        gridinner = new Xplore.Grid();
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 2, 0);
        text = new Xplore.Button({
            text: texts[4],
            onclick: function () {
                // if (availabledata.indexOf(texts[4]) > -1)
                self.ShowVisualization(texts[4]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[4]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[5],
            onclick: function () {
                //  if (availabledata.indexOf(texts[5]) > -1)
                self.ShowVisualization(texts[5]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[5]) === -1)
                text.classes = ["no-data-available"];
        }
        grid.Show(container);
    };
    MainView__.prototype.ShowIndicators7 = function (container, texts, availabledata) {
        var self = this;
        var readmoreclick = false;
        var grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 3;
        grid.columns = 1;
        var gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);
        var text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                // if (availabledata.indexOf(texts[0]) > -1)
                if (readmoreclick === false)
                    self.ShowVisualization(texts[0]);
            }
        });
        var toolbarcontainer = new Xplore.ToolbarContainer({ classes: ["read-more"] });
        var toolbar = toolbarcontainer.Add(new Xplore.Toolbar({ classes: ["read-more-toolbar"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                readmoreclick = true;
                self.ShowDetailsView(texts[0]);
                // let view = new DetailsView();
                // view.Show(container);
            }
        }));
        text.Add(toolbarcontainer);
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }
        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                // if (availabledata.indexOf(texts[1]) > -1)
                self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        toolbar = text.Add(new Xplore.Toolbar({ classes: ["read-more"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                alert("click");
            }
        }));
        gridinner = new Xplore.Grid();
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 1, 0);
        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                //  if (availabledata.indexOf(texts[2]) > -1)
                self.ShowVisualization(texts[2]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }
        toolbar = text.Add(new Xplore.Toolbar({ classes: ["read-more"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                alert("click");
            }
        }));
        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                //  if (availabledata.indexOf(texts[3]) > -1)
                self.ShowVisualization(texts[3]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }
        toolbar = text.Add(new Xplore.Toolbar({ classes: ["read-more"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                alert("click");
            }
        }));
        gridinner = new Xplore.Grid();
        gridinner.rows = 1;
        gridinner.columns = 3;
        grid.Set(gridinner, 2, 0);
        text = new Xplore.Button({
            text: texts[4],
            onclick: function () {
                // if (availabledata.indexOf(texts[4]) > -1)
                self.ShowVisualization(texts[4]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[4]) === -1)
                text.classes = ["no-data-available"];
        }
        toolbar = text.Add(new Xplore.Toolbar({ classes: ["read-more"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                alert("click");
            }
        }));
        text = new Xplore.Button({
            text: texts[5],
            onclick: function () {
                //  if (availabledata.indexOf(texts[5]) > -1)
                self.ShowVisualization(texts[5]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[5]) === -1)
                text.classes = ["no-data-available"];
        }
        toolbar = text.Add(new Xplore.Toolbar({ classes: ["read-more"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                alert("click");
            }
        }));
        text = new Xplore.Button({
            text: texts[6],
            onclick: function () {
                // if (availabledata.indexOf(texts[6]) > -1)
                self.ShowVisualization(texts[6]);
            }
        });
        gridinner.Set(text, 0, 2);
        if (countryselected !== "All Countries") {
            if (availabledata.indexOf(texts[6]) === -1)
                text.classes = ["no-data-available"];
        }
        toolbar = text.Add(new Xplore.Toolbar({ classes: ["read-more"] }));
        toolbar.Add(new Xplore.Button({
            icon: "arrow-right-circle-outline",
            onclick: function () {
                alert("click");
            }
        }));
        grid.Show(container);
    };
    MainView__.prototype.ShowVisualization = function (type) {
        var self = this;
        var container = document.getElementById("visualization");
        container.innerHTML = "";
        var type_;
        // let header = new Xplore.Container({ text: " ", classes: ["catheader"] });
        // header.Show(container);
        // if (countryselected !== "All Countries") {
        if (type === "Material use") {
            type_ = "MaterialUse";
        }
        else if (type === "Energy use") {
            type_ = "EnergyUse";
        }
        else if (type === "Water use") {
            type_ = "WaterUse";
        }
        else if (type === "Land use") {
            type_ = "LandUse";
        }
        else if (type === "Agricultural productivity") {
            type_ = "AgriProd";
        }
        else if (type === "Greenhouse gas emissions") {
            type_ = "GreenhouseGas";
        }
        else if (type === "Waste management") {
            type_ = "WasteManage";
        }
        else if (type === "Material Intensity of the economy") {
            type_ = "MaterialIntensity";
        }
        else if (type === "Energy intensity of the economy") {
            type_ = "EnergyIntensity";
        }
        else if (type === "Water intensity of the economy") {
            type_ = "WaterIntensity";
        }
        else if (type === "GHG intensity of the economy") {
            type_ = "GHGIntensity";
        }
        else if (type === "Emission of the energy sector") {
            type_ = "EmissionEnSect";
        }
        else if (type === "Material Footprint") {
            type_ = "MaterialFootprint";
        }
        else if (type === "Water Footprint") {
            type_ = "WaterFootprint";
        }
        else if (type === "Physical Trade Balance") {
            type_ = "PTB";
        }
        else if (type === "Unit price of trade") {
            type_ = "UnitPriceTrade";
        }
        else if (type === "Human Development Index (HDI)") {
            type_ = "HDI";
        }
        else if (type === "Economic Growth (GDP)") {
            type_ = "EconGrowth";
        }
        else if (type === "Investment and consumption") {
            type_ = "InvestmentCons";
        }
        else if (type === "Debt, inflation") {
            type_ = "DebtInflation";
        }
        else if (type === "Access to energy, water, sanitation") {
            type_ = "AccessEWS";
        }
        else if (type === "COVID spending") {
            type_ = "COVIDSpend";
        }
        else if (type === "Natural capital") {
            type_ = "NaturalCapital";
        }
        else if (type === "Green spending") {
            type_ = "GreenSpend";
        }
        else if (type === "Green energy investments") {
            type_ = "GreenEnergy";
        }
        else if (type === "Green Transport") {
            type_ = "GreenTransport";
        }
        else if (type === "Green research and development") {
            type_ = "GreenResDev";
        }
        else if (type === "Biofuel production-Green Spending") {
            type_ = "BiofuelProd";
        }
        this["Show" + type_](container);
    };
    MainView__.prototype.ShowAll = function (type) {
        var self = this;
        var container = document.getElementById("visualization");
        container.innerHTML = "";
        // let header = new Xplore.Container({ text: " ", classes: ["catheader"] });
        // header.Show(container);
        this.ShowMaterialUse(container);
        this.ShowEnergyUse(container);
        this.ShowWaterUse(container);
        this.ShowLandUse(container);
        this.ShowAgriProd(container);
        this.ShowGreenhouseGas(container);
        this.ShowWasteManage(container);
        this.ShowMaterialIntensity(container);
        this.ShowEnergyIntensity(container);
        this.ShowGHGIntensity(container);
        this.ShowWaterIntensity(container);
        this.ShowEmissionEnSect(container);
        this.ShowMaterialFootprint(container);
        this.ShowWaterFootprint(container);
        this.ShowPTB(container);
        this.ShowUnitPriceTrade(container);
        this.ShowHDI(container); // have duplicate for testing local json file
        this.ShowEconGrowth(container);
        this.ShowInvestmentCons(container);
        this.ShowDebtInflation(container);
        this.ShowAccessEWS(container);
        this.ShowCOVIDSpend(container);
        this.ShowNaturalCapital(container);
        this.ShowGreenSpend(container);
        this.ShowGreenEnergy(container);
        this.ShowGreenTransport(container);
        this.ShowBiofuelProd(container);
        this.ShowGreenResDev(container);
        //this.ShowHDI_(container); ------ For Testing Purposes
    };
    MainView__.prototype.ShowDetailsView = function (type) {
        var self = this;
        var container1 = document.getElementById("visualization");
        container1.innerHTML = "";
        var container2 = document.getElementById("category");
        container2.innerHTML = "";
        var container3 = document.getElementById("indicator");
        container3.innerHTML = "";
        // let detailcontainer = new Xplore.Tab({ classes: ["tab-details"] });
        var detailcontainer = new Xplore.Tab({ classes: ["tab-details"] });
        detailcontainer.position = XPOSITION.BOTTOM;
        detailcontainer.tabs = [
            {
                button: new Xplore.Button({ text: "DATA" }),
                container: new Xplore.ScrollContainer(["details-data"]),
                onclick: function () {
                    detailcontainer.footer.children[0].classList.add("selected");
                    detailcontainer.footer.children[1].classList.remove("selected");
                    self.ShowData(detailcontainer.tabs[0].container, type);
                }
            },
            {
                button: new Xplore.Button({ text: "METADATA" }),
                container: new Xplore.ScrollContainer(["details-metadata"]),
                onclick: function () {
                    detailcontainer.footer.children[1].classList.add("selected");
                    detailcontainer.footer.children[0].classList.remove("selected");
                    self.ShowMetadata(detailcontainer.tabs[1].container, type);
                }
            }
        ];
        detailcontainer.Show(container1);
        detailcontainer.footer.children[0].classList.add("selected");
        this.ShowData(detailcontainer.tabs[0].container, type);
        detailcontainer.RefreshTab();
    };
    MainView__.prototype.ShowData = function (container, type) {
        var view = new DataViewMore(container, type);
        view.Show();
    };
    MainView__.prototype.ShowMetadata = function (container, type) {
        var view = new MataDataViewMore(container, type);
        view.Show();
    };
    MainView__.prototype.ShowMaterialUse = function (container) {
        var category = new NaturalResources();
        category.GetNRAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.showtooltip = true;
            // expander.Add(barchart);
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetNRAsiaPacificWorld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetNRAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetNRAsiaPacificMaterial(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetNRAsiaPacificIndustrialized(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowEnergyUse = function (container) {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        var category = new NaturalResources();
        category.GetREAsiaPacificWorld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetREAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowWaterUse = function (container) {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        var category = new NaturalResources();
        category.GetTotalWaterAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetWaterSecAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetWaterCapitaAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetWaterIntensityAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetAgriWaterAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetWaterAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetWaterFPAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowLandUse = function (container) {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        var category = new NaturalResources();
        category.GetTotalLand(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetTotalLandCapita(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetLandSector2015(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetLandIntensity(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetLandProductivity(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetLandMajorSector(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowAgriProd = function (container) {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        var category = new NaturalResources();
        category.GetGHGEmissions(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetGHGResultAgri(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetGHGCompare(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetGHGCO2(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetGHGIntensity(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetCereal(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetCompareAgri(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetAgriAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowGreenhouseGas = function (container) {
        var category = new NaturalResources();
        category.GetGHGEmissionEnergy(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowWasteManage = function (container) {
        var category = new NaturalResources();
        category.GetMWCove(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetMWRecycled(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetHWGenerated(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetHWIncinerated(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetMWCollected(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowMaterialIntensity = function (container) {
        var category = new ResourceEfficiency();
        category.GetREAsiaPacificWorld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetREAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetREAsiaPacificIndustry(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowEnergyIntensity = function (container) {
        var category = new ResourceEfficiency();
        category.Geteigdpasiapacificworld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.Geteiasiapacificdeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowGHGIntensity = function (container) {
        var category = new ResourceEfficiency();
        category.Getco2asiapacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowWaterIntensity = function (container) {
        var category = new ResourceEfficiency();
        category.GetWaterIntensityAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowEmissionEnSect = function (container) {
        var category = new ResourceUse();
        category.GetGHGEmissionEnergy(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowMaterialFootprint = function (container) {
        var category = new Consumption();
        category.GetCBMFAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetCBMFAsiaPacificWorld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetCBMFCompared(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetCBMFCAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetCBMFCAsiaPacificIndustralized(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowWaterFootprint = function (container) {
        var category = new Consumption();
        category.GetCBMFWaterAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowPTB = function (container) {
        var category = new TradeDependency();
        category.GetTDPTBMaterialCategory(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetTDPTBCSIRO(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetTDPTBAsiaPacificWorld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetTDPTBAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetTDPTBCapitaAsiaPacificWorld(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowUnitPriceTrade = function (container) {
        var category = new TradeDependency();
        category.GetTDUPIAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetTDUPEAsiaPacificDeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowHDI = function (container) {
        var category = new ResourceHumanDev();
        category.GetrhHDIdmc2010(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhHDIdmc2017(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhHDImf2010(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhHDImf2017(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhGDPdmc2010(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhGDPdmc2017(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhGDPmf2010(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhGDPmf2017(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    //------------------ For Testing Purposes -----------------
    // ShowHDI_(container: HTMLElement): void {
    //     // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
    //     // todo.Show(container);
    //     let category = new ResourceHumanDev();
    //     category.GetrhHDIdmc2010_(function (data: XChartDataSet) {
    //         let expander = new Xplore.Expander({ text: data.charttitle });
    //         let description;
    //         let splitter = new Xplore.SplitContainer();
    //         splitter.classes = ["expander-splitter"];
    //         splitter.orientation = XORIENTATION.VERTICAL;
    //         if (data.indicatorinfo)
    //             description = data.indicatorinfo[0].description
    //         else
    //             description = "";
    //         let desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
    //         desccontainer.Add(new Xplore.Text({ text: description }));
    //         let scatterplot = new XChart.ScatterPlotChart(data);
    //         scatterplot.classes.push("chart-top-header");
    //         scatterplot.legendposition = XPOSITION.TOP;
    //         scatterplot.showtooltip = true;
    //         expander.Add(scatterplot);
    //         expander.Show(container);
    //     });
    // }
    MainView__.prototype.ShowEconGrowth = function (container) {
        var category = new ResourceHumanDev();
        category.GetrhEGDPdmc2010(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhEGDPdmc2017(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhEGDPmf2010(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetrhEGDPmf2017(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            splitter.Set(desccontainer, 0);
            splitter.Set(scatterplot, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowInvestmentCons = function (container) {
        var category = new ResourceHumanDev();
        category.GetRHFDIIndiaChina(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetRHFDIAsiaPacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowDebtInflation = function (container) {
        var category = new ResourceHumanDev();
        category.Getrhgggasiapacificdeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.Getrhirasiapacificdeveloping(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowAccessEWS = function (container) {
        var category = new ResourceHumanDev();
        category.Getrhaeasiapacific(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.Getrhawater(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.Getrhasanitation(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowCOVIDSpend = function (container) {
        var category = new InclusiveGreenRecovery();
        category.GetIGRCovid(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowNaturalCapital = function (container) {
        var category = new InclusiveGreenRecovery();
        category.GetIGRNaturalCapital(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowGreenSpend = function (container) {
        var category = new InclusiveGreenRecovery();
        category.GetIGRTotalGreenRecovery(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowGreenEnergy = function (container) {
        var category = new InclusiveGreenRecovery();
        category.GetIGRGreenEnergySubregion(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var piechart = new XChart.PieChart(data);
            piechart.classes.push("chart-top-header");
            piechart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(piechart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
        category.GetIGRGreenEnergyCountry(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var piechart = new XChart.PieChart(data);
            piechart.classes.push("chart-top-header");
            piechart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(piechart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowGreenTransport = function (container) {
        var category = new InclusiveGreenRecovery();
        category.GetIGRElectric(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowGreenResDev = function (container) {
        var category = new InclusiveGreenRecovery();
        category.GetIGRFinancial(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var piechart = new XChart.PieChart(data);
            piechart.classes.push("chart-top-header");
            piechart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(piechart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowBiofuelProd = function (container) {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        var category = new InclusiveGreenRecovery();
        category.GetIGRBiofuelProduction(function (data) {
            var expander = new Xplore.Expander({ text: data.charttitle });
            var description;
            var splitter = new Xplore.SplitContainer();
            splitter.classes = ["expander-splitter"];
            splitter.orientation = XORIENTATION.VERTICAL;
            if (data.indicatorinfo)
                description = data.indicatorinfo[0].description;
            else
                description = "";
            var desccontainer = new Xplore.Container({ classes: ["indicator-description"] });
            desccontainer.Add(new Xplore.Text({ text: description }));
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            splitter.Set(desccontainer, 0);
            splitter.Set(barchart, 1);
            expander.Add(splitter);
            expander.Show(container);
        });
    };
    MainView__.prototype.ShowFooter = function () {
        var container = document.getElementById("footer");
        var header = new Xplore.Text({ text: "FOOTER" });
        header.Show(container);
        var info = new Xplore.TextBlock({ text: "Copyright", classes: ["textbox"] });
        info.Add(new Xplore.TextBlock({ text: "About Project", classes: ["textbox"] }));
        info.Show(container);
        // let cardinfo = new Xplore.Card({ text: "Copyright", icon: "home", classes: ["card"] });
        // cardinfo.Add(new Xplore.Card({ text: "About Project", icon: "home", classes: ["card"] }));
        // cardinfo.Add(new Xplore.Card({ text: "Data Source Link", icon: "home", classes: ["card"] }));
        // cardinfo.Add(new Xplore.Card({ text: "Contact", icon: "home", classes: ["card"] }));
        // cardinfo.Show(container);
    };
    MainView__.prototype.DataSet = function () {
        var dataset = new XChartDataSet();
        var labelx = [];
        for (var i = -10; i < 10; i++)
            labelx.push((i).toString());
        dataset.options = {
            label: { x: "Number Sold (Thousands)", y: "Years" },
            labels: {}
        };
        //Apple
        var data = new XChartData();
        data.text = "Apple";
        data.icon = "apple";
        var properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 150, 0, 1)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        var factor = 100;
        for (var i = 0; i < 10; i++)
            data.list.push({ name: (i).toString(), value: (Math.random() - 0.5) * factor });
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
            data.list.push({ name: (i).toString(), value: (Math.random() - 0.5) * factor });
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
            data.list.push({ name: (i).toString(), value: (Math.random() - 0.5) * factor });
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
            data.list.push({ name: (i).toString(), value: (Math.random() - 0.5) * factor });
        dataset.items.push(data);
        return dataset;
    };
    MainView__.prototype.ScatterDataSet = function () {
        var dataset = new XChartDataSet();
        var labelx = [];
        for (var i = 0; i < 10; i++)
            labelx.push((i).toString());
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
        var list = [];
        for (var i = 0; i < 10; i++)
            list.push({ name: (1979 + i).toString(), x: Math.random() * 10, y: Math.random() * 10, value: 0 });
        data.list = list;
        dataset.items.push(data);
        //Strawberry
        data = new XChartData();
        data.text = "Strawberry";
        data.icon = "bowling";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(0, 100, 0, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        list = [];
        for (var i = 0; i < 10; i++)
            list.push({ name: (1979 + i).toString(), x: Math.random() * 10, y: Math.random() * 10, value: 0 });
        data.list = list;
        dataset.items.push(data);
        //Pineapple
        data = new XChartData();
        data.text = "Pineapple";
        data.icon = "camera-iris";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(0, 0, 255, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        list = [];
        for (var i = 0; i < 10; i++)
            list.push({ name: (1979 + i).toString(), x: Math.random() * 10, y: Math.random() * 10, value: 0 });
        data.list = list;
        dataset.items.push(data);
        //Mango
        data = new XChartData();
        data.text = "Mango";
        data.icon = "file";
        properties = new XDrawProperties();
        properties.fillcolor = "rgba(255, 0, 255, 0.5)";
        properties.linecolor = properties.fillcolor;
        data.properties = properties;
        list = [];
        for (var i = 0; i < 10; i++)
            list.push({ name: (1979 + i).toString(), x: Math.random() * 10, y: Math.random() * 10, value: 0 });
        data.list = list;
        dataset.items.push(data);
        return dataset;
    };
    MainView__.prototype.Share = function (id) {
        switch (id) {
            case "NRAsiaPacific":
                this.ShareNRAsiaPacific();
                break;
            case "NRAsiaPacificMaterial":
                this.ShareNRAsiaPacificMaterial();
                break;
            case "NRAsiaPacificWorld":
                this.ShareNRAsiaPacificWorld();
                break;
            case "NRAsiaPacificDeveloping":
                this.ShareNRAsiaPacificDeveloping();
                break;
            case "NRAsiaPacificIndustrialized":
                this.ShareNRAsiaPacificIndustrialized();
                break;
            //---------------
            case "REAsiaPacificWorld":
                this.ShareREAsiaPacificWorld();
                break;
            case "REAsiaPacificDeveloping":
                this.ShareREAsiaPacificDeveloping();
                break;
            //---------------
            case "TotalWaterAsiaPacific":
                this.ShareTotalWaterAsiaPacific();
                break;
            case "WaterSecAsiaPacific":
                this.ShareWaterSecAsiaPacific();
                break;
            case "WaterCapitaAsiaPacific":
                this.ShareWaterCapitaAsiaPacific();
                break;
            case "WaterIntensityAsiaPacific":
                this.ShareWaterIntensityAsiaPacific();
                break;
            case "AgriWaterAsiaPacific":
                this.ShareAgriWaterAsiaPacific();
                break;
            case "WaterAsiaPacific":
                this.ShareWaterAsiaPacific();
                break;
            case "WaterFPAsiaPacific":
                this.ShareWaterFPAsiaPacific();
                break;
            //---------------
            case "TotalLand":
                this.ShareTotalLand();
                break;
            case "TotalLandCapita":
                this.ShareTotalLandCapita();
                break;
            case "LandSector2015":
                this.ShareLandSector2015();
                break;
            case "LandIntensity":
                this.ShareLandIntensity();
                break;
            case "LandProductivity":
                this.ShareLandProductivity();
                break;
            case "LandMajorSector":
                this.ShareLandMajorSector();
                break;
            //---------------
            case "GHGEmissions":
                this.ShareGHGEmissions();
                break;
            case "GHGResultAgri":
                this.ShareGHGResultAgri();
                break;
            case "GHGCompare":
                this.ShareGHGCompare();
                break;
            case "GHGCO2":
                this.ShareGHGCO2();
                break;
            case "GHGIntensity":
                this.ShareGHGIntensity();
                break;
            case "Cereal":
                this.ShareCereal();
                break;
            case "CompareAgri":
                this.ShareCompareAgri();
                break;
            case "AgriAsiaPacific":
                this.ShareAgriAsiaPacific();
                break;
            //---------------
            case "GHGEmissionEnergy":
                this.ShareGHGEmissionEnergy();
                break;
            //---------------
            case "MWCove":
                this.ShareMWCove();
                break;
            case "MWRecycled":
                this.ShareMWRecycled();
                break;
            case "HWGenerated":
                this.ShareHWGenerated();
                break;
            case "HWIncinerated":
                this.ShareHWIncinerated();
                break;
            case "MWCollected":
                this.ShareMWCollected();
                break;
            //---------------
            case "MREAsiaPacificWorld":
                this.ShareMREAsiaPacificWorld();
                break;
            case "MREAsiaPacificDeveloping":
                this.ShareMREAsiaPacificDeveloping();
                break;
            case "MREAsiaPacificIndustry":
                this.ShareMREAsiaPacificIndustry();
                break;
            //---------------
            case "eigdpasiapacificworld":
                this.Shareeigdpasiapacificworld();
                break;
            case "eiasiapacificdeveloping":
                this.Shareeiasiapacificdeveloping();
                break;
            //---------------
            case "co2asiapacific":
                this.Shareco2asiapacific();
                break;
            //---------------
            case "REWaterIntensityAsiaPacific":
                this.ShareREWaterIntensityAsiaPacific();
                break;
            //---------------
            case "GHGEmissionEnergy":
                this.ShareRUGHGEmissionEnergy();
                break;
            //---------------
            case "CBMFAsiaPacificDeveloping":
                this.ShareCBMFAsiaPacificDeveloping();
                break;
            case "CBMFAsiaPacificWorld":
                this.ShareCBMFAsiaPacificWorld();
                break;
            case "CBMFCompared":
                this.ShareCBMFCompared();
                break;
            case "CBMFCAsiaPacificDeveloping":
                this.ShareCBMFCAsiaPacificDeveloping();
                break;
            case "CBMFCAsiaPacificIndustralized":
                this.ShareCBMFCAsiaPacificIndustralized();
                break;
            //---------------
            case "CBMFWaterAsiaPacific":
                this.ShareCBMFWaterAsiaPacific();
                break;
            //---------------
            case "TDPTBMaterialCategory":
                this.ShareTDPTBMaterialCategory();
                break;
            case "TDPTBCSIRO":
                this.ShareTDPTBCSIRO();
                break;
            case "TDPTBAsiaPacificWorld":
                this.ShareTDPTBAsiaPacificWorld();
                break;
            case "TDPTBAsiaPacific":
                this.ShareTDPTBAsiaPacific();
                break;
            case "TDPTBCapitaAsiaPacificWorld":
                this.ShareTDPTBCapitaAsiaPacificWorld();
                break;
            //---------------
            case "TDUPIAsiaPacificDeveloping":
                this.ShareTDUPIAsiaPacificDeveloping();
                break;
            case "TDUPEAsiaPacificDeveloping":
                this.ShareTDUPEAsiaPacificDeveloping();
                break;
            //---------------
            case "IGRCovid":
                this.ShareIGRCovid();
                break;
            //---------------
            case "IGRNaturalCapital":
                this.ShareIGRNaturalCapital();
                break;
            //---------------
            case "IGRTotalGreenRecovery":
                this.ShareIGRTotalGreenRecovery();
                break;
            //---------------
            case "IGRGreenEnergySubregion":
                this.ShareIGRGreenEnergySubregion();
                break;
            case "IGRGreenEnergyCountry":
                this.ShareIGRGreenEnergyCountry();
                break;
            //---------------
            case "IGRElectric":
                this.ShareIGRElectric();
                break;
            //---------------
            case "IGRBiofuelProduction":
                this.ShareIGRBiofuelProduction();
                break;
            //---------------
            case "IGRFinancial":
                this.ShareIGRFinancial();
                break;
            //---------------
            case "rhHDIdmc2010":
                this.SharerhHDIdmc2010();
                break;
            case "rhHDIdmc2017":
                this.SharerhHDIdmc2017();
                break;
            case "rhHDImf2010":
                this.SharerhHDImf2010();
                break;
            case "rhHDImf2017":
                this.SharerhHDImf2017();
                break;
            case "rhGDPdmc2010":
                this.SharerhGDPdmc2010();
                break;
            case "rhGDPdmc2017":
                this.SharerhGDPdmc2017();
                break;
            case "rhGDPmf2010":
                this.SharerhGDPmf2010();
                break;
            case "rhGDPmf2017":
                this.SharerhGDPmf2017();
                break;
            //---------------
            case "rhEGDPdmc2010":
                this.SharerhEGDPdmc2010();
                break;
            case "rhEGDPdmc2017":
                this.SharerhEGDPdmc2017();
                break;
            case "rhEGDPmf2010":
                this.SharerhEGDPmf2010();
                break;
            case "rhEGDPmf2017":
                this.SharerhEGDPmf2017();
                break;
            //---------------
            case "RHFDIIndiaChina":
                this.ShareRHFDIIndiaChina();
                break;
            case "RHFDIAsiaPacific":
                this.ShareRHFDIAsiaPacific();
                break;
            //---------------
            case "rhgggasiapacificdeveloping":
                this.Sharerhgggasiapacificdeveloping();
                break;
            case "rhirasiapacificdeveloping":
                this.Sharerhirasiapacificdeveloping();
                break;
            //---------------
            case "rhaeasiapacific":
                this.Sharerhaeasiapacific();
                break;
            case "rhawater":
                this.Sharerhawater();
                break;
            case "rhasanitation":
                this.Sharerhasanitation();
                break;
        }
    };
    //------------ Material Use ---------------
    MainView__.prototype.ShareNRAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetNRAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareNRAsiaPacificMaterial = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetNRAsiaPacificMaterial(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareNRAsiaPacificWorld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetNRAsiaPacificWorld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareNRAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetNRAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareNRAsiaPacificIndustrialized = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetNRAsiaPacificIndustrialized(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------ Energy Use ---------------
    MainView__.prototype.ShareREAsiaPacificWorld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetREAsiaPacificWorld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareREAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetREAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------ Water Use ---------------
    MainView__.prototype.ShareTotalWaterAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetTotalWaterAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareWaterSecAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetWaterSecAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareWaterCapitaAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetWaterCapitaAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareWaterIntensityAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetWaterIntensityAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareAgriWaterAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetAgriWaterAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareWaterAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetWaterAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareWaterFPAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetWaterFPAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------ Land Use ---------------
    MainView__.prototype.ShareTotalLand = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetTotalLand(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareTotalLandCapita = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetTotalLandCapita(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareLandSector2015 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetLandSector2015(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareLandIntensity = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetLandIntensity(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareLandProductivity = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetLandProductivity(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareLandMajorSector = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetLandMajorSector(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------ GHG from agriculture (Agricultural productivity) ---------------
    MainView__.prototype.ShareGHGEmissions = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetGHGEmissions(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareGHGResultAgri = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetGHGResultAgri(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareGHGCompare = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetGHGCompare(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareGHGCO2 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetGHGCO2(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareGHGIntensity = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetGHGIntensity(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareCereal = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetCereal(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareCompareAgri = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetCompareAgri(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareAgriAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetAgriAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------ Greenhouse Gas Emissions ---------------
    MainView__.prototype.ShareGHGEmissionEnergy = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetGHGEmissionEnergy(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------ Waste Management ---------------
    MainView__.prototype.ShareMWCove = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetMWCove(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareMWRecycled = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetMWRecycled(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareHWGenerated = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetHWGenerated(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareHWIncinerated = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetHWIncinerated(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareMWCollected = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new NaturalResources();
        category.GetMWCollected(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    // --------- Material Intensity of the economy---------------
    MainView__.prototype.ShareMREAsiaPacificWorld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.GetREAsiaPacificWorld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareMREAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.GetREAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareMREAsiaPacificIndustry = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.GetREAsiaPacificIndustry(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    // --------- Energy intensity of the economy---------------
    MainView__.prototype.Shareeigdpasiapacificworld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.Geteigdpasiapacificworld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.Shareeiasiapacificdeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.Geteiasiapacificdeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    // --------- GHG intensity of the economy---------------
    MainView__.prototype.Shareco2asiapacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.Getco2asiapacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    // --------- Water intensity of the economy---------------
    MainView__.prototype.ShareREWaterIntensityAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceEfficiency();
        category.GetWaterIntensityAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    // --------- Emissions of the energy sector---------------
    MainView__.prototype.ShareRUGHGEmissionEnergy = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceUse();
        category.GetGHGEmissionEnergy(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //--------------------------- Material Footprint ---------------------------------
    MainView__.prototype.ShareCBMFAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new Consumption();
        category.GetCBMFAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareCBMFAsiaPacificWorld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new Consumption();
        category.GetCBMFAsiaPacificWorld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareCBMFCompared = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new Consumption();
        category.GetCBMFCompared(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareCBMFCAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new Consumption();
        category.GetCBMFCAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareCBMFCAsiaPacificIndustralized = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new Consumption();
        category.GetCBMFCAsiaPacificIndustralized(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //--------------------------- Water Footprint ---------------------------------
    MainView__.prototype.ShareCBMFWaterAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new Consumption();
        category.GetCBMFWaterAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //--------------------------- Physical trade balance  ---------------------------------
    MainView__.prototype.ShareTDPTBMaterialCategory = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDPTBMaterialCategory(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareTDPTBCSIRO = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDPTBCSIRO(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareTDPTBAsiaPacificWorld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDPTBAsiaPacificWorld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareTDPTBAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDPTBAsiaPacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareTDPTBCapitaAsiaPacificWorld = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDPTBCapitaAsiaPacificWorld(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //--------------------------- Unit price of trade ---------------------------------
    MainView__.prototype.ShareTDUPIAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDUPIAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareTDUPEAsiaPacificDeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new TradeDependency();
        category.GetTDUPEAsiaPacificDeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- COVID spending -----------------------
    MainView__.prototype.ShareIGRCovid = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRCovid(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Natural capital -----------------------
    MainView__.prototype.ShareIGRNaturalCapital = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRNaturalCapital(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Green spending -----------------------
    MainView__.prototype.ShareIGRTotalGreenRecovery = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRTotalGreenRecovery(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Green energy investments -----------------------
    MainView__.prototype.ShareIGRGreenEnergySubregion = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRGreenEnergySubregion(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareIGRGreenEnergyCountry = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRGreenEnergyCountry(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Green Transport -----------------------
    MainView__.prototype.ShareIGRElectric = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRElectric(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Biofuel production-Green Spending -----------------------
    MainView__.prototype.ShareIGRBiofuelProduction = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRBiofuelProduction(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Green research and development -----------------------
    MainView__.prototype.ShareIGRFinancial = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new InclusiveGreenRecovery();
        category.GetIGRFinancial(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Human Development Index (HDI) -----------------------------------
    MainView__.prototype.SharerhHDIdmc2010 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhHDIdmc2010(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhHDIdmc2017 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhHDIdmc2017(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhHDImf2010 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhHDImf2010(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhHDImf2017 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhHDImf2017(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhGDPdmc2010 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhGDPdmc2010(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhGDPdmc2017 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhGDPdmc2017(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhGDPmf2010 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhGDPmf2010(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhGDPmf2017 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhGDPmf2017(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    //------------------------- Economic Growth (GDP) -----------------------------------
    MainView__.prototype.SharerhEGDPdmc2010 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhEGDPdmc2010(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhEGDPdmc2017 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhEGDPdmc2017(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhEGDPmf2010 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhEGDPmf2010(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    MainView__.prototype.SharerhEGDPmf2017 = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetrhEGDPmf2017(function (data) {
            var scatterplot = new XChart.ScatterPlotChart(data);
            scatterplot.classes.push("chart-top-header");
            scatterplot.legendposition = XPOSITION.TOP;
            scatterplot.showtooltip = true;
            scatterplot.Show(container);
        });
    };
    //------------------------- Investment and consumption -----------------------------------
    MainView__.prototype.ShareRHFDIIndiaChina = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetRHFDIIndiaChina(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.ShareRHFDIAsiaPacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.GetRHFDIIndiaChina(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Debt, inflation -----------------------------------
    MainView__.prototype.Sharerhgggasiapacificdeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.Getrhgggasiapacificdeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.Sharerhirasiapacificdeveloping = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.Getrhirasiapacificdeveloping(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    //------------------------- Access to energy, water, sanitation -----------------------------------
    MainView__.prototype.Sharerhaeasiapacific = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.Getrhaeasiapacific(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.Sharerhawater = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.Getrhawater(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    MainView__.prototype.Sharerhasanitation = function () {
        var container = document.getElementsByClassName("box-layout");
        container[0].remove();
        var category = new ResourceHumanDev();
        category.Getrhasanitation(function (data) {
            var barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    };
    return MainView__;
}());
//# sourceMappingURL=mainview_bckup20220418.js.map