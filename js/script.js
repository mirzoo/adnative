$(document).ready(function() {

    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

var typed = new Typed (".auto-type", {
  strings: ["innovative", "convenient", "the best"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})


