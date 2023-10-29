import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBBadge,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function RecipeCard({
  recipe,
  removeFromFavorites,
  addToFavorites,
  openRecipeDetail,
  isFavoritePage,
}) {
  const isFavorite = isFavoritePage ? true : false;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(recipe);
    } else {
      addToFavorites(recipe);
    }
  };

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MDBCard className="m-4 flex-column">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src={recipe.recipe.image} fluid alt="..." width={400} />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className="text-center display-6">
          {recipe.recipe.label}
        </MDBCardTitle>
        <MDBCardText>
          <MDBBadge pill className="mx-2" color="info" light>
            Servings: {recipe.recipe.yield}
          </MDBBadge>{" "}
          &nbsp;
          <MDBBadge pill className="mx-2" color="info" light>
            Time: {recipe.recipe.totalTime} min
          </MDBBadge>
        </MDBCardText>
        <MDBRow>
          <MDBBtn onClick={handleFavoriteClick} className="m-1">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </MDBBtn>
          <MDBBtn className="m-1" onClick={handleShowModal}>
            Show Details
          </MDBBtn>
        </MDBRow>
      </MDBCardBody>

      <MDBModal tabIndex="-1" show={isModalOpen} onHide={handleCloseModal}>
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{recipe.recipe.label}</MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={handleCloseModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol md="12" lg={6} >
                  <p>
                    <a
                      href={recipe.recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Full Recipe
                    </a>
                  </p>
                  <MDBCardImage
                    src={recipe.recipe.image}
                    alt={recipe.recipe.label}
                    fluid
                    style={{ borderRadius: "10px" }}
                  />
                  <MDBTypography variant="h5" className="m-2">
                    {" "}
                    Ingredients:
                  </MDBTypography>
                  <div>
                    {recipe.recipe.ingredientLines.map((ingredient, index) => (
                      <MDBBadge key={index} pill color="info" className="m-2">
                        {ingredient}
                      </MDBBadge>
                    ))}
                  </div>
                  <MDBCol className="m-2">
                    <p className="">
                      Calories:{" "}
                      <span className=" text-success">
                        {recipe.recipe.calories}
                      </span>
                    </p>
                    <p className="">
                      Time Required:{" "}
                      <span className=" text-info">
                        {recipe.recipe.totalTime} minutes
                      </span>
                    </p>
                    <p className="">
                      totalWeight :{" "}
                      <span className=" text-info">
                        {recipe.recipe.totalWeight} grams
                      </span>
                    </p>
                  </MDBCol>
                </MDBCol>
                <MDBCol sm="12" lg="6">
                  <p
                    className="mt-3"
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#333",
                      justifyItems:'center'
                    }}
                  >
                    Nutritional Details:
                  </p>
                  <ul style={{ listStyleType: "none", padding: "0" }}>
                    {Object.keys(recipe.recipe.totalNutrients).map(
                      (nutrientKey) => (
                        <li
                          key={nutrientKey}
                          style={{
                            marginBottom: "12px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ fontWeight: "bold", width: "150px" }}>
                            {recipe.recipe.totalNutrients[nutrientKey].label}:
                          </span>
                          <span style={{ color: "#555" }}>
                            {recipe.recipe.totalNutrients[nutrientKey].quantity}{" "}
                            {recipe.recipe.totalNutrients[nutrientKey].unit}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                type="button"
                color="secondary"
                onClick={handleCloseModal}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBCard>
  );
}
