// import the Media class:
const Media = require("./Media")

// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length,) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(musicCollection) {
        if (!Array.isArray(musicCollection)) {
            throw new Error("Input must be an array");
        }
    
        if (musicCollection.length === 0) {
            throw new Error("Music collection is empty");
        }
    
        let shortest = musicCollection[0];

        for (let music of musicCollection) {
            if (typeof music.length !== "number") {
                throw new Error("Invalid music length found in collection");
            }
            if (music.length < shortest.length) {
                shortest = music;
            }
        }

        return shortest
    }
}

// don't change below
module.exports = Music;

const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949)
const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734)
Music.shortestAlbum([music1, music2])
