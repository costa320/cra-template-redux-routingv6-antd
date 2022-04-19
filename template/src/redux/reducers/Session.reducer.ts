import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit'

const initialState: any = {
  session: null,
  user: {
    username: "Sig. Topo",
    role: "administrator",
    idNumber: "1HF73",
  },
  history: []
}

export const addToHistory = createAction<any>('addToHistory');

const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(addToHistory, (state, action) => {
        // action is inferred correctly here
        state.history = [...state.history, action.payload]
      })
    // You can chain calls, or have separate `builder.addCase()` lines each time
    /* .addCase(decrement, (state, action) => {
      state.session = { ...state.session, ...action.payload }
    }) */
    // and provide a default case if no other handlers matched
    /* .addDefaultCase((state, action) => state) */
  }
)

export default reducer;

