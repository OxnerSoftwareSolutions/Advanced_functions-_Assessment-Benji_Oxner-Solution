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


//.find() -> it returns the first item (element) that matches a given condition, even if more than one item matches. If there is no match, find() returns undefined.
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)


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

//.some() -> The some() method accepts a callback function that implements a comparison that is executed for each item in the array, similar to the previous methods. If the callback function returns true for any item in the array, then the entire some() method returns true. -> return true or false

function userHasVisitedParkOnWishlist(users, username1, username2) {
  const user1 = users[username1].visited;
  const user2 = users[username2].wishlist;
  return user1.some((id) => user2.includes(id));
}

/* 
getUsersForUserWishlist
This function returns all the usernames who have visited any park on the given user's wish list.

getUsersForUserWishlist(users, "karah.branch3"); //> ["dwayne.m55"]
getUsersForUserWishlist(users, "dwayne.m55"); //> []
*/
//.map() -> this code processes each item in the array and creates a new value for each item in the original array. Each item in the original array maps to an item in the new array.-> returns an array
/* for...of
The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables. */
function getUsersForUserWishlist(users, username) {
  let usersForUserWishlist = [];//declaring variable for an empty array I can push my results into
  let userWishlist = users[username].wishlist;//object shorthand for userWishlist variable that represents an array of usernames that have that wishlist assigned to them. 
  for (const username in users) {//loop through the array of user
    if (userWishlist.some((id) => users[username].visited.includes(id))) {
     usersForUserWishlist.push(username);//push those results into the array usersForUserWishlist. 
    }
  } return usersForUserWishlist;
}
//or I could do something like this 
// function getUsersForUserWishlist(users, username) {
//   let userWishlist = users[username].wishlist;
//   let result = [];

//   for (const n in users) {
//     let u = users[n].visited;
//     if (u.some(item => userWishlist.includes(item))) result.push(n);
//   }
//   return result;
// }

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
