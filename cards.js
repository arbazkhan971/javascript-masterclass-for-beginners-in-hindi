const allinnercontainer = document.querySelectorAll('.inner-container');

function removeActiveClasses() {
    allinnercontainer.forEach((innercontainer) => {
        innercontainer.classList.remove('active');
    });
}

allinnercontainer.forEach((innercontainer) => {

    innercontainer.addEventListener('click', () => {
        removeActiveClasses();
        innercontainer.classList.add('active');
    });

});