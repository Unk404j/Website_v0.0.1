const txtAnim = document.querySelector('#animatedText');

new Typewriter(txtAnim, {
  deleteSpeed: 20
})
.changeDelay(20)
// .typeString('<')
// .typeString('?')
// .typeString('<span class="php-tag">php</span>')
// .typeString('<span class="php-text"> echo</span>')
.typeString('<span class="php-tag"> <h1> Julien PABLO</h1></span>')
    .typeString('<ol class="list-unstyled">\n' +
        '        <li><a href="https://www.linkedin.com/in/julien-pablo" target="_blank"><i class="fa-brands fa-linkedin m-2 fa-xl" style="color: #0e76a8"></i>LinkedIn</a></li>\n' +
        '        <li><a href="tel:+33641554827"><i class="fa-solid fa-mobile-screen-button m-2 fa-xl" style="color: black"></i>06.41.55.48.27</a></li>\n' +
        '        <li><a href="mailto:julien.pablo.pro@gmail.com" target="_blank"><i class="fa-solid fa-envelope m-2 fa-xl" style="color: white; overflow: hidden"></i>julien.pablo.pro@gmail.com</a></li>\n' +
        '      </ol>')
    .pauseFor(300)
    .typeString('<span class="php-text">echo</span>')
    .typeString('<span class="php-string"> "Âge : 25 ans";</span>')
    .typeString('<br>')
.typeString('<span class="php-comment">//</span>')
.typeString('<span class="php-comment"> Étudiant en développement Full Stack, à Montpellier </span>')
.pauseFor(300)
.typeString('<br>')
.typeString('<span class="php-text"> echo</span>')
.typeString('<span class="php-string"> "Compétences : PHP, JavaScript, HTML/CSS, Linux";</span>')
.pauseFor(300)
.deleteChars(50)
.typeString('<span class="php-string"> "Je recherche une alternance pour ma 3ème année";</span>')
.pauseFor(500)
.changeDelay(30)
    .typeString('<br>')
    .typeString('<span class="php-text">echo</span>')
.typeString('<span class="php-string"> "n\'hésitez pas à </span>')
    .typeString('<a href="#contact">me contacter</a>')
    .typeString('<span class="php-string"> pour convenir d\'un entretien !";</span>')

.start()