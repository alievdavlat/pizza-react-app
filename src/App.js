import { Categories, Header, Sort } from "./components";
import PizzaBlock from "./components/pizzaBlock/PizzaBlock";
import React from "react";
import "./scss/app.scss";



function App() {
const [items , setItems ] = React.useState([])

React.useEffect(() => {
  fetch('https://6456abe42e41ccf16922b42e.mockapi.io/items')
    .then(res => res.json())
    .then(data => setItems(data))
}, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>

            <div className="content__items">
              
             {
              items?.map((item,idx) =>  <PizzaBlock item={item} key={item.id} />)
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
