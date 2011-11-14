Jaml.register('templateJs.widget.rows', function (record) {
	tr(
		td(record.number.toString()),
		td(record.name),
		td(record.email),
		td(record.phone),
		td(record.address)
	);
});

