window.addEventListener('scroll', function () {
    let items = [document.querySelector('.nav-scroller'), document.querySelector('.blog-header-logo'), document.querySelector('nav'), document.querySelector('.uni-title')]

    if (window.scrollY > 250) {
        items.forEach(item => {
            item.classList.add('active');
        });
    } else if (window.scrollY <= 100) {
        items.forEach(item => {
            item.classList.remove('active');
        });
    }
});
