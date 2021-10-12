/*

  nama : candra dwi cahyo
  email : candradwicahyo18@gmail.com
  
*/

// navbar 
const nav = document.querySelector('.nav');

function stickyNav() {
  window.addEventListener('scroll', function() {
    nav.classList.toggle('active', this.scrollY > 0);
  });
}

stickyNav();

const toggle = nav.querySelector('.nav-toggle');

function toggleNavAnimation() {
  toggle.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}

toggleNavAnimation();

function sideNav() {
  toggle.addEventListener('click', function() {
    const sideNav = nav.querySelector('.nav ul');
    sideNav.classList.toggle('active');
  });
}

sideNav();

// untuk animasi pada list item navbar 
animationsHover('nav ul li', 'active');

function animationsHover(selector, nameClass) {
  const events = document.querySelectorAll(`.${selector}`);
  events.forEach(event => {
    event.addEventListener('click', function() {
      events.forEach(event => event.classList.remove(`${nameClass}`));
      this.classList.add(`${nameClass}`);
    });
  });
}

// untuk animasi pada box services
animationsHover('box-services', 'active');

function imageFilter() {
  const list = document.querySelectorAll('.portfolio ul li');
  list.forEach(li => {
    li.addEventListener('click', function(event) {
      list.forEach(li => li.classList.remove('active'));
      event.target.classList.add('active');
      
      const value = event.target.textContent;
      const boxes = document.querySelectorAll('.box-portfolio');
      boxes.forEach(box => {
        box.style.display = 'none';
        
        if (value.toLowerCase() == box.getAttribute('data-filter') || value.toLowerCase() == 'all') {
          box.style.display = 'block';
        }
      });
      
    });
  });
}

imageFilter();
