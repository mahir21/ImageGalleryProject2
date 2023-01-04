/*
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from  'react';
import { Container } from 'postcss';
import ImageCard from './components/imagecard.js';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  
  /*useEffect(() => {
      fetch(`https://pixabay.com/api//?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

  }, []);

  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
   
image card componenet will store the value and display the result value
  return (
   

       <div className = "container mx-auto">

        <div className = "grid grid-cols3 gap-4">
          {images.map( image => (
            <ImageCard key = {image.id} image = {image}/>
          ))}
        </div>

        

       </div>
   );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import ImageCard from './components/imagecard';
import ImageSearch from './components/imageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText = {(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Image Is Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}


      </div>}
    </div>
  );
}

export default App;

