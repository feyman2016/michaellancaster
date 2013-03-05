//js main
function showArticles() {
	var bt = $('#bt-show-articles'),
		elAside = $('#aside'),
		elArticles = $('#articles-list'),
		elContent = $('#content'),
		active = 'active';

	bt.on('click', function(e) {
		e.preventDefault();

		if( !$(this).hasClass(active) ) {
			elAside.addClass(active);

			$(this).addClass(active);

			elArticles.removeClass('vh');
			elArticles.addClass(active);
			
			elContent.addClass(active);
		} else {
			elAside.removeClass(active);

			$(this).removeClass(active);

			elArticles.removeClass(active);
			elArticles.delay(500).addClass('vh');
			
			elContent.removeClass(active);
		}
	});
}

//menu redirection
function mobileNav() {
	$('#mb-menu').change(function() {
		window.location = $(this).find("option:selected").val();
	});
}

//Load github repos
function loadRepos() {
	var data_repos = '[data-repo]';
	$(data_repos).github();
}

function fluidIframeVideo() {

	var $allVideos = $("iframe[src^='http://www.youtube.com']"),
	    $fluidEl = $(".ui-copy");

		$allVideos.each(function() {
			$(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
		});

		$(window).resize(function() {
			var newWidth = $fluidEl.width();

			$allVideos.each(function() {
				var $el = $(this);

				$el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
			});
		}).resize();
}

$(function () {
	mobileNav();
	showArticles();
	loadRepos();
	fluidIframeVideo();
});
//end