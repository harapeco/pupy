function postStream(url, textbox) {
	$.ajax({
		type: 'POST',
		url: url,
		data: {body: textbox.val()},
		dataType: 'json',
		success: function(data, type) {
			$('#postedContainer').append(
				$('<div></div>').addClass('postedStream').html(
					data.body + '<br />' + data.createdAt
				)
			);
		},
		error: function(xhr, status, err) {}
	});
}