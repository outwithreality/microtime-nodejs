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
    startsub=Math.trunc(now[1]/1000);
    
    var last_secs=0;
    var last_usecs=0;

    /* module exports */
    module.exports = {
	now: function(){
	    var nowTime = module.exports.nowStruct();
	    return nowTime[0]*1000000+nowTime[1];
	},
	nowDouble: function(){
	    var nowTime = module.exports.nowStruct(); 
	    return nowTime[0]+nowTime[1]/1000000;
	},
	nowStruct: function(){
	    var now = process.hrtime();
	    
	    var now_secs = Math.trunc(now[0]+startsec);
	    var now_usecs = Math.trunc(now[1]/1000)-startsub;
	    if (now_usecs < 0) {
		now_usecs=1000000+now_usecs;
		now_secs--;
	    }
	    last_usecs=now_usecs;
	    last_secs=now_secs;
	    return [now_secs, now_usecs];
	},
	nowStructIncr: function(){
	    var now = process.hrtime();
	    
	    var now_secs = Math.trunc(now[0]+startsec);
	    var now_usecs = Math.trunc(now[1]/1000)-startsub;
	    if (now_usecs < 0) {
		now_usecs=1000000+now_usecs;
		now_secs--;
	    }
	    if ((now_secs<last_secs) || 
		((now_secs==last_secs) && (now_usecs<=last_usecs))
	       )
	    {
		now_usecs=last_usecs+1;
		now_secs=last_secs;
		if (now_usecs===1000000)
		{
		    now_usecs=now_usecs-1000000;
		    now_secs=last_secs+1;
		}
	    }
	    last_usecs=now_usecs;
	    last_secs=now_secs;
	    return [now_secs, now_usecs];
	}
    };
}).call(this);
