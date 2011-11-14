if (typeof templateJs == 'undefined') { var templateJs = {}; }

templateJs.data = {
	browse: function (count) {
		var data = [];
		for (var i = 0; i < count; i++) {
			data.push({
				number: i,
				name: "User Name" + i,
				email: "user" + i + "@email.com",
				phone: "1-234-567-8900",
				address: "Western Avenue, Seattle, WA 98104"
			});
		}

		return data;
	},

	render: function (renderCallback) {
		var time = [];
		for (var i = 0; i < 1000; i += 100) {
			var date = new Date();
			renderCallback(templateJs.data.browse(i + 1));

			time.push(new Date() - date);
		}
		console.info(time);
	}
};