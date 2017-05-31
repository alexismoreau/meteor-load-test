/**
 * Created by alexis_moreau on 22/05/2017.
 */
console.log("begin");

meteorDown.init(function (Meteor) {
  console.log("userId is:", Meteor.userId());
  Meteor.subscribe('markers', function () {
    console.log('--------------------------------------------------------------------------------------MARKERS ready');
    console.log(Meteor.collections.markers);
  });
  Meteor.subscribe('companies', function () {
    console.log('--------------------------------------------------------------------------------------COMPANIES ready');
    console.log(Meteor.collections.companies);
  });
  Meteor.subscribe('waitlists', function () {
    console.log('--------------------------------------------------------------------------------------WAITLISTS ready');
    console.log(Meteor.collections.waitlists);
  });
  Meteor.subscribe('tickets', function () {
    console.log('--------------------------------------------------------------------------------------TICKETS ready');
    console.log(Meteor.collections.tickets);
  });
  //Meteor.kill();
});

meteorDown.run({
  concurrency: 25,
  auth: {userIds: ['hP3CwnmuQHTbnXFug', 'JohMXN4oxch9mKCuk', 'Xdr49zuGdBhvBH9o2']},
  //auth: {userIds: ['g2uoGmHaxH5y6fMeD', 'J6wzYXdsP88vqbJJN', 'nsZFeny5ynY3amj8D']}, //local
  key: 'S4D5F6G7FFCGVVY7T6F5',
  url: "https://mafiledattente.fr:443",
  ssl: true
  //url: "http://localhost:3000",
});
