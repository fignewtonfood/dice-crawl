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
