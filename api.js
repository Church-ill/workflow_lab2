'use strict';
var result;
var api = function (callback) {
          $.ajax({
            method: 'GET',
            url: "http://jsonplaceholder.typicode.com/users"
          }).done(function(data){
            result = JSON.parse(data);
          }).fail(function(data){
            console.error(data);
          }, callback);
        };
