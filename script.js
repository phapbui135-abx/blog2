function showmenu() {
    var x = document.getElementById('menu-991');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function backtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}