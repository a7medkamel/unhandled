requirejs.config({
    baseUrl: "/javascripts"
  , paths: {
      'libs/jquery/plugins/chosen': 'libs/jquery/plugins/chosen/chosen.jquery'
  }
  , shim: {
      'libs/jquery/jquery': {
        exports: function(jq){
          window.jQuery = this.$;
          return window.jQuery;
        }
    }
    , 'libs/ember/ember-data': {
        exports: 'DS'
    }
    , 'libs/ember/ember': {
        exports: 'Ember'
    }
    , 'libs/underscore/underscore': {
        exports: '_'
    }
    , 'libs/backbone/backbone': {
        deps: ['libs/underscore/underscore', 'libs/jquery/jquery']
      , exports: 'Backbone'
    }
    , 'libs/jquery/plugins/jquery.fancybox.pack': {
        deps: ['libs/jquery/jquery']
      , exports: 'jQuery.fn.fancybox'
    }
    // , 'libs/jquery/plugins/jquery.mousewheel-3.0.6.pack': {
    //       deps: ['libs/jquery/jquery'],
    //       // exports: 'Backbone'
    //   }
    , 'libs/jquery/plugins/jquery.getUrlParam': {
        deps: ['libs/jquery/jquery']
        // exports: 'Backbone'
    }
    // , 'libs/jquery/plugins/jquery.lionbars.0.3.min': {
    //       deps: ['libs/jquery/jquery'],
    //       // exports: 'Backbone'
    //   }
    , 'libs/jquery/plugins/notification': {
        deps: ['libs/jquery/jquery']
      , exports: 'jQuery.fn.notify'
    }
    , 'libs/jquery/plugins/chosen': {
        deps: ['libs/jquery/jquery']
      , exports: 'jQuery.fn.chosen'
    }
  }
});

// require.config({
//   paths: {
//     jQuery: 'libs/jquery/jquery',
//     Underscore: 'libs/underscore/underscore',
//     Backbone: 'libs/backbone/backbone'
//   }
// });
// define(
//     ['libs/jquery/jquery', 'libs/underscore/underscore', 'libs/backbone/backbone'],

//     function (jQueryLocal, underscoreLocal, backboneLocal) {
//         console.log('local', jQueryLocal);
//         console.log('local', underscoreLocal);
//         console.log('local', backboneLocal);
//         console.log('global', $);
//         console.log('global', _);
//         console.log('global', Backbone);
//     }
// );