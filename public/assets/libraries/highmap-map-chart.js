Highcharts.mapChart('container', 
{
    chart: {
        map: 'countries/in/custom/in-all-disputed'
    },
    title: {
        text: undefined
    },
    credits: {
        enabled: false
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.point.stateName + '</b>';
        }
    },
    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 1,
            color: '#999',
            name:'Yet to be implemented'
        }, /*{
            from: 1,
            to: 2,
            color: 'yellow',
            name:'Started'
        }, */{
            from: 2,
            to: 3,
            color: '#db5800',
            name:'Under implementation'
        }, {
            from: 3,
            to: 4,
            color: '#0e9836',
            name:'Launched'
        }]
    },
    plotOptions: 
    {
        series: 
        {
            cursor: 'pointer',
            events: 
            {
                click: function (e)
                {
                    if (e.point.value > 0)
                    {
                        window.open("https://" + e.point.stateCode + ".ners.in", '_blank');
                    }
                }
            }
        }
    },
    series: [{
            showInLegend: false,
            enabled: false,
            data:
                    [
                        {
                                "hc-key": "andaman & nicobar island",
                                //stateName: "Andaman and Nicobar Islands",
                                stateName: "Andaman Islands",
                                stateCode: "AN",
                                value: 3
                        },
                        {
                                "hc-key": "andhra pradesh",
                                stateName: "Andhra Pradesh",
                                stateCode: "AP",
                                value: 3
                        },
                        {
                                "hc-key": "arunanchal pradesh",
                                stateName: "Arunachal Pradesh",
                                stateCode: "AR",
                                value: 3
                        },
                        {
                                "hc-key": "assam",
                                stateName: "Assam",
                                stateCode: "AS",
                                value: 2
                        },
                        {
                                "hc-key": "bihar",
                                stateName: "Bihar",
                                stateCode: "BH",
                                value: 2
                        },
                        {
                                "hc-key": "chandigarh",
                                stateName: "Chandigarh",
                                stateCode: "CH",
                                value: 3
                        },
                        {
                                "hc-key": "chhattisgarh",
                                stateName: "Chattisgarh",
                                stateCode: "CT",
                                value: 3
                        },
                        {
                                "hc-key": "dadara & nagar havelli",
                                stateName: "Dadra and Nagar Haveli",
                                stateCode: "DN",
                                value: 3
                        },
                        {
                                "hc-key": "daman & diu",
                                stateName: "Daman and Diu",
                                stateCode: "DD",
                                value: 3
                        },
                        {
                                "hc-key": "nct of delhi",
                                stateName: "Delhi",
                                stateCode: "DL",
                                value: 3
                        },
                        {
                                "hc-key": "goa",
                                stateName: "Goa",
                                stateCode: "GA",
                                value: 3
                        },
                        {
                                "hc-key": "gujarat",
                                stateName: "Gujarat",
                                stateCode: "GJ",
                                value: 3
                        },
                        {
                                "hc-key": "haryana",
                                stateName: "Haryana",
                                stateCode: "HR",
                                value: 2
                        },
                        {
                                "hc-key": "himachal pradesh",
                                stateName: "Himachal Pradesh",
                                stateCode: "HP",
                                value: 3
                        },
                        {
                                "hc-key": "jammu & kashmir",
                                stateName: "Jammu and Kashmir",
                                stateCode: "JK",
                                value: 3
                        },
                        {
                                "hc-key": "jharkhand",
                                stateName: "Jharkhand",
                                stateCode: "JH",
                                value: 3
                        },
                        {
                                "hc-key": "karnataka",
                                stateName: "Karnataka",
                                stateCode: "KA",
                                value: 3
                        },
                        {
                                "hc-key": "kerala",
                                stateName: "Kerala",
                                stateCode: "KL",
                                value: 3
                        },
                        {
                                "hc-key": "lakshadweep",
                                stateName: "Lakshadweep Islands",
                                stateCode: "LD",
                                value: 2
                        },
                        {
                                "hc-key": "ladakh",
                                stateName: "Ladakh",
                                stateCode: "LA",
                                value: 2
                        },
                        {
                                "hc-key": "madhya pradesh",
                                stateName: "Madhya Pradesh",
                                stateCode: "MP",
                                value: 3
                        },
                        {
                                "hc-key": "maharashtra",
                                stateName: "Maharashtra",
                                stateCode: "MH",
                                value: 3
                        },
                        {
                                "hc-key": "manipur",
                                stateName: "Manipur",
                                stateCode: "MN",
                                value: 2
                        },
                        {
                                "hc-key": "meghalaya",
                                stateName: "Meghalaya",
                                stateCode: "ME",
                                value: 2
                        },
                        {
                                "hc-key": "mizoram",
                                stateName: "Mizoram",
                                stateCode: "MI",
                                value: 3
                        },
                        {
                                "hc-key": "nagaland",
                                stateName: "Nagaland",
                                stateCode: "NL",
                                value: 3
                        },
                        {
                                "hc-key": "odisha",
                                stateName: "Odisha",
                                stateCode: "OR",
                                value: 2
                        },
                        {
                                "hc-key": "puducherry",
                                stateName: "Pondicherry",
                                stateCode: "PY",
                                value: 3
                        },
                        {
                                "hc-key": "punjab",
                                stateName: "Punjab",
                                stateCode: "PB",
                                value: 3
                        },
                        {
                                "hc-key": "rajasthan",
                                stateName: "Rajasthan",
                                stateCode: "RJ",
                                value: 3
                        },
                        {
                                "hc-key": "sikkim",
                                stateName: "Sikkim",
                                stateCode: "SK",
                                value: 2
                        },
                        {
                                "hc-key": "tamil nadu",
                                stateName: "Tamil Nadu",
                                stateCode: "TN",
                                value: 3
                        },
                        {
                                "hc-key": "telangana",
                                stateName: "Telangana",
                                stateCode: "TS",
                                value: 3
                        },
                        {
                                "hc-key": "tripura",
                                stateName: "Tripura",
                                stateCode: "TR",
                                value: 3
                        },
                        {
                                "hc-key": "uttar pradesh",
                                stateName: "Uttar Pradesh",
                                stateCode: "UP",
                                value: 3
                        },
                        {
                                "hc-key": "uttarakhand",
                                stateName: "Uttarakhand",
                                stateCode: "UK",
                                value: 3
                        },
                        {
                                "hc-key": "west bengal",
                                stateName: "West Bengal",
                                stateCode: "WB",
                                value: 3
                        }
                  ],
            name: 'Random data',
            states: {
                hover: {
                    color: '#e2f6a6'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    ]
});