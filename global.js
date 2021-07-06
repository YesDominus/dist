let readMoreLabel = document.getElementById("readMoreLabel");

if(readMoreLabel !== null){
	document.getElementById("readMoreLabel").onclick = function(){			
		let ReadMoreDiv = document.getElementById("ReadMoreDiv");		      
		if(ReadMoreDiv.style.display === "none" || ReadMoreDiv.style.display === ""){
		    ReadMoreDiv.style.display = "block"
		    readMoreLabel.innerHTML = "Read less ^" 
		}else{
		    ReadMoreDiv.style.display = "none";
		    readMoreLabel.innerHTML = "Read more ⌄"
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

var sitemapAnchor = document.createElement("A");
sitemapAnchor.innerHTML = "<p><a style='color: white' href='/sitemap_index.xml/'>Sitemap</a></p>";          

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

/ Set alt text to images /
var allImages = document.getElementsByTagName("IMG");
var title = document.getElementsByTagName("H1")[0].innerText;
  if(allImages.length !== null || allImages !== 'undefined'){
	for(i = 0; i < allImages.length; i++){
      let currentIMG = allImages[i];
      currentIMG.title = title + " " + currentIMG.title; 
      currentIMG.alt = currentIMG.alt + " " + title;
    }
  }

/ Creating navbar /
window.onload = function() {
  var h2List = Array.from(document.getElementsByTagName("h2"));
  var navBarUL = document.getElementById("internalNavbar");
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
};
}
