const params = new URLSearchParams(window.location.search)

const userid = params.get("userid");



const userimage = document.getElementById("userimage");
const username = document.getElementById("username");
const profilestage = document.getElementById("profilestage");
const userbio = document.getElementById("userbio");
const datejoined = document.getElementById("datejoined");
const userlocation = document.getElementById("userlocation");
const url = document.getElementById("url");
const userfollowers = document.getElementById("userfollowers");
const user_public_repos = document.getElementById("user_public_repos");
const user_following = document.getElementById("user_following");
// const username = document.getElementById("username");
// const username = document.getElementById("username");
// const username = document.getElementById("username");


// for fetching data from github api and displaying it on the profile page

fetch(`https://api.github.com/users/${userid}`)
    .then((response) => response.json())
    .then((data) => {
        let datainfo = data;
        console.log(datainfo);
        userimage.src = datainfo.avatar_url;
        username.textContent = datainfo.name;
        userbio.textContent = datainfo.bio;
        datejoined.textContent = `Joined ${datainfo.created_at.slice(0, 10)}`;
        userlocation.textContent = datainfo.location;
        url.href = datainfo.html_url;
        url.textContent = datainfo.html_url.slice(19);
        userfollowers.textContent = datainfo.followers.toLocaleString();
        user_public_repos.textContent = datainfo.public_repos;
        user_following.textContent = datainfo.following;




        if (userlocation.textContent === "") {
            userlocation.textContent = "Not Available";
        }

    });



