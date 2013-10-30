;(function(window) {
  window.App = window.App || {};

App.Main = {
    
    init: function() {
      this.asideAnimation();
      this.mobileNavigation();
    },

    asideAnimation: function() {
      var bt = $('#bt-show-articles'),
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
    },

    mobileNavigation: function() {
      var mobiNav = $('#mb-menu');
        mobiNav.change(function() {
          window.location = $(this).find("option:selected").val();
        });
    }

  }

})(window);

$(function() {
  App.Main.init();
})