ej.addCulture( "fr-BE", {
	name: "fr-BE",
	englishName: "French (Belgium)",
	nativeName: "français (Belgique)",
	language: "fr",
	numberFormat: {
		pattern: ["-n"],
		decimals: 2,
		",": ".",
		".": ",",
        groupSizes: [3],
		"NaN": "Non Numérique",
		negativeInfinity: "-Infini",
		positiveInfinity: "+Infini",
		percent: {
			pattern: ["-n%","n%"],
			decimals: 2,
            groupSizes: [3],
			",": ".",
			".": ",",
            symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			decimals: 2,
            groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
				namesAbbr: ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],
				namesShort: ["di","lu","ma","me","je","ve","sa"]
			},
			months: {
				names: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],
				namesAbbr: ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
			patterns: {
				d: "dd-MM-yy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});