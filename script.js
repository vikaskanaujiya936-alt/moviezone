function openMovie() {
    window.location.href = "movie.html";
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase();
        const movies = document.querySelectorAll(".movie-card");

        movies.forEach(function (movie) {

            const movieName = movie.querySelector("h3").textContent.toLowerCase();

            if (movieName.includes(searchText)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }

        });
    });
}
function addToWatchlist() {

    localStorage.setItem("watchlistMovie", "Avengers");

    alert("Avengers added to your Watchlist! ❤️");

    window.location.href = "watchlist.html";
}
function filterMovies(genre) {

    const movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {

        const movieGenre = movie.querySelector(".genre").textContent.trim();

        if (genre === "all" || movieGenre === genre) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });
}
function filterMovies(genre) {

    const movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {

        const movieGenre = movie.querySelector(".genre").textContent.trim();

        if (genre === "all" || movieGenre === genre) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });
}
function logoutUser() {
    alert("You have been logged out!");
    window.location.href = "login.html";
}
function watchTrailer() {
    alert("Trailer feature coming soon! 🎬");
}
function rateMovie(rating) {

    localStorage.setItem("movieRating", rating);

    document.getElementById("ratingMessage").textContent =
        "You rated this movie " + rating + "/5 ⭐";

}
function submitReview() {

    const review = document.getElementById("reviewText").value;

    if (review.trim() === "") {
        alert("Please write a review first!");
        return;
    }

    document.getElementById("reviewMessage").textContent =
        "Review submitted successfully! ⭐";

    document.getElementById("reviewText").value = "";
}