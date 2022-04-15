let attribute = null;

addEventListener('load', (event) => {

		let operators = [{
			brand: "fanduel",
                        bankings: ["paypal"],
			attributes: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma",  "australian-rules", "boxing", "cricket", "cycling", "darts", "formula-1", "motorsports", "rugby", "snooker", "table-tennis", "horse-racing"]
		}, {
			brand: "betrivers",
                        bankings: ["paypal", "visa", "mastercard", "discovercard", "pay-with-cash", "ach", "vip-preferred", "casino-cage", "online-banking", "trustly"],
			attributes: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "esports", "floorball", "formula-1", "gaelic-sports", "handball", "jai-alai", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics"]
		}, {
			brand: "caesars",
                        bankings: ["paypal", "playplus", "online banking", "visa", "mastercard"],
			attributes: ["australian-rules", "motorsports", "baseball", "basketball", "boxing", "cricket", "cycling", "darts", "football", "golf", "hockey", "lacrosse", "rugby", "snooker", "soccer", "softball", "table-tennis", "tennis", "mma"]
		}, {
			brand: "fubo",
                        bankings: ["visa", "mastercard", "ach", "vip-preferred", "skrill", "playplus", "paynearme", "paywithmybank", "trustly"],
			attributes: ["football", "motorsports", "baseball", "hockey", "soccer", "mma", "tennis", "basketball", "boxing", "golf", "formula-1"]
		}, {
			brand: "betmgm",
                        bankings: ["visa", "mastercard", "vip-preferred", "apple-pay", "playplus", "online-banking", "check-by-email"],
			attributes: ["football", "basketball", "hockey", "baseball", "soccer", "tennis", "golf", "mma", "australian-rules", "boxing", "cricket", "cycling", "darts", "badminton", "floorball", "formula-1", "gaelic-sports", "handball", "lacrosse", "motorsports", "rugby", "snooker", "table-tennis", "volleyball", "olympics", "water-polo", "ski-jumping"]
		}, {
			brand: "unibet",
                        bankings: ["paypal", "visa", "playplus", "paynearme", "mastercard", "ach", "vip-preferred"],
			attributes: ["football", "basketball", "baseball", "hockey", "tennis", "soccer", "mma", "golf", "esports", "e-sports", "motorsports", "table-tennis", "australian-rules", "boxing", "cricket", "cycling", "darts", "floorball", "boxing", "formula-1", "gaelic-sports", "handball", "rugby", "snooker", "volleyball", "olympics"]
		},{
			brand: "betfred",
                        bankings: ["paypal"],
			attributes: ["soccer", "esports", "e-sports", "baseball"]
		}

	];

	let allTables = document.getElementsByClassName("top-list-table");
	let isListEmpty = 0;
	if (allTables) {
		for (let i = 0; i < allTables.length; i++) {
let removedRows = "";

			currentTable = allTables[i];
			let currentBodyRows = currentTable.getElementsByTagName("tbody")[0].getElementsByTagName("TR");
			for (let k = 0; k < operators.length; k++) {

				let currentOperator = operators[k];
				for (let j = 0; j < currentBodyRows.length; j++) {
					let currentRow = currentBodyRows[j];
					if (currentRow.classList.value.includes(currentOperator.brand)) {

						currentRow.classList.value = currentRow.classList.value + " " + currentOperator.attributes.join(" ");
currentRow.classList.value = currentRow.classList.value + " " + currentOperator.bankings.join(" ");

						if (attribute) {
							if (!currentRow.classList.value.includes(attribute)) {

								currentRow.remove();
removedRows += currentRow.outerHTML;
							} else {
								++isListEmpty;
break;
							}
						}
					}

				}
			}

if (isListEmpty === 0 && attribute) {
currentTable.getElementsByTagName("tbody")[0].innerHTML = removedRows;
const listDisclaimerText = document.createElement("p");
listDisclaimerText.setAttribute("class", "listDisclaimerText");
listDisclaimerText.innerHTML = "It seems that there's no available options to this topic. Check out some of the other options below:";
currentTable.parentNode.insertBefore(listDisclaimerText, currentTable);
			}

		}
			
	}

});
