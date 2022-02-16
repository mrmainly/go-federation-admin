import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Layout from './layout'
import { HomePage, Tourney, Users } from './pages'
import { ROUTES } from './types';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.TOURNEY} element={<Tourney />} />
          <Route path={ROUTES.USERS} element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
