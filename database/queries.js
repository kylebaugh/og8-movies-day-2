import {User, Movie, Rating, db} from '../database/model.js'

await db.sync({force:true});

// const testUser = await User.create({ email: '2test@email.com', password: 'test' });
// console.log(testUser);

// const testMovie = await Movie.create({title: 'Logan', overview: 'Best movie ever'})

// console.log(testMovie)

// const testRating = await Rating.create({ score: 5 });
// console.log(testRating);

const testUser = await User.create({ email: 'test@email.com', password: 'test' });
const testMovie = await Movie.create({ title: 'Test Movie' });

await testUser.createRating({
    score: 5,
    movieId: testMovie.movieId
  });

const testRatings = await testMovie.getRatings()

console.log(testRatings)