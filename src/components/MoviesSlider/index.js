import {Component} from 'react'
import MovieItem from '../MovieItem'
import './index.css'

class MoviesSlider extends Component {
  state = {
    moviesData: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const apiUrl =
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fc1fe2057de10ef56a82e0c695025159'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(eachItem => ({
      backdropPath: eachItem.backdrop_path,
      originalLanguage: eachItem.original_language,
      originalTitle: eachItem.original_title,
      overview: eachItem.overview,
      voteAverage: eachItem.vote_average,
      id: eachItem.id,
    }))
    this.setState({moviesData: updatedData})
  }

  render() {
    const {moviesData} = this.state

    return (
      <div className="container">
        {moviesData.map(item => (
          <MovieItem movieData={item} key={item.id} />
        ))}
      </div>
    )
  }
}
export default MoviesSlider
