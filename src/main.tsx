import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
    <App />
    </Provider>

    </BrowserRouter>
)



// import React from "react";




// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
