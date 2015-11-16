'use strict'

var template = Handlebars.compile($('#data-loader').html());

$(document).ready(function() {

  var loadTemplate = function(error, data){
   if (error) {
     console.log(error);
   }else {
     console.log(data);
     var rowHTML = template({row: data});
     $("#git-table").html(rowHTML);
   }
 };

  $('.load-btn').on ('submit', function(e) {
    e.preventDefault();
    api(loadTemplate);
  });

});




