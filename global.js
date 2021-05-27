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
