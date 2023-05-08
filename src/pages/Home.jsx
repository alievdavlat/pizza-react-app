import React, { useState } from "react";
import { Categories, Pagination, PizzaBlock, PizzaBlockLoader, Sort } from "../components";
import { context } from "../App";



function Home() {
  const [items , setItems ] = React.useState([])
  const [pizzaLoading, setPizzaLoading] = useState(true)
  const [listValue, setListValue] = React.useState('')
  const [categoryIndex , setCategoryIndex] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1)
  const { inputValue, setInputValue , loading, setLoading}  =  React.useContext(context)


  React.useEffect(() => {
    setPizzaLoading(true)

    fetch(`https://6456abe42e41ccf16922b42e.mockapi.io/items?page=${currentPage}&limit=4&${categoryIndex > 0 ? `category=${categoryIndex}`: ''}&sortBy=${listValue}&order=desc`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setTimeout(() => {
          setLoading(false)
          setPizzaLoading(false)
        }, 1000);
      })
      window.scrollTo(0, 0)
  }, [listValue,categoryIndex,currentPage])
  
  const skileton = [...new Array(10)].map((item, idx) => (  <PizzaBlockLoader key={idx} /> ))

  const pizzasBlock = items.filter(obj => obj.name.toLowerCase().includes(inputValue.toLowerCase())) .map((item, idx) => <PizzaBlock item={item} key={item.id} />)


  return (
    <div className="container">
      <div className="content__top">
        <Categories loading={loading} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} />
        <Sort loading={loading}  listValue={listValue} setListValue={setListValue} />
      </div>
      <div className="content__items">
        {  pizzaLoading ? skileton : pizzasBlock }
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
