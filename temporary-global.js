function setOperatorAttribute(operatorBrandName, operatorStateValues, tableType) {

	if (tableType === sportsbookTableType) {
		setOperatorValues(operatorBrandName, operatorStateValues, tableType);
	} else if (tableType === casinoTableType) {
		setOperatorValues(operatorBrandName, operatorStateValues, tableType);
	} else {
		console.log("Table type not found");
	}
}

function setOperatorValues(currentOperatorName, currentOperatorStateValues, currentTableType) {
	let tablesClass = currentTableType + "-table";
	let currentSites = currentOperatorStateValues.promoCode;
	let currentTables = document.getElementsByClassName(tablesClass);

	for (let indexTables = 0; indexTables < currentTables.length; indexTables++) {
		console.log(currentTableType);

		let currentTable = currentTables[indexTables];
		if (currentTable) {
			if (currentOperatorStateValues) {
				let operatorClassName = currentOperatorName.toLowerCase();
				let operatorTRs = document.getElementsByClassName(operatorClassName);

				if (operatorTRs) {
					for (let i = 0; i < operatorTRs.length; i++) {
						let currentOperatorTR = operatorTRs[i];
						let currentBonusElements = currentOperatorTR.getElementsByClassName(bonusClass);
						let currentPromoElements = currentOperatorTR.getElementsByClassName(promoClass);
						if (currentBonusElements) {
							for (let index = 0; index < currentBonusElements.length; index++) {
								currentBonusElements[index].innerHTML = currentOperatorStateValues.bonus[currentTableType];
							}
						}

						let promoSites = Object.keys(currentSites);

						for (let promoSitesIndex = 0; promoSitesIndex < promoSites.length; promoSitesIndex++) {
							let currentPromoSite = promoSites[promoSitesIndex];

							if (window.location.hostname.split(".")[0] === currentPromoSite) {

								if (currentPromoElements) {
									for (let x = 0; x < currentPromoElements.length; x++) {
										currentPromoElements[x].innerHTML = currentSites[currentPromoSite][currentTableType];

									}
								}

							}

						}

					}

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

let sportsbookTableType = "sportsbook";
let casinoTableType = "casino";

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
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},

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

// DRAFTKINGS

let draftkingsStandardSportsBonus = "Up to $1,050 free";
let draftkingsStandardCasinoBonus = "Up to $85 free";
let draftkings = {
	brand: "DraftKings",
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},

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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
			sportsbook: draftkingsStandardSportsBonus,
			casino: draftkingsStandardCasinoBonus
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
	standardPromoCode: {
		sportsbook: "JOKERZINO",
		casino: "JOKERZINO"
	},

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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
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
			sportsbook: betmgmStandardSportsBonus,
			casino: betmgmStandardCasinoBonus
		}
	},
	bankings: ["visa", "mastercard", "vip-preferred", "apple-pay", "playplus", "online-banking", "check-by-email"],
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "badminton", "floorball", "formula-1", "gaelic-sports", "handball", "lacrosse", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics", "water-polo", "ski-jumping"]
};

// CAESARS
let caesarsStandardSportsBonus = "Up to $1,250 bonus + 1,000 credits";
let caesarsStandardCasinoBonus = "$2,000 bonus";
let caesars = {
	brand: "Caesars",

	standardPromoCode: {
		sportsbook: "JOKERZBETFULL",
		casino: "JOKERZCASINO"
	},
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
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
			sportsbook: caesarsStandardSportsBonus,
			casino: caesarsStandardCasinoBonus
		}
	},
	bankings: ["paypal", "playplus", "online banking", "visa", "mastercard"],
	sports: ["australian-rules", "motorsports", "baseball", "basketball", "boxing", "cricket", "cycling", "darts", "football", "golf", "hockey", "lacrosse", "rugby", "snooker", "soccer", "softball", "table-tennis", "tennis", "mma"]
};

// WYNNBET

let wynnbetStandardSportsBonus = "Bet $100 get $100 free";
let wynnbetStandardCasinoBonus = "100% deposit match up to $1000";
let wynnbet = {
	brand: "WynnBET",
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: "Bet $100 get $50",
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: "Signup on WynnBET here",
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: "Bet $100 get $50",
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
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
			sportsbook: wynnbetStandardSportsBonus,
			casino: wynnbetStandardCasinoBonus
		}
	},
	bankings: ["paypal", "visa", "playplus", "paynearme", "mastercard", "ach", "vip-preferred"],
	sports: ["football", "basketball", "baseball", "hockey", "tennis", "soccer", "mma", "golf", "esports", "e-sports", "motorsports", "table-tennis", "australian-rules", "boxing", "cricket", "cycling", "darts", "floorball", "boxing", "formula-1", "gaelic-sports", "handball", "rugby", "snooker", "volleyball", "olympics"]
};

//BETRIVERS

let betriversStandardSportsBonus = "Up to $500 free bet";
let betriversStandardCasinoBonus = "$250 bonus";
let betrivers = {
	brand: "BetRivers",
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},
	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: "JOKERZINO",
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: "JOKERZINO",
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: "JOKERZINO",
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: "JOKERZINO",
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
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
			sportsbook: betriversStandardSportsBonus,
			casino: betriversStandardCasinoBonus
		}
	},
	bankings: ["paypal", "visa", "mastercard", "discovercard", "pay-with-cash", "ach", "vip-preferred", "casino-cage", "online-banking", "trustly"],
	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "esports", "e-sports", "floorball", "formula-1", "gaelic-sports", "handball", "jai-alai", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics"]
};

// HARD-ROCK
let hardrockStandardSportsBonus = "3 risk free bets for max $100";
let hardrockStandardCasinoBonus = "$2,000 bonus";
let hardRock = {
	brand: "Hard Rock",

	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
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
			sportsbook: hardrockStandardSportsBonus,
			casino: hardrockStandardCasinoBonus
		}
	},
	bankings: ["paypal", "playplus", "online banking", "visa", "mastercard"],
	sports: ["australian-rules", "motorsports", "baseball", "basketball", "boxing", "cricket", "cycling", "darts", "football", "golf", "hockey", "lacrosse", "rugby", "snooker", "soccer", "softball", "table-tennis", "tennis", "mma"]
};

// FUBO
let fuboStandardSportsBonus = "Risk-free bet up to $1000";
let fuboStandardCasinoBonus = "";
let fubo = {
	brand: "Fubo",
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},
	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: "AZSPORTB",
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: "AZOBETTING",
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: "AZGAMBLING",
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: "AZBETTING",
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
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
			sportsbook: fuboStandardSportsBonus,
			casino: fuboStandardCasinoBonus
		}
	},
	bankings: ["visa", "mastercard", "ach", "vip-preferred", "skrill", "playplus", "paynearme", "paywithmybank", "trustly"],
	sports: ["football", "motorsports", "baseball", "hockey", "soccer", "mma", "tennis", "basketball", "boxing", "golf", "formula-1"]
};

// UNIBET
let unibetStandardSportsBonus = "Bet $50 - get $200";
let unibetStandardCasinoBonus = "";
let unibet = {
	brand: "Unibet",
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},
	az: {
		promoCode: {
			azsportsbettingsites: {
				sportsbook: "AZSPORTSB",
				casino: globalStandardPromoText
			},
			arizonaonlinebetting: {
				sportsbook: "AZSPORTSB",
				casino: globalStandardPromoText
			},
			arizonaonlinegambling: {
				sportsbook: "AZSPORTSB",
				casino: globalStandardPromoText
			},
			azonlinebettingsites: {
				sportsbook: "AZSPORTSB",
				casino: globalStandardPromoText
			}
		},
		bonus: {
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
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
			sportsbook: unibetStandardSportsBonus,
			casino: unibetStandardCasinoBonus
		}
	},
	bankings: ["paypal", "visa", "playplus", "paynearme", "mastercard", "ach", "vip-preferred"],
	sports: ["football", "basketball", "baseball", "hockey", "tennis", "soccer", "mma", "golf", "esports", "e-sports", "motorsports", "table-tennis", "australian-rules", "boxing", "cricket", "cycling", "darts", "floorball", "boxing", "formula-1", "gaelic-sports", "handball", "rugby", "snooker", "volleyball", "olympics"]
};

//BETFRED
let betfredStandardSportsBonus = "Bet $50 get $250 free";
let betfredtStandardCasinoBonus = "";
let betfred = {
	brand: "Betfred",
	standardPromoCode: {
		sportsbook: globalStandardPromoText,
		casino: globalStandardPromoText
	},
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
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
			sportsbook: betfredStandardSportsBonus,
			casino: betfredtStandardCasinoBonus
		}
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
	let stateShortName = state.toLowerCase();
	switch (state) {
		case "AZ":
			//stateShortName = "az";
			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "CO":
			//stateShortName = "co";
			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "CT":
			//stateShortName = "ct";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "IA":
			//stateShortName = "ia";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "IN":
			//stateShortName = "in";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "LA":
			//stateShortName = "la";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "MI":
			//stateShortName = "mi";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(fanduelClass, fanduel[stateShortName], casinoTableType);

			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], casinoTableType);

			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], casinoTableType);

			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], casinoTableType);

			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], casinoTableType);

			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], casinoTableType);
			break;
		case "NY":
			//stateShortName = "ny";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "NV":
			//stateShortName = "nv";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "KS":
			//stateShortName = "ks";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "NJ":
			//stateShortName = "nj";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "PA":
			//stateShortName = "pa";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "TN":
			//stateShortName = "tn";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "VA":
			//stateShortName = "va";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "WA":
			//stateShortName = "wa";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "WI":
			//stateShortName = "wi";

			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
			break;
		case "WV":
			//stateShortName = "wv";
			setOperatorAttribute(fanduelClass, fanduel[stateShortName], sportsbookTableType);
			setOperatorAttribute(betmgmClass, betmgm[stateShortName], sportsbookTableType);
			setOperatorAttribute(caesarsClass, caesars[stateShortName], sportsbookTableType);
			setOperatorAttribute(draftkingsClass, draftkings[stateShortName], sportsbookTableType);
			setOperatorAttribute(betriversClass, betrivers[stateShortName], sportsbookTableType);
			setOperatorAttribute(wynnbetClass, wynnbet[stateShortName], sportsbookTableType);
			setOperatorAttribute(fuboClass, fubo[stateShortName], sportsbookTableType);
			setOperatorAttribute(unibetClass, unibet[stateShortName], sportsbookTableType);
			setOperatorAttribute(betfredClass, betfred[stateShortName], sportsbookTableType);
			setOperatorAttribute(hardRockClass, hardRock[stateShortName], sportsbookTableType);
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
if(readMoreSection){
readMoreSection.style.display = 'none';
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
	//console.log(copyrightSection);
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
