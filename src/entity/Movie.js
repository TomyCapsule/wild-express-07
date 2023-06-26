const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: 'Movie',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'text'
        },
        director: {
            type: 'text'
        },
        year: {
            type: 'text'
        },
        color: {
            type: 'text'
        },
        duration: {
            type: 'int'
        },
    }
});