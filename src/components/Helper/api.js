import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
	api_key: '2ff9a7877124052bc83acc6f7ff7b1da',
	include_adult: false,
	language: 'en-US',
};

export const fetchTrendMovies = async () => {
	const response = await axios.get('/trending/movie/day');
	return response.data.results;
};

export const fetchMovieByQuery = async query => {
	const response = await axios.get(`/search/movie?query=${query}`);
	return response.data;
};

export const fetchMovieDetails = async movieId => {
	const response = await axios.get(`/movie/${movieId}`);
	return response.data;
};

export const fetchMovieCast = async movieId => {
	const response = await axios.get(`/movie/${movieId}/credits`);
	return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
	const response = await axios.get(`/movie/${movieId}/reviews`);
	return response.data.results;
};
