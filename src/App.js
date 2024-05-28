import React from 'react'
import Home from './Home';
import MovieDetails from './MovieDetails'
import Error from "./Error"
import { Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </>
  )
};

export default App