var createPost = new XMLHttpRequest();
var ourPostData = {
"title": "Test1",
"content": "<p>hej</p>",
"status": "private",
//"metaDesc": "mfmdk",
"slug" : "test",
"parent": ""
}

createPost.open("POST", superNova.siteURL + "/wp-json/wp/v2/pages");
createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
createPost.setRequestHeader("X-WP-Nonce", superNova.nonce);
createPost.send(JSON.stringify(ourPostData));
alert("The page is now posted");
