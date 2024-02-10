window.addEventListener('DOMContentLoaded', function() {
    const housesSwiper = new Swiper('.houses-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 700,
    })
    
    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
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

    function faq() {
        const triggerBtns = document.querySelectorAll('.faq__item-trigger')

        triggerBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                let parentItem = btn.closest('.faq__item')
                let blockAnswer = parentItem.querySelector('.faq__item-answer')

                if (!parentItem.classList.contains('active')) {
                    blockAnswer.style.height = blockAnswer.scrollHeight + 'px'
                } else {
                    blockAnswer.style.height = ''
                }

                parentItem.classList.toggle('active')
            })
        })
    }

    faq()

    function addFaqNumeration() {
        const faqBlocks = document.querySelectorAll('.faq__item')

        faqBlocks.forEach(function(block) {
            let blockNumber = block.querySelector('.faq__item-number')
            let blockIndex = Array.from(faqBlocks).indexOf(block) + 1

            if (blockIndex < 10) {
                blockIndex = '0' + blockIndex
            }

            blockNumber.textContent = blockIndex
        })
    }

    addFaqNumeration()

    function popup() {
        const openBtns = document.querySelectorAll('.popup-open-btn')
        const popup = document.querySelector('.overlay')
        const popupForm = popup.querySelector('.popup__form')
        const popupFormBtn = popupForm.querySelector('.popup__form-btn')
        const popupThanks = popup.querySelector('.popup__thanks')
        const closeBtn = popup.querySelector('.popup-close')

        openBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                popup.classList.add('active')
                popupFormBtn.addEventListener('click', function() {
                    
                })
            })
        })

        closeBtn.addEventListener('click', function() {
            popup.classList.remove('active')
            popupForm.classList.remove('unactive')
            popupThanks.classList.remove('active')
        })
    }

    popup()

    function addStarsToReview() {
        const reviews = document.querySelectorAll('.review')

        reviews.forEach(function(review) {
            const reviewRateNumber = review.querySelector('.review__rate-number').textContent
            const reviewRateStars = review.querySelectorAll('svg')

            reviewRateStars.forEach(function(star) {
                const starIndex = Array.from(reviewRateStars).indexOf(star) + 1
                if (starIndex <= reviewRateNumber) {
                    star.classList.add('active')
                }
            })
        })
    }

    addStarsToReview()

    function quiz() {
        const quizItems = document.querySelectorAll('.quiz__item')
        const quizBtns = document.querySelectorAll('.quiz-btn')

        let quizIndex = 0
        const answers = {}

        quizBtns.forEach(function(btn) {

            btn.addEventListener('click', function() {
                let currentInputs = quizItems[quizIndex].querySelectorAll('.quiz-checkbox')
                let checkedInput = false

                quizItems[quizIndex].classList.remove('active')

                if (btn.classList.contains('quiz-next')) {
                    let quizItemQuestion = quizItems[quizIndex].getAttribute('data-question')
                    let answerValues = []

                    currentInputs.forEach(function(inputItem) {

                        if (inputItem.checked) {
                            let answerValue = inputItem.nextElementSibling.textContent
                            answerValues.push(answerValue)
                            checkedInput = true
                        }
                    })

                    if (checkedInput) {
                        quizIndex += 1
                        answers[quizItemQuestion] = answerValues
                    }

                } else if (btn.classList.contains('quiz-prev')) {
                    quizIndex -= 1
                }

                quizItems[quizIndex].classList.add('active')

                console.log(answers);
            })
        })
    }

    quiz()

    function housePhotosSlides() {
        const photoItems = document.querySelectorAll('.house-photo')
        const currentPhotoItem = document.querySelector('.house__photos-current')

        let currentSrc = photoItems[0].getAttribute('src')
        currentPhotoItem.setAttribute('src', currentSrc)

        photoItems.forEach(function(item) {
            item.addEventListener('click', function() {
                currentSrc = item.getAttribute('src')
                currentPhotoItem.setAttribute('src', currentSrc)
            })
        })
    }

    try {
        housePhotosSlides()
    } catch {

    }

    function pageScroll() {
        const menuBtns = document.querySelectorAll('.nav__list li a')
        
        menuBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault()
                const currentId = btn.getAttribute('href')
                const currentBlock = document.querySelector(currentId)

                if (currentBlock) {
                    currentBlock.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                    });
                } else {
                    window.location.href = currentId
                }
            })
        })
    }

    pageScroll()
})