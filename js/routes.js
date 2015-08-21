app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/:id', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    });
});
