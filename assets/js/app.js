let isScrolled = false;

window.addEventListener('scroll', function () {
    let items = [document.querySelector('.nav-scroller'), document.querySelector('.blog-header-logo'), document.querySelector('nav'), document.querySelector('.uni-title')]
    console.log(window.scrollY);

    if (window.scrollY > 50 && !isScrolled) {
        items.forEach(item => {
            item.classList.add('active');
        });
        isScrolled = true;
    } else if (window.scrollY <= 10 && isScrolled) {
        items.forEach(item => {
            item.classList.remove('active');
        });
        isScrolled = false;
    }
});
