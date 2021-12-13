// ELEMENTS
const body = document.getElementById('body'),
      header = document.getElementById('header'),
      hamburger = document.getElementById('hamburger'),
      main = document.getElementById('main'),
      mainNav = document.getElementById('mainNav'),
      mainBg1 = document.getElementById('mainBg1'),
      mainBg2 = document.getElementById('mainBg2'),
      gallery = document.getElementById('gallery'),
      footer = document.getElementById('footer'),
      modal = document.getElementById('modal'),
      modalBackdrop = document.getElementById('modalBackdrop'),
      mobileBackdrop = document.getElementById('mobileBackdrop'),
      mobileMenu = document.getElementById('mobileMenu'),
      modalClose = document.getElementById('modalClose'),
      mobileClose = document.getElementById('mobileClose'),
      card1 = document.getElementById('card1'),
      card2 = document.getElementById('card2'),
      card3 = document.getElementById('card3'),
      card4 = document.getElementById('card4'),
      watchVideo = document.getElementById('watchVideo'),
      sliderBtn1 = document.getElementById('sliderBtn1'),
      sliderBtn2 = document.getElementById('sliderBtn2'),
      formBtn1 = document.getElementById('formBtn1'),
      formBtn2 = document.getElementById('formBtn2'),
      formContent = document.getElementById('formContent'),
      glacier = document.getElementById('glacier'),
      glacierOutline = document.getElementById('glacierOutline'),
      glacierContainer = document.getElementById('glacierContainer'),
      youtubeImage = document.getElementById('youtubeImage'),
      iFrame = document.getElementById('iFrame')


// MODAL
const showModal = () => {
  iFrame.src = 'https://www.youtube.com/embed/Rqyb4SabSgQ'
  modalBackdrop.style.display = 'flex'
  body.classList.add('modal-open')
  header.classList.add('modal-open')
  main.classList.add('modal-open')
  gallery.classList.add('modal-open')
  footer.classList.add('modal-open')
}
const hideModal = () => {
  iFrame.src = ''
  modalBackdrop.style.display = 'none'
  body.classList.remove('modal-open')
  header.classList.remove('modal-open')
  main.classList.remove('modal-open')
  gallery.classList.remove('modal-open')
  footer.classList.remove('modal-open')
}
card1.addEventListener('click', showModal)
watchVideo.addEventListener('click', showModal)
youtubeImage.addEventListener('click', showModal)
modalBackdrop.addEventListener('click', hideModal)
modalClose.addEventListener('click', hideModal)


// MOBILE MENU
const showMobile = () => {
  mobileMenu.classList.remove('hide')
  mobileMenu.classList.add('show')
  mobileBackdrop.classList.add('show')
  body.classList.add('modal-open')
}
const hideMobile = () => {
  mobileMenu.classList.add('hide')
  mobileMenu.classList.remove('show')
  mobileBackdrop.classList.remove('show')
  body.classList.remove('modal-open')
}
hamburger.addEventListener('click', showMobile)
mobileClose.addEventListener('click', hideMobile)
mobileBackdrop.addEventListener('click', hideMobile)



// HERO SLIDER
const showSlideOne = () => {
  card1.classList.remove('hide')
  card2.classList.remove('hide')
  card3.classList.add('hide')      
  card4.classList.add('hide')
  sliderBtn1.classList.add('active')
  sliderBtn2.classList.remove('active')
  mainBg1.classList.remove('hide')
  mainBg2.classList.add('hide')
}
const showSlideTwo = () => {
  card1.classList.add('hide')
  card2.classList.add('hide')
  card3.classList.remove('hide')
  card4.classList.remove('hide')
  sliderBtn1.classList.remove('active')
  sliderBtn2.classList.add('active')
  mainBg1.classList.add('hide')
  mainBg2.classList.remove('hide')
}
sliderBtn1.addEventListener('click', showSlideOne)
sliderBtn2.addEventListener('click', showSlideTwo)


// FORM SCROLL
formContent.addEventListener('scroll', (e) => {
  const content = e.target;

  if (content.scrollHeight - content.scrollTop < 100) {
    formBtn1.classList.remove('active')
    formBtn2.classList.add('active')
  } else {
    formBtn1.classList.add('active')
    formBtn2.classList.remove('active')
  }
});
const scrollTop = () => {
  formBtn1.classList.add('active')
  formBtn2.classList.remove('active')
  formContent.scrollTop = 0
}
const scrollBottom = (e) => {
  formBtn1.classList.remove('active')
  formBtn2.classList.add('active')
  formContent.scrollTop = 800
}
formBtn1.addEventListener('click', scrollTop)
formBtn2.addEventListener('click', scrollBottom)


// GLACIER SLIDE
glacierContainer.addEventListener('mouseenter', () => {
  glacier.style.transition = 'all 1s ease-in-out'
  glacier.style.transform = 'translateX(-120%)'
  glacierOutline.style.transition = 'all 1s ease-in-out'
  glacierOutline.style.transform = 'translateX(-120%)'
})
glacierContainer.addEventListener('mouseleave', () => {
  glacier.style.transition = 'all 1s ease-in-out'
  glacier.style.transform = 'translateX(0)'
  glacierOutline.style.transition = 'all 1s ease-in-out'
  glacierOutline.style.transform = 'translateX(0)'
})