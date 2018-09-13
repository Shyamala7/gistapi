gitGistsApp.controller('gistCtrl',['$scope', 'httpService', function($scope, httpService) {

$scope.showResults = false;
$scope.apiUrl = "https://api.github.com";

$scope.fetchDetails = function(){
    $scope.data = []
    httpService.get($scope.apiUrl+"/users/"+$scope.search+"/gists").then(function(resp) {
        $scope.data = resp;
        // files
        
        angular.forEach($scope.data, function(value) {
            httpService.get($scope.apiUrl+"/gists/"+value['id']+"/forks").then(function(response){
                value['forks'] = response;
            });
            languages = []
            angular.forEach(value['files'], function(file) {
                languages.push(file['language']);
            });
            value['languages'] = [...new Set(languages)];
            
          });
        
        $scope.showResults = true;
      });
    }
    
}]);