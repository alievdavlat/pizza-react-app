import React from 'react'

function Categories() {
  const [categoryIndex , setCategoryIndex] = React.useState(0)
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

  return (
    <div className="categories">

    <ul>
      {
        categories.map((item, idx ) => {
          return(
            <li  onClick={() => setCategoryIndex(idx)} className={categoryIndex === idx ? 'active' : ''} key={item}>{item}</li>
          )
        })
      }
    </ul>
    <h2 className="content__title">{categories[categoryIndex]} пиццы</h2>

  </div>

  )
}

export default Categories
