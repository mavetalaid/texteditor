// interface UNEPTableRow {
//     y1990: any;
//     y1992: any;
//     y1993: any;
//     y1994: any;
//     y1995: any;
//     y1996: any;
//     y1997: any;
//     y1998: any;
//     y1999: any;
//     y2000: any;
//     y2001: any;
//     y2002: any;
//     y2003: any;
//     y2004: any;
//     y2005: any;
//     y2006: any;
//     y2007: any;
//     y2008: any;
//     y2009: any;
//     y2010: any;
//     y2011: any;
//     y2012: any;
//     y2013: any;
//     y2014: any;
//     y2015: any;
//     y2016: any;
//     y2017: any;
//     y2018: any;
//     y2019: any;
//     y2030: any;
//     y2050: any;

//     y2010_Production: any;
//     y2011_Consumption: any;

//     country: string,
//     data: UNEPYearValue[];
//     sharename: string;
//     charttitle: string;
//     units: string;

//     chartdata: any;
//     chartinfo: any;
//     indicatorinfo: any;
// }

// interface UNEPYearValue {
//     year: number,
//     value: number
// }

var availableD_;
var countryselected;
var indexCategory = 1;

class MainView_ { // added "_" to avoid conflict


    Show(): void {
        this.ShowCategory();
        this.ShowCategory1();
        this.ShowCategory2();
        // this.ShowCategory3();
        // this.ShowCategory4();
        // this.ShowCategory5();
        // this.ShowCategory6();
        // this.ShowCategory7();
        this.Showheader();
        // this.ShowBanner();
        this.ShowVisualization("Material use"); // Temporary
        this.ShowFooter();

    }

    Showheader(): void {
        let container = document.getElementById("header");

        let header = new Xplore.List({ icon: "leaf", text: "REGIONAL RESOURCE EFFICIENCY INDICATORS IN THE ASIA PACIFIC" });
        header.Show(container);
    }

    ShowBanner(): void {
        let container = document.getElementById("banner");

        let image = new Xplore.Image("resources/background.jpg");
        image.Show(container);

        let header = new Xplore.Text({ text: "Banner Image" });
        header.Show(container);

        let description = new Xplore.TextBlock({ text: "The indicators could help to obtain the region-specific quantitative values of different variables measuring the state or change in the system. The availability of regional data will assist in perceiving and analyzing the interlinkage between resource efficiency and regional issues." });
        description.Show(container);
    }

    ShowCategory(): void {
        let container = document.getElementById("category");

        // let headercontainer = new Xplore.Container({ text: "CATEGORIES", classes: ["catheader"] });
        // headercontainer.Show(container);

        let data: XChartMapData = {
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
        let listcountry = new Xplore.Combobox({ classes: ["list-country"] }) as Xplore.Combobox;
        listcountry.options = [
            "All",
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

        listcountry.value = "All"
        countryselected = listcountry.value;

        listcountry.onchange = function () {
            // let gencategory = new GeneralCategory();
            // gencategory.GetUniqueDataByType(listcountry.value, function (data: XChartDataSet) {
            //     // console.log(data);
            //     availableD_ = data;
            //     self.ShowCategory1();

            // });
            if (listcountry.value !== "All") {
                countryselected = listcountry.value;
                self["ShowCategory" + indexCategory]();
            } else {

            }

        };

        // map.Show(container);
        
        listcountry.Show(container);

        let self = this;

        let category1 = new Xplore.List({
            buttons: [
                new Xplore.Button({
                    text: "Natural<br/>Resources",
                    icon: "image-filter-hdr",
                    onclick: function () {
                        indexCategory = 1;
                        self.ShowCategory1();
                    }
                }),
                new Xplore.Button({
                    text: "Resource<br/>Efficiency",
                    icon: "water-pump",
                    onclick: function () {
                        indexCategory = 2;
                        self.ShowCategory2();
                    }
                }),
                new Xplore.Button({
                    text: "Resource<br/>Use In<br/>Major Sectors",
                    icon: "home",
                    onclick: function () {
                        indexCategory = 3;
                        self.ShowCategory3();
                    }
                }),
                new Xplore.Button({
                    text: "Consumption-based<br/>Indicators for<br/>Natural Resource Use",
                    icon: "water",
                    onclick: function () {
                        indexCategory = 4;
                        self.ShowCategory4();
                    }
                }),
                new Xplore.Button({
                    text: "Trade<br/>Dependency",
                    icon: "currency-usd",
                    onclick: function () {
                        indexCategory = 5;
                        self.ShowCategory5();
                    }
                }),
                new Xplore.Button({
                    text: "Resources<br/>and Human<br/>Development",
                    icon: "human-male",
                    onclick: function () {
                        indexCategory = 6;
                        self.ShowCategory6();
                    }
                }),
                new Xplore.Button({
                    text: "Inclusive<br/>Green<br/>Recovery",
                    icon: "virus",
                    onclick: function () {
                        indexCategory = 7;
                        self.ShowCategory7();
                    }
                })],
            classes: ["catlist"]
        });

        category1.Show(container);
    }

    ShowCategory1(): void {
        this.ShowIndicators("Natural resources",
            "Materials, energy, water and land are considered as main resource uses, thus emissions, impacts and waste related to these resource uses are taken into consideration. As agricultural sector is a key significant sector in the Asia Pacific region, so that a focus is placed on the productivity of this sector. With regards to emissions, impacts and waste, greenhouse gas emissions and waste management are selected to represent those aspects. Hence, material use, energy use, water use, land use, agricultural productivity, greenhouse gas emissions, and waste management are selected as regional resource efficiency indicators by means of natural resources.",
            [
                "Material use",
                "Energy use",
                "Water use",
                "Land use",
                "Agricultural productivity",
                "Greenhouse gas emissions",
                "Waste management"
            ]);
    }

    ShowCategory2(): void {
        this.ShowIndicators("Resource efficiency",
            "Material intensity refers to the amount of material (in physical mass terms) used to produce one unit of GDP (in monetary terms). In other words, material intensity is simply the inverse of material productivity. These two terms are often misunderstood as simply consuming less which results in the loss of economic and social gains that can be obtained from resource use. The Asia Pacific developing countries are continuing to industrialize which causes the demand of primary materials to further escalate in these countries. The efficient use of materials can aid these to attain a more competitive and environmentally sustainable development route. In this report, the material intensity indicator is defined as the domestic material consumption per unit of gross domestic product (DMC per GDP).",
            [
                "Material Intensity of the economy",
                "Energy intensity of the economy",
                "Water intensity of the economy",
                "GHG intensity of the economy"
            ]);
    }

    ShowCategory3(): void {
        this.ShowIndicators("Resource use in major sectors",
            "Direct GHG emissions that are produced in the generation and transmission of energy are a relevant indicator of both the carbon efficiency with which energy services are provided, and the scale of the energy needs of a society. This section looks at the environmental impacts from the perspective of climate change. While many countries in the Asia Pacific region have reduced their energy intensity in terms of megajoules per unit of GDP, a great deal of this energy transition has come about through new coal-fired power. This investment may even replace more emissions-intensive technology, but the total emissions produced from the energy sector are due to a combination of the carbon intensity of energy production, the consumption of energy per capita and the population growth.",
            [
                "Material use for manufacturing",
                "Material use for construction",
                "Emissions of the energy sector"
            ]);
    }

    ShowCategory4(): void {
        this.ShowIndicators("Consumption-based indicators for natural resource use",
            "When economies develop, they import final goods to replace a large portion of the domestic production of final goods, and the extractive activities on which they rely. The upstream primary material requirements for those commodities, as well as the associated environmental impact, remain in the country of production. This is how developed economies outsource their material-intensive activities to developing countries. This process has enabled wealthier economies to minimize their dependence on resource extraction. Material footprint of consumption is an attribute of global material extraction to final demand including the final consumption of households, governments, and capital investment. The indicator provides information about the actual primary material demand of any economy without including the extraterritorial trade intervention. Also, the indicator reports the actual quantity of primary materials consumption and the capital investment a country relies upon independently from where the material extraction has occurred in the global economy.",
            [
                "Material Footprint",
                "Water Footprint"
            ]);
    }

    ShowCategory5(): void {
        this.ShowIndicators("Trade dependency",
            "International trade has been increasing due to the wave of globalization. The specific policy context is essential, as to whether a country is a net importer or net exporter of primary resources. Importer countries can reduce their dependency on imported primary resources by pursuing higher resource productivity whereas exporter countries might seek policies by strengthening export diversification. It is also important for the prevention of the Dutch Disease (an economic phenomenon entailing rapid development of one sector while declining in other sectors) via reducing the serious imbalances of payments between countries’ unit prices of imports and exports.",
            [
                "Physical Trade Balance",
                "Unit price of trade"
            ]);
    }

    ShowCategory6(): void {
        this.ShowIndicators("Resources and human development",
            "The major goal of human development is to lead society towards greater mutual well-being via productive economic activities. Every additional natural resource use and their corresponding environmental emission support positive human resource development. Therefore, in this section of the report we examined the relationship between the Human Development Index (HDI) – a measure of human development - and the growth in natural resource use and emissions. HDI consists of three different domains, viz., literacy rate, life expectancy, and standard of living, while natural resource use here refers to the material use and emissions refers to the energy use which is the dominant sector regarding emissions.",
            [
                "Human Development Index (HDI)",
                "Economic Growth (GDP)",
                "Investment and consumption",
                "Debt, inflation",
                "Access to energy, water, sanitation"
            ]);
    }
    ShowCategory7(): void {
        this.ShowIndicators("Inclusive green recovery",
            "During the period of disaster/crisis, the financial supports provided to recover while focusing the environmentally friendly approaches are termed as green stimulus (UNEP, 2020b). In this report, a focus is put on fiscal supports for a COVID crisis and its effect on natural capital and natural budget including in energy, transportation, building, and research and development sectors. Overall, global green recovery spending has been incommensurate with the scale of the planetary crises of climate change, nature loss, and pollution. O’Callaghan and Murdock (2021) raised the following key questions, while highlighting the dire need for prompt response by the countries to align for the sustainable recovery",
            [
                "COVID spending",
                "Natural capital",
                "Green spending",
                "Green energy investments",
                "Green Transport",
                "Green research and development",
                "Biofuel production-Green Spending"
            ]);
    }

    ShowIndicators(indicator: string, description: string, texts: string[]): void {

        let self = this;

        let container = document.getElementById("indicator");
        container.innerHTML = "";

        let expander = new Xplore.Expander({ text: "Indicator" });
        expander.Add(new Xplore.Container({ text: "INDICATORS", classes: ["catheader"] }));
        expander.Add(new Xplore.Text({ text: indicator, classes: ["catheader"] }));
        expander.Add(new Xplore.TextBlock({ text: description, classes: ["indicator-desc"] }));

        let gencategory = new GeneralCategory();
        gencategory.GetUniqueDataByType(countryselected, function (data: XChartDataSet) {
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

        expander.Show(container);
    }

    ShowIndicators2(container: HTMLElement, texts: string[], availabledata: string[]): void {
        let self = this;
        let grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 2;
        grid.columns = 1;

        let text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                if (availabledata.indexOf(texts[0]) > -1)
                    self.ShowVisualization(texts[0]);
            }
        });
        grid.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }


        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                if (availabledata.indexOf(texts[1]) > -1)
                    self.ShowVisualization(texts[1]);
            }
        });
        grid.Set(text, 1, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }
        grid.Show(container);
    }

    ShowIndicators3(container: HTMLElement, texts: string[], availabledata: string[]): void {
        let self = this;
        let grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 2;
        grid.columns = 1;

        let gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);

        let text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                if (availabledata.indexOf(texts[0]) > -1)
                    self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                if (availabledata.indexOf(texts[1]) > -1)
                    self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                if (availabledata.indexOf(texts[2]) > -1)
                    self.ShowVisualization(texts[2]);
            }
        });
        grid.Set(text, 1, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }

        grid.Show(container);
    }

    ShowIndicators4(container: HTMLElement, texts: string[], availabledata: string[]): void {
        let self = this;
        let grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 2;
        grid.columns = 2;

        let text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                if (availabledata.indexOf(texts[0]) > -1)
                    self.ShowVisualization(texts[0]);
            }
        });
        grid.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                if (availabledata.indexOf(texts[1]) > -1)
                    self.ShowVisualization(texts[1]);
            }
        });
        grid.Set(text, 0, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[1]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[2],
            onclick: function () {
                if (availabledata.indexOf(texts[2]) > -1)
                    self.ShowVisualization(texts[2]);
            }
        });
        grid.Set(text, 1, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                if (availabledata.indexOf(texts[3]) > -1)
                    if (availabledata.indexOf(texts[3]) > -1)
                        self.ShowVisualization(texts[3]);
            }
        });
        grid.Set(text, 1, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }

        grid.Show(container);
    }

    ShowIndicators5(container: HTMLElement, texts: string[], availabledata: string[]): void {
        let self = this;
        let grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 3;
        grid.columns = 1;

        let gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);

        let text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                if (availabledata.indexOf(texts[0]) > -1)
                    self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                if (availabledata.indexOf(texts[1]) > -1)
                    self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
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
                if (availabledata.indexOf(texts[2]) > -1)
                    self.ShowVisualization(texts[2]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                if (availabledata.indexOf(texts[3]) > -1)
                    self.ShowVisualization(texts[3]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[4],
            onclick: function () {
                if (availabledata.indexOf(texts[4]) > -1)
                    self.ShowVisualization(texts[4]);
            }
        });
        grid.Set(text, 2, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[4]) === -1)
                text.classes = ["no-data-available"];
        }

        grid.Show(container);
    }

    ShowIndicators6(container: HTMLElement, texts: string[], availabledata: string[]): void {
        let self = this;
        let grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 3;
        grid.columns = 1;

        let gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);

        let text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                if (availabledata.indexOf(texts[0]) > -1)
                    self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                if (availabledata.indexOf(texts[1]) > -1)
                    self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
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
                if (availabledata.indexOf(texts[2]) > -1)
                    self.ShowVisualization(texts[2]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                if (availabledata.indexOf(texts[3]) > -1)
                    self.ShowVisualization(texts[3]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
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
                if (availabledata.indexOf(texts[4]) > -1)
                    self.ShowVisualization(texts[4]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[4]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[5],
            onclick: function () {
                if (availabledata.indexOf(texts[5]) > -1)
                    self.ShowVisualization(texts[5]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[5]) === -1)
                text.classes = ["no-data-available"];
        }

        grid.Show(container);
    }

    ShowIndicators7(container: HTMLElement, texts: string[], availabledata: string[]): void {
        let self = this;
        let grid = new Xplore.Grid({ classes: ["grid-indicator"] });
        grid.rows = 3;
        grid.columns = 1;

        let gridinner = new Xplore.Grid({ classes: ["grid-indicator-inner"] });
        gridinner.rows = 1;
        gridinner.columns = 2;
        grid.Set(gridinner, 0, 0);

        let text = new Xplore.Button({
            text: texts[0],
            onclick: function () {
                if (availabledata.indexOf(texts[0]) > -1)
                    self.ShowVisualization(texts[0]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[0]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[1],
            onclick: function () {
                if (availabledata.indexOf(texts[1]) > -1)
                    self.ShowVisualization(texts[1]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
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
                if (availabledata.indexOf(texts[2]) > -1)
                    self.ShowVisualization(texts[2]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[2]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[3],
            onclick: function () {
                if (availabledata.indexOf(texts[3]) > -1)
                    self.ShowVisualization(texts[3]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[3]) === -1)
                text.classes = ["no-data-available"];
        }

        gridinner = new Xplore.Grid();
        gridinner.rows = 1;
        gridinner.columns = 3;
        grid.Set(gridinner, 2, 0);

        text = new Xplore.Button({
            text: texts[4],
            onclick: function () {
                if (availabledata.indexOf(texts[4]) > -1)
                    self.ShowVisualization(texts[4]);
            }
        });
        gridinner.Set(text, 0, 0);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[4]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[5],
            onclick: function () {
                if (availabledata.indexOf(texts[5]) > -1)
                    self.ShowVisualization(texts[5]);
            }
        });
        gridinner.Set(text, 0, 1);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[5]) === -1)
                text.classes = ["no-data-available"];
        }

        text = new Xplore.Button({
            text: texts[6],
            onclick: function () {
                if (availabledata.indexOf(texts[6]) > -1)
                    self.ShowVisualization(texts[6]);
            }
        });
        gridinner.Set(text, 0, 2);
        if (countryselected !== "All") {
            if (availabledata.indexOf(texts[6]) === -1)
                text.classes = ["no-data-available"];
        }

        grid.Show(container);
    }

    ShowVisualization(type: string): void {
        let self = this;
        let container = document.getElementById("visualization");
        container.innerHTML = "";
        let type_;

        let header = new Xplore.Container({ text: "VISUALIZATION", classes: ["catheader"] });
        header.Show(container);

        if (countryselected !== "All") {
            if (type === "Material use") {
                type_ = "MaterialUse";
            } else if (type === "Energy use") {
                type_ = "EnergyUse";
            } else if (type === "Water use") {
                type_ = "WaterUse";
            } else if (type === "Land use") {
                type_ = "LandUse";
            } else if (type === "Agricultural productivity") {
                type_ = "AgriProd";
            } else if (type === "Greenhouse gas emissions") {
                type_ = "GreenhouseGas";
            } else if (type === "Waste management") {
                type_ = "WasteManage";
            } else if (type === "Material Intensity of the economy") {
                type_ = "MaterialIntensity";
            } else if (type === "Energy intensity of the economy") {
                type_ = "EnergyIntensity";
            } else if (type === "Water intensity of the economy") {
                type_ = "WaterIntensity";
            } else if (type === "GHG intensity of the economy") {
                type_ = "GHGIntensity";
            } else if (type === "Material Footprint") {
                type_ = "MaterialFootprint";
            } else if (type === "Water Footprint") {
                type_ = "WaterFootprint";
            } else if (type === "Physical Trade Balance") {
                type_ = "PTB";
            } else if (type === "Unit price of trade") {
                type_ = "UnitPriceTrade";
            } else if (type === "Human Development Index (HDI)") {
                type_ = "HDI";
            } else if (type === "Economic Growth (GDP)") {
                type_ = "EconGrowth";
            } else if (type === "Investment and consumption") {
                type_ = "InvestmentCons";
            } else if (type === "Debt, inflation") {
                type_ = "DebtInflation";
            } else if (type === "Access to energy, water, sanitation") {
                type_ = "AccessEWS";
            } else if (type === "COVID spending") {
                type_ = "COVIDSpend";
            } else if (type === "Natural capital") {
                type_ = "NaturalCapital";
            } else if (type === "Green spending") {
                type_ = "GreenSpend";
            } else if (type === "Green energy investments") {
                type_ = "GreenEnergy";
            } else if (type === "Green Transport") {
                type_ = "GreenTransport";
            } else if (type === "Green research and development") {
                type_ = "GreenResDev";
            } else if (type === "Biofuel production-Green Spending") {
                type_ = "BiofuelProd";
            }

            this["Show" + type_](container);
        } else {
            this.ShowMaterialUse(container);
            this.ShowEnergyUse(container);
            this.ShowWaterUse(container);
            this.ShowLandUse(container);
            this.ShowAgriProd(container);
            this.ShowWasteManage(container);
            this.ShowMaterialIntensity(container);
            this.ShowMaterialFootprint(container);
            this.ShowPTB(container);
            this.ShowInvestmentCons(container);
            this.ShowBiofuelProd(container);
        }

    }

    ShowMaterialUse(container: HTMLElement): void {
        let category = new NaturalResources();
        category.GetNRAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.showtooltip = true;

            barchart.Show(container);
        });

        category.GetNRAsiaPacificMaterial(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });
    }

    ShowEnergyUse(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new NaturalResources();
        category.GetNRAsiaPacificWorld(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetNRAsiaPacificDeveloping(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    }

    ShowWaterUse(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new NaturalResources();
        category.GetTotalWaterAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetWaterCapitaAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetWaterIntensityAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetAgriWaterAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetWaterAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetWaterFPAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });


    }

    ShowLandUse(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new NaturalResources();
        category.GetTotalLand(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetTotalLandCapita(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetLandIntensity(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetLandProductivity(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetLandMajorSector(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });
    }

    ShowAgriProd(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new NaturalResources();
        category.GetGHGEmissions(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetGHGResultAgri(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetGHGCompare(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetGHGCO2(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetGHGIntensity(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetCereal(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetCompareAgri(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetAgriAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });
    }

    ShowWasteManage(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new NaturalResources();
        category.GetMWCollected(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetMWCove(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetMWRecycled(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetHWGenerated(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });

        category.GetHWIncinerated(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });
    }

    ShowGreenhouseGas(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowMaterialIntensity(container: HTMLElement): void {
        let category = new ResourceEfficiency();
        category.GetREAsiaPacificWorld(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetREAsiaPacificDeveloping(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetREAsiaPacificIndustry(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    }

    ShowEnergyIntensity(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        let category = new ResourceEfficiency();
        category.Geteiasiapacificdeveloping(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    
    }

    ShowWaterIntensity(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowGHGIntensity(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowMaterialFootprint(container: HTMLElement): void {
        let category = new Consumption();
        category.GetCBMFAsiaPacificDeveloping(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetCBMFAsiaPacificWorld(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetCBMFCompared(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetCBMFCAsiaPacificDeveloping(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetCBMFCAsiaPacificIndustralized(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    }

    ShowWaterFootprint(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowPTB(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new TradeDependency();
        category.GetTDPTBMaterialCategory(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetTDPTBCSIRO(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetTDPTBAsiaPacificWorld(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetTDPTBAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    }

    ShowUnitPriceTrade(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowHDI(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowEconGrowth(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowInvestmentCons(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);
        let category = new ResourceHumanDev();
        category.GetRHFDIIndiaChina(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

        category.GetRHFDIAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });

    }

    ShowDebtInflation(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowAccessEWS(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowCOVIDSpend(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowNaturalCapital(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowGreenSpend(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowGreenEnergy(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowGreenTransport(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowGreenResDev(container: HTMLElement): void {
        let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        todo.Show(container);
    }

    ShowBiofuelProd(container: HTMLElement): void {
        // let todo = new Xplore.Text({ text: "Under Development", classes: ["under_dev"] })
        // todo.Show(container);

        let category = new InclusiveGreenRecovery();
        category.GetIGRBiofuelProduction(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            barchart.Show(container);
        });
    }

    ShowFooter(): void {
        let container = document.getElementById("footer");

        let header = new Xplore.Text({ text: "FOOTER" });
        header.Show(container);

        let info = new Xplore.TextBlock({ text: "Copyright", classes: ["textbox"] });
        info.Add(new Xplore.TextBlock({ text: "About Project", classes: ["textbox"] }));
        info.Show(container);

        // let cardinfo = new Xplore.Card({ text: "Copyright", icon: "home", classes: ["card"] });
        // cardinfo.Add(new Xplore.Card({ text: "About Project", icon: "home", classes: ["card"] }));
        // cardinfo.Add(new Xplore.Card({ text: "Data Source Link", icon: "home", classes: ["card"] }));
        // cardinfo.Add(new Xplore.Card({ text: "Contact", icon: "home", classes: ["card"] }));
        // cardinfo.Show(container);
    }

    DataSet(): XChartDataSet {
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

    Share(id: string): void {
        switch (id) {
            case "NRAsiaPacific":
                this.ShareNRAsiaPacific();
                break;

            case "NRAsiaPacificMaterial":
                this.ShareNRAsiaPacificMaterial();
                break;
        }
    }

    // Share1(container?: HTMLElement): void {
    //     let category = new NaturalResources();
    //     category.GetTotalWaterAsiaPacific(function (data: XChartDataSet) {
    //         let barchart = new XChart.StackedColumnChart(data);
    //         barchart.showtooltip = true;
    //         barchart.legendposition = XPOSITION.LEFT;
    //         barchart.Show(container);
    //     });
    // }

    // Share2(container?: HTMLElement): void {
    //     let category = new Consumption();
    //     category.GetCBMFAsiaPacificDeveloping(function (data: XChartDataSet) {
    //         let barchart = new XChart.StackedColumnChart(data);
    //         barchart.classes.push("chart-top-header");
    //         barchart.legendposition = XPOSITION.TOP;
    //         barchart.Show(container);
    //     });
    // }

    ShareNRAsiaPacific(container?: HTMLElement): void {
        let category = new NaturalResources();
        category.GetNRAsiaPacific(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.classes.push("chart-top-header");
            barchart.legendposition = XPOSITION.TOP;
            // barchart.showtooltip = true;

            barchart.Show(container);
        });
    }
    ShareNRAsiaPacificMaterial(container?: HTMLElement): void {
        let category = new NaturalResources();
        category.GetNRAsiaPacificMaterial(function (data: XChartDataSet) {
            let barchart = new XChart.StackedColumnChart(data);
            barchart.showtooltip = true;
            barchart.legendposition = XPOSITION.LEFT;
            barchart.Show(container);
        });
    }
}
