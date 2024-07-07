(function () {
    //Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Слайдер-NFT

    new Swiper('.nft__slider', {
        spaceBetween: 15,
        slidesPerView: 1,

        navigation: {
            nextEl: '.nft__next',
            prevEl: '.nft__prev',
        },

        breakpoints: {
            450: {
                slidesPerView: 1
            },
            501: {
                slidesPerView: 1.5
            },
            701: {
                slidesPerView: 2
            },
            801: {
                spaceBetween: 22
            },
            901: {
                slidesPerView: 2.5
            },
            1101: {
                slidesPerView: 3
            }
        }
    });

    // Слайдер Коллекция

    new Swiper('.collections__swiper', {
        spaceBetween: 36,
        slidesPerView: 1,

        navigation: {
            nextEl: '.collection__next',
            prevEl: '.collection__prev',
        },

        breakpoints: {
            600:{
                slidesPerView: 1.5
            },
            801:{
                slidesPerView: 2
            },
            1001:{
                slidesPerView: 2.5
            },
            1201: {
                slidesPerView: 3
            }
        }
    });

    // Слайдер Категории

    new Swiper('.categories__swiper', {
        spaceBetween: 36,
        slidesPerView: 1,

        breakpoints: {
            600:{
                slidesPerView: 1.5
            },
            801:{
                slidesPerView: 2
            },
            1001:{
                slidesPerView: 2.5
            },
            1201: {
                slidesPerView: 3
            }
        }
    });

    // Модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.nav__button')
    const modalButton2 = document.querySelector('.hero__button-left')
    const modalButton3 = document.querySelector('.hero__button-right')
    const modalButton4 = document.querySelector('.hero__img-button')

    modalButton.addEventListener('click', openModal)
    modalButton2.addEventListener('click', openModal)
    modalButton3.addEventListener('click', openModal)
    modalButton4.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
})()