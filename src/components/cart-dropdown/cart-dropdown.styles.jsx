import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow: auto;

  button {
    margin-top: auto;
  }
`;

export const CartItemContainer = styled.div`
	overflow: auto;
`;

export const EmptyMessage = styled.span`
  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }
`;

export const CartItems = styled.div`
  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//
//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }
//
//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//     overflow-x: auto;
//     overflow-y: auto;
//   }
//
//   button {
//     margin-top: auto;
//   }
// }