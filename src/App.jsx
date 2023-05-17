import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/Main';
import CinemaPage from './pages/Cinema';
import FilmPage from './pages/Film';
import FilmCreatePage from './pages/FilmCreate';
import SessionCreatePage from './pages/SessionCreate';
import CinemaCreatePage from './pages/CinemaCreate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index exact path="/" element={<MainPage />} />
        <Route path="/cinema/:id" element={<CinemaPage />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route strict exact path="/film/create/" element={<FilmCreatePage />} />
        <Route strict exact path="/session/create/" element={<SessionCreatePage />} />
        <Route strict exact path="/cinema/create/" element={<CinemaCreatePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
