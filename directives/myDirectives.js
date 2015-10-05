var i = 0;

diceCrawl.directive("rotateTile", function() {
    return function (scope, element) {
        element.bind("click", function() {
            if (i<4) {
                i++;
            } else {
                i=0;
            }
            element.toggleClass("rotate"+i);
        });
    }
});

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
    }
});

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
        scope:{rolled: "&"
    },
        template:'<button ng-click="rollDice()">Roll The Dice</button>'
    }
})
