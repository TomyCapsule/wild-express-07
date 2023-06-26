const typeorm = require('typeorm');

module.exports = {
    dataSource: new typeorm.DataSource({
        type: 'sqlite',
        database: './user.sqlite',
        synchronize: true,
        entities: [require('./entity/User')],
        logging: ["query", "error"]
    })
}
