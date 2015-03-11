
// dates
	// to be used for moments like yesterday at 11:30
		// % tm_cal
	Template.registerHelper('tm_cal', function (created) {
		console.log('test');
		return moment(created).calendar();
	});

	// to be used for moments like 2 minutes ago
		// % tm_now
	Template.registerHelper('tm_now', function (created) {
		return moment(created).fromNow();
	});

	// shorthand for localized date like 3/10/2015 9:37 PM
		// % tm_locale
		Template.registerHelper('tm_locale', function (created) {
			return moment(created).format('l LT');
		});

// year
	// for four digit year eg. 2014
		// % tm_year
	Template.registerHelper('tm_year', function (created) {
		return moment(created).format("YYYY");
	});


	// for two digit year eg. 14
		// % tm_yr
	Template.registerHelper('tm_yr', function (created) {
		return moment(created).format("YY");
	});

// month
	// for full month name eg. august
		// % tm_month
	Template.registerHelper('tm_month', function (created) {
		return moment(created).locale("MMMM");
	});

	// for partial month name eg. aug
		// % tm_mon
	Template.registerHelper('tm_mon', function (created) {
		return moment(created).locale("MMM");
	});

	// for month presentation in numbers. eg. dec equals 12 and 1 equals 01
		// % tm_mth
	Template.registerHelper('tm_mth', function (created) {
		return moment(created).format("MM");
	});


	// for weekly month presentation in numbers. eg. 1, 2, 3, 4
		// % tm_week
	Template.registerHelper('tm_week', function (created) {
		return moment(created).format("Q");
	});

// week
	// for ISO presentation of day with numbers. eg. 1 24, 53
		// % tm_weeks
	Template.registerHelper('tm_weeks', function (created) {
		return moment(created).format("WW");
	});

	// for locale presentation of day with numbers. eg. 1 24, 53
		// % tm_weeksl
	Template.registerHelper('tm_weeksl', function (created) {
		return moment(created).format("ww");
	});

	// for ISO 4 digit week year  eg. 2014
		// % tm_wkNF
	Template.registerHelper('tm_wkNF', function (created) {
		return moment(created).format("GGGG");
	});

	// for ISO 2 digit week year  eg. 14
		// % tm_wkNP
	Template.registerHelper('tm_wkNP', function (created) {
		return moment(created).format("GG");
	});

	// for local 4 digit week year  eg. 2014
		// % tm_wkNFl
	Template.registerHelper('tm_wkNFl', function (created) {
		return moment(created).format("gggg");
	});

	// for local 2 digit week year  eg. 14
		// % tm_wkNPl
	Template.registerHelper('tm_wkNPl', function (created) {
		return moment(created).format("gg");
	});

// day
	// for presentation of day with numbers. eg. 24, 31, 3
		// % tm_day
	Template.registerHelper('tm_day', function (created) {
		return moment(created).format("DD");
	});

	// for presentation of day with Numbered Ordinals. eg. 24th, 31st, 3rd
		// % tm_dayO
	Template.registerHelper('tm_dayO', function (created) {
		return moment(created).format("Do");
	});

	// for presentation of day of the year eg. jan 3rd will be 3, dec 31 will be 365
		// % tm_days
	Template.registerHelper('tm_days', function (created) {
		return moment(created).format("DDDD");
	});

	// for ISO presentation of day of the week eg. 1, 4, 5
		// % tm_dayW
	Template.registerHelper('tm_dayW', function (created) {
		return moment(created).format("E");
	});

	// for Locale presentation of day of the week eg. 1 to 7
		// % tm_dayWl
	Template.registerHelper('tm_dayWl', function (created) {
		return moment(created).format("e");
	});

// timestamp
	// for unix timestamps eg.1410715640.579
		// % tm_unx
	Template.registerHelper('tm_unx', function (created) {
		return moment(created).format("X");
	});

	//  for unix timestamps 1410715640579
		// % tm_unxms
	Template.registerHelper('tm_unxms', function (created) {
		return moment(created).format("x");
	});

//hour
	// 12 hour 
		// for presenting hours minutes and seconds in 12 hour format eg. 3:12:36
			// % tm_hms
		Template.registerHelper('tm_hms', function (created) {
			return moment(created).format("hh:mm:ss");
		});

		// for presenting hours minutes and seconds with ante or post meridian (small letters)eg. 3:12:36 pm
			// % tm_hmsF
		Template.registerHelper('tm_hmsF', function (created) {
			return moment(created).format("hh:mm:ss a");
		});

		// for presenting hours minutes and seconds with ante or post meridian (caps letters)eg. 3:12:36 PM
			// % tm_hmsFC
		Template.registerHelper('tm_hmsFC', function (created) {
			return moment(created).format("hh:mm:ss A");
		});

		// for presenting hours minutes and seconds with tenth of a second eg. 3:12:36:9
			// % tm_hmss
		Template.registerHelper('tm_hmss', function (created) {
			return moment(created).format("hh:mm:ss:S");
		});

		// for presenting hours minutes and seconds with hundredth of a second eg. 3:12:36:44
			// % tm_hmsss
		Template.registerHelper('tm_hmsss', function (created) {
			return moment(created).format("hh:mm:ss:SS");
		});

		// for presenting hours minutes and seconds with thousandths of a second eg. 3:12:36:4545
			// % tm_hmssss
		Template.registerHelper('tm_hmssss', function (created) {
			return moment(created).format("hh:mm:ss:SSSS");
		});

	//24 hour
		// for presenting hours minutes and seconds in 24 hour format eg. 3:12:36
			// % tm_hms
		Template.registerHelper('tm_hms', function (created) {
			return moment(created).format("HH:mm:ss");
		});

		// for presenting hours minutes and seconds with tenth of a second in 24 hour format eg. 3:12:36:9
			// % tm_Hmss
		Template.registerHelper('tm_Hmss', function (created) {
			return moment(created).format("HH:mm:ss:S");
		});

		// for presenting hours minutes and seconds with hundredth of a second in 24 hour format eg. 3:12:36 3:12:36:44
			// % tm_Hmsss
		Template.registerHelper('tm_Hmsss', function (created) {
			return moment(created).format("HH:mm:ss:SS");
		});

		// for presenting hours minutes and seconds with thousandths of a second in 24 hour format eg. 3:12:36 3:12:36:4545
			// % tm_Hmssss
		Template.registerHelper('tm_Hmssss', function (created) {
			return moment(created).format("HH:mm:ss:SSS");
		});

// minutes
		// for presenting minutes eg. 36
			//% tm_min
		Template.registerHelper('tm_min', function (created) {
			return moment(created).format("mm");
		});

// seconds
		// for presenting secs  eg. secs
			//% tm_sec
		Template.registerHelper('tm_sec', function (created) {
			return moment(created).format("ss");
		});

		// for presenting tenth of a second eg. secs
			//% tm_secs
		Template.registerHelper('tm_secs', function (created) {
			return moment(created).format("S");
		});

		// for presenting hundreth of a second eg. secs
			//% tm_secss
		Template.registerHelper('tm_secss', function (created) {
			return moment(created).format("SS");
		});


		// for presenting thousandth of a second eg. secs
			//% tm_secsss
		Template.registerHelper('tm_secsss', function (created) {
			return moment(created).format("SSS");
		});