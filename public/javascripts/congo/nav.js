/*jslint sloppy : true, devel : true, -W108, -W109, laxcomma :  true,
indent : 2  */
/*global Congo, Backbone*/

Congo.BreadcrumbView = Backbone.View.extend({
  initialize : function () {
    this.render();
  }
, render: function () {
    $(this.el).html('<li><h3><a href="#">MONGO DATABASES</a></h3></li>');
  }
, events: {
    'click a': 'sayit'
  }

, sayit: function () {
    alert('THIS IS FRICKIN\' LAME \n :(');
  }

});
