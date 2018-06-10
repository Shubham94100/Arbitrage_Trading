var TotalValue = '';
var str_array = [];
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function getJson()
{
//alert('function called');
var myPortfol = httpGet('/arbitrage');
myPortfol = JSON.parse(myPortfol);
var myPortfolio = [];
for (var key in myPortfol) {
	myPortfolio.push(myPortfol[key]);
}
// EXTRACT VALUE FOR HTML HEADER. 
// ('Instrument', 'Price', 'Quantity' and 'Total Value')
var col = [];
for (var i = 0; i < myPortfolio.length; i++) {
    for (var key in myPortfolio[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

// CREATE DYNAMIC TABLE.
var table = document.createElement("table");
table.className = "table";
// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

var tr = table.insertRow(-1);                   // TABLE ROW.

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      // TABLE HEADER.    
    th.innerHTML = col[i];
    tr.appendChild(th);
}
var sum = 0;
// ADD JSON DATA TO THE TABLE AS ROWS.
for (var i = 0; i < myPortfolio.length; i++) {

    tr = table.insertRow(-1);
    
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        if (j == 3)
        {
			tabCell.innerHTML = myPortfolio[i][col[j]];
//            tabCell.innerHTML = myPortfolio[i][col[j-1]] * myPortfolio[i][col[j-2]];   
            sum = sum + parseInt(tabCell.innerHTML);
            TotalValue = TotalValue + tabCell.innerHTML + ',';            
        }
        else tabCell.innerHTML = myPortfolio[i][col[j]];
    }
}
str_array = TotalValue.split(',');

for(var i = 0; i < str_array.length-1; i++) {
   // Trim the excess whitespace.
   str_array[i] = (parseInt(str_array[i])/sum)*100;   
}

// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
var divContainer = document.getElementById("PortfolioTable");
divContainer.innerHTML = "";
divContainer.appendChild(table);


'use strict';    
    var doughnutPieData = {
      datasets: [{
        data: str_array,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Pink',
        'Blue',
        'Yellow',
      ]
    };
    var doughnutPieOptions = {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };    
    // Get context with jQuery - using jQuery's .get() method.    
//alert(str_array);
    if ($("#pieChart").length) {
        var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
        var pieChart = new Chart(pieChartCanvas, {
          type: 'pie',
          data: doughnutPieData,
          options: doughnutPieOptions
        });
      }
}

function update(){
var myPortfole = httpGet('/arbitrage');
var myPort = JSON.parse(myPortfole);
var ArbitrageOppo = [];
for (var key in myPort) {
	ArbitrageOppo.push(myPort[key]);
}
var col = [];
for (var i = 0; i < ArbitrageOppo.length; i++) {
    for (var key in ArbitrageOppo[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}
var cycledata="";
for (var i = 0; i < ArbitrageOppo.length; i++) {
  
    for (var j = 0; j < col.length; j++) {
		if(j==1)
		{
		  cycledata=ArbitrageOppo[i][col[j]];
			break;
        }
    }
	
}
var s=cycledata.split("-");
/*
var price_matrix = httpGet('/price_matrix');

var price = JSON.parse(price_matrix);
var pricestringed = JSON.stringify(price_matrix);
alert(price_matrix.length);
alert(pricestringed);



/*for (var i = 0; i < price.length; i++) {
		alert("Hey");
}
for (i in price_matrix.BTC)
{
	alert("Hi");
}
var finalprice=1;
let curr,next;
for(var i=1;i<s.length;i++){
	curr = s[i-1];
	next = s[i];
	alert(curr);
	price1 = price_matrix[curr];
	alert(price2);
}

}*/
var price_mat = httpGet('/price_matrix');
//alert(price_mat);
var myPortmat = JSON.parse(price_mat);
//alert(typeof myPortmat);


						var FinalTest = [];
						for (var key in myPortmat) {
							FinalTest.push(myPortmat[key]);
						}
						// EXTRACT VALUE FOR HTML HEADER. 
						// ('Instrument', 'Price', 'Quantity' and 'Total Value')
						var col = [];
						for (var i = 0; i < FinalTest.length; i++) {
							for (var key in FinalTest[i]) {
								if (col.indexOf(key) === -1) {
									col.push(key);
								}
							}
						}
						//alert(myPortmat[col[0]].LTC);

var innderData = [];
for (var key in col) {
	innderData.push(col[key]);
}
var innercol = [];
for (var i = 0; i < innderData.length; i++) {
    for (var key in innderData[i]) {
        if (innercol.indexOf(key) === -1) {
			//alert(key);
            innercol.push(key);
        }
    }
}
//alert(myPortmat[col[0]]);
//alert(col[0][innercol]);

var curr,next;
for(var i=1;i<s.length;i++){
	curr = s[i-1];
	next = s[i];
	//alert(curr);
	if (col[3] == curr)
	{
		//alert(myPortmat[col[3]["LTC"]]);
	}	

}
}
/*	price1 = price_matrix[curr];
	alert(price2);

for (var i = 0; i < Arbitragemat.length; i++) {
  
    for (var j = 0; j < col.length; j++) {
		if(j==1)
		{
		  cycleMat=Arbitragemat[i][col[j]];
		  alert(cycleMat);
			break;
		}
	}
}
}*/

/* 
var Arbitragemat = [];
var x = [0,1,2,3,4,5,6,7,8];
var coin = ["BTC","LTC","ETH","REQ","NEO","USD","EUR","SGD","GBP"];
var p = new Map();
p.set("BTC",0);
p.set("LTC",1);
p.set("REQ",3);
p.set("USD",5);

//alert(p);
console.log(p);
for (var key in myPortmat) {
	Arbitragemat.push(myPortmat[key]);
}
console.log(Arbitragemat[1]);
/*var col = [];
var index = 0;
var cycledata="";*/