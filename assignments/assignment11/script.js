
const getMovies = async () => {
  const url = "https://portiaportia.github.io/json/movies.json";

  try {
    const link = await fetch(url); 
    console.log(link); 
    return await link.json();
  } catch(error) {
    console.log(error); 
  }
};

const showMovies = async () => {
  let movies = await getMovies(); 
  let moviesSection = document.getElementById("main-content");

  let h1 = document.createElement("h1");
  h1.innerText = "Movies";
  
  movies.forEach(movie => {
    moviesSection.append(getMoviesItem(movie))
  });
};

const getMoviesItem = (movie) => {
 
  
  let section = document.createElement("div");
  section.classList.add("movie");

  const img = document.createElement("img"); 
  img.src = "https://portiaportia.github.io/json/"+movie.img;
  section.append(img);

  let ul = document.createElement("ul");
  section.append(ul);
  ul.append(getLi("Title: ",movie.title));
  ul.append(getLi("Director: ",movie.director));
  ul.append(getLi("Actors: ",movie.actors));
  ul.append(getLi("Year Realased: ",movie.year));
  ul.append(getLi("Genres: ",movie.genres));
  ul.append(getLi("",movie.description));

  return section;
};

const getLi = (label, data) => {
  const li = document.createElement("li");
  li.textContent = label + data;
  return li;
}

window.onload = () => showMovies(); 