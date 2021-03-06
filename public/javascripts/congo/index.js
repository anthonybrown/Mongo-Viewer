/*jslint sloppy : true, devel : true, -W108, -W109, laxcomma :  true,
indent : 2  */
/*global Congo */

Congo = {
  init: function () {
    
    // data
    Congo.databases = new Congo.DatabaseCollection();
    
    // views
    Congo.breadcrumbs = new Congo.BreadcrumbView({el: "#nav"});
    Congo.details = new Congo.DetailsView({ el: '#details' });
    //Congo.databaseList = new Congo.DatabaseListView({collection: Congo.databases});
    
    // start if off
    Congo.start();
  }
, start : function () {
    // fetches data to be rendered
    Congo.databases.fetch();
  }
};
