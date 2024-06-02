var balances = ["FirstBank", "AccessBank", "GtBank"];

var poorGroup = [];
poorGroup.push(balances[0]);

var index = poorGroup.indexOf("FirstBank")

console.log(poorGroup)

if (index > -1) {
    poorGroup.splice(index, 1)
}

console.log(poorGroup)

var FirstBank = "500,000,000,000,000";
var AccessBank = "1,200,000,000,000,000";
var GtBank ="400,000,000,000,000";

if((FirstBank > AccessBank && FirstBank > GtBank)){
    console.log("FirstBank is the richest bank");
}else if((AccessBank > FirstBank && AccessBank > GtBank)){
    console.log("AccessBank is the richest bank");
}else if((GtBank > FirstBank && GtBank > AccessBank)){
    console.log("GtBank is the richest bank ");
}