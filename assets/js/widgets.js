var jqueryGithub = new Jet.App;
    jqueryGithub.init('widget-github', '/assets/js/plugins/jquery.github.min.js', function() {
      var repos = '[data-repo]';
        $(repos).github();
    });

var rainbow = new Jet.App;
    rainbow.init('widget-rainbow', '/assets/js/plugins/jquery.rainbow.min.js', function() {});