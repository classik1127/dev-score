const params = new URLSearchParams(window.location.search)

const userid = params.get("userid");


const notfound = document.getElementById("notfound");
const found = document.getElementById("found");

fetch(`https://api.github.com/users/${userid}`)
    .then((response)  =>  {
        if (response.ok) {
            window.location.href = `profile.html?userid=${userid}`
        }
        else{
            window.location.href =" notfound.html?"
        }
    } )
