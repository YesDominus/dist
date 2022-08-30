function setOperatorAttribute(operatorClassName, operator) {
	let operatorTRs = document.getElementsByClassName(operatorClassName);
	if (operatorTRs) {
		for (let i = 0; i < operatorTRs.length; i++) {
			let currentOperatorTR = operatorTRs[i];
			let currentBonusElements = currentOperatorTR.getElementsByClassName(bonusClass);
			let currentPromoElements = currentOperatorTR.getElementsByClassName(promoClass);

			if (currentBonusElements) {
				for (let index = 0; index < currentBonusElements.length; index++) {
					currentBonusElements[index].innerHTML = operator.az.bonus.sportsbook;

				}
			}

			if (currentPromoElements) {
				for (let x = 0; x < currentPromoElements.length; x++) {
					currentPromoElements[x].innerHTML = operator.az.promoCode.azsportsbettingsites.sportsbook;

				}
			}

		}
	}

}

let bonusClass = "bonusTD";
let promoClass = "promo-code-offer";

let bonusClassExtension = "-bonus";
let promoClassExtension = "-promo-code-offer";
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
let WISites = ["wisportsbettingsites.com", "wisconsinstatebetting.com", "wisconsinonlinegambling.com", "wisconsingamblers.com"];
let VASites = ["vasportsbettingsites.com", "virginiastategambling.com", "vagamblers.com"];
let LASites = ["louisianastategambling.com", "louisianagamblers.com"];
let ILSites = ["illinoisstatebetting.com", "illinoisstategambling.com", "ilgambler.com.com", "illinoisgamblers.com"];
let INSites = ["indianastategambling.com"];
let IASites = ["iowastategambling.com"];
let KSSites = ["kansasonlinegambling.com", "kansasgamblers.com"];
let NVSites = ["nevadastategambling.com"];
let OHSites = ["ohiostatebetting.com", "ohiostatebettingsites.com", "ohioonlinebettingsites.com", "onlinebettingohio.com", "ohiostateonlinegambling.com", "ohgamblers.com", "ohonlinecasino.com"];
let MDSites = ["marylandstatebetting.com", "mdstatesportsbetting.com", "onlinebettingmd.com", "onlinebettingmaryland.com", "mdstatebetting.com", "marylandstategambling.com", "mdgambler.com"];
let MASites = ["masportsbettingsites.com", "maonlinebettingsites.com", "mastatebetting.com", "massachusettsonlinegambling.com", "magambler.com"];

function setClassValue(className, type, newValue) {
	className = className + type;
	//let classNameEnteties = document.getElementsByClassName(className);
	if (className) {
		for (let i = 0; i < className.length; i++) {
			className[i].innerHTML = newValue;
		}
	}
}

// ALL operators

// FANDUEL

let fanduelStandardSportsBonus = "Bet $5 get $150 - win or lose";
let fanduelStandardCasinoBonus = "$1,000 play it again";
let fanduel = {
	brand: "Fanduel",


	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},

	co: {
		promoCode: {
			coloradostategambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			coloradogamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},

	ct: {
		promoCode: {
			onlinegamblingconnecticut: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			connecticutgambler: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	ia: {
		promoCode: {
			iowastategambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	in : {
		promoCode: {
			indianastategambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	la: {
		promoCode: {
			louisianastategambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			louisianagamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	mi: {
		promoCode: {
			michigangamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			mistateonlinecasino: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			mistatesportsbetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			michiganstatecasinos: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	ny: {
		promoCode: {
			nygamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			nyonlinegamblingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			nystatebettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			nystateonlinebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			thenewyorkbets: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			bestnyonlinecasino: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			nystateonlinecasino: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			nystatebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	nv: {
		promoCode: {
			nevadastategambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	ks: {
		promoCode: {
			kansasonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			kansasgamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	nj: {
		promoCode: {
			njstateonlinecasino: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			njstateonlinecasinos: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			onlinecasinoinnj: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			njstatesportsbetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			njstategambler: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	pa: {
		promoCode: {
			pastateonlinecasino: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			paonlinecasinosites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			onlinecasinoinpa: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			pastatesportsbetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			pennsylvaniagamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	tn: {
		promoCode: {
			tnonlinecasino: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			tnstatesportsbetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			onlinegamblingtennessee: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			tennesseegamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	va: {
		promoCode: {
			vasportsbettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			virginiastategambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			vagamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	wi: {
		promoCode: {
			wisportsbettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			wisconsinstatebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			wisconsingamblers: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			wisconsinonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	wv: {
		promoCode: {
			wvstateonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fanduelStandardSportsBonus,
			casino: fanduelStandardCasinoBonus
		}
	},
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "formula-1", "motorsports", "rugby", "snooker", "table-tennis", "horse-racing"],
	bankings: ["paypal"]
};

// BETMGM
let betmgmStandardSportsBonus = "Risk-free bet up to $1000";
let betmgmStandardCasinoBonus = "$25 free play";
let betmgm = {
	brand: "BetMGM",


	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
		}
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


	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
		}
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

let wynnbetStandardSportsBonus = "Bet $100 get $100";
let wynnbetStandardCasinoBonus = "100% deposit match up to $1000";
let wynnbet = {
	brand: "WynnBET",

	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: globalStandardPromoText,
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
		}
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

let betriversStandardSportsBonus = "$250 bonus match";
let betriversStandardCasinoBonus = "$250 bonus";
let betrivers = {
	brand: "BetRivers",

	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
		}
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


	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: "250MATCH",
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
		}
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
			//setOperatorAttribute(fanduelClass, bonusClass, fanduel.azBonus.sportsbook);
			//setOperatorAttribute(betmgmClass, bonusClass, betmgm.azBonus.sportsbook);
			//setOperatorAttribute(caesarsClass, bonusClass, caesars.azBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.azBonus.sportsbook);
			setOperatorAttribute(betriversClass, betrivers);
			//setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.azBonus.sportsbook);
			//setOperatorAttribute(fuboClass, bonusClass, fubo.azBonus.sportsbook);
			//setOperatorAttribute(unibetClass, bonusClass, unibet.azBonus.sportsbook);
			//setOperatorAttribute(betfredClass, bonusClass, betfred.azBonus.sportsbook);
			//setOperatorAttribute(hardRockClass, bonusClass, hardRock.azBonus.sportsbook);
			break;
		case "CO":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.coBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.coBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.coBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.coBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.coBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.coBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.coBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.coBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.coBonus.sportsbook);
			break;
		case "CT":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.ctBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.ctBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.ctBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.ctBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.ctBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.ctBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.ctBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.ctBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.ctBonus.sportsbook);
			break;
		case "IA":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.iaBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.iaBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.iaBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.iaBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.iaBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.iaBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.iaBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.iaBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.iaBonus.sportsbook);
			break;
		case "IN":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.inBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.inBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.inBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.inBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.inBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.inBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.inBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.inBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.inBonus.sportsbook);
			break;
		case "LA":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.laBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.laBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.laBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.laBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.laBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.laBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.laBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.laBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.laBonus.sportsbook);
			break;
		case "MI":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.miBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.miBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.miBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.miBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.miBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.miBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.miBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.miBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.miBonus.sportsbook);
			break;
		case "NY":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.nyBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.nyBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.nyBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.nyBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.nyBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.nyBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.nyBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.nyBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.nyBonus.sportsbook);
			break;
		case "NV":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.nvBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.nvBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.nvBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.nvBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.nvBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.nvBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.nvBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.nvBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.nvBonus.sportsbook);
			break;
		case "KS":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.ksBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.ksBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.ksBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.ksBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.ksBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.ksBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.ksBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.ksBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.ksBonus.sportsbook);
			break;
		case "NJ":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.njBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.njBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.njBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.njBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.njBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.njBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.njBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.njBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.njBonus.sportsbook);
			break;
		case "PA":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.paBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.paBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.paBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.paBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.paBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.paBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.paBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.paBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.paBonus.sportsbook);
			break;
		case "TN":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.tnBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.tnBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.tnBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.tnBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.tnBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.tnBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.tnBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.tnBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.tnBonus.sportsbook);
			break;
		case "VA":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.vaBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.vaBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.vaBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.vaBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.vaBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.vaBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.vaBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.vaBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.vaBonus.sportsbook);
			break;
		case "WA":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.waBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.waBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.waBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.waBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.waBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.waBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.waBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.waBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.waBonus.sportsbook);
			break;
		case "WI":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.wiBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.wiBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.wiBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.wiBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.wiBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.wiBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.wiBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.wiBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.wiBonus.sportsbook);
			break;
		case "WV":
			setOperatorAttribute(fanduelClass, bonusClass, fanduel.wvBonus.sportsbook);
			setOperatorAttribute(betmgmClass, bonusClass, betmgm.wvBonus.sportsbook);
			setOperatorAttribute(caesarsClass, bonusClass, caesars.wvBonus.sportsbook);
			//setOperatorAttribute(draftkingsClass, bonusClass, draftkings.wvBonus.sportsbook);
			setOperatorAttribute(betriversClass, bonusClass, betrivers.wvBonus.sportsbook);
			setOperatorAttribute(wynnbetClass, bonusClass, wynnbet.wvBonus.sportsbook);
			setOperatorAttribute(fuboClass, bonusClass, fubo.wvBonus.sportsbook);
			setOperatorAttribute(unibetClass, bonusClass, unibet.wvBonus.sportsbook);
			setOperatorAttribute(betfredClass, bonusClass, betfred.wvBonus.sportsbook);
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
	document.getElementById("readMoreLabel").onclick = function() {
		let ReadMoreDiv = document.getElementById("ReadMoreDiv");
		if (ReadMoreDiv.style.display === "none" || ReadMoreDiv.style.display === "") {
			ReadMoreDiv.style.display = "block";
			readMoreLabel.innerHTML = "Read less";
		} else {
			ReadMoreDiv.style.display = "none";
			readMoreLabel.innerHTML = "Read more";
		}
	};
}

let readMoreSection = document.getElementsByClassName("readMoreSection")[0];
if (readMoreSection) {
	let readMoreLabel = document.getElementById("readMoreLabel");
	document.getElementById("readMoreLabel").onclick = function() {
		if (readMoreSection.style.display === "none" || readMoreSection.style.display === "") {
			readMoreSection.style.display = "block";
			readMoreLabel.innerHTML = "Read less";
		} else {
			readMoreSection.style.display = "none";
			readMoreLabel.innerHTML = "Read more";
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
  
for(let i = 0; i < h2List.length; i++){
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
	for (let i = 0; i < allSections.length; i++) {

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
		for (let i = 0; i < h2List.length; i++) {
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
};

/* Adding go to top floating button element */
let floatingGoToTopBtn = document.createElement("span");
floatingGoToTopBtn.innerHTML = '<button class="floating-btn" href="#">▲</button>';
document.getElementsByTagName("FOOTER")[0].appendChild(floatingGoToTopBtn);
floatingGoToTopBtn.onclick = function() {
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
