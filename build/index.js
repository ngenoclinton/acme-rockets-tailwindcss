document.addEventListener('DOMContentLoad', function(){
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetSection.offsetTop - 30, // Offset the scroll position by 20 pixels
          behavior: 'smooth'
        });
      });
    });

    const heroLink = document.querySelector('#logo');

    heroLink.addEventListener('click', (e) => {
        e.preventDefault();

        const heroId = heroLink.getAttribute('href');
        const heroSection = document.querySelector(heroId);
        
        window.scrollTo({
          top: heroSection.offsetTop - 20, // Offset the scroll position by 20 pixels
          behavior: 'smooth'
        })
    })
 })
