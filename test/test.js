var merj = require("./../merj.js");

var Taste = require("taste-test").Test;
var assert = require("assert");

Error.stackTraceLimit = 0;

var msg = "Property not added correctly.";
var tryMergeProperty = function (val, cb) {
  return function () {
    var o = {};
    merj.mergeProperty(o, "prop", val);
    assert(cb(o), msg);
    return true;
  };
};

var simpleObject = { paint: "tin", hair: "brush" };
var complexObject = {
  paint: "tin",
  hair: "brush",
  child: { paint: "tin", hair: "brush", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
};
var jack = {
  name: "Jack",
  jacksThoughts: {
    paint: "tin",
    hair: "thin",
    child: { paint: "tin", hair: "lost", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
  },
};
var fn = function (happy) {
  var glad = "Happy Days.";
};
var simpleArray = ["Yacht", "Palice", "Cough"];
var complexArray = ["Yacht", 23, ["a", "b"]];

var tasteTest = new Taste();

tasteTest.describe({
  merj: {
    describe: {
      "merj.mergeProperty.": {
        does: function () {
          return true;
        },
        "strings.": tryMergeProperty("Restio", function (o) {
          return o.prop == "Restio";
        }),
        "numbers.": tryMergeProperty(88, function (o) {
          return o.prop === 88;
        }),

        "boolean.": tryMergeProperty(false, function (o) {
          return o.prop === false;
        }),

        "dates.": tryMergeProperty(new Date(), function (o) {
          return typeof o.prop === typeof new Date();
        }),

        "null.": tryMergeProperty(null, function (o) {
          return o.prop === null;
        }),

        "undefined.": tryMergeProperty(undefined, function (o) {
          return o.prop === undefined;
        }),

        "functions.": tryMergeProperty(fn, function (o) {
          return typeof o.prop === "function";
        }),

        "simple arrays.": tryMergeProperty(simpleArray, function (o) {
          return o.prop.length === 3;
        }),

        "complex arrays.": tryMergeProperty(complexArray, function (o) {
          return o.prop[2][1] === "b";
        }),

        "simple objects.": tryMergeProperty(simpleObject, function (o) {
          return Object.keys(o.prop).length === 2;
        }),

        "deep objects.": tryMergeProperty(complexObject, function (o) {
          return o.prop.child.child.child.hair == complexObject.child.child.child.hair;
        }),
      },
      "merj.merge": {
        "Can copy a complex object.": function () {
          var o = { Brazilian: true };
          merj.merge(o, jack);
          assert(o.jacksThoughts.child.child.hair == "brush", "Value did not match.");
          return true;
        },

        "Can copy an array of complex objects.": function () {
          var o = [];
          merj.merge(o, [jack, { gwara: true }]);
          assert(Array.isArray(o), "Was expecting an array.");
          assert(o[0].jacksThoughts.child.hair == "lost");
          assert(o[1].gwara);
          return true;
        },
      },
    },
  },
});
