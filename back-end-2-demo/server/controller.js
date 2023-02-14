// module.exports = {
//     apple : "Apple"
// }
let movieData = require('./db.json')
let movieId = 11

module.exports = {
    getMovies : (req,res) => {
        res.status(200).send(movieData)
    },
    addMovie : (req,res) => {
        let newMovie = {...req.body, id:movieId}
        // console.log(newMovie)
        movieData.push(newMovie)
        res.status(200).send(movieData)
        movieId++
    },
    updateRating : (req,res) => {
        console.log(req.body)
        console.log(req.params)
        let {type} = req.body
        let {id} = req.params
        let index = movieData.findIndex(movies => movies.id === +id)
        if(type === "minus" && movieData[index].rating >1){
            movieData[index].rating--
        }else if(type === "plus" && movieData[index].rating < 5){
            movieData[index].rating++
        }
        res.status(200).send(movieData)
    },
    deleteMovie: (req,res) => {
        let {id} = req.params

        // let index = movieData.findIndex(movies => movie.id === +id)
        // movieData.splice(index,1)
        movieData = movieData.filter(movies => movies.id !== +id)

        res.status(200).send(movieData)
    }
}