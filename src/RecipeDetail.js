import React from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

function RecipeDetail({ recipe, onClose, isModalOpen }) {
  return (
    <>
      <MDBModal tabIndex='-1' show={isModalOpen} onHide={onClose}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{recipe.recipe.label}</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={onClose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <p>Ingredients: {recipe.recipe.ingredientLines.join(', ')}</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type='button' color='secondary' onClick={onClose}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default RecipeDetail;
