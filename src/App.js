// import React, { useContext, useState } from 'react';
// import { RecipeContext } from './Context';

// function App() {
//   // Consume the RecipeContext
//   const {
//     recipes,
//     handleSearch,
//     favorites,
//     addToFavorites,
//     removeFromFavorites,
//   } = useContext(RecipeContext);

//   const [searchInput, setSearchInput] = useState(''); // Local state for the search input
//   const [currentView, setCurrentView] = useState('homepage');

//   const handleSwitch = (view) => {
//     setCurrentView(view);
//   };

//   const handleSearchChange = (e) => {
//     const searchText = e.target.value;
//     setSearchInput(searchText); // Update the local state with the search text
//     // Trigger the search functionality from the context in real-time as the user types
//     handleSearch(searchText);
//   };

//   return (
//     <div className="App">
//       <button onClick={() => handleSwitch('homepage')}>Home</button>
//       <button onClick={() => handleSwitch('favorites')}>Favorites</button>

//       {currentView === 'homepage' && (
//         <div>
//           <h1>Homepage</h1>
//           <h1>Recipe Finder</h1>
//           <div>
//             <input
//               type="text"
//               placeholder="Search for recipes"
//               value={searchInput}
//               onChange={handleSearchChange} // Real-time search as the user types
//             />
//           </div>

//           {/* Display recipes from the context */}
//           {recipes && recipes.map((recipe) => (
//             <div key={recipe.recipe.uri}>
//               <h2>{recipe.recipe.label}</h2>
//               <button onClick={() => addToFavorites(recipe)}>Add</button>
//               <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//             </div>
//           ))}
//         </div>
//       )}

//       {currentView === 'favorites' && (
//         <div>
//           <h1>Favorites</h1>
//           {/* Render your favorites content here, using the 'favorites' state */}
//           {favorites && favorites.map((favorite) => (
//             <div key={favorite.recipe.uri}>
//               <h2>{favorite.recipe.label}</h2>
//               <img src={favorite.recipe.image} alt={favorite.recipe.label} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Favorites from './Favorites';
import RecipeDetail from './RecipeDetail';
import './style.css'

function App() {
  const [currentView, setCurrentView] = useState('homepage');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSwitch = (view) => {
    setCurrentView(view);
  };

  const openRecipeDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Header handleSwitch={handleSwitch} />
      {currentView === 'homepage' && <Homepage openRecipeDetail={openRecipeDetail} />}
      {currentView === 'favorites' && <Favorites />}
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} onClose={closeRecipeDetail} />}
    </div>
  );
}

export default App;
