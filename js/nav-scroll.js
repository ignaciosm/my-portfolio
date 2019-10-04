
// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 88) {
// 	    nav.classList.add("navbar1");
// 		};
// 	  }

// 	  else{
// 		  nav.classList.remove("navbar1");  	
// 	  }
//   })
// })

window.onscroll = function() {
	console.log(window.pageYOffset);
	var nav = document.getElementById('scroll-nav');
	if ( window.pageYOffset > 0 ) {
			nav.classList.add("navbar1");
	} else {
			nav.classList.remove("navbar1");
	}
}