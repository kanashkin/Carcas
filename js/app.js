window.addEventListener('DOMContentLoaded', function() {
    const housesSwiper = new Swiper('.houses-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1000
        },
        speed: 700,
    })
    
    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1000
        },
        speed: 700,
        pagination: {
            el: '.projects-pagination',
        },
        navigation: {
            prevEl: '.projects-prev',
            nextEl: '.projects-next',
        },
        on: {
            slideChange: function () {
                updateNumberPagination(this)
            },
        },
    })

    const reviewsSwiper = new Swiper('.reviews-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 700,
        loop: true,
        autoplay: {
            delay: 1000
        },
        pagination: {
            el: '.reviews-pagination',
        },
        navigation: {
            prevEl: '.reviews-prev',
            nextEl: '.reviews-next',
        },
        on: {
            slideChange: function () {
                updateNumberPagination(this)
            },
        },
    })
    
    function addNumberPagination() {
        const swiperControLBlocks = document.querySelectorAll('.swiper-control')
    
        if (swiperControLBlocks) {
            swiperControLBlocks.forEach(function(block) {
                const blockAllNumber = block.querySelector('.swiper-all')
                const swiperBlock = block.previousElementSibling
                const swiperSlides = swiperBlock.querySelectorAll('.swiper-slide')
                blockAllNumber.textContent = swiperSlides.length
            })
        }
    }
    
    addNumberPagination()

    
    function updateNumberPagination(sliderEl) {
        const currentSlider = sliderEl.el
        const currentSliderControlBlock = currentSlider.nextElementSibling
        const paginationCurrentNumber = currentSliderControlBlock.querySelector('.swiper-current')
        const libPaginationBlockItems = currentSliderControlBlock.querySelectorAll('.swiper-pagination-bullet')

        libPaginationBlockItems.forEach(function(item) {
            if (item.classList.contains('swiper-pagination-bullet-active')) {
                let slideIndex = Array.from(libPaginationBlockItems).indexOf(item)
                paginationCurrentNumber.textContent = parseInt(slideIndex) + 1
            }
        })
    }
})