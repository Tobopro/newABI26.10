document.getElementById('darkModeToggle').addEventListener('click', function () {
    // Basculez l'attribut "data-bs-theme" sur l'élément <html>
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    // Sélectionnez les icônes du soleil et de la lune
    const sunIcon = document.querySelector('#darkModeToggle i.fa-sun');
    const moonIcon = document.querySelector('#darkModeToggle i.fa-moon');
    // const gitIcon = document.querySelector('.git');

    const lightImage = document.getElementById('lightImage');
    const darkImage = document.getElementById('darkImage');

    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        // Changez les éléments avec la classe "bg-dark-subtle" en "bg-light"
        const darkSubtleElements = document.querySelectorAll('.bg-dark-subtle');
        darkSubtleElements.forEach(element => {
            element.classList.remove('bg-dark-subtle');
            element.classList.add('bg-light');
        })
      
        const whiteTextElements = document.querySelectorAll('.text-white');
        whiteTextElements.forEach(element => {
            
            element.classList.remove('text-white');
            element.classList.add('text-secondary');
        });

        const elements = document.querySelectorAll('[class*="warning"]');
        elements.forEach(element => {
        const classes = element.getAttribute('class').split(' ');

        const newClasses = classes.map(className => {
            if (className.includes('warning')) {
            return className.replace('warning', 'primary');
            }
            return className;
        });

        element.setAttribute('class', newClasses.join(' '));
        });

        
        // Affichez l'icône du soleil et masquez l'icône de la lune
        moonIcon.classList.remove('d-none');
        sunIcon.classList.add('d-none');

        lightImage.classList.remove('d-none');
        darkImage.classList.add('d-none');
        
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        // Changez les éléments avec la classe "bg-light" en "bg-dark-subtle"
        const lightElements = document.querySelectorAll('.bg-light');
        lightElements.forEach(element => {
            element.classList.remove('bg-light');
            element.classList.add('bg-dark-subtle');
        })

        
        
        const elements = document.querySelectorAll('[class*="primary"]');
        elements.forEach(element => {
        const classes = element.getAttribute('class').split(' ');

        const newClasses = classes.map(className => {
            if (className.includes('primary')) {
            return className.replace('primary', 'warning');
            }
            return className;
        });

        element.setAttribute('class', newClasses.join(' '));
        });


        const secondaryTextElements = document.querySelectorAll('.text-secondary');
        secondaryTextElements.forEach(element => {
            element.classList.remove('text-secondary');
            element.classList.add('text-white');
   
            
        });

        // Affichez l'icône de la lune et masquez l'icône du soleil
        sunIcon.classList.remove('d-none');
        moonIcon.classList.add('d-none');

        lightImage.classList.add('d-none');
        darkImage.classList.remove('d-none');
    }
});

// Get the button:
let mybutton = document.getElementById("navTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("d-none");
  } else {
    mybutton.classList.add("d-none");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
