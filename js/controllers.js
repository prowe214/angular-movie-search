app.controller('MovieController', function ($scope, $http, $routeParams) {
  $scope.searchApi = function () {
    $http.get('http://www.omdbapi.com/?s= '+$scope.query+'')
      .then(function(data) {
        $scope.results = data.data.Search;
        console.log($scope.results);
      });
  };
});
app.controller('ShowController', function ($scope, $http, $routeParams) {
  $scope.thisMovie = {};
    $http.get('http://www.omdbapi.com/?i=' + $routeParams.id)
      .then(function(data) {
        $scope.thisMovie = data.data;
        console.log($scope.thisMovie);
      });
});
