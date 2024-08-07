# merj

## Merge objects deeply! Do it!

### Add given property to provided object.

If simple property exists, override it.
If complex object, merge recursively.

```
var o = {};
merj.mergeProperty(o, "prop", 88);
// o.prop === 88
```

Can copy a simple object to named property.

```
var o = {};
var simpleObject = { paint: "tin", hair: "brush" };
merj.mergeProperty(o, "simple", simpleObject);
//o.simple.paint === 'tin'
```

Can copy a complex object to named property.

```

var o = {};
var complexObject = {
  paint: "tin",
  hair: "brush",
  child: { paint: "tin", hair: "brush", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
};
merj.mergeProperty(o, "complexProp", complexObject);
//o.complexProp.child.child.child.hair == complexObject.child.child.child.hair

```

### Can merge objects.

```
var complexObject = {
  paint: "tin",
  hair: "brush",
  child: { paint: "tin", hair: "brush", child: { paint: "tin", hair: "brush", child: { paint: "lead", hair: "poisoning" } } },
};

var o = { brazilian: true };
merj.merge(o, complexObject);
//o.brazilian === true
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
//Array.isArray(o) === true
//o[0].jacksThoughts.child.hair == "lost"
//o[1].gwara === true;
```
