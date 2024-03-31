import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface Product{
    title : string
}

const initialState: Product[] = [
    {
        title: "Product 1"
    },
    {
        title: "Product 2"
    }
]

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action : PayloadAction<Product>){
            state.push(action.payload)
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer;