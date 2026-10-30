import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/type";
import { toast } from "react-toastify";

const init = {
    w_list: []
};

export const wishListReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            if (!action.product || !action.product.id) {
                console.warn("ADD_TO_WISHLIST: Missing product or product.id", action);
                return state;
            }

            const productId = action.product.id;
            const isAlreadyInList = state.w_list.find(product => product.id === productId);

            if (isAlreadyInList) {
                toast.error("Item Removed from Wishlist");
                const updatedList = state.w_list.filter(product => product.id !== productId);
                return { ...state, w_list: updatedList };
            }

            toast.success("Item Added to Wishlist");
            return {
                ...state,
                w_list: [...state.w_list, { ...action.product }]
            };

        case REMOVE_FROM_WISHLIST:
            if (!action.id) {
                console.warn("REMOVE_FROM_WISHLIST: Missing product id", action);
                return state;
            }

            const updatedList = state.w_list.filter(product => product.id !== action.id);
            return { ...state, w_list: updatedList };

        default:
            return state;
    }
};

export default wishListReducer;
