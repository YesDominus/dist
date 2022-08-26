<script src="https://cdn.jsdelivr.net/gh/YesDominus/dist@main/BrandFanduel.min.js" crossorigin="anonymous"></script>

console.log(fanduel);

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
