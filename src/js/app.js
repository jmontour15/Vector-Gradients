// Import SVGs
import downArrowSrc from '../assets/arrow-sm-down-svgrepo-com.svg';
import upArrowSrc from '../assets/arrow-sm-up-svgrepo-com.svg';

/* Waits for DOM to be loaded before running */
document.addEventListener('DOMContentLoaded', () => {
    const socialsContainer = document.getElementById('socialsContainer');
    const menuContainer = document.getElementById('menuContainer');
    const socialsText = document.querySelectorAll('#socialsContainer #linkContainer a');
    const menuIcon = menuContainer.querySelector('#menuIcon');
    const menuText = menuContainer.querySelector('#menuText');
    const lessButton = document.getElementById('lessButton');
    const pageLinks = document.getElementById('pageLinks');
    const pageLinkItems = document.querySelectorAll('.pageLink');

    function expandMenu() {
        menuContainer.classList.remove('collapseMenu');
        socialsContainer.classList.remove('collapseSocials');
        menuContainer.classList.add('expandMenu');
        socialsContainer.classList.add('expandSocials');
        menuContainer.style.cursor = 'default';

        // Animate out + remove
        menuIcon.classList.remove('appear2');
        menuText.classList.remove('appear2');
        menuIcon.classList.add('dissapear');
        menuText.classList.add('dissapear');

        setTimeout(() => {
            menuIcon.classList.add("hidden");
            menuText.classList.add("hidden");
        }, 400);

        setTimeout(() => {
            socialsText.forEach(text => text.classList.remove('lightText'));
            socialsText.forEach(text => text.classList.add('darkText'));
            socialsContainer.classList.add('dark-underline');
            
            // Show page links with blur animation
            pageLinkItems.forEach((link, index) => {
                link.classList.remove('blurOutRise');
                setTimeout(() => {
                    link.classList.add('blurIn');
                }, index * 50); // Stagger the animations
            });
            
            lessButton.style.top = "30px";
            lessButton.classList.remove("hidden");
            lessButton.classList.remove("riseAndFade");
            lessButton.classList.add("descendAndAppear");
            lessButton.style.cursor = "pointer";
        }, 100);
    }

    function collapseMenu() {
        menuContainer.classList.add('collapseMenu');
        socialsContainer.classList.add('collapseSocials');
        menuContainer.classList.remove('expandMenu');
        socialsContainer.classList.remove('expandSocials');
        
        // Animate out page links
        pageLinkItems.forEach((link, index) => {
            link.classList.remove('blurIn');
            setTimeout(() => {
                link.classList.add('blurOutRise');
            }, index * 30);
        });
        
        // Animate out lessButton with rise effect
        lessButton.classList.remove("descendAndAppear");
        lessButton.classList.add("riseAndFade");
        lessButton.style.cursor = "default";

        setTimeout(() => {
            lessButton.classList.add("hidden");
            lessButton.style.top = "224px";
        }, 300);
        
        setTimeout(() => {
            socialsText.forEach(text => text.classList.remove('darkText'));
            socialsContainer.classList.remove('dark-underline');
            socialsText.forEach(text => text.classList.add('lightText'));
            menuIcon.classList.remove("hidden");
            menuIcon.classList.remove("dissapear");
            menuText.classList.remove("hidden");
            menuText.classList.remove("dissapear");
            menuIcon.classList.add("appear2");
            menuText.classList.add("appear2");
            menuContainer.style.cursor = "pointer";
        }, 100);

        setTimeout(() => {
            menuIcon.classList.remove("appear2");
            menuText.classList.remove("appear2");
        }, 300);
    }

    /* Delegated click listener */
    document.addEventListener('click', (e) => {
        const clicked = e.target.closest('#menuIcon, #menuText, #upArrow, #lessText');
        if (!clicked) return;

        // Open
        if (clicked.id === 'menuIcon' || clicked.id === 'menuText') {
            expandMenu();
            return;
        }

        // Close
        if (clicked.id === 'upArrow' || clicked.id === 'lessText') {
            collapseMenu();
            return;
        }
    });
});