
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://cdn-2.cdp.pl/media/catalog/product/1/3/13916_0.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o lwie',
    img: 'https://i1.fdbimg.pl/zja8r5u1/1070x1500_ntfk9k.jpg'
  },
  {
    id: 3,
    title: 'Shrek',
    desc: 'Film o zielonym ogrze',
    img: 'https://i1.fdbimg.pl/ybu3hk/580x859_kl6pl1.jpg'
  },
  {
    id: 4,
    title: 'Madagaskar',
    desc: 'Film o egzotycznych zwięrzetach w zoo',
    img: 'https://i.pinimg.com/originals/64/2a/3e/642a3e292437f9ee0722b722a08e447e.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img',{src: movie.img})
    );
});



var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements))
ReactDOM.render(element, document.getElementById('app'));
