/*!
 * Modular Script Loader (MSL.js Framework)
 * http://git.io/LwFXlg
 * Released under the MIT license
 * 
 * Author's name: Michael Lancaster
 * website: www.bymichaellancaster.com
 * Twitter: @weblancaster
 * Date: 2013-9-4
 */

/* ==========================================================================
# module/function to load the script requested
========================================================================== */
function loadScript(url, callback){

    var script = document.createElement("script");
    	script.type = "text/javascript";

    var elWrap = document.getElementById("modularLoaderWrap");

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    elWrap.appendChild(script);
}

/* ==========================================================================
# Define your modules name here
========================================================================== */
var module_general = (function() {
	// return this on all pages
	return {
		loaderInit: function() {
			// variables
			var mobiNav = $('#mb-menu'),
				bt = $('#bt-show-articles'),
				elAside = $('#aside'),
				elArticles = $('#articles-list'),
				elContent = $('#content'),
				active = 'active';

			// show and hide articles
			bt.on('click', function(e) {
				e.preventDefault();

				var self = $(this);

				if( !self.hasClass(active) ) {
					elAside.addClass(active);

					self.addClass(active);

					elArticles.removeClass('vh');
					elArticles.addClass(active);
					
					elContent.addClass(active);
				} else {
					elAside.removeClass(active);

					self.removeClass(active);

					elArticles.removeClass(active);
					elArticles.delay(500).addClass('vh');
					
					elContent.removeClass(active);
				}
			});

			// mobile navigation
			mobiNav.change(function() {
				window.location = $(this).find("option:selected").val();
			});
		}
	}
})();


var module_gitrepo = (function() {
	// Define your page id here
	var widget = document.body.getAttribute('data-widgets');

	// return the function that checks the page id and request the plugin if true
	return {
		loaderInit: function() {
			// conditional to check page id and if true download the plugin
			if ( widget === 'lab' ) {
				loadScript("../assets/js/plugins/jquery.github.min.js", function() {
			        var data_repos = '[data-repo]';
					$(data_repos).github();
			    });
			}
			// end of the conditional
		}
	}
})();


/* ==========================================================================
# module to init the app script loader
# init your defined modules name here
========================================================================== */
var appScriptLoader = (function() {
	return {
		modulesInitialize: function() {
			module_general.loaderInit();
			module_gitrepo.loaderInit();
		}
	}
})();


/* ==========================================================================
# Let's rock! (start)
========================================================================== */
(function() {
	'strict mode';
	appScriptLoader.modulesInitialize();
})();