Jaml.register('templateJs.widget.table', function (users) {
	h2('List of Users'),
	table({cellspacing: '0', cellpadding: '0', border: '1'},
		thead(),
		tbody(Jaml.render('templateJs.widget.rows', users.records))
	);
});