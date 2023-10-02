let bonusClassExtension = "-bonus";
let globalStandardPromoText = "Click & activate";

let fanduelClass = "fanduel";
let betmgmClass = "betmgm";
let caesarsClass = "caesars";
let draftkingsClass = "draftkings";
let betriversClass = "betrivers";
let wynnbetClass = "wynnbet";
let fuboClass = "fubo";
let unibetClass = "unibet";
let betfredClass = "betfred";
let hardRockClass = "hard-rock";

let AZSites = ["azsportsbettingsites.com", "arizonaonlinebetting.com", "arizonaonlinegambling.net", "azonlinebettingsites.com", "arizonagamblers.com"];
let NYSites = ["nystateonlinecasino.com", "bestnyonlinecasino.com", "thenewyorkbets.com", "nystateonlinebetting.com", "nystatebetting.com", "nystatebettingsites.com", "nyonlinegamblingsites.com", "nygamblers.com"];
let MISites = ["michiganstatecasinos.com", "mistateonlinecasino.com", "mistatesportsbetting.com", "michigangamblers.com"];
let NJSites = ["njstateonlinecasino.com", "njstateonlinecasinos.com", "onlinecasinoinnj.com", "njstatesportsbetting.com", "njstategambler.com"];
let COSites = ["coloradostategambling.com", "coloradogamblers.com"];
let PASites = ["pastateonlinecasino.com", "paonlinecasinosites.com", "onlinecasinoinpa.com", "pastatesportsbetting.com", "pennsylvaniagamblers.com"];
let TNSites = ["tnonlinecasino.com", "tnstatesportsbetting.com", "onlinegamblingtennessee.com", "tennesseegamblers.com"];
let WISites = ["wisportsbettingsites.com", "wisconsinstatebetting.com", "onlinecasinoinnj.com", "wisconsinonlinegambling.com", "wisconsingamblers.com"];
let VASites = ["vasportsbettingsites.com", "virginiastategambling.com", "onlinecasinoinnj.com", "vagamblers.com"];
let LASites = ["louisianastategambling.com", "louisianagamblers.com"];
let ILSites = ["illinoisstatebetting.com", "illinoisstategambling.com", "ilgambler.com.com", "illinoisgamblers.com"];
let INSites = ["indianastategambling.com"];
let IASites = ["iowastategambling.com"];
let KSSites = ["kansasonlinegambling.com", "kansasgamblers.com"];
let NVSites = ["nevadastategambling.com"];
let OHSites = ["ohiostatebetting.com", "ohiostatebettingsites.com", "ohioonlinebettingsites.com", "onlinebettingohio.com", "ohiostateonlinegambling.com", "ohgamblers.com", "ohonlinecasino.com"];
let MDSites = ["marylandstatebetting.com", "mdstatesportsbetting.com", "onlinebettingmd.com", "onlinebettingmaryland.com", "mdstatebetting.com", "marylandstategambling.com", "mdgambler.com"];
let MASites = ["masportsbettingsites.com", "maonlinebettingsites.com", "mastatebetting.com", "massachusettsonlinegambling.com", "magambler.com"];

function setClassAttribute(className, type, newAttribute) {
	className = className + type;
	let classNameEnteties = document.getElementsByClassName(className);
	if (classNameEnteties) {
		for (i = 0; i < classNameEnteties.length; i++) {
			classNameEnteties[i].innerHTML = newAttribute;
		}
	}
}

// ALL operators

// FANDUEL

let fanduelStandardSportsBonus = "No sweat first bet up to $1,000";
let fanduelStandardCasinoBonus = "$1,000 play it again";
let fanduel = {
	brand: "Fanduel",
	promoCode: {
		azsportsbettingsites: globalStandardPromoText,
		arizonaonlinebetting: globalStandardPromoText,
		arizonaonlinegambling: globalStandardPromoText,
		azonlinebettingsites: globalStandardPromoText
	},
	azBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	coBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	inBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	laBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	miBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	njBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	paBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: fanduelStandardSportsBonus,
		casino: fanduelStandardCasinoBonus
	},
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "formula-1", "motorsports", "rugby", "snooker", "table-tennis", "horse-racing"],
	bankings: ["paypal"]
};

// BETMGM
let betmgmStandardSportsBonus = "Risk-free bet up to $1000";
let betmgmStandardCasinoBonus = "$25 free play";
let betmgm = {
	brand: "BetMGM",
	promoCode: {
		azsportsbettingsites: "JOKERZINO",
		arizonaonlinebetting: "JOKERZINO",
		arizonaonlinegambling: "JOKERZINO",
		azonlinebettingsites: "JOKERZINO"
	},
	azBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	coBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	inBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	laBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	miBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	njBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	paBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: betmgmStandardSportsBonus,
		casino: betmgmStandardCasinoBonus
	},
	bankings: ["visa", "mastercard", "vip-preferred", "apple-pay", "playplus", "online-banking", "check-by-email"],
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "badminton", "floorball", "formula-1", "gaelic-sports", "handball", "lacrosse", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics", "water-polo", "ski-jumping"]
};

// CAESARS
let caesarsStandardSportsBonus = "Up to $1,250 bonus + 1,000 credits";
let caesarsStandardCasinoBonus = "$2,000 bonus";
let caesars = {
	brand: "caesars",

	promoCode: {
		azsportsbettingsites: "JOKERZBETFULL",
		arizonaonlinebetting: "JOKERZBETFULL",
		arizonaonlinegambling: "JOKERZBETFULL",
		azonlinebettingsites: "JOKERZBETFULL"
	},
	azBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	coBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	inBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	laBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	miBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	njBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	paBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: caesarsStandardSportsBonus,
		casino: caesarsStandardCasinoBonus
	},
	bankings: ["paypal", "playplus", "online banking", "visa", "mastercard"],
	sports: ["australian-rules", "motorsports", "baseball", "basketball", "boxing", "cricket", "cycling", "darts", "football", "golf", "hockey", "lacrosse", "rugby", "snooker", "soccer", "softball", "table-tennis", "tennis", "mma"]
};

// WYNNBET

let wynnbetStandardSportsBonus = "Bet $100 get $100 free";
let wynnbetStandardCasinoBonus = "100% deposit match up to $1000";
let wynnbet = {
	brand: "WynnBET",
	promoCode: {
		azsportsbettingsites: globalStandardPromoText,
		arizonaonlinebetting: globalStandardPromoText,
		arizonaonlinegambling: globalStandardPromoText,
		azonlinebettingsites: globalStandardPromoText
	},
	azBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	coBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	inBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	laBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	miBonus: {
		sportsbook: "Bet $100 get $50",
		casino: wynnbetStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: "Signup on WynnBET here",
		casino: wynnbetStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	njBonus: {
		sportsbook: "Bet $100 get $50",
		casino: wynnbetStandardCasinoBonus
	},
	paBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: wynnbetStandardSportsBonus,
		casino: wynnbetStandardCasinoBonus
	},
	bankings: ["paypal", "visa", "playplus", "paynearme", "mastercard", "ach", "vip-preferred"],
	sports: ["football", "basketball", "baseball", "hockey", "tennis", "soccer", "mma", "golf", "esports", "e-sports", "motorsports", "table-tennis", "australian-rules", "boxing", "cricket", "cycling", "darts", "floorball", "boxing", "formula-1", "gaelic-sports", "handball", "rugby", "snooker", "volleyball", "olympics"]
};

//BETRIVERS

let betriversStandardSportsBonus = "Up to $500 free bet";
let betriversStandardCasinoBonus = "$250 bonus";
let betrivers = {
	brand: "BetRivers",
	promoCode: {
		azsportsbettingsites: "JOKERZINO",
		arizonaonlinebetting: "JOKERZINO",
		arizonaonlinegambling: "JOKERZINO",
		azonlinebettingsites: "JOKERZINO"
	},
	azBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	coBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	inBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	laBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	miBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	njBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	paBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: betriversStandardSportsBonus,
		casino: betriversStandardCasinoBonus
	},
	bankings: ["paypal", "visa", "mastercard", "discovercard", "pay-with-cash", "ach", "vip-preferred", "casino-cage", "online-banking", "trustly"],
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "esports", "e-sports", "floorball", "formula-1", "gaelic-sports", "handball", "jai-alai", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics"]
};

// HARD-ROCK
let hardrockStandardSportsBonus = "3 risk free bets for max $100";
let hardrockStandardCasinoBonus = "$2,000 bonus";
let hardRock = {
	brand: "Hard Rock",
	promoCode: {
		azsportsbettingsites: globalStandardPromoText,
		arizonaonlinebetting: globalStandardPromoText,
		arizonaonlinegambling: globalStandardPromoText,
		azonlinebettingsites: globalStandardPromoText
	},
	azBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	coBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	inBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	laBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	miBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	njBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	paBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: hardrockStandardSportsBonus,
		casino: hardrockStandardCasinoBonus
	},
	bankings: ["paypal", "playplus", "online banking", "visa", "mastercard"],
	sports: ["australian-rules", "motorsports", "baseball", "basketball", "boxing", "cricket", "cycling", "darts", "football", "golf", "hockey", "lacrosse", "rugby", "snooker", "soccer", "softball", "table-tennis", "tennis", "mma"]
};

// FUBO
let fuboStandardSportsBonus = "Risk-free bet up to $1000";
let fuboStandardCasinoBonus = "";
let fubo = {
	brand: "fubo",
	promoCode: {
		azsportsbettingsites: "AZSPORTB",
		arizonaonlinebetting: "AZOBETTING",
		arizonaonlinegambling: "AZGAMBLING",
		azonlinebettingsites: "AZBETTING"
	},
	azBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	coBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	inBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	laBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	miBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	njBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	paBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: fuboStandardSportsBonus,
		casino: fuboStandardCasinoBonus
	},
	bankings: ["visa", "mastercard", "ach", "vip-preferred", "skrill", "playplus", "paynearme", "paywithmybank", "trustly"],
	sports: ["football", "motorsports", "baseball", "hockey", "soccer", "mma", "tennis", "basketball", "boxing", "golf", "formula-1"]
};

// UNIBET
let unibetStandardSportsBonus = "Bet $50 get $200";
let unibetStandardCasinoBonus = "";
let unibet = {
	brand: "Unibet",
	promoCode: {
		azsportsbettingsites: "AZSPORTB",
		arizonaonlinebetting: "AZSPORTB",
		arizonaonlinegambling: "AZSPORTB",
		azonlinebettingsites: "AZSPORTB"
	},
	azBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	coBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	inBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	laBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	miBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	njBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	paBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: unibetStandardSportsBonus,
		casino: unibetStandardCasinoBonus
	},
	bankings: ["paypal", "visa", "playplus", "paynearme", "mastercard", "ach", "vip-preferred"],
	sports: ["football", "basketball", "baseball", "hockey", "tennis", "soccer", "mma", "golf", "esports", "e-sports", "motorsports", "table-tennis", "australian-rules", "boxing", "cricket", "cycling", "darts", "floorball", "boxing", "formula-1", "gaelic-sports", "handball", "rugby", "snooker", "volleyball", "olympics"]
};

//BETFRED
let betfredStandardSportsBonus = "Bet $50 get $250 free";
let betfredtStandardCasinoBonus = "";
let betfred = {
	brand: "betfred",
	promoCode: {
		azsportsbettingsites: globalStandardPromoText,
		arizonaonlinebetting: globalStandardPromoText,
		arizonaonlinegambling: globalStandardPromoText,
		azonlinebettingsites: globalStandardPromoText
	},
	azBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	coBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	ctBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	iaBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	inBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	laBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	miBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	nyBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	nvBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	ksBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	njBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	paBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	tnBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	vaBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	wvBonus: {
		sportsbook: betfredStandardSportsBonus,
		casino: betfredtStandardCasinoBonus
	},
	bankings: ["paypal"],
	sports: ["soccer", "esports", "e-sports", "baseball"]
};

//SUGARHOUSE

let sugarhouse = {
	brand: "sugarhouse",
	bankings: ["paypal", "visa", "mastercard", "discovercard", "pay-with-cash", "ach", "vip-preferred", "casino-cage", "online-banking", "trustly", "paynearme", "wire-transfer"],
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "esports", "floorball", "formula-1", "gaelic-sports", "handball", "jai-alai", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics"]
};

function setStateSettings(state) {
	switch (state) {
		case "AZ":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.azBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.azBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.azBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.azBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.azBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.azBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.azBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.azBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.azBonus.sportsbook);
			setClassAttribute(hardRockClass, bonusClassExtension, hardRock.azBonus.sportsbook);
			break;
		case "CO":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.coBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.coBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.coBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.coBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.coBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.coBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.coBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.coBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.coBonus.sportsbook);
			break;
		case "CT":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.ctBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.ctBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.ctBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.ctBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.ctBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.ctBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.ctBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.ctBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.ctBonus.sportsbook);
			break;
		case "IA":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.iaBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.iaBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.iaBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.iaBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.iaBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.iaBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.iaBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.iaBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.iaBonus.sportsbook);
			break;
		case "IN":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.inBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.inBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.inBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.inBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.inBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.inBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.inBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.inBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.inBonus.sportsbook);
			break;
		case "LA":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.laBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.laBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.laBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.laBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.laBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.laBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.laBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.laBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.laBonus.sportsbook);
			break;
		case "MI":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.miBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.miBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.miBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.miBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.miBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.miBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.miBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.miBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.miBonus.sportsbook);
			break;
		case "NY":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.nyBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.nyBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.nyBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.nyBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.nyBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.nyBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.nyBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.nyBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.nyBonus.sportsbook);
			break;
		case "NV":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.nvBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.nvBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.nvBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.nvBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.nvBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.nvBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.nvBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.nvBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.nvBonus.sportsbook);
			break;
		case "KS":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.ksBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.ksBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.ksBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.ksBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.ksBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.ksBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.ksBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.ksBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.ksBonus.sportsbook);
			break;
		case "NJ":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.njBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.njBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.njBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.njBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.njBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.njBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.njBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.njBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.njBonus.sportsbook);
			break;
		case "PA":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.paBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.paBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.paBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.paBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.paBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.paBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.paBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.paBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.paBonus.sportsbook);
			break;
		case "TN":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.tnBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.tnBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.tnBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.tnBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.tnBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.tnBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.tnBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.tnBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.tnBonus.sportsbook);
			break;
		case "VA":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.vaBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.vaBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.vaBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.vaBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.vaBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.vaBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.vaBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.vaBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.vaBonus.sportsbook);
			break;
		case "WA":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.waBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.waBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.waBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.waBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.waBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.waBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.waBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.waBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.waBonus.sportsbook);
			break;
		case "WV":
			setClassAttribute(fanduelClass, bonusClassExtension, fanduel.wvBonus.sportsbook);
			setClassAttribute(betmgmClass, bonusClassExtension, betmgm.wvBonus.sportsbook);
			setClassAttribute(caesarsClass, bonusClassExtension, caesars.wvBonus.sportsbook);
			//setClassAttribute(draftkingsClass, bonusClassExtension, draftkings.wvBonus.sportsbook);
			setClassAttribute(betriversClass, bonusClassExtension, betrivers.wvBonus.sportsbook);
			setClassAttribute(wynnbetClass, bonusClassExtension, wynnbet.wvBonus.sportsbook);
			setClassAttribute(fuboClass, bonusClassExtension, fubo.wvBonus.sportsbook);
			setClassAttribute(unibetClass, bonusClassExtension, unibet.wvBonus.sportsbook);
			setClassAttribute(betfredClass, bonusClassExtension, betfred.wvBonus.sportsbook);
			break;
		default:
			console.log("State not found");
	}
}

if (AZSites.includes(window.location.hostname)) {
	setStateSettings("AZ");
} else if (NYSites.includes(window.location.hostname)) {
	setStateSettings("NY");
} else if (MISites.includes(window.location.hostname)) {
	setStateSettings("MI");
} else if (NJSites.includes(window.location.hostname)) {
	setStateSettings("NJ");
} else if (COSites.includes(window.location.hostname)) {
	setStateSettings("CO");
} else if (PASites.includes(window.location.hostname)) {
	setStateSettings("PA");
} else if (TNSites.includes(window.location.hostname)) {
	setStateSettings("TN");
} else if (WISites.includes(window.location.hostname)) {
	setStateSettings("WI");
} else if (VASites.includes(window.location.hostname)) {
	setStateSettings("VA");
} else if (LASites.includes(window.location.hostname)) {
	setStateSettings("LA");
} else if (ILSites.includes(window.location.hostname)) {
	setStateSettings("IL");
} else if (INSites.includes(window.location.hostname)) {
	setStateSettings("IN");
} else if (IASites.includes(window.location.hostname)) {
	setStateSettings("IA");
} else if (KSSites.includes(window.location.hostname)) {
	setStateSettings("KS");
} else if (NVSites.includes(window.location.hostname)) {
	setStateSettings("KV");
} else if (OHSites.includes(window.location.hostname)) {
	setStateSettings("OH");
} else if (MDSites.includes(window.location.hostname)) {
	setStateSettings("MD");
} else if (MASites.includes(window.location.hostname)) {
	setStateSettings("MA");
}

/*--------------------------------------------------------------------------------------------------------------------------------*/


let readMoreLabel = document.getElementById("readMoreLabel");
if (readMoreLabel) {
  readMoreLabel.onclick = function() {
    let readMoreDiv = document.getElementById("readMoreDiv");
    if (readMoreDiv) {
      if (readMoreDiv.style.display === "none" || readMoreDiv.style.display === "") {
        readMoreDiv.style.display = "block";
        readMoreLabel.innerHTML = "Read less";
      } else {
        readMoreDiv.style.display = "none";
        readMoreLabel.innerHTML = "Read more";
      }
    } else {
      console.log("Element with ID 'readMoreDiv' not found");
    }
  };
} else {
  console.log("Element with ID 'readMoreLabel' not found");
}

let readMoreSection = document.getElementsByClassName("readMoreSection")[0];
if (readMoreSection) {
  readMoreSection.style.display = 'none';
  if (readMoreLabel) {
    readMoreLabel.onclick = function() {
      if (readMoreSection.style.display === "none" || readMoreSection.style.display === "") {
        readMoreSection.style.display = "block";
        readMoreLabel.innerHTML = "Read less";
      } else {
        readMoreSection.style.display = "none";
        readMoreLabel.innerHTML = "Read more";
      }
    };
  } else {
    console.log("Element with ID 'readMoreLabel' not found");
  }
} else {
  console.log("Element with class 'readMoreSection' not found");
}


/* NEW PAGE NAVIGATION
var internalNavID = "navlink";
var navButtonText = "Page navigation";
function hideOrShowFunction(){
var navBar = document.getElementById(internalNavID);
if(navBar .style.display === "none"){
 navBar .style.display = "block";
}else{
 navBar .style.display = "none";
	}
}
var h2List = Array.from(document.getElementsByTagName("h2"));
var navBarUL = document.createElement("UL");
navBarUL.setAttribute("style", "display: none");
navBarUL.setAttribute("id", internalNavID);
var referenceNode = document.getElementsByTagName("p")[0];
referenceNode.parentNode.insertBefore(navBarUL , referenceNode.nextSibling);
if(navBarUL !== null){
  
for(i = 0; i < h2List.length; i++){
  h2List[i].setAttribute("id", "header"+i);
  var newAnchor = document.createElement("A");
  var anchorText = document.createTextNode(h2List[i].innerText);
  newAnchor.setAttribute("href", "#header"+i);
  newAnchor.appendChild(anchorText);
  var newItem = document.createElement("LI");
  newItem.appendChild(newAnchor);
  navBarUL.appendChild(newItem);
  }
var displayNavButton = document.createElement("p");
displayNavButton.setAttribute("onclick", "hideOrShowFunction()");
displayNavButton.setAttribute("class", "show-internal-navbar");
displayNavButton.appendChild(document.createTextNode(navButtonText));
navBarUL.parentNode.insertBefore(displayNavButton, navBarUL);
}
*/

/* The code below adds a sitemap link to the footer beneath the copyright text on all pages*/

let copyrightSection = document.getElementsByClassName("ast-footer-copyright");
if (copyrightSection) {
	var sitemapAnchor = document.createElement("P");
	sitemapAnchor.innerHTML = "<a style='color: white' href='/sitemap_index.xml/'>Sitemap</a>";
	console.log(copyrightSection);
	copyrightSection[0].innerHTML += sitemapAnchor.outerHTML;
} else {
	console.log("Automated sitemap anchor error");
}

/* FAQ-CODE SCRIPT IN JQUERY*/

jQuery('.faq-q').click(function() {
	if (jQuery(this).siblings().find('.faq-a').is(':visible')) {
		jQuery(this).removeClass('faq-q-open');
		jQuery(this).siblings().find('.faq-a').removeClass('faq-a-open').slideUp();
	} else {
		jQuery(this).addClass('faq-q-open');
		jQuery(this).siblings().find('.faq-a').addClass('faq-a-open').slideDown();
	}
});

/* Set alt text to images */
var allSections = document.getElementsByTagName("section");
if (allSections) {
	for (i = 0; i < allSections.length; i++) {

		let currentSection = allSections[i];

		let firstH2 = currentSection.querySelectorAll("h2")[0];
		let firstIMG = currentSection.querySelectorAll("img")[0];

		if (firstH2 && firstIMG) {
			firstH2 = firstH2.innerText;
			firstIMG.title = firstIMG.alt + " " + firstH2;
			firstIMG.alt = firstIMG.alt + " " + firstH2;
		}
	}

}


/* Creating navbar */
window.onload = function() {

	let h2List = Array.from(document.getElementsByTagName("h2"));
	let navBarUL = document.getElementById("internalNavbar");
	if (navBarUL !== null) {
		for (i = 0; i < h2List.length; i++) {
			let currentH2 = h2List[i];
			var currentH2Id = currentH2.innerText.replace(/[\W_]+/g, "-").toLowerCase();
			currentH2.setAttribute("id", currentH2Id);

			let newAnchor = document.createElement("A");
			let anchorText = document.createTextNode(currentH2.innerText);
			newAnchor.setAttribute("href", "#" + currentH2Id);
			newAnchor.appendChild(anchorText);

			let newLi = document.createElement("LI");
			newLi.appendChild(newAnchor);
			navBarUL.appendChild(newLi);
		}

	}
	

	/* Formatting tracking links */

let allTableRows = document.getElementsByClassName("tableSectionRow");

if(allTableRows){

for (let i = 0; i < allTableRows.length; i++) {
	let currentRow = allTableRows[i];
	let tableAnchors = currentRow.getElementsByTagName("A");

	for (let index = 0; index < tableAnchors.length; index++) {
		let currentAnchor = tableAnchors[index];
		if (currentAnchor.href.includes("?")) {
			//let currentBase = currentAnchor.href.split("?")[0];
			let dynamicVar = currentAnchor.href.split("=")[0];
			let currentLocation = currentAnchor.href.split("=")[1].replace(/[^a-zA-Z ]/g, "");

			let modifiedLocation = dynamicVar + "=" + currentLocation + window.location.search.replace(/[^a-zA-Z ]/g, "-").toLowerCase();
			currentAnchor.href = modifiedLocation;
			}
		}
	}
}
	
	
};

/* Adding go to top floating button element
let floatingGoToTopBtn = document.createElement("span");
floatingGoToTopBtn.innerHTML = '<button class="floating-btn" href="#">▲</button>';
document.getElementsByTagName("FOOTER")[0].appendChild(floatingGoToTopBtn);
floatingGoToTopBtn.onclick = function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

*/

/* Handling the page post part */

/* 
let quickAddButton = document.querySelector("#quick-add-button");

console.log("URI", superNova.get_dir_uri);
console.log("NONCE", superNova.nonce);

if(quickAddButton){
    
    quickAddButton.addEventListener("click", function() {

    let titleVal = document.querySelector(".admin-quick-add [name='title']").value;
    let slugVal = document.querySelector(".admin-quick-add [name='slug']").value;
    let parentVal = document.querySelector(".admin-quick-add [name='parent']").value;
    
    if(parentVal === ""){
        parentVal = null;
    }
    
    
    let firstParagraphVal =  document.querySelector(".admin-quick-add [name='firstParagraphContent']").value;
    let readMorePassageVal =  document.querySelector(".admin-quick-add [name='readMorePassageContent']").value;
    let firstPassageVal =  document.querySelector(".admin-quick-add [name='firstPassageContent']").value;
    let secondPassageVal =  document.querySelector(".admin-quick-add [name='secondPassageContent']").value;
    let thirdPassageVal = document.querySelector(".admin-quick-add [name='thirdPassageContent']").value;
    let fourthPassageVal = document.querySelector(".admin-quick-add [name='fourthPassageContent']").value;
    let fifthPassageVal = document.querySelector(".admin-quick-add [name='fifthPassageContent']").value;
    let sixthPassageVal = document.querySelector(".admin-quick-add [name='sixthPassageContent']").value;
    let seventhPassageVal = document.querySelector(".admin-quick-add [name='seventhPassageContent']").value;
    let eigthPassageVal = document.querySelector(".admin-quick-add [name='eigthPassageContent']").value;
    let ninthPassageVal = document.querySelector(".admin-quick-add [name='ninthPassageContent']").value;
    let faqVal = document.querySelector(".admin-quick-add [name='faqContent']").value;
    
    if (titleVal === "" || slugVal === "") {
     
    alert("Title, Slug and must be filled out");
    return false;
    }
    
    let passageContents = [readMorePassageVal, firstPassageVal, secondPassageVal, thirdPassageVal, fourthPassageVal, fifthPassageVal, sixthPassageVal, seventhPassageVal, eigthPassageVal, ninthPassageVal];
    
    let allSectionsContent = "";
    
    if(firstParagraphVal !== ""){
        allSectionsContent = firstParagraphVal;
    }
    
    for (let i = 0; i < passageContents.length; i++) {
        let currentPassageText = passageContents[i];
        
        if(currentPassageText !== ""){
            
        let sections = [];
        
    var section = document.createElement("SECTION");
    
    var parser = new DOMParser();

    var doc = textValue(currentPassageText);
    
    let passageContainer = document.createElement("DIV");
    passageContainer.setAttribute("class", "passage");

    let passageHeader = document.createElement("DIV");
    passageHeader.setAttribute("class", "passage-header");
    
    let headerH2 = document.createElement("H2");
    
    let firstH2 = doc.querySelectorAll("H2")[0];
    
    headerH2.appendChild(document.createTextNode(firstH2.innerText));
    
    passageContainer.appendChild(passageHeader);
    
    let passageBody = document.createElement("DIV");
    passageBody.setAttribute("class", "passage-body");
    passageContainer.appendChild(passageBody);
    
    
    section.appendChild(passageContainer);
    
    passageBody.append(...doc.body.children);
    
    let removedH2 = section.querySelectorAll("H2")[0].remove();
    passageHeader.appendChild(headerH2);
    
    if(i > 0){
    
    let headerIMG = document.createElement("IMG");
    headerIMG.setAttribute("class", "passage-img");
    headerIMG.setAttribute("src", "xxxxxxxxxxxxxxxxxxx");
    
    let passageHeaderIMG = document.createElement("DIV");
    passageHeaderIMG.appendChild(headerIMG);
    
    passageHeader.appendChild(passageHeaderIMG);
    }
   
    let allChildren = section.getElementsByTagName('*');
    
    //let addingNewPassage = [];
    
    for (let i = 0; i < allChildren.length; i++) {
        let currentElement = allChildren[i];
        
        if(currentElement.tagName === "P"){
        
        if(currentElement.childNodes.length < 1){
            currentElement.remove();
        } else{
            currentElement.innerHTML = currentElement.innerHTML.trim();
        }
        }
        
    }
    
    if(i === 0){
        
        let tempDiv = document.createElement("DIV");
        
        let navBarContainer = document.createElement("DIV");
        navBarContainer.setAttribute("class", "navBarContainer");
        navBarContainer.innerHTML = '[sc name="internal-navbar"]';
        
        let readMoreParagraph = document.createElement("P");

        let readMoreLabel = document.createElement("LABEL");
        readMoreLabel.setAttribute("id", "readMoreLabel");
        readMoreLabel.innerHTML = "Read more ⌄";
        readMoreParagraph.appendChild(readMoreLabel);
        
        let readMoreDiv = document.createElement("DIV");
        readMoreDiv.setAttribute("id", "ReadMoreDiv");
        readMoreDiv.appendChild(section);
        
        section.insertBefore(navBarContainer, section.firstChild);
        tempDiv.append(readMoreParagraph);
        tempDiv.append(readMoreDiv);
        
        sections.push(tempDiv.innerHTML);
        
    }
    else{
        sections.push(section.outerHTML);
    }
    for (let i = 0; i < sections.length; i++) {
        allSectionsContent += sections[i];
    }    
    
    
        } 
    }
    
        function textValue(text){
        return parser.parseFromString(text, 'text/html');
    }
    
    if(faqVal){
        var passage = document.createElement("DIV");
    passage.setAttribute("class", "passage");
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(faqVal, 'text/html');
    
    passage.append(...doc.body.children);
    
    
    var faqSection = document.createElement("SECTION");
    var faqContainerHeader = document.createElement("H2");
    faqContainerHeader.setAttribute("class", "faq-h");
    faqContainerHeader.appendChild(document.createTextNode(passage.querySelectorAll("H2")[0].innerText)); 

    var faqContainer = document.createElement("DIV");
    faqContainer.setAttribute("class", "schema-faq-code");
    

    var faqParagraph = document.createElement("P");
    
    let h3List = passage.querySelectorAll("H3");
    let paragraphList = passage.querySelectorAll("P");
    
    for (let i = 0; i < h3List.length; i++) {
            var faqQuestionContainer = document.createElement("DIV");
            
            faqQuestionContainer.setAttribute("class", "faq-question");
        
            let currentH3 = h3List[i];
            let faqHeader = document.createElement("H3");
            faqHeader.setAttribute("class", "faq-q");
            faqHeader.appendChild(document.createTextNode(currentH3.innerText));
            faqQuestionContainer.appendChild(faqHeader);
            
            var faqParagraphContainer = document.createElement("DIV");
            
            let currentParagraph = paragraphList[i];
            let faqParagraph = document.createElement("P");
            faqParagraph.setAttribute("class", "faq-a");
            faqParagraph.appendChild(document.createTextNode(currentParagraph.innerText));
            faqParagraphContainer.appendChild(faqParagraph);
            
            faqQuestionContainer.appendChild(faqParagraphContainer);
            faqContainer.appendChild(faqQuestionContainer);
            
    }
    
    faqSection.appendChild(faqContainerHeader);
    
    faqSection.appendChild(faqContainer);
    
    allSectionsContent += faqSection.outerHTML;
    
    }


if(allSectionsContent !== ""){

var createPost = new XMLHttpRequest();
var ourPostData = {
"title": titleVal,
"content": allSectionsContent,
"status": "publish",
//"metaDesc": "mfmdk",
"slug" : slugVal,
"parent": parentVal
}

createPost.open("POST", superNova.siteURL + "/wp-json/wp/v2/pages");
createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
createPost.setRequestHeader("X-WP-Nonce", superNova.nonce);
createPost.send(JSON.stringify(ourPostData));
alert("The page is now posted");
}

    });
}
*/


function updateBonusText(sportsbooksTableClass, sportsbookTableClass, sportsbookClass, bonusText) {
  const sportsbooksTable = document.querySelector(sportsbooksTableClass);
  const sportsbookTable = document.querySelector(sportsbookTableClass);
  let sportsbookTR = null;

  if (sportsbooksTable || sportsbookTable) {
    sportsbookTR = (sportsbooksTable || sportsbookTable).querySelector(sportsbookClass);
  if (sportsbookTR) {
    const bonusTD = sportsbookTR.querySelector(".bonusTD");
    if (bonusTD) {
      bonusTD.lastChild.textContent = bonusText;
    } else {
      console.log("The bonusTD class does not exist");
    }
  } else {
    console.log("One of the classes does not exist");
  }
}
  }

updateBonusText(".sportsbook-table", ".sportsbooks-table", ".caesars", "$1,000 First Bet bonus");
updateBonusText(".sportsbook-table", ".sportsbooks-table", ".bet365", "Bet $1 get $365");

updateBonusText(".sportsbook-table", ".sportsbooks-table", ".draftkings", "Bet $5, get $200");
updateBonusText(".sportsbook-table", ".sportsbooks-table", ".fanduel", "Bet $5, get $150");
updateBonusText("table.sportsbook-table.oh-table", ".sportsbooks-table", ".betway", "Bet $20 get $40");

//Editing betmgm bonus for all states except ny,nv,dc
updateBonusText("table.sportsbook-table:not(.ny-table):not(.nv-table):not(.dc-table)", ".sportsbooks-table", ".betmgm", "Up to $1,500 bonus");

updateBonusText(".casinos-table", ".casino-table", ".pokerstars", "100% deposit match up to $600");
updateBonusText(".casinos-table", ".casino-table", ".caesars", "Up to $1,250 + $10 sign-up bonus");


/*
// Offer count down 
// Set the target date (1 Jan 2023)
//var targetDate = new Date("Mar 26, 2023 00:00:00");
var targetDate = new Date("2023-04-03T23:59:59");
// Set the interval for the timer (1000 milliseconds = 1 second)
var interval = 1000;

// Call the function at the specified interval
setInterval(function() {
  // Get the current date and time
  var currentDate = new Date();

  // Calculate the time remaining until the target date
  var timeRemaining = targetDate - currentDate;

  // Convert the time remaining into seconds, minutes, and hours
  var seconds = Math.floor((timeRemaining / 1000) % 60);
  var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Check if the class "timer" exists
  var timerElements = document.querySelector(".timer");
  if (!timerElements) {
    // Create a new element with the class "timer"
    timerElements = document.createElement("div");
    timerElements.classList.add("timer");

    // Insert the new element before the first table element with the class "top-list-table"
    var topListTableElements = document.querySelector(".top-list-table");
if(topListTableElements){
    topListTableElements.parentNode.insertBefore(timerElements, topListTableElements);

}
  }

  // Update the timer display
  timerElements.innerHTML = "Exclusive deals for the <strong>March Madness</strong> expires in: <br><strong>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s </strong>";

  // Set the styles for the elements with the class "timer"
  timerElements.style.fontFamily = "Arial, sans-serif";
  timerElements.style.fontSize = "20px";
  timerElements.style.color = "white";
  timerElements.style.backgroundColor = "#FA003F";
  timerElements.style.border = "1px solid #000000";
  timerElements.style.textAlign = "center";
  timerElements.style.marginBottom = "9px";

  // Check if the time remaining is less than or equal to zero
  if (timeRemaining <= 0) {
    // Check if the class "timer" exists
    var timerElements = document.querySelector(".timer");
    if (timerElements) {
      // Remove the elements with the class "timer" from the document
      timerElements.parentNode.removeChild(timerElements);
    }
  }
}, interval);
*/

/* Add NAV to all UL in Footer */
const footer = document.querySelector('footer'); // get the <footer> element

if (footer) { // check if the <footer> element exists
  const ulLists = footer.getElementsByTagName('ul'); // get all <ul> elements inside the <footer> element

  for (let i = 0; i < ulLists.length; i++) {
    const ulParent = ulLists[i].parentNode; // get the parent of the current <ul> element
    if (ulParent.tagName.toLowerCase() !== 'nav') {
      // the parent of the current <ul> element is not a <nav> element
      const nav = document.createElement('nav'); // create a new <nav> element
      ulParent.insertBefore(nav, ulLists[i]); // insert the <nav> element before the <ul> element
      nav.appendChild(ulLists[i]); // move the <ul> element inside the <nav> element
    } else {
      // the parent of the current <ul> element is a <nav> element
      // do something else here
    }
  }
} else {
  // the <footer> element does not exist
}


/* Replacing Operator With BetMGM, in tables */

function removeAndReplaceOperator(tableClass, operatorClass){

/* Replacing Operator With BetMGM, in table */

// Step 1: Get all tables with the class "top-list-table"
var tables = document.getElementsByClassName(tableClass);

// Step 2: Check if any tables exist
if (tables.length > 0) {
  // Step 3: Iterate over the tables
  for (var i = 0; i < tables.length; i++) {
    var currentTable = tables[i];

    // Step 4: Get all TR elements within the table
    var rows = currentTable.getElementsByTagName("tr");

    // Step 5: Check if any TR elements exist
    if (rows.length > 0) {
      // Step 6: Iterate over the TR elements
      for (var j = rows.length - 1; j >= 0; j--) {
        var row = rows[j];

        // Step 7: Check if TR element has the class "superbook"
        if (row.classList.contains(operatorClass)) {
          // Step 8: Remove TR element from its parent node
          row.parentNode.removeChild(row);

if(currentTable.classList.contains("review-table")){

currentTable.classList.add('not-existing-operator');

if(currentTable.classList.contains("casino-table")){
currentTable.innerHTML += "<tr class='tableSectionRow betmgm'><td class='imgTD' style='background-color: black'><a href='/go/betmgm/?tdpeh=replacedoperator' rel='nofollow'><img src='https://jokerzinomarketing.com/wp-content/uploads/betmgm-logo.png' alt='BetMGM' /></a></td><td class='bonusTD'><span class='operator-name'>BetMGM Casino</span>$25 NO DEPOSIT BONUS</td><td class='tableConsList'><ul><li class='promo-code-offer'><a href='/go/betmgm/?tdpeh=replacedoperator' rel='nofollow'>JOKERZINO</a></li><li>Up To $1,000 Deposit Match</li><li>Get $10 Bonus On The Goonies</li></ul></td><td class='ctaTD'><a class='ctaAnchor' href='/go/betmgm/?tdpeh=replacedoperator' rel='nofollow'>Bet now</a></td></tr>";
}
else{
currentTable.innerHTML += "<tr class='tableSectionRow betmgm'><td class='imgTD' style='background-color: black'><a href='/go/betmgm/?tdpeh=replacedoperator' rel='nofollow'><img src='https://jokerzinomarketing.com/wp-content/uploads/betmgm-logo.png' alt='BetMGM' /></a></td><td class='bonusTD'><span class='operator-name'>BetMGM Sportsbook</span>Up to $1,500 in bonus bets</td><td class='tableConsList'><ul><li class='promo-code-offer'><a href='/go/betmgm/?tdpeh=replacedoperator' rel='nofollow'>JOKERZINO</a></li><li>Free live streams</li><li>Early Cashout feature</li></ul></td><td class='ctaTD'><a class='ctaAnchor' href='/go/betmgm/?tdpeh=replacedoperator' rel='nofollow'>Bet now</a></td></tr>";
{
}
}


}
        }
      }
    } else {
      console.log("No TR elements found in the table.");
    }
  }
} else {
  console.log("No tables found with the class 'top-list-table'.");
}
}

//removeAndReplaceOperator("casino-table", "caesars");
removeAndReplaceOperator("top-list-table", "superbook");
removeAndReplaceOperator("top-list-table", "wynnbet");
removeAndReplaceOperator("top-list-table", "betfred");
removeAndReplaceOperator("top-list-table", "fanduel");
removeAndReplaceOperator("top-list-table sportsbook-table oh-table", "pointsbet");
removeAndReplaceOperator("top-list-table sportsbook-table la-table", "pointsbet");

/* Replacing Operator's links with BetMGM LINKS */
function replaceLinks(originalValue, newValue) {
  var linkSelector = 'a[href*="' + originalValue + '"]:not([href*="casino"])';
  var links = document.querySelectorAll(linkSelector);

  if (links.length > 0) {
    links.forEach(function(link)
 {
      var oldHref = link.getAttribute('href');
      var newHref = oldHref.replace(originalValue, newValue);
      link.setAttribute('href', newHref);
    });
  } else {
    console.log("Links provided don't exist");
  }
}

var domainName = window.location.hostname;

replaceLinks('/go/superbook/', '/go/betmgm/');
replaceLinks('/go/wynnbet/', '/go/betmgm/');
replaceLinks('/go/betfred/', '/go/betmgm/');
replaceLinks('/go/fanduel/', '/go/betmgm/');

if (!((domainName.includes("casino") && domainName !== "ohonlinecasino.com" && domainName !== "tnonlinecasino.com") ||
    domainName === "pennsylvaniagamblers.com" ||
    domainName === "michigangamblers.com" ||
    domainName === "wvstateonlinegambling.com")) {
replaceLinks('/go/caesars', '#?temp=caesars');
}

// Add a click event listener to all links on the page
let stateCodeCaesars = 2486; // NY General GEO
let caesarsCampaignCode = 12744; // Replace number with your desired campaign code

document.addEventListener('click', function(event) {
  var clickedElement = event.target;
  
  // Check if the clicked element is an anchor (link) and contains the hash "temp=caesars"
  if (clickedElement.tagName === 'A' && clickedElement.hash.includes('temp=caesars')) {
    // Prevent the default link behavior
    event.preventDefault();
    let pathVar = window.location.href.replace(/[^a-zA-Z ]/g, "");
console.log(pathVar);
    // Relocate the user to the specified website

if (!((domainName.includes("casino") && domainName !== "ohonlinecasino.com" && domainName !== "tnonlinecasino.com") ||
    domainName === "pennsylvaniagamblers.com" ||
    domainName === "michigangamblers.com" ||
    domainName === "wvstateonlinegambling.com")) {

if (domainName === "allonlinesportsbooks.com") {
domainName = window.location.pathname.replace("-sportsbooks", "");
console.log(domainName);
}

if (domainName === "gamblingjoker.com") {
domainName = window.location.pathname;
console.log(domainName);
}

    if (domainName.includes("az") || domainName.includes("arizona")) {
        stateCodeCaesars = 2540; // AZ
    } else if (domainName.includes("md") || domainName.includes("maryland")) {
        stateCodeCaesars = 2619; // MD
    } else if (domainName.includes("ny") || domainName.includes("newyork")) {
        stateCodeCaesars = 2486; // NY
    } else if (domainName.includes("ks") || domainName.includes("kansas")) {
        stateCodeCaesars = 2563; // KS
    } else if (domainName.includes("nj") || domainName.includes("newjersey")) {
        stateCodeCaesars = 2550; // NJ
    } else if (domainName.includes("pa") || domainName.includes("pennsylvania")) {
        stateCodeCaesars = 2590; // PA
    } else if (domainName.includes("il") || domainName.includes("illinois")) {
        stateCodeCaesars = 2386; // IL
    } else if (domainName.includes("ma") || domainName.includes("massachusetts")) {
        stateCodeCaesars = 2645; // MA
    } else if (domainName.includes("mi") || domainName.includes("michigan")) {
        stateCodeCaesars = 2522; // MI
    } else if (domainName.includes("oh") || domainName.includes("ohio")) {
        stateCodeCaesars = 2639; // OH
    } else if (domainName.includes("tn") || domainName.includes("tennessee")) {
        stateCodeCaesars = 2510; // TN
    } else if (domainName.includes("ky") || domainName.includes("kentucky")) {
        stateCodeCaesars = 2668; // KY (Fix the desired value)
	caesarsCampaignCode = 11536;
    } else if (domainName.includes("wv") || domainName.includes("westvirginia")) {
        stateCodeCaesars = 2498; // WV
    } else if (domainName.includes("la") || domainName.includes("louisiana")) {
        stateCodeCaesars = 2364; // LA
    } else if (domainName.includes("ia") || domainName.includes("iowa")) {
        stateCodeCaesars = 2534; // IA
    }

console.log(stateCodeCaesars);
   window.location.href = 'https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_' + caesarsCampaignCode + 'b_' + stateCodeCaesars + 'c_&affid=220&siteid=' + caesarsCampaignCode + '&adid=' + stateCodeCaesars + '&c=' + encodeURIComponent(pathVar);
}


 // Replace with the desired website URL
  }
});

/* Update the bonus text of specified operator */
var bodyElement = document.body;
function replaceTextInNode(node, originalValue, updatedValue) {
    if (node.nodeType === Node.TEXT_NODE) {
        var originalText = node.textContent;
        var updatedText = originalText.replace(new RegExp(originalValue, 'g'), updatedValue);
        node.textContent = updatedText;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        var childNodes = node.childNodes;
        for (var childIndex = 0; childIndex < childNodes.length; childIndex++) {
            replaceTextInNode(childNodes[childIndex], originalValue, updatedValue);
        }
    }
}
replaceTextInNode(bodyElement, "JOKERZBETFULL", "JOKERZBETGET");
replaceTextInNode(bodyElement, "JOKERZCASINO", "JOKERZLAUNCH");

/* Update the promo code of specified operators */
function updatePromoCode(sportsbooksTableClass, sportsbookTableClass, sportsbookClass, promoCodeText) {
  // Get all elements with the specified classes
  const sportsbooksTables = document.querySelectorAll(sportsbooksTableClass);
  const sportsbookTables = document.querySelectorAll(sportsbookTableClass);

  // Merge the NodeList objects into a single array
  const allTables = Array.from(sportsbooksTables).concat(Array.from(sportsbookTables));

  allTables.forEach(function(table) {
    const sportsbookTR = table.querySelector(sportsbookClass);
    
    if (sportsbookTR) {
      const PromoCodeLI = sportsbookTR.querySelector(".promo-code-offer a");
      
      if (PromoCodeLI) {
        PromoCodeLI.textContent = promoCodeText;
      } else {
        console.log("The PromoCodeLI class does not exist in this table");
      }
    } else {
      console.log("The specified sportsbook class does not exist in this table");
    }
  });
}

updatePromoCode(".sportsbook-table", ".sportsbooks-table", ".caesars", "JOKERZBET1000");
updatePromoCode(".sportsbook-table", ".sportsbooks-table", ".bet365", "JOKERZINO");
updatePromoCode("table.sportsbook-table.ky-table", ".sportsbooks-table", ".caesars", "JOKERZBETGET");

updatePromoCode(".casinos-table", ".casino-table", ".caesars", "JOKERZLAUNCH");

// Find all elements with the class "top-list-table"
var topListTables = document.querySelectorAll('.top-list-table');

topListTables.forEach(function(table) {
  // Get all rows in the table
  var rows = table.getElementsByTagName('tr');

  // Variable to track if the "betmgm" row was found
  var betMGMFound = false;
  var betMGMRow = null;

  // Find the "betmgm" row
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].classList.contains('betmgm')) {
      betMGMFound = true;
      betMGMRow = rows[i];
      break; // Exit the loop once the row is found
    }
  }

  // If the "betmgm" row was found, move it to the top
  if (betMGMFound) {
    // Remove the "betmgm" row from its current position using the parentNode
    betMGMRow.parentNode.removeChild(betMGMRow);

    // Insert the "betmgm" row at the top of the table
    table.insertBefore(betMGMRow, table.firstChild);
  }
});
