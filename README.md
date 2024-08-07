# merj

## Merge objects deeply! Do it!

### Add/merge-if=exist object to a property

```
var o = {};
merj.mergeProperty(o, "prop", 88);
// o.prop === 88
```

Can copy a simple object.

```
var o = {};
var simpleObject = { paint: "tin", hair: "brush" };
merj.mergeProperty(o, "simple", simpleObject);
//o.simple.paint === 'tin'
```

Can merge a complex object as property.

```

var o = {};
var complexObject = {
  paint: "tin",
  hair: "brush",
  child: { paint: "tin", hair: "brush", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
};
merj.mergeProperty(o, "complex", complexObject);
//o.prop.child.child.child.hair == complexObject.child.child.child.hair

```

### Can merge objects.

```
var complexObject = {
  paint: "tin",
  hair: "brush",
  child: { paint: "tin", hair: "brush", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
};

var o = { Brazilian: true };
merj.merge(o, complexObject);
//o.child.child.child.paint == "lead"
//o.child.child.child.hair == "poisoning"
```

### Can copy an array of complex objects

```
var complexObject = {
  paint: "tin",
  hair: "brush",
  child: { paint: "tin", hair: "brush", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
};

 var o = [];
merj.merge(o, [complexObject, { gwara: true }]);
assert(Array.isArray(o), "Was expecting an array.");
assert(o[0].jacksThoughts.child.hair == "lost");
assert(o[1].gwara);
return true;
```
