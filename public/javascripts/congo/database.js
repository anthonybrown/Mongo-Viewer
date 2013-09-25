/*jslint sloppy : true, devel : true, -W108, -W109, laxcomma :  true, indent : false  */
/*global Congo, Backbone, _*/

Congo.Database = Backbone.Model.extend({
    url: function () {
      return '/mongo-api/dbs/' + this.id;
    }
  , validate: function (attrs) {
      if (_.isEmpty(attrs.name)) {
        return "Needs a name retardo";
      }
    }
  , idAttribute: 'name'
});

Congo.DatabaseCollection = Backbone.Collection.extend({
    model : Congo.Database
  , url   : '/mongo-api/dbs'
});

Congo.DatabaseOptionView = Congo.View.extend({
    initialize: function () {
        this.render();
    }
  , template : '#new-db-template'
  , events : {
      'submit form': 'addDb'
    }
  , addDb: function (e) {
      e.preventDefault();

      var newDbName = $('#newDb').val();
      var newDb = new Congo.Database({name: newDbName});
      newDb.save();
      Congo.databases.add(newDb);
      $('#newDb').val('');
    }
});

Congo.DatabaseView = Congo.View.extend({
    tagName : 'tr'
  , template: '#database-list-template'
  , events : {
       'click button' : 'removeDb'
    }
  , removeDb: function () {
      var confirmed = confirm('Delete this database?..');
      if (confirmed) {
        this.model.destroy();
        Congo.databases.remove(this.model);
      }
    }

  });

Congo.DatabaseListView = Congo.ListView.extend({
    tagName   : 'table'
  , className : 'table table-striped'
  , ItemView  : Congo.DatabaseView
});
