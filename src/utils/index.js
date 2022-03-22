export const addMovie = async (movieId, movieTitle, moviePoster, format) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}movie`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: movieId,
                title: movieTitle,
                poster: moviePoster,
                format: format,
            }),
        });
        // const data = await response.json();
        // setter(data.movie);
    } catch (error) {
        console.log(error);
    }
};