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
*/

function getParksByState(parks, state) {
  return parks.filter((park) => park.location.state === state);
}

function getWishlistParksForUser(parks, users, userName) {
  const userWishList = Object.keys(users).includes(userName)
    ? users[userName].wishlist
    : [];
  return parks.filter((park) => userWishList.includes(park.id));
}

function userHasVisitedAllParksInState(parks, users, state, userName) {
  let parksInState = [];
  parks.filter((park) => {
    if (park.location.state.includes(state)) {
      parksInState.push(park.id);
    }
  });
  let visitedInState = [];
  parks.filter((park) => {
    if (
      park.location.state.includes(state) &&
      users[userName].visited.includes(park.id)
    ) {
      visitedInState.push(park.id);
    }
  });
  return JSON.stringify(visitedInState) === JSON.stringify(parksInState);
}

function userHasVisitedParkOnWishlist(users, userName1, userName2) {
  return JSON.stringify(users[userName2].wishlist).includes(
    JSON.stringify(users[userName1].visited)
  );
}

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

function getUsersForUserWishlist(users, userName) {
  const wish = users[userName].wishlist;
  return Object.entries(users)
    .filter((entry) => {
      const visited = entry[1].visited;
      return visited.some((id) => wish.includes(id));
    })
    .map((names) => names[0]);
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
