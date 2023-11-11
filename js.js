let numberOfFilms = +prompt('Nece kinoya baxmisiniz? ');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes:[],
    private: false
};

personalMovieDb.movies['ad'] = 4;

let cavab1 = prompt('Axrinci baxdigin film? ');
let cavab2 = +prompt('Bu kinonu nece bal ile qiymetlendirersiniz? ');

personalMovieDb.movies[cavab1] = cavab2;

console.log(personalMovieDb);