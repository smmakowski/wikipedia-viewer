$(document).ready(function() {
	var baseURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search='
	function searchTerm(term) {
		term = term.split(' ').join('+');
		console.log(term);
		$.getJSON(baseURL + term, function(json) {
			console.log('RESULT = ', json);
		});
	}

	searchTerm('Sloth Bear');

});
