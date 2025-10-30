/* Waits for DOM to be loaded before running */
document.addEventListener('DOMContentLoaded', () => {
    const socialsContainer = document.getElementById('socialsContainer');
    const menuContainer = document.getElementById('menuContainer');
    const socialsText = document.querySelectorAll('#socialsContainer #linkContainer a');
    const menuIcon = document.getElementById('menuIcon');
    const menuText = document.getElementById('menuText');
    
    
    function addLessButton() {

    }

    function removeLessButton() {
        
    }

    function addMenuClickListener(element) {
        /* Menu Icon click to expand white container */
        element.addEventListener('click', () => {
            requestAnimationFrame(() => {
                // Expand menu containers
                menuContainer.classList.toggle('expandMenu');
                socialsContainer.classList.toggle('expandSocials');
                menuContainer.style.cursor = 'default';
            
                // Animate and remove menu button elements
                menuIcon.classList.toggle('dissapear');
                menuText.classList.toggle('dissapear');
                setTimeout(() => {
                    menuIcon.remove();
                    menuText.remove();
                }, 400);

                setTimeout(() => {
                socialsText.forEach(text => {
                     text.classList.add('darkText');
                    });
                    socialsContainer.classList.toggle('dark-underline');
                }, 100);
            });
        }, { once: true });
    }

    addMenuClickListener(menuContainer);
});



