'use strict';
var result;
var api = function (callback) {
          $.ajax({
            method: 'GET',
            url: "http://jsonplaceholder.typicode.com/users"
          }).done(function(data, textStatus, jqxhr){
            //result = JSON.parse(data);
            callback(null, data);
          }).fail(function(data){
            console.error(data);
          }, callback);
        };
