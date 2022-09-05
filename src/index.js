import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import UserProvider from './context/UserProvider';
import Inicio from './routes/Inicio';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Post from './routes/Post';
import NoEncontrada from './routes/NoEcontrada';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App/>}>

            <Route index element={<Inicio/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog/:id' element={<Post/>}/>
            <Route path='contacto' element={<Contacto/>}/>

            <Route path='*' element={<NoEncontrada/>}/>

          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
);


