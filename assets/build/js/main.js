document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation bar scroll functions

    let scrolled;
    const header = document.querySelector('.header');

    function scrollPage () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled > 100 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    }

    window.addEventListener('scroll', function() {
        scrollPage();
    });

    scrollPage();

    // Mobile hamburger menu & dropdown

    const btnContacts = document.querySelector('.btn__contacts');
    const dropdown = document.querySelector('.btn__contacts > .dropdown');
    const btnHamburger = document.querySelector('.btn__hamburger');
    const mobileNavi = document.querySelector('.navi');

    btnContacts.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        dropdown.classList.toggle('opened');
    });

    btnHamburger.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        mobileNavi.classList.toggle('opened');
    });

    window.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.btn__contacts')) {
            dropdown.classList.remove('opened');
            btnContacts.classList.remove('active');
        }
        document.querySelectorAll('.btn__contacts > .dropdown > li > a').forEach((e) => {
            if (target == dropdown || target == e) {
                dropdown.classList.add('opened');
                btnContacts.classList.add('active');
            }
        });
        if (!target.closest('.btn__hamburger')) {
            mobileNavi.classList.remove('opened');
            btnHamburger.classList.remove('active');
        }
        document.querySelectorAll('.navi > li > a').forEach((e) => {
            if (target == mobileNavi || target == e) {
                mobileNavi.classList.add('opened');
                btnHamburger.classList.add('active');
            }
        });
    });

    // Modal windows functions

    const modalBtns = document.querySelectorAll('.btn__modal');
    const modalWindows = document.querySelectorAll('.modal-window');
    const modalWindowCloses = document.querySelectorAll('.modal-close');
    const modalWindowBodies = document.querySelectorAll('.modal-window__body');

    modalBtns.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const modalBtnGetAttr = this.getAttribute('data-modal-id');
            modalWindows.forEach(function(elem) {
                const modalId = elem.getAttribute('id'); 
                if (modalBtnGetAttr == modalId) {
                    elem.classList.add('opened');
                };
            });
        });
    });
    modalWindowCloses.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            modalWindows.forEach(function(elem) {
                elem.classList.remove('opened');
            });
        });
    });
    modalWindowBodies.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            modalWindows.forEach(function(elem) {
                elem.classList.remove('opened');
            });
        });
    });

});