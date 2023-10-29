import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RecipeProvider} from  './Context.js'
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <RecipeProvider>
    <App />
    </RecipeProvider>
  </StrictMode>
);
