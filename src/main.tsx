import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
// import { configureStore  } from '@reduxjs/toolkit'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import notesReducer  from './features/notesSlice.ts'
// import router from './routes/index.tsx'


// This is not a recommended way of configuring a store
// const store = configureStore({
//   reducer: {
//     notes: notesReducer
//   }
// })

// const routes = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <RouterProvider router={routes} /> */}
  </React.StrictMode>,
)
