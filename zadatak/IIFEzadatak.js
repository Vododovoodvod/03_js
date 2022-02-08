var myName = "Tomislav";

(function (name) {

   var x = name;

   function f() { return x; }

   return f;

})(myName);