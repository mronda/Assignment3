/* Fill out these functions using Mongoose queries*/
var fs = require('fs');
var mongoose = require('mongoose');
listing = require('./listingSchema.js');

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   listing.find({name: "Library West"}, function(err,users)
   {
     if(err) throw err;
     console.log(users);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   listing.findOneAndRemove({code: "CABL"}, function(err,users)
   {
     if(err) throw err;
     console.log("removed CABL");
   });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   listing.find({name:"Phelps Laboratory"}, function(err,users)

    )
   listing.findOneAndUpdate({name: "Phelps Laboratory"}, {} function(err,users)
   {
     if(err) throw err;
     console.log(users);
   });

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   listing.find({}, function(err, listing){
     if(err) throw err;
     console.log(listing);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
