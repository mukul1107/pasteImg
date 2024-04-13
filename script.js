const img = document.querySelector("img")
const para = document.querySelector("#followers")
const userName = document.querySelector("#user-name")

function getName(arr) {
    let randName = Math.floor(Math.random() * arr.length);
    return arr[randName];
}

const xmlreq = new XMLHttpRequest();
const myUrl = "https://api.github.com/users/mukul1107"
// const reqUrl = `https://api.github.com/users/${name}`;

function makeRequest() {

    xmlreq.open("GET", myUrl);
    xmlreq.onreadystatechange = () => {
        console.log(`Current State is: ${xmlreq.readyState}`);
        if (xmlreq.readyState == 4) {
            const content = JSON.parse(xmlreq.responseText);
            const nameArr = []
            const followersName = getName(nameArr)
            console.log(followersName)
            userName.innerHTML = "Username: " + content.login
            para.innerHTML = "Followers: " + content.followers;
            img.src = content.avatar_url;
            console.log(content.followers)
        }
    };
}
makeRequest()

xmlreq.send();