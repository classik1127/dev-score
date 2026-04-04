async function loadnavbar() {
    const response = await 
    fetch('navbar.html');
    const text = await response.text();


    document.getElementById('aside-navbar').innerHTML = text;
}

loadnavbar();


