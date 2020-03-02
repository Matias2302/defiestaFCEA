// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('img');
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active');
//     const img = document.createElement('img');
//     img.src = image.src;
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild);
//     }
//     lightbox.appendChild(img);
//   })
// })

// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active');
// });

(function($) {
    var	$window = $(window),
		$body = $('body'),
		$main = $('#main');
var $nav = $('#nav');

	if ($nav.length > 0) {

	// Shrink effect.
		$main
			.scrollex({
				mode: 'top',
				enter: function() {
					$nav.addClass('alt');
				},
				leave: function() {
					$nav.removeClass('alt');
				},
			});
		}
		var $nav_a = $nav.find('a');

		$nav_a
			.scrolly({
				speed: 1000,
				offset: function() { return $nav.height(); }
			})
			.on('click', function() {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Deactivate all links.
					$nav_a
						.removeClass('active')
						.removeClass('active-locked');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					initialize: function() {

						// Deactivate section.
							if (browser.canUse('transition'))
								$section.addClass('inactive');

					},
					enter: function() {

						// Activate section.
							$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
							if ($nav_a.filter('.active-locked').length == 0) {

								$nav_a.removeClass('active');
								$this.addClass('active');

							}

						// Otherwise, if this section's link is the one that's locked, unlock it.
							else if ($this.hasClass('active-locked'))
								$this.removeClass('active-locked');

					}
				});

			});	

	Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});
			})(jQuery);
			
// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
// 	card.classList.toggle('is-flipped');
//   });
//   $('.card').on('click', function() {
// 	$(this).parent('.card').toggleClass('is-flipped');
//   });

//   var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });

function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

$(document).ready(function () {
	$(".single-image").click(function(){
	  var t = $(this).attr("src");
	  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
	  $("#myModal").modal();
	});
  });
