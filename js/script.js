	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
//project Swiper
let swiper = new Swiper('.project-container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  });

  function validateform(){  
    var name=document.myForm.name.value;  
    var textfield=document.myForm.textfield.value;
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    else if(textfield.length<3 ){  
      alert("message is too short");  
      return false;  
      }  
    }  