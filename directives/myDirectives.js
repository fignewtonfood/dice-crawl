var i = 0;

diceCrawl.directive("toggleRotateTile", function(rotateTileButton) {
    return {
            link: function (scope, element) {
                element.bind("click", function() {
                    rotateTileButton.shared ? rotateTileButton.shared-=1 : rotateTileButton.shared+=1;
                    element.toggleClass("btn-warning");
            });
        }
    };
});

diceCrawl.directive("rotateTile", function(rotateTileButton) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (rotateTileButton.shared) {
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
                    element.addClass("rotate"+i);
                }
            });
        }
    };
});

diceCrawl.directive("toggleRevealTile", function(revealTileButton) {
    return {
            link: function (scope, element) {
                element.bind("click", function() {
                    revealTileButton.shared ? revealTileButton.shared-=1 : revealTileButton.shared+=1;
                    element.toggleClass("btn-warning");
            });
        }
    };
});

diceCrawl.directive("revealTile", function(revealTileButton) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (revealTileButton.shared) {
                    element.removeClass("backside");
                    element.addClass("backside-off");
                }
            });
        }
    };
});

diceCrawl.directive("togglePlacePlayer", function(placePlayerButton) {
    return {
            link: function (scope, element, attrs) {
                element.bind("click", function() {
                    placePlayerButton.shared ? placePlayerButton.shared-=1 : placePlayerButton.shared+=1;
                    placePlayerButton.color = attrs.togglePlacePlayer;
                    element.toggleClass("btn-info");
            });
        }
    };
});

// diceCrawl.directive("placePlayer", function(placePlayerButton) {
//     return {
//         link: function (scope, element) {
//             element.bind("click", function() {
//                 if (placePlayerButton.shared) {
//                     if (placePlayerButton.color == "blue"){
//                         element.next().next().toggleClass("hide");
//                     } else if (placePlayerButton.color == "green"){
//                         element.next().next().next().toggleClass("hide");
//                     } else if (placePlayerButton.color == "red"){
//                         element.next().next().next().next().toggleClass("hide");
//                     } else if (placePlayerButton.color == "yellow"){
//                         element.next().next().next().next().next().toggleClass("hide");
//                     }
//                 }
//             });
//         }
//     };
// });


diceCrawl.directive("placePlayer", function(placePlayerButton) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (placePlayerButton.shared) {
                    if (placePlayerButton.color == "blue"){
                        element.next().next().toggleClass("hide");
                    } else if (placePlayerButton.color == "green"){
                        element.next().next().next().toggleClass("hide");
                    } else if (placePlayerButton.color == "red"){
                        element.next().next().next().next().toggleClass("hide");
                    } else if (placePlayerButton.color == "yellow"){
                        element.next().next().next().next().next().toggleClass("hide");
                    }
                }
            });
        }
    };
});




// diceCrawl.directive("place", function() {
//     return function(scope, element) {
//         element.bind("click", function() {
//             element.append('<img src="img/players/BluePlayer.png" class="blue"/>');
//         });
//     };
// });

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

// diceCrawl.directive ("diceToRoll",function(){
//     return{
//         restrict: "E",
//         scope:{
//           roll: "&"
//     },
//         template:'<button action="rollDice()">Roll The Dice</button>'
//     }
// })

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
  }
});
