

var Quran = {

	surah: 1,
	fromVerse: 1,
	toVerse: 3,
	
	verses: [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111,
      43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77,
      227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75,
      85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55,
      78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52,
      44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25,
      22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
      11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6],
	  
	surahNames: ["Al-Fatihah",
    "Al-Baqarah",
    "Aal-E-Imran",
    "An-Nisa\'",
    "Al-Ma\'idah",
    "Al-An\'am",
    "Al-A\'raf",
    "Al-Anfal",
    "At-Tawbah",
    "Yunus",
    "Hud",
    "Yusuf",
    "Ar-Ra\'d",
    "Ibrahim",
    "Al-Hijr",
    "An-Nahl",
    "Al-Isra\'",
    "Al-Kahf",
    "Maryam",
    "Ta-Ha",
    "Al-Anbiya\'",
    "Al-Hajj",
    "Al-Mu\'minun",
    "An-Nur",
    "Al-Furqan",
    "Ash-Shu\'ara",
    "An-Naml",
    "Al-Qasas",
    "Al-Ankabut",
    "Ar-Rum",
    "Luqman",
    "As-Sajdah",
    "Al-Ahzab",
    "Saba\'",
    "Fatir",
    "Ya-Seen",
    "As-Saaffat",
    "Sad",
    "Az-Zumar",
    "Ghafir",
    "Fussilat",
    "Ash-Shura",
    "Az-Zukhruf",
    "Ad-Dukhan",
    "Al-Jathiya",
    "Al-Ahqaf",
    "Muhammad",
    "Al-Fath",
    "Al-Hujurat",
    "Qaf",
    "Adh-Dhariyat",
    "At-Tur",
    "An-Najm",
    "Al-Qamar",
    "Ar-Rahman",
    "Al-Waqi\'ah",
    "Al-Hadid",
    "Al-Mujadila",
    "Al-Hashr",
    "Al-Mumtahana",
    "As-Saf",
    "Al-Jumu\'ah",
    "Al-Munafiqun",
    "At-Taghabun",
    "At-Talaq",
    "At-Tahrim",
    "Al-Mulk",
    "Al-Qalam",
    "Al-Haqqah",
    "Al-Ma\'arij",
    "Nuh",
    "Al-Jinn",
    "Al-Muzzammil",
    "Al-Muddaththir",
    "Al-Qiyamah",
    "Al-Insan",
    "Al-Mursalat",
    "An-Naba\'",
    "An-Nazi\'at",
    "\'Abasa",
    "At-Takwir",
    "Al-Infitar",
    "Al-Mutaffifin",
    "Al-Inshiqaq",
    "Al-Buruj",
    "At-Tariq",
    "Al-A\'la",
    "Al-Ghashiyah",
    "Al-Fajr",
    "Al-Balad",
    "Ash-Shams",
    "Al-Layl",
    "Ad-Dhuhaa",
    "Al-Sharh",
    "At-Tin",
    "Al-Alaq",
    "Al-Qadr",
    "Al-Bayyinah",
    "Az-Zalzalah",
    "Al-Adiyat",
    "Al-Qari\'ah",
    "At-Takathur",
    "Al-Asr",
    "Al-Humazah",
    "Al-Fil",
    "Quraysh",
    "Al-Ma\'un",
    "Al-Kawthar",
    "Al-Kafirun",
    "An-Nasr",
    "Al-Masad",
    "Al-Ikhlas",
    "Al-Falaq",
    "An-Nas"],

	translations: ["en.yusufali", "en.pickthall", "en.shakir"],	
	
	translation: undefined,
	
	hasTranslationForSurah: false,
	
	selectedSurahTranslation: undefined,

	init: function(){
		Quran.translation = Quran.translations[1];
		Quran.populateSurahList();
		/*Quran.populateVersesList();*/
	},
	
	populateSurahList: function(){
		var surahNames = Quran.surahNames;
		
		for(var num = 0; num < 114; num++){
			/*var opt = $("<option/>");
			$(opt).val((num + 1)).text(surahNames[num]).appendTo($("#sura"));*/
			
			var li = $("<li/>");
			$(li).html("<a href=\"#\" data='" + (num + 1) + "'>" + surahNames[num] + "</a>").addClass("pull-left");
			$(li).appendTo($("#sura").parent().find("ul"));
		}
		
		$('#sura').parent().find('ul > li > a').click(Quran.populateVersesList);
	},
	
	populateVersesList: function(event){
		var selectedSurahNo = $(event.target).attr("data");
		var maxVerse = Quran.verses[selectedSurahNo - 1];
		
		Quran.resetAll();
	
		for(var num = 1; num <= maxVerse; num++){
			/*var opt = $("<option/>");
			$(opt).val(num).text(num).appendTo($("#fromVerse"));*/
			
			var li = $("<li/>");
			$(li).html("<a href=\"#\">" + num + "</a>").addClass("pull-left");
			$(li).appendTo($("#fromVerse").parent().find("ul"));
			
		}
		
		for(var num = 1; num <= maxVerse; num++){
			/*var opt = $("<option/>");
			$(opt).val(num).text(num).appendTo($("#toVerse"));*/
			
			var li = $("<li/>");
			$(li).html("<a href=\"#\">" + num + "</a>").addClass("pull-left");
			$(li).appendTo($("#toVerse").parent().find("ul"));
		}
		
		Quran.hasTranslationForSurah = false;
		Quran.getTranslation(selectedSurahNo);
	},

	writeAayah: function(){
		Quran.surah = $('#sura').val();
		Quran.fromVerse = $('#fromVerse').val();
		Quran.toVerse = $('#toVerse').val();
	
		var surah = parseInt(Quran.surah);
		var fromAayah = parseInt(Quran.fromVerse);
		var toAayah = parseInt(Quran.toVerse);
		
		$('#aayaah').empty();
		
		if(fromAayah > toAayah)
			return;
		
		for(var ayah = fromAayah; ayah <= toAayah; ayah++){
			var img = $("<img/>");
			$(img).attr("src", "http://www.everyayah.com/data/quranpngs/" + surah + "_" + ayah + ".png");
			Quran.setTranslation($(img), surah, ayah);
			$(img).appendTo($("#aayaah"));
		}
		
		$('#showingStatus').text("Showing " + fromAayah + "-" + toAayah + " of Surah '" + Quran.surahNames[Quran.surah - 1]);
	},
	
	resetAll: function(){
		/*$('#fromVerse, #toVerse').empty();*/
		$('#fromVerse').parent().find('ul').empty();
		$('#toVerse').parent().find('ul').empty();
		$('#aayaah').empty();
		$('#showingStatus').text("");
	},
	
	getTranslation: function(surah){
		
		if(!Quran.hasTranslationForSurah){
			$.getJSON("http://api.globalquran.com/surah/" + surah + "/" + Quran.translation, {
			}, function(resp){
				//$(elem).attr("title", resp['quran'][translation][aayah]["verse"]);
				Quran.selectedSurahTranslation = resp;
				Quran.hasTranslationForSurah = true;
			});
		}
		else {
			//$(elem).attr("title", Quran.selectedSurahTranslation['quran'][translation][aayah]["verse"]);
		}
	},
	
	setTranslation: function(elem, surah, aayah){
		if(Quran.hasTranslationForSurah){
			$.each(Quran.selectedSurahTranslation['quran'][Quran.translation], function(iter, eAayah){
				if(eAayah["ayah"] == aayah){
					$(elem).attr("title",  eAayah["verse"]);
					return false;
				}
			});
		}
	},
	
	fromVerseClickHandler: function(){}
};


 
$(document).ready(function(){
	Quran.init();
	/*$('#sura').change(Quran.populateVersesList);*/
	
	
	$('#toVerse').change(Quran.writeAayah);
});

 