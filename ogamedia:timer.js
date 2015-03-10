
// dates
	// to be used for moments like yesterday at 11:30
	Template.registerHelper('cal', function (created) {
		return moment(created).calendar();
	});

	// to be used for moments like 2 minutes ago
	Template.registerHelper('now', function (created) {
		return moment(created).fromNow();
	});

	// shorthand for localized date
		Template.registerHelper('locale', function (created) {
			return moment(created).format('l LT');
		});

// year
	// for four digit year eg. 2014
	Template.registerHelper('yearNF', function (created) {
		return moment(created).format("YYYY");
	});


	// for two digit year eg. 14
	Template.registerHelper('yearNP', function (created) {
		return moment(created).format("YY");
	});

// month
	// for full month name eg. august
	Template.registerHelper('mthWF', function (created) {
		return moment(created).locale("MMMM");
	});

	// for partial month name eg. aug
	Template.registerHelper('mthWP', function (created) {
		return moment(created).locale("MMM");
	});

	// for month presentation in numbers. eg. dec equals 12 and 1 equals 01
	Template.registerHelper('mthN', function (created) {
		return moment(created).format("MM");
	});


	// for weekly month presentation in numbers. eg. 1, 2, 3, 4
	Template.registerHelper('mthQ', function (created) {
		return moment(created).format("Q");
	});

// week
	// for ISO presentation of day with numbers. eg. 1 24, 53
	Template.registerHelper('wk', function (created) {
		return moment(created).format("WW");
	});

	// for locale presentation of day with numbers. eg. 1 24, 53
	Template.registerHelper('wkYl', function (created) {
		return moment(created).format("ww");
	});

	// for ISO 4 digit week year  eg. 2014
	Template.registerHelper('wkNF', function (created) {
		return moment(created).format("GGGG");
	});

	// for ISO 2 digit week year  eg. 14
	Template.registerHelper('wkNP', function (created) {
		return moment(created).format("GG");
	});

	// for local 4 digit week year  eg. 2014
	Template.registerHelper('wkNFl', function (created) {
		return moment(created).format("gggg");
	});

	// for local 2 digit week year  eg. 14
	Template.registerHelper('wkNPl', function (created) {
		return moment(created).format("gg");
	});

// day
	// for presentation of day with numbers. eg. 24, 31, 3
	Template.registerHelper('dayN', function (created) {
		return moment(created).format("DD");
	});

	// for presentation of day with Numbered Ordinals. eg. 24th, 31st, 3rd
	Template.registerHelper('dayO', function (created) {
		return moment(created).format("Do");
	});

	// for presentation of day of the year eg. jan 3rd will be 3, dec 31 will be 365
	Template.registerHelper('dayY', function (created) {
		return moment(created).format("DDDD");
	});

	// for ISO presentation of day of the week eg. 1, 4, 5
	Template.registerHelper('dayW', function (created) {
		return moment(created).format("E");
	});

	// for Locale presentation of day of the week eg. 1 to 7
	Template.registerHelper('dayWl', function (created) {
		return moment(created).format("e");
	});

// timestamp
	// for unix timestamps eg.1410715640.579
	Template.registerHelper('unx', function (created) {
		return moment(created).format("X");
	});

	//  for unix timestamps 1410715640579
	Template.registerHelper('unxms', function (created) {
		return moment(created).format("x");
	});

//hour
	// 12 hour 
		// for presenting hours minutes and seconds in 12 hour format eg. 3:12:36
		Template.registerHelper('hms', function (created) {
			return moment(created).format("hh:mm:ss");
		});

		// for presenting hours minutes and seconds with ante or post meridian (small letters)eg. 3:12:36 pm
		Template.registerHelper('hmsF', function (created) {
			return moment(created).format("hh:mm:ss a");
		});

		// for presenting hours minutes and seconds with ante or post meridian (caps letters)eg. 3:12:36 PM
		Template.registerHelper('hmsFC', function (created) {
			return moment(created).format("hh:mm:ss A");
		});

		// for presenting hours minutes and seconds with tenth of a second eg. 3:12:36:9
		Template.registerHelper('hmss', function (created) {
			return moment(created).format("hh:mm:ss:S");
		});

		// for presenting hours minutes and seconds with hundredth of a second eg. 3:12:36:44
		Template.registerHelper('hmsss', function (created) {
			return moment(created).format("hh:mm:ss:SS");
		});

		// for presenting hours minutes and seconds with thousandths of a second eg. 3:12:36:4545
		Template.registerHelper('hmssss', function (created) {
			return moment(created).format("hh:mm:ss:SSSS");
		});

	//24 hour
		// for presenting hours minutes and seconds in 24 hour format eg. 3:12:36
		Template.registerHelper('hms', function (created) {
			return moment(created).format("HH:mm:ss");
		});

		// for presenting hours minutes and seconds with tenth of a second in 24 hour format eg. 3:12:36:9
		Template.registerHelper('Hmss', function (created) {
			return moment(created).format("HH:mm:ss:S");
		});

		// for presenting hours minutes and seconds with hundredth of a second in 24 hour format eg. 3:12:36 3:12:36:44
		Template.registerHelper('Hmsss', function (created) {
			return moment(created).format("HH:mm:ss:SS");
		});

		// for presenting hours minutes and seconds with thousandths of a second in 24 hour format eg. 3:12:36 3:12:36:4545
		Template.registerHelper('Hmssss', function (created) {
			return moment(created).format("HH:mm:ss:SSS");
		});

// minutes
		// for presenting minutes eg. 36
		Template.registerHelper('min', function (created) {
			return moment(created).format("mm");
		});

// seconds
		// for presenting secs  eg. secs
		Template.registerHelper('sec', function (created) {
			return moment(created).format("ss");
		});

		// for presenting tenth of a second eg. secs
		Template.registerHelper('secH', function (created) {
			return moment(created).format("S");
		});

		// for presenting hundreth of a second eg. secs
		Template.registerHelper('secH', function (created) {
			return moment(created).format("SS");
		});


		// for presenting thousandth of a second eg. secs
		Template.registerHelper('secH', function (created) {
			return moment(created).format("SSS");
		});
