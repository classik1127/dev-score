async function loadnavbar() {
    const response = await 
    fetch('top navbar.html');
    const text = await response.text();


    document.getElementById('top-navbar').innerHTML = text;
}

loadnavbar();

