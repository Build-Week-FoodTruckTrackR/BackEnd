exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('menu_items')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('menu_items').insert([
                {
                    item_name: 'Iced cream',
                    item_price: 3.13,

                    item_photo_urls: ['https://www.rotinrice.com/wp-content/uploads/2011/08/MatchaIceCream-1.jpg'],
                    customer_ratings: [3, 4, 5],
                    customer_ratings_avg: 4
                },
                {
                    item_name: 'Fig burger',
                    item_price: 8.75,

                    item_photo_urls: ['http://farm4.staticflickr.com/3696/9236132200_e4bc8fac33_o.jpg'],
                    customer_ratings: [3],
                    customer_ratings_avg: 3
                },
                {
                    item_name: 'Vegetarian doodoo',
                    item_price: 18.90,

                    item_photo_urls: ['https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/05/mint-and-basil-griddled-peach-salad-1-440-400.jpg', 'https://blog.busuu.com/wp-content/uploads/2019/02/how-to-say-vegan-vegetarian-different-languages-696x464.jpg'],
                    customer_ratings: [3, 4],
                    customer_ratings_avg: 3.5
                }
            ]);
        });
};