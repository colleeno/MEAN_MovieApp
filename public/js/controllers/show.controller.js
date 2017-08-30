angular.module('movieApp')
.controller('MovieShowController', [
  'Movie',
  '$stateParams',
  MovieShowController
])

function MovieShowController (Movie, $stateParams) {
  this.movie = Movie.get({ _id: $stateParams._id })
}