const { dataSource } = require('../utils');
const User = require('../entity/User');

const postUser = async (req, res) => {
    console.log("hello",req.body);
        try{
            const newUser = await dataSource
                .getRepository(User)
                .save(req.body);
            res.send(newUser);
        }catch(err){
            console.error(err);
            res.status(500).send('Something broke');
        }
};

const updateUser = async (req, res) => {
    try{
        const userRepository = dataSource.getRepository(User);
        const userToUpdate = await userRepository
            .findOneBy({
                id: req.body.id
            });
        userToUpdate.city = req.body.city;
        await userRepository.save(userToUpdate);
        res.send('update successful');
    }catch(err){
        console.error(err);
        res.status(500).send('Something broke');
    }
};

module.exports = {
  postUser,
  updateUser,
};
