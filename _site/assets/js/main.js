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


$(function () {
	showArticles();
});
//end