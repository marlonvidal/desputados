angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('mainController', function($scope, $ionicPopup, QuestoesService) {

  var score = 0;//TEMPORARIO TEM QUE BUSCAR DO BD
  var answer;
  var message;

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
      //console.log(answer);
      $scope.marked = false;
    }

    $scope.checkAnswer = function(question){
      // console.log(question);
      if (answer.alternativaCorreta == true){
        message = {text: "Acertô Mizeravi",
                   desc: answer.descricao};
        score +=1;
        console.log(score);
        showModal(message);
      } else {

        message = {text: "Errooooooooou!!!",
                   desc: "Assista a Video-Aula com a Resposta Truta!!!"};
        showModal(message);
      }
    }

    function showModal(message){
      var myModal = $ionicPopup.show({
        title: message.text,
        subTitle: message.desc,
        template:"",
        buttons: [{text: "Continuar",
                   type: 'button-positive'}]
      }).then();

      myModal.then(function(res){
        getQuestion();
      });
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
