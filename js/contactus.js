const data = {
    "text": `yeah!!this page will show you how to contact us
  1.webchat : click on the chat under the web 
	2.email : support@teleport.tk or click button send email
  3.support server : join us discord server by click join support server or type this link https://dsc.gg/ender.city
		`
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}