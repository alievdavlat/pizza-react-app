import React from "react";
import { Categories, Pagination, PizzaBlock, PizzaBlockLoader, Sort } from "../components";
import { context } from "../App";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import qs from 'qs'
import {  useNavigate } from "react-router-dom";
import { setItems, setPizzaLoading } from "../redux/slices/pizzasSlice";


function Home() {
  const { items, pizzaLoading  } = useSelector(state => state.pizza) 
  const {categoryIndex,listValue} = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = React.useState(1)
  const { inputValue, setInputValue , loading, setLoading}  =  React.useContext(context)




  const getData = async () => {
      try {
        const {data} = await axios.get(`https://6456abe42e41ccf16922b42e.mockapi.io/items?page=${currentPage}&limit=4&${categoryIndex > 0 ? `category=${categoryIndex}`: ''}&sortBy=${listValue}&order=desc`)
        dispatch(setItems(data))
        // dispatch(fetchPizzas(
        //   { 
        //    currentPage,
        //    categoryIndex,
        //    listValue,
        //  }
        //  ),)
        
      } catch (error) {
        setPizzaLoading(false)        
      } finally{
        setLoading(false)
        dispatch(setPizzaLoading(false))
      }
  }

  React.useEffect(() => {
    dispatch(setPizzaLoading(true))
     getData()
      window.scrollTo(0, 0)
  }, [listValue,categoryIndex,currentPage])
  

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty:listValue,
      categoryIndex,
    })
    navigate(`?${queryString}`)
  },[listValue,categoryIndex,currentPage])


  const skileton = [...new Array(10)].map((item, idx) => (  <PizzaBlockLoader key={idx} /> ))

  const pizzasBlock = items.filter(obj => obj.name.toLowerCase().includes(inputValue.toLowerCase())) .map((item, idx) => <PizzaBlock item={item} key={item.id} />)


  return (
    <div className="container">
      <div className="content__top">
        <Categories loading={loading}   />
        <Sort loading={loading} />
      </div>
      <div className="content__items">
        {  pizzaLoading ? skileton : pizzasBlock }
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
