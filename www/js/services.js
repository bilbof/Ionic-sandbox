angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Andrei Simionescu',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/562344209756090368/oILLU21R.jpeg'
  }, {
    id: 1,
    name: 'Felix Müller-Irion',
    lastText: 'Hey, it\'s me',
    face: 'https://pbs.twimg.com/profile_images/455655543038697472/eLXrdbqe.jpeg'
  }, {
    id: 2,
    name: 'Felix von Looz',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/555407780924772352/4kp0r05i.jpeg'
  }, {
    id: 3,
    name: 'Bill Franklin',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479252332647968771/RhYCAbbg.jpeg'
  }, {
    id: 4,
    name: 'Lavaboom Support',
    lastText: 'Have you tried turning it off and on again?',
    face: 'https://pbs.twimg.com/profile_images/554705880910819329/udQg4Osq.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Andrei Simionescu',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/562344209756090368/oILLU21R.jpeg'
  }, {
    id: 1,
    name: 'Felix Müller-Irion',
    notes: 'Odd obsession with everything',
    face: 'https://pbs.twimg.com/profile_images/455655543038697472/eLXrdbqe.jpeg'
  }, {
    id: 2,
    name: 'Felix von Looz',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/555407780924772352/4kp0r05i.jpeg'
  }, {
    id: 3,
    name: 'Bill Franklin',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479252332647968771/RhYCAbbg.jpeg'
  }, {
    id: 4,
    name: 'Lavaboom Support',
    notes: 'Just the nicest guys',
    face: 'https://pbs.twimg.com/profile_images/554705880910819329/udQg4Osq.png'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
