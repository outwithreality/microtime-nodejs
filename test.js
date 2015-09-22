var microtime = require('./index.js')
var x;
var old=[0,0];
for (x=0; x<10000000; x++)
{
    var y=microtime.now();
    if (y<=old)
    {
//	console.log("BALDERDASH  "+old+"  "+y);
    }
    else 
    {
//	console.log("BINGO  "+y+"  "+old);
    }
    old=y;
}
for (x=0; x<10000000; x++)
{
    var y=microtime.nowStructIncr();
    if ((y[0]<old[0]) || ((y[0]===old[0]) && (y[1]<=old[1])))
    {
	console.log("BALDERDASH  "+old[0]+":"+old[1]+" <= "+y[0]+":"+y[1]);
    }
    else 
    {
//	console.log("BINGO  "+y+"  "+old);
    }
    old=y;
}


console.log(microtime.now());
//1297448895297028
//1442882359293026300

console.log(microtime.nowDouble());
//1297448897.600976
//1442882359.2960062
console.log(microtime.nowStruct());
//[ 1297448902, 753875 ]
//[ 1442882359, 296780831 ]

