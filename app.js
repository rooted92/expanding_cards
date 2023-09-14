const panels = document.querySelectorAll('.panel') // querySelectorAll puts all elements with panel class in a node list (arrays)

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log('panel clicked');
        removeActiveClasses();
        panel.classList.add('active');
    })
});

const removeActiveClasses = () => {
    // loop through each panel and remove active class if present
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}