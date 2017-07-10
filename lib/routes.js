
// redirect on start to dahsboard on file protocol
if (typeof location != 'undefined') {
  if(location.origin === 'file://') {
      FlowRouter.wait();
      FlowRouter.initialize({hashbang: true});

      Meteor.startup(function() {
          FlowRouter.go('whatIdo');
      });
  }
}

Meteor.startup(function() {
    FlowRouter.go('whatIdo');
});

// ROUTES
FlowRouter.route('/', {
    name: 'whatIdo',
    action: function(params, queryParams) {
        BlazeLayout.render('layout_main', {
            header: 'layout_header',
            main: 'views_what_I_do'
        });
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action: function(params, queryParams) {
        BlazeLayout.render('layout_main', {
            header: 'layout_header',
            main: 'views_about_us'
        });
    }
});

FlowRouter.route('/examples', {
    name: 'examples',
    action: function(params, queryParams) {
        BlazeLayout.render('layout_main', {
            header: 'layout_header',
            main: 'views_examples'
        });
    }
});


FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('layout_main', {
            header: 'layout_header',
            main: 'layout_notFound'
        });
    }
};
