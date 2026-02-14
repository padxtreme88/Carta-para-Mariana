
const contents = document.querySelectorAll('.content');


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});


contents.forEach(content => observer.observe(content));
