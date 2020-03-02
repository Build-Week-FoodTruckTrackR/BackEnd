# The base URL for making requests is: 68.183.138.134

## To register an operator, make a post request to: 68.183.138.134/operators/register

### The data expected

    {
    	username: string,
    	password: string,
    	trucks_owned: [integer]
    }
    trucks_owned can choose from 1 to 3, since this refers ids of currently registered trucks

### Data returned:

    {
    "username": "hoho9",
    "id": 13,
    "trucks_owned": [1, 3]
	}

## To login an operator, make a post request to: 68.183.138.134/operators/register

### The data expected

    {
    	username: string,
    	password: string,
    }
    trucks_owned can choose from 1 to 3, since this refers ids of currently registered trucks

### Data returned:

    {
    	token: string
	}

# BackEnd

1. User can register/create an account as either a `operator` or `diner` by providing, at a minumum, a unique `username`, a valid `email` and a strong `password`. (mobile, web)
2. User can log in as an `operator` or `diner` using the `username` and `password` provided on signup/account creation. (mobile, web)
   - each `diner` must have, at a minimum, the following properties: 1. `username`: String 2. `password`: String 3. `currentLocation`: GPS coordinates _or_ physical address 4. `favoriteTrucks`: Array of the `diner`s favorite trucks
   - each `operator` must have, at a minimum, the following properties: 1. `username`: String 2. `password`: String 3. `trucksOwned`: Array of `truck`s that the operator owns
3. Authenticated `operator` can create, view, update and delete a `truck` object. A `truck` must have, at a minimum, the following properties: (web, mobile)

   - `imageOfTruck`: Image or image URL
   - `cuisineType`: String
   - `customerRatings`: Array of all `customerRating` values
   - `customerRatingAvg`: Integer equal to the mean of the values contained in the `truck`s `customerRatings` array.

   - `menu`: [menuItems] - a `menuItem` object musty have, at a minimum, the following properties: 1. `itemName`: String 2. `itemDescription`: String 3. `item photos`: an Array of images or image URLs 4. `itemPrice`: Double or Float 5. `customerRatings`: Array of all `customerRating` values 6. `customerRatingAvg`: Integer equal to the mean of the values contained in the `customerRatings` array.
   - `currentLocation`: This object must have, at a minimum, the following properties: 1. `location`: GPS coordinates or physical address of the current location of the `truck`. 2. `departureTime`: Datetime that the `truck` will depart the `currentLocation`
   - `nextLocation`: optional. Object must have, at a minimum, the following properties: 1. `location`: GPS coordinates or address of the next location that the `truck` will go. 2. `arrivalTime`: Datetime, the estimated/scheduled time the `truck` should arrive at the current `nextLocation`. 3. `departureTime`: Datetime that the `truck` is scheduled to depart the `nextLocation`

4. Authenticated `diner` can search for `trucks` by the following criteria: (mobile, web)
   - `trucks` near the `diner`'s `currentLocation`. Query should return all `truck`s with a `currentLocation` within the default `radSize`.
   - results must also be filterable by the following properties: 1. `cuisineType` of a `truck` 2. `customerRatingAvg` of a `truck` 3. `radSize`: desired radius distance from `user`'s `currentLocation` (should use the default value for `radSize` if not specified by `diner`)
5. Authenticated `diner` can view search query results as either a List or a map with annotations/pins. (mobile)
6. Authenticated `diner` can input a `customerRating` for a `truck` or a `menuItem` and it will be added to the appropriate `customerRatings` Array. (mobile)
7. Authenticated `diner` can view, add and delete `truck`s in their `favoriteTrucks` Array. (mobile)
