$(document).ready(function() {
	var baseURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search='

	function generateSearchHeader(arr) {
		var searchTerm = arr[0];
		var total = arr[1].length;
		return '<h4><small>Your search for </small>' + searchTerm + '<small> has yielded </small>' + total +'<small> results.</small></h4>';
	}
	function generateListItems(arr) {
		var str = '';
		var results = arr[1].length;
		for (var i = 0; i < results; i++) {
			var title = arr[1][i];
			var excerpt = arr[2][i];
			var url = arr[3][i];


			var listItem = '<div class="well container"><h4 class="title">' + title +
			'</h4><p class="excerpt">' + excerpt + '</p></div>';

			str += listItem;
		}

		return str;
	}
	function searchTerm(term) {
		term = term.split(' ').join('+');
		console.log(term);
		$.getJSON(baseURL + term, function(json) {
			console.log('RESULT = ', json);
			$('#results-list').append(generateSearchHeader(json));
			$('#results-list').append(generateListItems(json));
		});
	}

	searchTerm('Sloth Bear');

});
