app.config(["$routeProvider",function(l){l.when("/",{templateUrl:"partials/home.html"}).when("/:id",{templateUrl:"partials/show.html",controller:"ShowController"})}]);
