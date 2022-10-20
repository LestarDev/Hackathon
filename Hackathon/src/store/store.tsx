import { configureStore } from '@reduxjs/toolkit'
import currencySlice from './slices/currencySlice'
export const store = configureStore({
  reducer: {
    currency: currencySlice, 

  },
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch