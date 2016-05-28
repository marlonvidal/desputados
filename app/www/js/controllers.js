angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

// .controller('mainController', function($scope){
//   var questions = new getQuestions();
//
//   //TODO
//   $scope.question = questions.items[Math.floor(Math.random()*questions.items.length)];
//
//   console.log(questions.items.length +1);
//
//   $scope.onMarkTask = function(item){
//     console.log("passou");
//     item.finalizada = !item.finalizada;
//   };
//
// })

.controller('mainController', function($scope, $http) {

  var score = new getScore();
  var answer;

  //Esse http.get pode dar problema de CORS (plugin pro chrome https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)
  $scope.question = "";
  $http.get('http://desputados.devmsistemas.com.br/api/questoes/2')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // for browser console
      $scope.question = data[Math.floor(Math.random()*data.length)]; // Pega uma pergunta randomica
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(question){
      things = question.data;
    });

    $scope.onMarkQuestion = function(item){
      console.log(item.alternativaCorreta)
      answer = item;
    }

    $scope.checkAnswer = function(item){
      //TODO
      console.log(answer);
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
