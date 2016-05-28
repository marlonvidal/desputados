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

.controller('mainController', function($scope, QuestoesService) {

  var score = new getScore();
  var answer;

    $scope.question = "";

    //Esse http.get pode dar problema de CORS (plugin pro chrome https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)
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

    $scope.onMarkQuestion = function(item){
      console.log(item.alternativaCorreta)
      answer = item;
    }

    $scope.checkAnswer = function(item){
      //TODO
      console.log(answer);
      $scope.nextQuestion();

    }

    $scope.nextQuestion = function(){
      // CHAMAR A NOVA QUESTAO AQUI
      // $scope.question = data[Math.floor(Math.random()*data.length)];
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
