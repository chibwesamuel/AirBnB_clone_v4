$('span#reviews-toggle').click(function() {
	const reviewsDiv = $('div#reviews');
	if ($(this).text() === 'hide') {
		reviewsDiv.empty();
		$(this).text('Show');
	} else {
		$.get('/reviews', function(data) {
			const reviews = JSON.parse(data);
			reviewsDiv.empty();
			for (let review of reviews) {
				reviewsDiv.append(`<p><strong>${review.author}: </strong>${review.body}</p>`);
			}
		});
		$(this).text('hide');
	}
});
