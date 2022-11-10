const data = {
    "text": `⚠️ HOW TO USE THE BOT?
		👉 type tp!help for full command in your server
	
	⚠️ THE PREFIX COMMAND ITS TOO DIFFICULT TO USE YOUR BOT HAVE SLASH COMMAND AND DASHBOARD?
	👉 we are have a beta bot have slash command and dashboard but it isn't complete so you can wait or join the support server to have link use my beta bot!
 
	⚠️ I FIND A BUG,WHAT SHOULD I DO?
 👉 type tp!bug <bug message>.
 
 ⚠️ THE BOT IS OFFLINE,WHAT SHOULD I DO?
 👉 go to the support server and ask tphat77923#8321 to turn on.
 
 ⚠️ THE BOT IS OFFLINE BUT I HAVE MUTE ROLE NOT REMOVED ?
 👉 ask admin in the server to remove muted role when you end muted.
 
 ⚠️ ANY MORE QUESTION?
 👉 go to the contact us to know how;)`
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}