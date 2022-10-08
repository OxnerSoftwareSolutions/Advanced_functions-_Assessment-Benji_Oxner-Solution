/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }

 const parks = [
    {
      id: 1,
      name: "Acadia",
      areaInSquareKm: 198.6,
      location: { state: "Maine" },
    },
    {
      id: 2,
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      id: 3,
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      id: 4,
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      id: 5,
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      id: 6,
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];



*/

/* 
getParksByState
This function takes in an array of parks and a specific state and returns all the parks that are in that state.

getParksByState(parks, "Utah");
/*
  [
    {
      id: 2,
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    }
  ]
*/
function getParksByState(parks, state) {
 return parks.filter((park) => park.location.state === state);
}



/* 
const users = {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    },
    "dwayne.m55": {
      visited: [2, 5, 1],
      wishlist: [],
    },
    thiagostrong1: {
      visited: [5],
      wishlist: [6, 3, 2],
    },
    "don.kim1990": {
      visited: [6, 2, 3, 4],
      wishlist: [1],
    }
  };
*/
// getWishlistParksForUser
// This function takes in an array of parks, all users, and a username. It then returns an array of park objects related to the wishlist of the user with that username. Each number in the wishlist refers to the id of one of the parks.

// getWishlistParksForUser(parks, users, "karah.branch3");
/*
  [
    {
      id: 1,
      name: "Acadia",
      areaInSquareKm: 198.6,
      location: { state: "Maine" },
    }
  ]
*/
function getWishlistParksForUser(parks, users, username) {
  return parks.filter((park) => users[username].wishlist.includes(park.id))}

  /* 
  userHasVisitedAllParksInState
This function returns a boolean that represents whether or not a user has visited all parks in the parks array from a given state.
  */

function userHasVisitedAllParksInState(parks, users, state, username) {
  return getParksByState(parks, state).every((park) => users[username].visited.includes(park.id));
  
}
/* 
userHasVisitedParkOnWishlist
This function takes in the list of users and two usernames. If the first user has visited any of the parks represented by the second user's wish list, return true. Otherwise, return false.
*/
/* 
const users = {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    },
    "dwayne.m55": {
      visited: [2, 5, 1],
      wishlist: [],
    },
    thiagostrong1: {
      visited: [5],
      wishlist: [6, 3, 2],
    },
    "don.kim1990": {
      visited: [6, 2, 3, 4],
      wishlist: [1],
    }
  };
*/
function userHasVisitedParkOnWishlist(users, username1, username2) {
  const user1 = users[username1].visited;
  const user2 = users[username2].wishlist;
  return user1.some((id) => user2.includes(id));
}

/* 
getUsersForUserWishlist
This function returns all the usernames who have visited any park on the given user's wish list, return true if they have otherwise, return false.
*/

function getUsersForUserWishlist(users, username1, username2) {
}


module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
