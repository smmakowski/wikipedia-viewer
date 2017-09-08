$(document).ready(function() {
	var lang = 'en';

	function generateSearchHeader(arr) {
		var searchTerm = arr[0];
		var total = arr[1].length;
		return '<h4 class="text-center"><small>Your search for </small>' + searchTerm +
		'<small> has yielded </small>' + total + '<small> results.</small></h4>';
	}

	function generateListItems(arr) {
		var str = '';
		var results = arr[1].length;
		for (var i = 0; i < results; i++) {
			var title = arr[1][i];
			var excerpt = arr[2][i];
			var url = arr[3][i];

			var listItem = '<div class="well container-fluid list-item"><h4 class="title">' + title +
			'</h4><p class="excerpt">' + excerpt;

			if (listItem[listItem.length - 1] !== '.') {
				listItem += '...';
			} else {
				listItem += '..';
			}

			listItem += '<a href="'+ url + '" target="_blank">[READ MORE]</a></p></div>';
			str += listItem;
		}

		return str;
	}

	function searchTerm(term, lang) {
		$('#results-list').addClass('gray-border');
		$('#results-list').empty();
		term = term.split(' ').join('+');
		console.log(term);
		$.getJSON('https://' + lang + '.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + term, function(json) {
			console.log('RESULT = ', json);
			$('#results-list').append(generateSearchHeader(json));
			$('#results-list').append(generateListItems(json));
		});
	}

	$('form').on('submit', function(e) {
		e.preventDefault();
		e.stopPropagation();
		searchTerm($('#search').val(), 'en');
		$('#search').val('');
		return false;
	});

	$('#results-list').html('<h4 class="text-center"><small>Please type in what you want to search for in the \
	search bar and press</small> ENTER<small>, or click the</small> View Random Article <small>button above to see a random page.</small></h4>');
});
