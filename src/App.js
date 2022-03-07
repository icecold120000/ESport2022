import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Accueil/Homepage";
import Leagues from "./components/Ligues/Leagues";
import Series from "./components/Series/Series";
import Teams from "./components/Equipe/Teams";
import Players from "./components/Joueurs/Players";
import Matches from "./components/Matchs/Matches";
import NoMatch from "./components/Errors/NoMatch";
import Login from "./components/Accueil/Login";
import NavBar from "./components/NavBar";
import League from "./components/Ligues/League";
import Serie from "./components/Series/Serie";
import Team from "./components/Equipe/Team"
import Player from "./components/Joueurs/Player";
import Match from "./components/Matchs/Match";
import Games from "./components/Jeux/Games";
import Game from "./components/Jeux/Game";

function App() {
  return (
      <div className="App">
          <NavBar />
          <Routes>
              <Route path="/" index element={<Homepage />}/>
              <Route path="/leagues" element={<Leagues />}/>
                <Route path="/leagues/:id" element={<League />} />
              <Route path="/series" element={<Series/>}/>
                <Route path="/series/:id" element={<Serie />}/>
              <Route path="/teams" element={<Teams/>}/>
                <Route path="/teams/:id" element={<Team />}/>
              <Route path="/players" element={<Players/>}/>
                <Route path="/players/:id" element={<Player />}/>
              <Route path="/matches" element={<Matches/>}/>
                <Route path="/matches/:id" element={<Match />}/>
              <Route path="/games" element={<Games/>}/>
                <Route path="/games/:id" element={<Game />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="*" element={<NoMatch />}/>
          </Routes>
      </div>
  );
}

export default App;
