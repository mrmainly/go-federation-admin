import React, { useReducer } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Layout from './layout'
import { Tournaments, Users, CreateTournaments } from './pages'
import { ROUTES } from './types';
import { DispatchContext, StateContext, defaultStore } from './store'
import { stateReducer } from './reducer'

function App() {
  const [state, dispatch] = useReducer(stateReducer, defaultStore)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.USERS} element={<Layout />}>
              <Route index element={<Users />} />
              <Route path={ROUTES.TOURNAMENTS} element={<Tournaments />} />
              <Route path={ROUTES.CREATETOURNAMENTS} element={<CreateTournaments />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </DispatchContext.Provider >
  );
}

export default App;
