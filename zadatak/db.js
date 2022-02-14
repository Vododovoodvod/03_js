var db = "text";

var xy = (function() {var db  = {};

function set(key, value){
    db[key] = value;
}

function get(key){
    return db[key];
}

return {get, set};
})(this);

(function(db) {
    db.set("foo", "bar");
    console.log(db.get("foo"));
    console.log(db);
})(xy);