(function(){
    var starttime;
    var settime;
    var acctime;
    acctime=new Date().getTime()/1000;
    starttime=Math.trunc(acctime);
    settime=starttime;
    while (settime===starttime){
	settime=starttime;
	acctime=new Date().getTime()/1000;
	starttime=Math.trunc(acctime);
	now = process.hrtime();
    }
    startsec=starttime-now[0];
    startsub=now[1];
    
    /* module exports */
    module.exports = {
	now: function(){
	    var nowTime = module.exports.nowStruct(); 
	    return nowTime[0]*1000000000+nowTime[1];
	},
	nowDouble: function(){
	    var nowTime = module.exports.nowStruct(); 
	    return nowTime[0]+nowTime[1]/1000000000;
	},
	nowStruct: function(){
	    var now = process.hrtime();
	    
	    var now_secs = now[0]+startsec;
	    var now_usecs = now[1]-startsub;
	    if (now_usecs<0) {
		now_usecs= 1000000000+now_usecs;
		now_secs--;
	    }
	    return [Math.trunc(now_secs), Math.trunc(now_usecs)];
	}
    };
}).call(this);
