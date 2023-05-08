import React from "react";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import { Cart, Header, Home, NotFound } from "./components";



function App() {
const [ loading , setLoading ] = React.useState(true)
const [inputValue, setInputValue] = React.useState('')

  return (
      <div className="wrapper">
        <Header  loading={loading} inputValue={inputValue} setInputValue={setInputValue} />
        <div className="content">
            <Routes>
              <Route path="/" exact  element={<Home loading={loading}  setLoading={setLoading} inputValue={inputValue} setInputValue={setInputValue} />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
        <h4 style={{margin:'0 auto' , width:'100%', textAlign:'center',padding:'15px'}}>
          <a href="https://github.com/alievdavlat" target="_blank">Made by Aliev Davlat : https://github.com/alievdavlat </a>
        </h4>
      </div>
  );
}

export default App;
