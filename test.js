var microtime = require('./index.js')
var x;
var old=0;
for (x=0; x<10000000; x++)
{
    var y=microtime.now();
    if (y<=old)
    {
	console.log("BALDERDASH");
    }
    old=y;
}
console.log(microtime.now());
//1297448895297028

console.log(microtime.nowDouble());
//1297448897.600976
console.log(microtime.nowStruct());
//[ 1297448902, 753875 ]
