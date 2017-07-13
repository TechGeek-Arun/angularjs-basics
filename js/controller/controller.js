app.controller('cityCtrl', function($scope) {
    $scope.cityNames = [
        'Bangalore',
        'Chennai',
        'Kochi',
        'Mysore',
        'Hyderabad',
        'Mangalore',
        'Delhi',
        'Vizag',
        'Agra'
    ];
});

app.controller('CalculatorController', function($scope, CalculatorService) {
    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }

});

app.controller('myServiceCtrl', function($scope, $http) {
  $http.get("serviceControl.html").then(function (response) {
      $scope.myServiceControl = response.data;
  });
});

app.controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            }
});

moduleA.controller("MyControllerA", function($scope) {
    $scope.name = "Bob A";
});
moduleB.controller("MyControllerB", function($scope) {
    $scope.name = "Steve B";
});

app.controller('todoController',function($scope){
  $scope.todoList = [];
  $scope.todo ="";
  $scope.todos = function()
  {
    $scope.todoList.push($scope.todo);
    $scope.todo ="";
  }
});

app.controller('feedbackController',function($scope){
  $scope.feedback1="";

 $scope.submits = function(){
  $scope.feedback1= $scope.feedback;
    $scope.feedback = "";
 }
});

app.controller('clickController',function($scope){
 $scope.count = 0;
 $scope.click = function(){
  $scope.count = $scope.count +1;
}});