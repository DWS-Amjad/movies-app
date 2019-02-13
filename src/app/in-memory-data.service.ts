import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const movies = [
      {
        id: 1,
        "name": "Annihilation",
        "image": "/movies-app/assets/images/annihilation.jpg",
        "rating": "3",
        "genre": "Comedy",
        "summary": "Annihilation summary Annihilation summary Annihilation summary Annihilation summary Annihilation summary"
      },
      {
        id: 2,
        "name": "Black Panther",
        "image": "/movies-app/assets/images/blackPanther.jpg",
        "rating": "4",
        "genre": "Family",
        "summary": "Black Panther summary Black Panther summary Black Panther summary Black Panther summary Black Panther summary"
      },
      {
        id: 3,
        "name": "Blade Runner",
        "image": "/movies-app/assets/images/bladeRunner.jpg",
        "rating": "4",
        "genre": "Sci-Fi, Thriller",
        "summary": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator."
      },
      {
        id: 4,
        "name": "How to Train Your Dragon",
        "image": "/movies-app/assets/images/dragon.jpg",
        "rating": "4",
        "genre": "Animation, Action, Adventure",
        "summary": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."
      },
      {
        id: 5,
        "name": "Dunkirk",
        "image": "/movies-app/assets/images/dunkirk.jpg",
        "rating": "4",
        "genre": "Action, Drama, History",
        "summary": "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army, and evacuated during a fierce battle in World War II."
      },
      {
        id: 6,
        "name": "Get Out",
        "image": "/movies-app/assets/images/getOut.jpg",
        "rating": "4",
        "genre": "Horror, Mystery, Thriller",
        "summary": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
      },
      {
        id: 7,
        "name": "Iron Man",
        "image": "/movies-app/assets/images/ironMan.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Sci-Fi",
        "summary": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
      },
      {
        id: 8,
        "name": "Lady Bird",
        "image": "/movies-app/assets/images/ladyBird.jpg",
        "rating": "4",
        "genre": "Comedy, Drama",
        "summary": "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California."
      },
      {
        id: 9,
        "name": "Sherlock Holmes",
        "image": "/movies-app/assets/images/sherlockHolmes.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Crime",
        "summary": "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England."
      },
      {
        id: 10,
        "name": "Spider Man",
        "image": "/movies-app/assets/images/spiderMan.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Sci-Fi",
        "summary": "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
      },
      {
        id: 11,
        "name": "Star Wars",
        "image": "/movies-app/assets/images/starWars.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Fantasy",
        "summary": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
      },
      {
        id: 12,
        "name": "The Shape of Water",
        "image": "/movies-app/assets/images/theShapeOfWater.jpg",
        "rating": "4",
        "genre": "Adventure, Drama, Fantasy",
        "summary": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
      },
      {
        id: 13,
        "name": "Thor",
        "image": "/movies-app/assets/images/thor.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Fantasy",
        "summary": "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
      },
      {
        id: 14,
        "name": "Transformers",
        "image": "/movies-app/assets/images/transformers.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Sci-Fi",
        "summary": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth."
      },
      {
        id: 15,
        "name": "Wonder Woman",
        "image": "/movies-app/assets/images/wonderWoman.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Fantasy",
        "summary": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
      },
      {
        id: 16,
        "name": "X Men",
        "image": "/movies-app/assets/images/xMen.jpg",
        "rating": "4",
        "genre": "Action, Adventure, Sci-Fi",
        "summary": "In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to thrive through bringing destruction to the world."
      }
      ];
      return {movies};
  }
  // Overrides the genId method to ensure that a movie always has an id.
  // If the movies array is empty,
  // the method below returns the initial number (11).
  // if the movies array is not empty, the method below returns the highest
  // movie id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
