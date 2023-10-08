if(document.querySelector('.menu-open-btn')) {

    document.querySelector('.menu-open-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('open');

    })
}
   


if(document.querySelector('.menu-close-btn')) {
    document.querySelector('.menu-close-btn').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.remove('open');
    });
}



