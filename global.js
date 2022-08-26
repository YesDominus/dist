let globalStandardPromoText = "Click & activate";

function setClassAttribute(className, attribute) {
    if (className) {
        for (i = 0; i < className.length; i++) {
            className[i].innerHTML = attribute;
        }
    }
}

// ALL SPORTSBOOKS

// FANDUEL

let fanduelStandardSportsBonus = "Bet $5 get $150 - win or lose"
let fanduelStandardCasinoBonus = "$1,000 play it again";
let fanduel = {
    brand: "Fanduel",
        promoCode: {
	    azsportsbettingsites: globalStandardPromoText,
	    arizonaonlinebetting: globalStandardPromoText,
	    arizonaonlinegambling: globalStandardPromoText,
	    azonlinebettingsites: globalStandardPromoText,
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
	    azonlinebettingsites: globalStandardPromoText,
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
	    azonlinebettingsites: globalStandardPromoText,
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
	    azonlinebettingsites: globalStandardPromoText,
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
	    azonlinebettingsites: "250MATCH",
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
	    azsportsbettingsites: "AZSPORTB"
	    arizonaonlinebetting: "AZOBETTING",
	    arizonaonlinegambling: "AZGAMBLING",
	    azonlinebettingsites: "AZBETTING",
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
	    azonlinebettingsites: globalStandardPromoText,
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
	    azonlinebettingsites: globalStandardPromoText,
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


/*--------------------------------------------------------------------------------------------------------------------------------*/


let readMoreLabel = document.getElementById("readMoreLabel");

if(readMoreLabel){
	document.getElementById("readMoreLabel").onclick = function(){			
		let ReadMoreDiv = document.getElementById("ReadMoreDiv");		      
		if(ReadMoreDiv.style.display === "none" || ReadMoreDiv.style.display === ""){
		    ReadMoreDiv.style.display = "block"
		    readMoreLabel.innerHTML = "Read less" 
		}else{
		    ReadMoreDiv.style.display = "none";
		    readMoreLabel.innerHTML = "Read more"
		}
};
} 

let readMoreSection = document.getElementsByClassName("readMoreSection")[0];
if(readMoreSection){
let readMoreLabel = document.getElementById("readMoreLabel");
	document.getElementById("readMoreLabel").onclick = function(){
		if(readMoreSection.style.display === "none" || readMoreSection.style.display === ""){
		    readMoreSection.style.display = "block"
		    readMoreLabel.innerHTML = "Read less" 
		}else{
		    readMoreSection.style.display = "none";
		    readMoreLabel.innerHTML = "Read more"
		}
};
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

let copyrightSection = document.getElementsByClassName("ast-footer-copyright")[0];

let firstParagraph = copyrightSection.getElementsByTagName('p')[0];

var sitemapAnchor = document.createElement("P");
sitemapAnchor.innerHTML = "<a style='color: white' href='/sitemap_index.xml/'>Sitemap</a>";          

firstParagraph.parentNode.insertBefore(sitemapAnchor, firstParagraph.nextSibling);

/* FAQ-CODE SCRIPT IN JQUERY*/

jQuery('.faq-q').click(function(){
	if (jQuery(this).siblings().find('.faq-a').is(':visible')) {
		jQuery(this).removeClass('faq-q-open');
		jQuery(this).siblings().find('.faq-a').removeClass('faq-a-open').slideUp();
} 
else {
	jQuery(this).addClass('faq-q-open');
	jQuery(this).siblings().find('.faq-a').addClass('faq-a-open').slideDown();
	}
})

/* Set alt text to images */
var allSections = document.getElementsByTagName("section");
if(allSections){
	for(i = 0; i < allSections.length; i++){

let currentSection = allSections[i];

let firstH2 = currentSection.querySelectorAll("h2")[0];
let firstIMG = currentSection.querySelectorAll("img")[0];

if(firstH2 && firstIMG){
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
if(navBarUL !== null){
  for(i = 0; i < h2List.length; i++){
  let currentH2 = h2List[i];
  var currentH2Id = currentH2.innerText.replace(/[\W_]+/g,"-").toLowerCase();
  currentH2.setAttribute("id", currentH2Id);

  let newAnchor = document.createElement("A");
  let anchorText = document.createTextNode(currentH2.innerText);
  newAnchor.setAttribute("href", "#"+currentH2Id);
  newAnchor.appendChild(anchorText);

  let newLi = document.createElement("LI");
  newLi.appendChild(newAnchor);
  navBarUL.appendChild(newLi);
 }

};
}

/* Adding go to top floating button element */
let floatingGoToTopBtn = document.createElement("span");
floatingGoToTopBtn.innerHTML= '<button class="floating-btn" href="#">▲</button>';
document.getElementsByTagName("FOOTER")[0].appendChild(floatingGoToTopBtn);
floatingGoToTopBtn.onclick = function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};

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
