console.log("HEJ NU FUNKAR JAAAA");

function showDiv(){
        let ReadMoreDiv = document.getElementById("ReadMoreDiv");
        let readMoreLabel = document.getElementById("readMoreLabel");
        
        if(ReadMoreDiv.style.display === "none"){
            ReadMoreDiv.style.display = "block"
            readMoreLabel.innerHTML = "Read less ^" 
        }else{
            ReadMoreDiv.style.display = "none";
            readMoreLabel.innerHTML = "Read more ⌄"
        }
    }

/* The code below adds a sitemap link to the footer beneath the copyright text on all pages*/

let copyrightSection = document.getElementsByClassName("ast-footer-copyright")[0];

let firstParagraph = copyrightSection.getElementsByTagName('p')[0];

var sitemapAnchor = document.createElement("A");
sitemapAnchor.innerHTML = "<p><a style='color: white' href='/sitemap_index.xml/'>Sitemap</a></p>";          

firstParagraph.parentNode.insertBefore(sitemapAnchor, firstParagraph.nextSibling);
