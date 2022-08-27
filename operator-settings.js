let bonusClassExtension = "-bonus";

let fanduelClass = "fanduel";
let betmgmClass = "betmgm";
let caesarsClass = "caesars";
let draftkingsClass = "draftkings";
let betriversClass = "betrivers";
let wynnbetClass = "wynnbet";
let fuboClass = "fubo";
let unibetClass = "unibet";
let betfredClass = "betfred";

let globalStandardPromoText = "Click & activate";

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

let fanduelStandardSportsBonus = "Bet $5 get $150 - win or lose"
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
        sportsbook: "Early sign-up $100 free bet",
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
	let betmgmStandardSportsBonus = "Risk-free bet up to $1000"
  let betmgmStandardCasinoBonus = "$25 free play";
	let betmgm = {
    brand: "BetMGM",
        promoCode: {
	    azsportsbettingsites: globalStandardPromoText,
	    arizonaonlinebetting: globalStandardPromoText,
	    arizonaonlinegambling: globalStandardPromoText,
	    azonlinebettingsites: globalStandardPromoText
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
	let caesarsStandardSportsBonus = "Up to $1,500 risk-free"
  let caesarsStandardCasinoBonus = "$2,000 bonus";
	let caesars = {
        brand: "caesars",
            promoCode: {
	    azsportsbettingsites: globalStandardPromoText,
	    arizonaonlinebetting: globalStandardPromoText,
	    arizonaonlinegambling: globalStandardPromoText,
	    azonlinebettingsites: globalStandardPromoText
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

let wynnbetStandardSportsBonus = "Bet $100 get $100"
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

let betriversStandardSportsBonus = "$250 bonus"
let betriversStandardCasinoBonus = "$250 bonus";
	let betrivers = {
        brand: "BetRivers",
    promoCode: {
	    azsportsbettingsites: "250MATCH",
	    arizonaonlinebetting: "250MATCH",
	    arizonaonlinegambling: "250MATCH",
	    azonlinebettingsites: "250MATCH"
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

// FUBO
let fuboStandardSportsBonus = "Risk-free bet up to $1000"
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
let unibetStandardSportsBonus = "$250 risk-free bet"
let unibetStandardCasinoBonus = "";
	let unibet = {
        brand: "unibet",
    promoCode: {
	    azsportsbettingsites: "AZSPORTB",
	    arizonaonlinebetting: globalStandardPromoText,
	    arizonaonlinegambling: globalStandardPromoText,
	    azonlinebettingsites: globalStandardPromoText
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
let betfredStandardSportsBonus = "$500 welcome offer"
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

function setStateSettings(state){
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
}
}
