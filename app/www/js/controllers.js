angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $ionicPopup, $state, LoginService) {

  $scope.onLogin = function(data){

    LoginService.validaUser(data.email)
    .then(function(data) {
      if(!data.sucesso){
        showAlert();
        // console.log('login');
        // console.log(data); // for browser console
        $scope.login = data;
      }else{
        $state.go('menu', {email: data.email});
      }
    })
    .catch(function(data) {
        console.log('login error');
        console.log(data);
    });
  }

  function showAlert(){
    var myModal = $ionicPopup.show({
      title: "Usuario não encontrado",
      template:"",
      buttons: [{text: "Continuar",
                 type: 'button-positive'}]
    }).then();
    myModal.then(function(res){

    });
  }
  $scope.onNewUser = function(data){
    showCadastroPopUp();
  }

  function showCadastroPopUp(){
    $scope.data = {};
    $scope.data.email = '';
    $scope.data.nome = '';

    var myModal = $ionicPopup.show({
      template:"<input type='text' placeholder='Insira seu Nome' autofocus='true' ng-model='data.nome' required> <br> <input type='text' placeholder='Insira seu e-mail' autofocus='true' ng-model='data.email' required>",
      templates: ["<input type='text' placeholder='insira seu e-mail' autofocus='true' ng-model='data.email' required>",
                   "<input type='text' placeholder='insira seu e-mail' autofocus='true' ng-model='data.email' required>"],
      title: "Cadastrar Novo Usuário",
      scope: $scope,
      buttons: [{text: "Cancelar",
                 type: "button-assertive"},
                {text: "Ok",
                 type: "button-positive",
                 onTap: function(e) {
                   //COLOCAR UM BLOQUEIO DE NAO DEIXAR CADASTRAR EM BRANCO
                    LoginService.cadastraUser($scope.data.nome, $scope.data.email);
                 }}
               ],
    })
    myModal.then(function(res){
      //console.log($scope.data.email);
    });
  }


  // LoginService.cadastraUser();


  // .then(function(data) {
  //     console.log('login');
  //     console.log(data); // for browser console
  //     //$scope.question = data[Math.floor(Math.random()*data.length)]; // random question get
  //     $scope.login = data;
  // })
  // .catch(function(data) {
  //     console.log('login error');
  //     console.log(data);
  // });

})

.controller('mainController', function($scope, $ionicPopup, $state, QuestoesService, LoginService) {
  //Fazer uma funcao para verificar se o user esta logado

  $scope.user = LoginService.getUser();

  var score = 0;//TEMPORARIO TEM QUE BUSCAR DO BD
  var answer;
  var message;
  //pega a categoria definida pelos parametros de route
  getQuestion($state.params.categoria);

  function getQuestion(item){
    $scope.question = "";
    $scope.marked = true;

    $scope.category = item;

    QuestoesService.buscaQuestoes(item)
    .then(function(data) {
        console.log('data success');
        console.log(data); // for browser console
        $scope.question = data[Math.floor(Math.random()*data.length)]; // random question get
    })
    .catch(function(data) {
        console.log('data error');
        console.log(data);
    });
  }

    $scope.onMarkQuestion = function(item){
      answer = item;
      $scope.marked = false;
    }

    $scope.checkAnswer = function(question){
      if (answer.alternativaCorreta == true){
        message = {text: "Acertou",
                   desc: answer.descricao};
        score +=1; //chamada da API
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
        getQuestion($state.params.categoria);
      });
    }

    //((REDIRECIONAR PRA VIEW DE PERGUNTAS DEPOIS DE ESCOLHER A MATERIAS))
    $scope.menuPopUp = function(){
      var choice = 0;
      var menuModal = $ionicPopup.show({
        title: "Qual é a tua?",
        subTitle: "<h2>Quer <del>jogar</del> estudar o que Parceiro?</h2>",
        cssClass: "popup-vertical-buttons",
        buttons: [{text: "Biologia",
                  type: "button-full button-positive",
                  onTap: function(e){
                    choice = 2;
                  }},
                  {text: "Física",
                  type: "button-full button-calm",
                  onTap: function(e){
                    choice = 3;
                  }},
                  {text: "Matemática",
                  type: "button-full button-balanced",
                  onTap: function(e){
                      choice = 4;
                  }},
                  {text: "Português",
                  type: "button-full button-energized",
                  onTap: function(e){
                      choice = 5;
                  }},
                  {text: "Química",
                  type: "button-full button-assertive",
                  onTap: function(e){
                      choice = 6;
                  }},
                  {text: "História",
                  type: "button-full button-royal",
                  onTap: function(e){
                      choice = 7;
                  }},
                  {text: "Atualidades",
                  type: "button-full button-dark",
                  onTap: function(e){
                      choice = 8;
                  }},
                  {text: "Geografia",
                  type: "button-full button-positive",
                  onTap: function(e){
                      choice = 9;
                  }}]
      });


      menuModal.then(function(res){
        $state.go('pergunta_Random', {categoria: choice});
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
