var ff = function (val) {
    ({}).toString.call(val);
}



var o = {
    a : "",
    b : {

    },
    c : []
}
ff(o);
ff(o.a);
ff(o.b);
ff(o.c);
