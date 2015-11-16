'use strict'


$(document).ready(function() {

  var template = Handlebars.compile($('#data-loader').html());

  var loadTemplate = function(error, data){
   if (error) {
     console.log(error);
   }else {
     console.log(data);
     var rowHTML = template({user: data});
     $("#git-table").html(rowHTML);
   }
 };

  $('.load-btn').on ('click', function(e) {
    e.preventDefault();
    api(loadTemplate);
  });

});




