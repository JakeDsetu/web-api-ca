import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getTopRated, getPopular, getNowPlaying, getUpcoming, getMovieImages } from '../tmdb-api'; 

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/top_rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRated();
    res.status(200).json(topRatedMovies);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopular();
    res.status(200).json(popularMovies);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlaying();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcoming();
    res.status(200).json(upcomingMovies);
}));

router.get('/images', asyncHandler(async (req, res) => {
    const movieImages = await getMovieImages();
    res.status(200).json(movieImages);
}));



export default router;

