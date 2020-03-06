
exports.up = function (knex) {
    return knex.schema
        .createTable('operators', tbl => {
            tbl.increments();
            tbl.text('username', 128)
                .unique()
                .notNullable();
            tbl.text('password', 128)
                .notNullable()
            tbl.specificType('trucks_owned', 'integer ARRAY')
        })

        .createTable('diners', tbl => {
            tbl.increments();
            tbl.text('username', 128)
                .unique()
                .notNullable();
            tbl.text('password', 128)
                .notNullable()
            tbl.float('longitude')
            tbl.float('latitude')
                .defaultTo(null)
            tbl.specificType('favorite_trucks', 'integer ARRAY');
        })

        .createTable('menu_items', tbl => {
            tbl.increments()
            tbl.text('item_name')
                .notNullable()
            // tbl.specificType('item_photos', 'binary ARRAY')
            tbl.specificType('item_photo_urls', 'text ARRAY')
            tbl.float('item_price')
                .notNullable()
            tbl.specificType('customer_ratings', 'integer ARRAY')
            tbl.float('customer_ratings_avg')

        })

        .createTable('truck_locations', tbl => {
            tbl.increments()
            tbl.float('longitude')
            tbl.float('latitude')
            tbl.biginteger('arrival_time')
            tbl.biginteger('departure_time')
        })

        .createTable('possible_next_locations', tbl => {
            tbl.increments()
            tbl.float('longitude')
            tbl.float('latitude')
        })

        .createTable('trucks', tbl => {
            tbl.increments()
            tbl.binary('images')
            tbl.text('img_url')
            tbl.text('cuisine', 128)
                .notNullable()
            tbl.specificType('customer_ratings', 'integer ARRAY')
            tbl.float('customer_rating_avg')
            tbl.specificType('menu', 'integer ARRAY')
            tbl.integer('current_location')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('truck_locations')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('next_location')
                .unsigned()
                .references('id')
                .inTable('possible_next_locations')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('operators')
        .dropTableIfExists('diners')
        .dropTableIfExists('menu_items')
        .dropTableIfExists('trucks')
        .dropTableIfExists('possible_next_locations')
        .dropTableIfExists('truck_locations')
};
