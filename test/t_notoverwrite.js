var merj = {
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


var jake = {
    red : {
        one :  55,
        tone :  553
    },
    yolk : [99],
     uncle : {
         name : {
             official : "Grant",
             gayname : [0, {
                 albany : "bread"
             }]
         }
     }
}

var fatman = {
    red : {
        colors : 954
    },
    yolk : ['pliers'],
    uncle : {
        game : {
            official : "Petrus",
            gayname : [0, {
                albany : "Michelle"
            }]
        }
    }

};

var bad = {
    yeast : function () {

    },
    colors : 954

}

 merj.merge(fatman, jake);
console.log(fatman);
