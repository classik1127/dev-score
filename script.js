// fetch("https://api.github.com/users/classik1127/repos")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     });


const input = document.getElementById("input");
const feedback = document.getElementById("feedback");

input.addEventListener("input",
    function () {
        typing();
    }
)

function typing() {
    if(!input.value){
        feedback.style.display = "block";  
    } 
    else{
        feedback.style.display = "none";  
    }
}


function search() {
    if(!input.value){
        feedback.style.display = "block";  
        return;  
    } 
    let userid = input.value;
    window.location.href = `result.html?userid=${userid}`
    console.log(input.value)
}
input.addEventListener("keydown", 
    function(event){
        if (event.key === "Enter") {
            search()
        }
    }
)
