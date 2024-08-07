var merj = {
    simple : function (dObj, sObj) {
            for (var p in sObj) dObj[p] = sObj[p];
            return dObj;
    },
    merge : function(obj, newData) {
        for (var prop in newData) this.mergeProperty(obj, prop, newData[prop]);
        return obj;
     },
     mergeProperty :function(obj, prop, val) {
         var typ = Object.prototype.toString.call(val);
         switch (typ) {
             case "[object Object]":
                 obj[prop] = obj[prop] || {};
                 this.merge(obj[prop], val);
                 break;
             case "[object Array]":
                 obj[prop] = (obj[prop] || []).concat(val);
                 break;
             default:
                obj[prop] = val;
         }
      }
};
module.exports = merj;
