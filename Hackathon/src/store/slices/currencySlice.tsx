import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  copper: number,
  iron: number,
  gold: number
}

// Define the initial state using that type
const initialState: CounterState = {
  copper: 0,
  iron: 0,
  gold: 0,
}

export const currencySlice = createSlice({
  name: 'currency',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmountCopper: (state, action: PayloadAction<number>) => {
      state.copper += action.payload
    },
    decrementByAmountCopper: (state, action: PayloadAction<number>) => {
      state.copper -= action.payload
    },
    incrementByAmountIron: (state, action: PayloadAction<number>) => {
      state.iron += action.payload
    },
    decrementByAmountIron: (state, action: PayloadAction<number>) => {
      state.iron -= action.payload
    },
    incrementByAmountGold: (state, action: PayloadAction<number>) => {
      state.gold += action.payload
    },
    decrementByAmountGold: (state, action: PayloadAction<number>) => {
      state.gold -= action.payload
    },
  },
})

export const { incrementByAmountCopper, decrementByAmountCopper, incrementByAmountIron, decrementByAmountIron, incrementByAmountGold, decrementByAmountGold } = currencySlice.actions

export default currencySlice.reducer