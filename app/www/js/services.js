angular.module('app.services', [])
.constant('URL_API', 'http://desputados.devmsistemas.com.br/')

.factory('BlankFactory', [function(){

}])

.service('QuestoesService', function($http, $q, URL_API){

	this.buscaQuestoes = function(idCategoria) {
		console.log(URL_API);

		var deferred = $q.defer();

		$http.get(URL_API + '/api/questoes/' + idCategoria)
		.success(function (data) {
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};
});

