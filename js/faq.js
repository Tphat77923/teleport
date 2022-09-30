const data = {
    "text": `⚠️ HOW TO USE THE BOT?
		👉 type tp!help for full command or you can ask in the support server!
	
	⚠️ I FIND A BUG,WHAT SHOULD I DO?
 👉 type tp!bug <bug message> or go to the support server.
 
 ⚠️ THE BOT IS OFFLINE,WHAT SHOULD I DO?
 👉 go to the support server and ask tphat77923#8321 to turn on.
 
 ⚠️ THE BOT IS OFFLINE BUT I HAVE MUTE ROLE NOT REMOVED ?
 👉 ask admin to remove muted role when you end muted.
 
 ⚠️ ANY MORE QUESTION?
 👉 go to the support server and ask me or you can use the support chat under the web;)`
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}