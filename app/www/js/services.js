angular.module('app.services', [])
.constant('URL_API', 'http://desputados.devmsistemas.com.br/')

.factory('BlankFactory', [function(){

}])

.service('QuestoesService', function($http, $q, URL_API){

	this.buscaQuestoes = function(idCategoria) {
		console.log(URL_API);

		var deferred = $q.defer();

		$http.get(URL_API + 'api/questoes/' + idCategoria)
		.success(function (data) {
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};
})

.service('LoginService', function($http, $q, $httpParamSerializer, URL_API){
	var logged;

	setUser = function(user){
		console.log("set User");
		logged = user;
		console.log(logged);
		if (!logged.sucesso){
			logged = null;
		}
	}

	this.getUser = function(){
		return logged;
	}

	this.validaUser = function(email){
		var deferred = $q.defer();

		$http.get(URL_API +'/api/usuario?email=' + email)
		.success(function (data) {
			deferred.resolve(data);
			setUser(data);

		})
		.error(function(data) {
			deferred.reject(data);
		});
		return deferred.promise;
	};

	this.cadastraUser = function(nome, email){
		console.log("service");
		console.log(nome);
		console.log(email);

		// var deferred = $q.defer();

		$http.post(URL_API +'api/usuario',$httpParamSerializer({ nome: nome, email: email }));
		// .success(function (data) {
		// 	deferred.resolve(data);
		// })
		// .error(function(data) {
		// 	deferred.reject(data);
		// });
		// return deferred.promise;
	};





});
