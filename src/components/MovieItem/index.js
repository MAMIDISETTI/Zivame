// Write your code here
import './index.css'

const MovieItem = props => {
  // const url = 'https://image.tmdb.org/t/p/original'
  const {movieData} = props
  const {
    backdropPath,
    originalLanguage,
    originalTitle,
    overview,
    voteAverage,
  } = movieData
  return (
    <div className="images-container">
      <img
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt="backdropPath"
        className="image"
      />
      <div>
        <h1 className="images-heading">Language : {originalLanguage}</h1>
        <h1 className="images-title">Title : {originalTitle}</h1>
        <p className="images-desc">Desc : {overview}</p>
        <p>Rating : {voteAverage}</p>
      </div>
    </div>
  )
}
export default MovieItem
