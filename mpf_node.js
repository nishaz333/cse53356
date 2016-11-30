var express = require('express');
var app = express();




comp = {
	"companies" : [ {
		"name" : "Accenture",
		"shareprice" : 103.18,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 37.22,
			"Long" :-120.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 134.12
		},{
			"Key" : "52 wk Low",
			"Value" : 40.22
		},{
			"Key" : "EPS",
			"Value" : 4.75
		},{
			"Key" : "Market Cap",
			"Value" : "67.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "657.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "21.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 120.9,
			"Profit" : 25.4
		}, {
			"Year" : "2012",
			"revenue" : 130.6,
			"Profit" : 45
		}, {
			"Year" : "2013",
			"revenue" : 100.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 98.5,
			"Profit" : 23.5
		}, {
			"Year" : "2015",
			"revenue" : 145.4,
			"Profit" : 56.9
		} ]
	}, {
		"name" : "Amazon",
		"shareprice" : 574.2,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 37.22,
			"Long" : -122.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 600.22
		},{
			"Key" : "52 wk Low",
			"Value" : 120.76
		},{
			"Key" : "EPS",
			"Value" : 1.24
		},{
			"Key" : "Market Cap",
			"Value" : "270.22 B"
		},{
			"Key" : "Shares Out",
			"Value" : "420.22 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "463.8x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 107,
			"Profit" : 18
		}, {
			"Year" : "2012",
			"revenue" : 270,
			"Profit" : 80
		},  {
			"Year" : "2013",
			"revenue" : 333,
			"Profit" : 90
		},  {
			"Year" : "2014",
			"revenue" : 301,
			"Profit" : 30
		}, {
			"Year" : "2015",
			"revenue" : 343,
			"Profit" : 40
		} ]
	}, {
		"name" : "American Airlines",
		"shareprice" : 41.18,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 47.22,
			"Long" : -122.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 112.12
		},{
			"Key" : "52 wk Low",
			"Value" : 40.22
		},{
			"Key" : "EPS",
			"Value" : 7.02
		},{
			"Key" : "Market Cap",
			"Value" : "25.1 B"
		},{
			"Key" : "Shares Out",
			"Value" : "603.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "5.9x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 100.9,
			"Profit" : 21.4
		}, {
			"Year" : "2012",
			"revenue" : 90.6,
			"Profit" : 23
		}, {
			"Year" : "2013",
			"revenue" : 100.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 98.5,
			"Profit" : 21.5
		}, {
			"Year" : "2015",
			"revenue" : 145.4,
			"Profit" : 26.9
		} ]
	}, {
		"name" : "HP Inc.",
		"shareprice" : 13.18,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 43.22,
			"Long" : -120.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 100.12
		},{
			"Key" : "52 wk Low",
			"Value" : 8.22
		},{
			"Key" : "EPS",
			"Value" : 2.21
		},{
			"Key" : "Market Cap",
			"Value" : "19.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "1657.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "5.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 75.9,
			"Profit" : 15.4
		}, {
			"Year" : "2012",
			"revenue" : 130.6,
			"Profit" : 45
		}, {
			"Year" : "2013",
			"revenue" : 120.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 198.5,
			"Profit" : 23.5
		}, {
			"Year" : "2015",
			"revenue" : 145.4,
			"Profit" : 56.9
		} ]
	}, {
		"name" : "Tesla Motors Inc",
		"shareprice" : 183.18,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 39.22,
			"Long" : -125.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 634.12
		},{
			"Key" : "52 wk Low",
			"Value" : 140.22
		},{
			"Key" : "EPS",
			"Value" : 4.75
		},{
			"Key" : "Market Cap",
			"Value" : "67.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "657.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "21.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 12.9,
			"Profit" : 2.4
		}, {
			"Year" : "2012",
			"revenue" : 13.6,
			"Profit" : 4.5
		}, {
			"Year" : "2013",
			"revenue" : 40.2,
			"Profit" : 9.8
		}, {
			"Year" : "2014",
			"revenue" : 18.5,
			"Profit" : 8.5
		}, {
			"Year" : "2015",
			"revenue" : 14.4,
			"Profit" : 5.9
		} ]
	}, {
		"name" : "Quantec Int",
		"shareprice" : 10.18,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 40.22,
			"Long" : -90.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 34.12
		},{
			"Key" : "52 wk Low",
			"Value" : 4.22
		},{
			"Key" : "EPS",
			"Value" : 4.75
		},{
			"Key" : "Market Cap",
			"Value" : "47.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "67.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "2.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 120.9,
			"Profit" : 25.4
		}, {
			"Year" : "2012",
			"revenue" : 40.6,
			"Profit" : 4.5
		}, {
			"Year" : "2013",
			"revenue" : 100.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 98.5,
			"Profit" : 21.5
		}, {
			"Year" : "2015",
			"revenue" : 145.4,
			"Profit" : 56.9
		} ]
	}, {
		"name" : "Mirosoft Corp",
		"shareprice" : 53.18,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 42.22,
			"Long" : -75.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 134.12
		},{
			"Key" : "52 wk Low",
			"Value" : 40.22
		},{
			"Key" : "EPS",
			"Value" : 1.75
		},{
			"Key" : "Market Cap",
			"Value" : "57.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "857.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "2.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 80.9,
			"Profit" : 25.4
		}, {
			"Year" : "2012",
			"revenue" : 130.6,
			"Profit" : 45
		}, {
			"Year" : "2013",
			"revenue" : 220.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 198.5,
			"Profit" : 73.5
		}, {
			"Year" : "2015",
			"revenue" : 145.4,
			"Profit" : 56.9
		} ]
	}, {
		"name" : "AT&T Inc",
		"shareprice" : 37.57,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 39.22,
			"Long" : -74.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 104.12
		},{
			"Key" : "52 wk Low",
			"Value" : 20.22
		},{
			"Key" : "EPS",
			"Value" : 2.75
		},{
			"Key" : "Market Cap",
			"Value" : "97.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "657.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "11.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 140.9,
			"Profit" : 25.4
		}, {
			"Year" : "2012",
			"revenue" : 230.6,
			"Profit" : 45
		}, {
			"Year" : "2013",
			"revenue" : 300.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 498.5,
			"Profit" : 123.5
		}, {
			"Year" : "2015",
			"revenue" : 345.4,
			"Profit" : 56.9
		} ]
	}, {
		"name" : "Standard Chartered PLC",
		"shareprice" : 473.43,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 38.22,
			"Long" : -76.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 1304.12
		},{
			"Key" : "52 wk Low",
			"Value" : 240.22
		},{
			"Key" : "EPS",
			"Value" : 0.75
		},{
			"Key" : "Market Cap",
			"Value" : "17.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "1657.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "11.8x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 12.9,
			"Profit" : 2.4
		}, {
			"Year" : "2012",
			"revenue" : 13.6,
			"Profit" : 4.5
		}, {
			"Year" : "2013",
			"revenue" : 20.2,
			"Profit" : 3.8
		}, {
			"Year" : "2014",
			"revenue" : 28.5,
			"Profit" : 4.5
		}, {
			"Year" : "2015",
			"revenue" : 14.4,
			"Profit" : 5.9
		} ]
	}, {
		"name" : "Goldman Sachs Group Inc",
		"shareprice" : 156.12,
		"Headquarters" : {
			"Place" : "Seattle",
			"Lat" : 38.22,
			"Long" : -75.13
		},
		"detailRow" : [{
			"Key" : "52 wk High",
			"Value" : 334.12
		},{
			"Key" : "52 wk Low",
			"Value" : 140.22
		},{
			"Key" : "EPS",
			"Value" : 4.75
		},{
			"Key" : "Market Cap",
			"Value" : "67.9 B"
		},{
			"Key" : "Shares Out",
			"Value" : "657.9 M"
		},{
			"Key" : "Price/Earnings",
			"Value" : "21.7x"
		}],
		"Performance" : [ {
			"Year" : "2011",
			"revenue" : 120.9,
			"Profit" : 25.4
		}, {
			"Year" : "2012",
			"revenue" : 130.6,
			"Profit" : 45
		}, {
			"Year" : "2013",
			"revenue" : 100.2,
			"Profit" : 33.8
		}, {
			"Year" : "2014",
			"revenue" : 98.5,
			"Profit" : 23.5
		}, {
			"Year" : "2015",
			"revenue" : 145.4,
			"Profit" : 56.9
		} ]
	} ]
};


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  response.sendFile(__dirname + '/HomePortfolio.html');
});

app.get('/data', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(comp));
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

