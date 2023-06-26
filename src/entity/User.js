const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: 'User',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        firstname: {
            type: 'text'
        },
        lastname: {
            type: 'text'
        },
        email: {
            type: 'text'
        },
        city: {
            type: 'text',
            nullable: true
        },
        language: {
            type: 'text'
        },
        hashedPassword: {
            type: 'text'
        },
    }
});