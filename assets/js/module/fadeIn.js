
// elements fade(slide) in effect ------ start
const fadeElements = document.querySelectorAll('.fd-in');

const fadeInOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15, // at least 15% of element shoud be visible
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(element);
        }
    });
}, fadeInOptions);

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    fadeInObserver.observe(element);
});
// elements fade(slide) in effect ------ end