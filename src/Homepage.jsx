import React, { useContext, useState } from "react";
import { RecipeContext } from "./Context";
import RecipeCard from "./RecipeCard";

import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit"; // Import the relevant components

function Homepage({ openRecipeDetail }) {
  const { recipes, handleSearch, favorites, addToFavorites } =
    useContext(RecipeContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchInput(searchText);
    handleSearch(searchText);
  };

  return (
    <MDBContainer fluid>
      <h1 className="text-center mt-4">Recipe Finder</h1>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol size="auto">
          <MDBInput
            type="text"
            label="Search for recipes"
            value={searchInput}
            onChange={handleSearchChange}
            className="text-center"
            style={{ width: '50vw', borderRadius: '50%' }} // Adjusted styles
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        {recipes &&
          recipes.map((recipe) => (
            <MDBCol size="12" md="6" lg="4" key={recipe.recipe.uri}>
              <RecipeCard
                recipe={recipe}
                addToFavorites={addToFavorites}
                openRecipeDetail={openRecipeDetail}
              />
            </MDBCol>
          ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Homepage;
