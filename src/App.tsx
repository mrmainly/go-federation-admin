import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Layout from './layout'
import { Tournaments, Users, CreateTournaments } from './pages'
import { ROUTES } from './types';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.USERS} element={<Layout />}>
          <Route index element={<Users />} />
          <Route path={ROUTES.TOURNAMENTS} element={<Tournaments />} />
          <Route path={ROUTES.CREATETOURNAMENTS} element={<CreateTournaments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
