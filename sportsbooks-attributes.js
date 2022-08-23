let attribute = null;
let operators = {
	fanduel:{
        	brand: "Fanduel Sportsbook",
        	bankings: ["paypal"],
		azBonus: {
			sportsbook: "Bet $5 get $150 - win or lose",
			casino: "$1,000 no sweat first bet"
		},
		coBonus: "Bet $5 get $150 - win or lose",
		ctBonus: "Bet $5 get $150 - win or lose",
		iaBonus: "Bet $5 get $150 - win or lose",
		inBonus: "Bet $5 get $150 - win or lose",
		laBonus: "Bet $5 get $150 - win or lose",
		miBonus: "Bet $5 get $150 - win or lose",
		nyBonus: "Up to $1,000 no sweat first bet",
		nvBonus: "Bet $5 get $150 - win or lose",
		ksBonus: {
			sportsbook: "Early sign-up bonus: $100 free bet",
			casino: "$1,000 no sweat first bet"
		},
		njBonus: "Bet $5 get $150 - win or lose",
		paBonus: "Bet $5 get $150 - win or lose",
		tnBonus: "Bet $5 get $150 - win or lose",
		vaBonus: "Bet $5 get $150 - win or lose",
		wvBonus: "Bet $5 get $150 - win or lose",
       		promoCode: "Click & activate",
        	sports: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "formula-1", "motorsports", "rugby", "snooker", "table-tennis", "horse-racing"]
    	},
	
	betrivers:{
        brand: "betrivers",
        bankings: ["paypal", "visa", "mastercard", "discovercard", "pay-with-cash", "ach", "vip-preferred", "casino-cage", "online-banking", "trustly"],
        attributes: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "esports", "e-sports", "floorball", "formula-1", "gaelic-sports", "handball", "jai-alai", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics"]
    	},
	
	sugarhouse:{
        brand: "sugarhouse",
        bankings: ["paypal", "visa", "mastercard", "discovercard", "pay-with-cash", "ach", "vip-preferred", "casino-cage", "online-banking", "trustly", "paynearme", "wire-transfer"],
        attributes: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "esports", "floorball", "formula-1", "gaelic-sports", "handball", "jai-alai", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics"]
    	},
	
	caesars:{
        brand: "caesars",
        bankings: ["paypal", "playplus", "online banking", "visa", "mastercard"],
        attributes: ["australian-rules", "motorsports", "baseball", "basketball", "boxing", "cricket", "cycling", "darts", "football", "golf", "hockey", "lacrosse", "rugby", "snooker", "soccer", "softball", "table-tennis", "tennis", "mma"]
    	},
	
	fubo:{
        brand: "fubo",
        bankings: ["visa", "mastercard", "ach", "vip-preferred", "skrill", "playplus", "paynearme", "paywithmybank", "trustly"],
        attributes: ["football", "motorsports", "baseball", "hockey", "soccer", "mma", "tennis", "basketball", "boxing", "golf", "formula-1"]
    	},
	
	betmgm:{
        brand: "betmgm",
        bankings: ["visa", "mastercard", "vip-preferred", "apple-pay", "playplus", "online-banking", "check-by-email"],
        attributes: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "badminton", "floorball", "formula-1", "gaelic-sports", "handball", "lacrosse", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics", "water-polo", "ski-jumping"]
    	},
	
	unibet:{
        brand: "unibet",
        bankings: ["paypal", "visa", "playplus", "paynearme", "mastercard", "ach", "vip-preferred"],
        attributes: ["football", "basketball", "baseball", "hockey", "tennis", "soccer", "mma", "golf", "esports", "e-sports", "motorsports", "table-tennis", "australian-rules", "boxing", "cricket", "cycling", "darts", "floorball", "boxing", "formula-1", "gaelic-sports", "handball", "rugby", "snooker", "volleyball", "olympics"]
    	},
	
	betfred:{
        brand: "betfred",
        bankings: ["paypal"],
        attributes: ["soccer", "esports", "e-sports", "baseball"]
    	}
};

function setOperator(operator, bonus) {
	if (operator) {
		for (i = 0; i < operator.length; i++) {
			let currentOperator = operator[i]
			currentOperator.innerHTML = bonus;
		}
	}
}
