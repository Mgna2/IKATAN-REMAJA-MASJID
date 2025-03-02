 // Mobile Navigation Toggle
 const mobileToggle = document.querySelector('.mobile-toggle');
 const nav = document.querySelector('nav');
 
 mobileToggle.addEventListener('click', () => {
     nav.classList.toggle('active');
 });
 
 // Sticky Header
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     header.classList.toggle('scrolled', window.scrollY > 0);
 });
 
 // Smooth Scrolling for Navigation Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         nav.classList.remove('active');
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         window.scrollTo({
             top: targetElement.offsetTop - 80,
             behavior: 'smooth'
         });
     });
 });
 
 // Gallery Modal
 const galleryItems = document.querySelectorAll('.gallery-item');
 const galleryModal = document.querySelector('.gallery-modal');
 const modalImg = document.querySelector('.modal-content img');
 const modalClose = document.querySelector('.modal-close');
 
 galleryItems.forEach(item => {
     item.addEventListener('click', () => {
         const imgSrc = item.querySelector('img').getAttribute('src');
         modalImg.setAttribute('src', imgSrc);
         galleryModal.classList.add('active');
         document.body.style.overflow = 'hidden';
     });
 });
 
 modalClose.addEventListener('click', () => {
     galleryModal.classList.remove('active');
     document.body.style.overflow = 'auto';
 });
 
 // Contact Form Submission
 const contactForm = document.getElementById('contactForm');
 
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Form validation and submission logic would go here
     alert('Pesan Anda telah dikirim! Terima kasih telah menghubungi kami.');
     contactForm.reset();
 });
 
 // Newsletter Form Submission
 const newsletterForm = document.querySelector('.newsletter-form');
 
 newsletterForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Form validation and submission logic would go here
     alert('Terima kasih telah berlangganan newsletter kami!');
     newsletterForm.reset();
 });
 
 // Animation on Scroll
 const animateElements = () => {
     const elements = document.querySelectorAll('.activity-card, .gallery-item');
     
     elements.forEach(element => {
         const position = element.getBoundingClientRect().top;
         const screenPosition = window.innerHeight / 1.2;
         
         if (position < screenPosition) {
             const delay = element.getAttribute('data-delay') || 0;
             setTimeout(() => {
                 element.classList.add('animate');
             }, delay * 1000);
         }
     });
 };
 
 window.addEventListener('load', animateElements);
 window.addEventListener('scroll', animateElements);