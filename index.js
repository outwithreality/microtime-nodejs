// Generated by LiveScript 1.2.0
(function(){
  var hrtime, milliseconds, delta;
  hrtime = process.hrtime();
  milliseconds = +new Date;
  delta = milliseconds * Math.pow(10, 3) - toMicroseconds(hrtime);
  /* module exports */
  module.exports = {
    now: function(){
      return delta + toMicroseconds(process.hrtime());
    },
    nowDouble: function(){
      var nowStr;
      nowStr = this.now().toString();
      return parseFloat(stringInsert(nowStr, nowStr.length - 6, '.'));
    },
    nowStruct: function(){
      var $_;
      $_ = this.now().toString().match(/^(.+)(.{6})$/);
      return [parseInt($_[1]), parseInt($_[2])];
    }
  };
  /* helper functions */
  function toMicroseconds(arg$){
    var seconds, nanoseconds;
    seconds = arg$[0], nanoseconds = arg$[1];
    return parseInt((seconds.toString() + zeroPad(9, nanoseconds.toString())).slice(0, -3));
  }
  function zeroPad(n, str){
    while (str.length < n) {
      str = '0' + str;
    }
    return str;
  }
  function stringInsert(str, index, insertStr){
    return str.slice(0, index) + insertStr + str.slice(index);
  }
}).call(this);
