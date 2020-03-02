exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('trucks')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('trucks').insert([
                {
                    img_url: 'https://s.abcnews.com/images/US/dog-food-truck-01-ht-jef-191010_hpEmbed_16x9_992.jpg',
                    cuisine: "asian",
                    // longitude: -118.358078,
                    // latitude: 34.063381,
                    customer_ratings: [4, 3],
                    customer_rating_avg: 3.5,
                    current_location: 1,
                    next_location: 3
                },
                {
                    img_url: 'https://www.rd.com/wp-content/uploads/2018/11/food-truck-2.jpg',
                    cuisine: "vegetarian",
                    // longitude: -118.339058,
                    // latitude: 34.083260,
                    customer_ratings: [4, 1, 3],
                    customer_rating_avg: 2.667,
                    current_location: 2,
                    next_location: 1
                },
                {
                    img_url: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F7%2F9%2F0%2F2%2F20722097-1-eng-GB%2F190315_6845re1.jpg?source=nar-cms',
                    cuisine: "ice cream",
                    // longitude: -118.268112,
                    // latitude: 34.089439,
                    customer_ratings: [4, 3, 5],
                    customer_rating_avg: 4,
                    current_location: 3,
                    next_location: 2
                }
            ]);
        });
};
