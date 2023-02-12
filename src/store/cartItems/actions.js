export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addItem = (item) => ({
    type: "ADD_TO_CART",
    payload: item
}); 

export const deleteItem = ({id}) => ({
    type: "DELETE_FROM_CART",
    payload: id
})
