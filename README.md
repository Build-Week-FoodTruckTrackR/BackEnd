# The base URL for making requests is: 68.183.138.134

## Operater registration: operators/register

### Data expected

    {
    	username: string,
    	password: string
    }
    
### Data returned:

    {
    "username": "hoho9",
    "id": 13,
    "trucks_owned": [1, 3]
    }

## Current fake operators:
    { username: 'Amber', password:"lala", trucks_owned: [1] },
    { username: 'Billy', password:"lala", trucks_owned: [1, 2,] },
    { username: 'Chris', password:"lala", trucks_owned: [1, 2, 3] }

## To login an operator, make a post request to: 68.183.138.134/operators/login

### The data expected

    {
    	username: string,
    	password: string,
    }
   

### Data returned:

    {
    	token: string
    }

### Current fake diners:

     {
        username: 'Amy',
        password: "lala",
        longitude: -118.358078,
        latitude: 34.063381,
        favorite_trucks: [1] 
    },
    {   
        username: 'Bobby',
        password: "lala",
        longitude: -118.339058, l
        atitude: 34.083260, 
        favorite_trucks: [1, 2] 
    },
    { 
        username: 'Chau', 
        password: "lala", 
        longitude: -118.268112, 
        latitude: 34.089439, 
        favorite_trucks: [1, 2, 3] 
    }

## Diner Register: /diners/register

    Expects: {
        username: string,
        password: string,
        favorite_trucks: [integer]
    }

## Diner Login: /diners/login

    Expects: {
        "username": "hoho9",
        "password": "hehe",
        
    }
    Returns {
        token: string
    }

## Get Diners Favorite Trucks: /diners/favoriteTrucks
     expects just a get call from a logged in user

     Returns truck objects sorted in ascending order by distance, which is in miles
     rounded to the hundreds
        [
            {
                "id": 1,
                "longitude": -118.363,
                "latitude": 34.084,
                "arrival_time": "1583344585227",
                "departure_time": "1583344665727",
                "address": "7957 Melrose Ave, Los Angeles, CA 90046, USA",
                "cuisine": "asian",
                "img_url": "https://s.abcnews.com/images/US/dog-food-truck-01-ht-jef-191010_hpEmbed_16x9_992.jpg",
                "customer_rating_avg": 3.5,
                "distance": 1.37
            },
            {
                "id": 2,
                "longitude": -118.319,
                "latitude": 34.0409,
                "arrival_time": "1583344580727",
                "departure_time": "1583344765727",
                "address": "2529 W 18th St, Los Angeles, CA 90019, USA",
                "cuisine": "vegetarian",
                "img_url": "https://www.rd.com/wp-content/uploads/2018/11/food-truck-2.jpg",
                "customer_rating_avg": 2.667,
                "distance": 3.15
            }
        ]

## Trucks owned by operator: GET /operators/trucks
    Logged in operator gets returned an array of truck objects owned by them.

    example:
        [
            {
                "cuisine": "asian",
                "img_url": "https://s.abcnews.com/images/US/dog-food-truck-01-ht-jef-191010_hpEmbed_16x9_992.jpg",
                "customer_rating_avg": 3.5,
                "id": 1
            },
            {
                "cuisine": "vegetarian",
                "img_url": "https://www.rd.com/wp-content/uploads/2018/11/food-truck-2.jpg",
                "customer_rating_avg": 2.667,
                "id": 2
            }
        ]

## Add truck: POST /trucks
    Only reqires a cusine and a current_loction, which can be a number from 1 to 3
    expects [
    {
        "id": 4,
        "images": null,
        "img_url": null,
        "cuisine": "Chau",
        "customer_ratings": null,
        "customer_rating_avg": null,
        "menu": null,
        "current_location": 1,
        "next_location": null
    }

    returns {
        [
    {
        "id": 4,
        "images": null,
        "img_url": null,
        "cuisine": "Chau",
        "customer_ratings": null,
        "customer_rating_avg": null,
        "menu": null,
        "current_location": 1,
        "next_location": null
    }
]
    }
]

## Kenji
    Diners: get request to http://68.183.138.134/diners returns:

    [
        {
            "id": 1,
            "username": "Amy",
            "password": "$2a$10$U3bPeaHQ1mDcmg6Lw4tMLuiTxlkigdLnFz7glY8gTv.t10JwQbcIG",
            "longitude": -118.358,
            "latitude": 34.0634,
            "favorite_trucks": [
                1
            ]
        },
        {
            "id": 2,
            "username": "Bobby",
            "password": "$2a$10$U3bPeaHQ1mDcmg6Lw4tMLuiTxlkigdLnFz7glY8gTv.t10JwQbcIG",
            "longitude": -118.339,
            "latitude": 34.0833,
            "favorite_trucks": [
                1,
                2
            ]
        },
        {
            "id": 3,
            "username": "Chau",
            "password": "$2a$10$U3bPeaHQ1mDcmg6Lw4tMLuiTxlkigdLnFz7glY8gTv.t10JwQbcIG",
            "longitude": -118.268,
            "latitude": 34.0894,
            "favorite_trucks": [
                1,
                2,
                3
            ]
        }
    ]

    Operators: get request to http://68.183.138.134/operators returns

    [
        {
            "id": 1,
            "username": "Amber",
            "password": "$2a$10$U3bPeaHQ1mDcmg6Lw4tMLuiTxlkigdLnFz7glY8gTv.t10JwQbcIG",
            "trucks_owned": [
                1
            ]
        },
        {
            "id": 2,
            "username": "Billy",
            "password": "$2a$10$U3bPeaHQ1mDcmg6Lw4tMLuiTxlkigdLnFz7glY8gTv.t10JwQbcIG",
            "trucks_owned": [
                1,
                2
            ]
        },
        {
            "id": 3,
            "username": "Chris",
            "password": "$2a$10$U3bPeaHQ1mDcmg6Lw4tMLuiTxlkigdLnFz7glY8gTv.t10JwQbcIG",
            "trucks_owned": [
                1,
                2,
                3
            ]
        }
    ]

    Trucks: get request to http://68.183.138.134/trucks returns
    [
        {
            "id": 1,
            "images": null,
            "img_url": "https://s.abcnews.com/images/US/dog-food-truck-01-ht-jef-191010_hpEmbed_16x9_992.jpg",
            "cuisine": "asian",
            "customer_ratings": [
                4,
                3
            ],
            "customer_rating_avg": 3.5,
            "menu": null,
            "current_location": 1,
            "next_location": 1
        },
        {
            "id": 2,
            "images": null,
            "img_url": "https://www.rd.com/wp-content/uploads/2018/11/food-truck-2.jpg",
            "cuisine": "vegetarian",
            "customer_ratings": [
                4,
                1,
                3
            ],
            "customer_rating_avg": 2.667,
            "menu": null,
            "current_location": 2,
            "next_location": 2
        },
        {
            "id": 3,
            "images": null,
            "img_url": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F7%2F9%2F0%2F2%2F20722097-1-eng-GB%2F190315_6845re1.jpg?source=nar-cms",
            "cuisine": "ice cream",
            "customer_ratings": [
                4,
                3,
                5
            ],
            "customer_rating_avg": 4,
            "menu": null,
            "current_location": 3,
            "next_location": 3
        }
    ]

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
