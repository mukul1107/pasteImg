
const img = document.querySelector("img")
const para = document.querySelector(".followers")
const userName = document.querySelector(".user-name")

function getName(arr) {
    let randName = Math.floor(Math.random() * arr.length);
    return arr[randName];
}
const nameArr = ["Anil-choudhary-505", "CoDesign-Spa27", "Mohitsingh1999", "mukul1107"]
const name = getName(nameArr)
console.log(name)
const xmlreq = new XMLHttpRequest();
const reqUrl = `https://api.github.com/users/${name}`;


xmlreq.open("GET", reqUrl);
xmlreq.onreadystatechange = () => {
    console.log(`Current State is: ${xmlreq.readyState}`);
    if (xmlreq.readyState == 4) {
        const content = JSON.parse(xmlreq.responseText);
        document.querySelector(".name-hd").innerHTML = `===== ${content.login}'s Profile =====`
        document.querySelector(".user-name").innerHTML = "Username: " + "<em>*" + String(content.login) + "*</em>" 
        document.querySelector(".followers").innerHTML = String(content.login).slice(0,5) + "'s Followers: " +"<em>"+ content.followers + "</em>";
        document.querySelector("img").src = content.avatar_url;
        console.log(content.followers)
    }
};



xmlreq.send();