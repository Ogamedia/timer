##Introduction

Timer provides the simplest way to format date and time elements in your meteor app.  
Timer is built upon moments.js and the mrt:moment package. Timer takes away the need to write Template helpers because, it has been done for you

To contribute, fork code and send pull request.
All you need is a single line of code
> {{tm_now createdAT}}  
This will give the following result
> 3 hours ago  
or
> 4 mins ago  

Depending on when the collection document was created

##Installation

> Meteor add ogamedia:timer

#####Note: this will add mrt:moment to your app

##Usage
#####_The app is still under development so not all of moment.js functionality has been implemented, contribution to code is very welcome_

1. Add a date function to your app either using collection2 schema (i.e. createdAt) style

```
	Checks = new Mongo.Collection('check');  
	var schemas = {}

	Schemas.Checks = new SimpleSchema({  
    name: {  
		type: String,  
		label: "comment",  
	},


	createdAt: {  
		type: Date,  
		label: Date,  
		autoValue: function() {  
			if (this.isInsert) {  
			return new Date();  
			}  
		}  
	}  

});

```
**note**:For collectionFS and packages which provide your collection schema with uploadedAt or createdAt by default, there is no need to worry about the first step  
  If you using other date functions, dont worry, you are covered.

2. Call your date function in html template  
  It can be createdAt, uploadedAt, or any other date function.  
```
<template name="hello">
{{#each posts}}
  	{{createdAt}}
 {{/each}}
</template>

```

3. Just insert a timer method and pass your date function as the parameter.  
  So your new code will be  
```
<template name="hello">
{{#each posts}}
  	{{tm_day createdAt}}
 {{/each}}
</template>

```
And that is it; no need to write Template helpers or UI helpers

##Syntax
### What you will most likely be using

> to be used for moments like 2 minutes ago  
		```tm_now```

> to be used for moments like yesterday at 11:30  
		```tm_cal```



###All Syntax

####dates

	> to be used for moments like yesterday at 11:30  
		tm_cal

	> to be used for moments like 2 minutes ago  
		tm_now

	> shorthand for localized date like 3/10/2015 9:37 PM  
		tm_locale
####year

	> for four digit year eg. 2014  
		tm_year

	> for two digit year eg. 14  
		tm_yr

####month

	> for full month name eg. august  
		tm_month

	> for partial month name eg. aug  
		tm_mon

	> for month presentation in numbers. eg. dec equals 12 and 1 equals 01  
		tm_mth

	> for weekly month presentation in numbers. eg. 1, 2, 3, 4  
		tm_week

####week

	> for ISO presentation of day with numbers. eg. 1 24, 53  
		tm_weeks

	> for locale presentation of day with numbers. eg. 1 24, 53  
		tm_weeksl

	> for ISO 4 digit week year  eg. 2014  
		tm_wkNF

	> for ISO 2 digit week year  eg. 14  
		tm_wkNP

	> for local 4 digit week year  eg. 2014  
		tm_wkNFl

	> for local 2 digit week year  eg. 14  
		tm_wkNPl

	> for unix timestamps eg.1410715640.579  
		tm_unx

	>  for unix timestamps 1410715640579  
		tm_unxms

#####12 hour 

		> for presenting hours minutes and seconds in 12 hour format eg. 3:12:36   
			tm_hms

		> for presenting hours minutes and seconds with ante or post meridian (small letters)eg. 3:12:36 pm   
			tm_hmsF

		> for presenting hours minutes and seconds with ante or post meridian (caps letters)eg. 3:12:36 PM   
			tm_hmsFC

		> for presenting hours minutes and seconds with tenth of a second eg. 3:12:36:9   
			tm_hmss

		> for presenting hours minutes and seconds with hundredth of a second eg. 3:12:36:44   
			tm_hmsss

		> for presenting hours minutes and seconds with thousandths of a second eg. 3:12:36:4545   
			tm_hmssss

#####24 hour

		> for presenting hours minutes and seconds in 24 hour format eg. 3:12:36  
			tm_hms

		> for presenting hours minutes and seconds with tenth of a second in 24 hour format eg. 3:12:36:9  
			tm_Hmss

		> for presenting hours minutes and seconds with hundredth of a second in 24 hour format eg. 3:12:36 3:12:36:44  
			tm_Hmsss

		> for presenting hours minutes and seconds with thousandths of a second in 24 hour format eg. 3:12:36 3:12:36:4545  
			tm_Hmssss

		> for presenting minutes eg. 36  
			tm_min

		> for presenting secs  eg. secs  
			tm_sec

		> for presenting tenth of a second eg. secs  
			tm_secs

		> for presenting hundreth of a second eg. secs  
			tm_secss

		> for presenting thousandth of a second eg. secs  
			tm_secsss



