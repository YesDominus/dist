<div id="postContainer"></div>
var html = '<div class="admin-quick-add"><h3>Quick Add Page</h3><input name="title" type="text" placeholder="Title/H1"><input name="slug" type="text" placeholder="SLUG. ex: /fast-payouts/"><input name="parent" type="number" placeholder="Parent ID. ex: 2123 --- LEAVE EMPTY IF PATRIARKATET"><!--<input disabled="disabled" name="metaTitle" type="text" placeholder="Meta Title"><input disabled="disabled" name="metaDescription" type="text" placeholder="Meta description if exists">--><textarea name="firstParagraphContent" placeholder="First paragraph"></textarea><textarea name="readMorePassageContent" placeholder="Read more passage"></textarea><textarea name="firstPassageContent" placeholder="First passage"></textarea><textarea name="secondPassageContent" placeholder="Second passage"></textarea><textarea name="thirdPassageContent" placeholder="Third passage"></textarea><textarea name="fourthPassageContent" placeholder="Fourth passage"></textarea><textarea name="fifthPassageContent" placeholder="Fifth passage"></textarea><textarea name="sixthPassageContent" placeholder="Sixth passage"></textarea><textarea name="seventhPassageContent" placeholder="Seventh passage"></textarea><textarea name="eigthPassageContent" placeholder="Eigth passage"></textarea><textarea name="ninthPassageContent" placeholder="Ninth passage"></textarea><textarea name="faqContent" placeholder="Faq Content"></textarea><button id="quick-add-button">Create Post</button></div>';

document.getElementById("postContainer").innerHTML = html;
