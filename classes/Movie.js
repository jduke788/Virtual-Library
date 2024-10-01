// import the Media class:
const Media = require("./Media")
// create your Movie class:
class Movie extends Media {
    constructor(title, genre, year, director, duration, rating) {
        super(title, genre, year)
        this.director = director
        this.duration = duration
        this.rating = rating
    }
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movies) {
        if (!Array.isArray(movies) || movies.length === 0) {
            throw new Error('The input should be a non-empty array of Movie objects')
        }

        return movies.reduce((longest, movie) => {
            return movie.duration > longest.duration ? movie : longest;
        });
        

}
}
// don't change below
module.exports = Movie;