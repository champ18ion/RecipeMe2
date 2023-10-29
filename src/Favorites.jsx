import React, { useContext } from 'react';
import { RecipeContext } from './Context';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // Import the relevant components
import RecipeCard from './RecipeCard';

function Favorites() {
    const { recipes, removeFromFavorites, favorites, addToFavorites } =
    useContext(RecipeContext);
    console.log(favorites)
  return (
    <MDBContainer>
      <h1 className="text-center mt-4">Favorites</h1>
      <MDBRow>
        {favorites && favorites.map((favorite) => (
          <MDBCol size="12" md="6" lg="4" key={favorite.recipe.uri}>
          <RecipeCard
            recipe={favorite}
            isFavoritePage={true}
            removeFromFavorites={removeFromFavorites}
            
          />
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Favorites;
