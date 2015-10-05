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
