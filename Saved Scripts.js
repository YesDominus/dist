/* Adding the floating review CTA button */
let table = document.getElementsByClassName("top-list-table")[0];
if (table) {
	let lastRow = table.rows[table.rows.length - 1];
	let currentPos;
	let anchorIsSet = true;
	let floatingAnchor;
	window.onscroll = function() {
		currentPos = document.documentElement.scrollTop;

		if (lastRow.offsetTop < currentPos && anchorIsSet) {
			anchorIsSet = false;

			floatingAnchor = document.createElement("a");
			floatingAnchor.setAttribute("id", "floating-review-cta-button");
			floatingAnchor.setAttribute("href", "");
			floatingAnchor.innerHTML = '<p id="textId"></p><ul id="promoList"></ul>';
			document.getElementsByTagName("FOOTER")[0].appendChild(floatingAnchor);

			let currentIMG = table.getElementsByClassName("imgTD")[0].getElementsByTagName("img")[0];
			document.getElementById("floating-review-cta-button").style.backgroundColor = table.getElementsByClassName("imgTD")[0].style.backgroundColor;

			let bonusText = "<span class='current-bonus-text'>" + table.getElementsByClassName("bonusTD")[0].lastChild.textContent.trim() + '</span>';
			document.getElementById("textId").innerHTML = "🥇<img class='current-brand-img' src=" + currentIMG.src + "> " + bonusText;

			document.getElementById("promoList").innerHTML = table.getElementsByClassName("promo-code-offer")[0].outerHTML;
			let currentHref = table.getElementsByClassName("ctaAnchor")[0].href;
			let wordsInHref = currentHref.split("_");
			const lastWord = wordsInHref[wordsInHref.length - 1];

			if (lastWord === "button") {
				document.getElementById("floating-review-cta-button").href = currentHref + "_floating_cta";
			} else {
				document.getElementById("floating-review-cta-button").href = currentHref;
			}

		} else if (lastRow.offsetTop > currentPos && !anchorIsSet) {
			anchorIsSet = true;
			floatingAnchor.remove();
		}

	};

} else {
	console.log("table not found");
}
