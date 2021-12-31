$(document).ready(function()
{
	$(window).scroll(function()
	{
		if (this.scrollY > 20)
		{
			$('.navbar').addClass("sticky");
		}
		else
		{
			$('.navbar').removeClass("sticky");
		}
	});

	//Owl crousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: 
		{
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	});
});

let life_img = document.getElementsByClassName('life_img')

let activeImg = document.getElementsByClassName('active')

for (var i=0; i < life_img.length; i++){

  life_img[i].addEventListener('mouseover', function(){

    document.getElementById('featured').src = this.src
  })
}

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 80
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 80
})
