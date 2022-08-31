import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Home from '../pages/Home';
import NotFound from '../pages/404';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/">
               <Route index element={<NotFound />} />
            </Route>
            <Route path="/login">
               <Route index element={<Login />} />
            </Route>
            <Route path="/register">
               <Route index element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
