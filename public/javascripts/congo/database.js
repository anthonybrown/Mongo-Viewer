/*jslint sloppy : true, devel : true, -W108, -W109, laxcomma :  true, indent : false  */
/*global Congo, Backbone, _*/

Congo.Database = Backbone.Model.extend({
  
});

Congo.DatabaseCollection = Backbone.Collection.extend({
    model : Congo.Database
  , url   : '/mongo-api/dbs'
});

Congo.DatabaseView = Backbone.View.extend({
    tagName : 'tr'

  , events : {
        'click a' : 'sayit'
      , 'click button' : 'sayit'
    }

  , sayit : function () {
      alert('here we go again');
    }

  , render  : function () {
      var template = $('#database-list-template').html();
      var compiled = _.template(template, this.model.toJSON());
      $(this.el).html(compiled);
      return this;
    }
  });

Congo.DatabaseListView = Backbone.View.extend({
    initialize : function () {
      this.collection.bind('reset', this.render, this);
      this.collection.bind('add', this.render, this);
      this.collection.bind('remove', this.render, this);
    }
  , tagName : 'table'
  , className : 'table table-striped'

  , render  : function () {
      var elems = [];
      this.collection.each(function (item) {
        var itemView = new Congo.DatabaseView({ model: item });
        elems.push(itemView.render().el);
      });
      //return this;
      $(this.el).html(elems);
      $('#database-list').html(this.el);
    }
  });
