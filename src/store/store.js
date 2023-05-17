import { configureStore } from '@reduxjs/toolkit';

import { titleCinemaReducer } from '../modules/TitleCinema';
import { infoCinemaReducer } from '../modules/InfoCinema';
import { infoSessionReducer } from '../modules/InfoSession';
import { listCinemasReducer } from '../modules/ListCinemas';
import { listSessionsReducer } from '../modules/ListSessions';

export const store = configureStore({
  reducer: {
    titleCinema: titleCinemaReducer,
    infoCinema: infoCinemaReducer,
    infoSession: infoSessionReducer,
    listCinemas: listCinemasReducer,
    listSessions: listSessionsReducer,
  },
});
