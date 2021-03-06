ej.addCulture( "as-IN", {
	name: "as-IN",
	englishName: "Assamese (India)",
	nativeName: "অসমীয়া (ভাৰত)",
	language: "as",
	numberFormat: {
		groupSizes: [3,2],
		"NaN": "nan",
		negativeInfinity: "-infinity",
		positiveInfinity: "infinity",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,2]
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,2],
			symbol: "₹"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["ৰবিবাৰ","সোমবাৰ","মঙ্গলবাৰ","বুধবাৰ","বৃহস্পতিবাৰ","শুক্রবাৰ","শনিবাৰ"],
				namesAbbr: ["ৰবি.","সোম.","মঙ্গল.","বুধ.","বৃহ.","শুক্র.","শনি."],
				namesShort: ["ৰ","সো","ম","বু","বৃ","শু","শ"]
			},
			months: {
				names: ["জানুৱাৰী","ফেব্রুৱাৰী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টেম্বৰ","অক্টোবৰ","নবেম্বৰ","ডিচেম্বৰ",""],
				namesAbbr: ["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টে","অক্টো","নবে","ডিচে",""]
			},
			AM: ["ৰাতিপু","ৰাতিপু","ৰাতিপু"],
			PM: ["আবেলি","আবেলি","আবেলি"],
			patterns: {
				d: "dd-MM-yyyy",
				D: "yyyy,MMMM dd, dddd",
				t: "tt h:mm",
				T: "tt h:mm:ss",
				f: "yyyy,MMMM dd, dddd tt h:mm",
				F: "yyyy,MMMM dd, dddd tt h:mm:ss",
				M: "d MMMM",
				Y: "MMMM,yy"
			}
		}
	}
});