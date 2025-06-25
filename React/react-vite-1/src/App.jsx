import './App.css';
import Card from "./components/Card.jsx";

const movies = [
  {
    poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    name: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over years, finding hope and redemption through acts of decency.',
    rating: 9.3
  },
  {
    poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space to ensure humanity’s survival.',
    rating: 8.6
  },
  {
    poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    name: 'Inception',
    description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
    rating: 8.8
  },
  {
    poster: 'https://m.media-amazon.com/images/I/61cWz-dJYGL._AC_SY679_.jpg',
    name: 'Forrest Gump',
    description: 'The story of a simple man who unwittingly influences major historical events.',
    rating: 8.8
  },
  {
    poster: 'https://m.media-amazon.com/images/I/51k0qa6zY-L._AC_SY679_.jpg',
    name: 'Fight Club',
    description: 'An insomniac office worker forms an underground fight club with a mysterious man.',
    rating: 8.8
  },
  {
    poster: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
    name: 'The Matrix',
    description: 'A hacker discovers the reality he lives in is a simulation and joins a rebellion.',
    rating: 8.7
  },
  {
    poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    name: 'The Prestige',
    description: 'Two rival magicians battle for supremacy using obsession and illusion.',
    rating: 8.5
  },
  {
    poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
    name: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind bent on chaos in Gotham City.',
    rating: 9.0
  },
  {
    poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
    name: 'Gladiator',
    description: 'A Roman general seeks vengeance after being betrayed and losing his family.',
    rating: 8.5
  },
  {
    poster: 'https://m.media-amazon.com/images/I/61snHceU9zL._AC_SY741_.jpg',
    name: 'Whiplash',
    description: 'A young drummer enrolls at a cut-throat music conservatory with a ruthless instructor.',
    rating: 8.5
  }
];

function App() {

  return (
    <>
      {
        movies.map((movie, inx) => (
          <Card key={inx} src={movie.poster}
          rating = {movie.rating} name={movie.name}></Card>
        ))
      }
    </>
  )
}


export default App
