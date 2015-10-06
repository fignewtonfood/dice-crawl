var i = 0;

diceCrawl.directive("rotateTile", function() {
    return function (scope, element) {
        element.bind("click", function() {
            if (i<4) {
                i++;
            } else {
                i=1;
            }
            element.removeClass("rotate0");
            element.removeClass("rotate1");
            element.removeClass("rotate2");
            element.removeClass("rotate3");
            element.removeClass("rotate4");
            element.toggleClass("rotate"+i);
        });
    };
});
/*
diceCrawl.directive("showPlayer", function() {
    return function (scope, element) {
        element.bind("click", function() {
            if (i<4) {
                i++;
            } else {
                i=0;
            }
            element.toggleClass("player"+i);
        });
    };
});
*/
diceCrawl.directive("place", function() {
    return function(scope, element) {
        element.bind("click", function() {
            element.append('<img src="/img/players/Blueplayer.png" class="blue"/>');
        });
    };
});

//while this bit technically worked...it didnt work the way it ought to - MC
// diceCrawl.directive("rollDice", function(){
//     return function (scope, element, attrs){
//         // element.bind("click", function() {
//         //     var myRoll = chance.d6();
//         //
//         //      console.log("dice got rolled...not really but the roll is: " + myRoll + " and my playerColor is: " +  player);
//         // });
//     }
// });

diceCrawl.directive ("diceToRoll",function(){

    return{
        restrict: "E",
        scope:{
          roll: "&"

    },
        template:'<button action="rollDice()">Roll The Dice</button>'
    };
});


diceCrawl.directive("debug",function($compile){
  return{
    terminal: true,
    priority: 100000,
    link: function (scope, element){
      var clone = element.clone();
      element.attr("style","color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
};
});
