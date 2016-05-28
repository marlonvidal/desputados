angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('mainController', function($scope, QuestoesService) {

  var score = new getScore();
  var answer;

  getQuestion();

  function getQuestion(){
    $scope.question = "";
    $scope.marked = true; //check if the one answer was marked

    QuestoesService.buscaQuestoes(2)
    .then(function(data) {
        console.log('data success');
        console.log(data); // for browser console
        $scope.question = data[Math.floor(Math.random()*data.length)]; // Pega uma pergunta randomica
    })
    .catch(function(data) {
        console.log('data error');
        console.log(data);
    });
  }

    $scope.onMarkQuestion = function(item){
      console.log(item.alternativaCorreta);
      answer = item;
      $scope.marked = false;
    }

    $scope.checkAnswer = function(){
      //TODO
      console.log(answer);
      $scope.nextQuestion();
    }

    $scope.nextQuestion = function(){
      getQuestion();
    }
})

.controller('menuCtrl', function($scope) {

})

.controller('pergunta_BioCtrl', function($scope) {

})

.controller('pergunta_QuimCtrl', function($scope) {

})

.controller('pergunta_FisCtrl', function($scope) {

})

.controller('pergunta_PortCtrl', function($scope) {

})

.controller('pergunta_HisCtrl', function($scope) {

})

.controller('pergunta_GeoCtrl', function($scope) {

})

.controller('pergunta_InglesCtrl', function($scope) {

})

.controller('pergunta_AtualCtrl', function($scope) {

})

.controller('pergunta_FilSolCtrl', function($scope) {

})

.controller('rankCtrl', function($scope) {

})

.controller('resultadoCtrl', function($scope) {

})
