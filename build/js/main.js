let headerMenu=document.querySelector(".main-header"),headerMenuToggle=document.querySelector(".main-header__menu"),modalOpen=document.querySelector(".add-profile__link"),modalIndex=document.querySelector(".modal-container"),modalClose=document.querySelector(".modal-contant__link"),scrollMenu=document.querySelector(".scroll-wrapper"),sticky=scrollMenu.offsetTop,map=document.querySelector(".location");function myFunction(){window.scrollY>=sticky?(scrollMenu.classList.add("scroll-menu__open"),headerMenu.classList.add("main-header--scroll-menu-open")):(scrollMenu.classList.remove("scroll-menu__open"),headerMenu.classList.remove("main-header--scroll-menu-open"))}headerMenu.classList.remove("main-header--nojs"),map.classList.remove("location--nojs"),headerMenuToggle.addEventListener("click",(function(){headerMenu.classList.contains("main-header--close")?(headerMenu.classList.remove("main-header--close"),headerMenu.classList.add("main-header--open"),headerMenu.classList.add("scroll-menu__open")):(headerMenu.classList.add("main-header--close"),headerMenu.classList.remove("main-header--open"),headerMenu.classList.remove("scroll-menu__open"))})),modalOpen.addEventListener("click",(function(e){e.preventDefault(),modalIndex.classList.contains("modal-container--close")&&(modalIndex.classList.remove("modal-container--close"),modalIndex.classList.add("modal-container--open"))})),modalClose.addEventListener("click",(function(){modalIndex.classList.remove("modal-container--open"),modalIndex.classList.add("modal-container--close")})),window.onscroll=function(){myFunction()};