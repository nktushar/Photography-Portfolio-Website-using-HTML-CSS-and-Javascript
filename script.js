window.addEventListener('scroll', () => {
    document.querySelector('nav'). classList.toggle('window-scrolled', window.scrollY > 0);
})

//contact button (circular text button)
const textButtons = document.querySelectorAll('.contact-btn');

textButtons.forEach(textButton =>{
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})




// initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599:{
            slidesPerView: 2,
            spaceBetween: 40
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
  });


  const nav = document.querySelector('.nav-links');
  const openNavBtn = document.querySelector('#nav-toggle-open');
  const closeNavBtn = document.querySelector('#nav-toggle-close');

  const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
  }
  openNavBtn.addEventListener('click', openNav);

  const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }
  closeNavBtn.addEventListener('click', closeNav);


  if(document.body.clientwidth < 1024){
    nav.querySelectorAll('li a').forEach(navLink => {
      navLink.addEventListener('click', closeNav);
    })
  }

  