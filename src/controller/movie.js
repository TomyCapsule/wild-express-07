const { dataSource } = require("../utils");
const Movie = require("../entity/Movie");

const getMovies = async (req, res) => {
  try {
    const movies = await dataSource.getRepository(Movie).find();
    res.send(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something broke");
  }
};

const postMovie = async (req, res) => {
  console.log("hello", req.body);
  try {
    const newMovie = await dataSource.getRepository(Movie).save(req.body);
    res.send(newMovie);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something broke");
  }
};

module.exports = {
  getMovies,
  postMovie,
};
