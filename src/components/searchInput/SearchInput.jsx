import React from 'react'
import './SearchInput.css'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function SearchInput({loading,inputValue, setInputValue}) {
const [clearChanged, setClearChanged] = React.useState(false)

const handleClear = (e) => {
  setInputValue(e.target.value)
  }

  return (
    <label className='searchInput'>
    <SearchIcon style={{opacity:'0.5', fontSize:'28px'}}/>
    <input  type="text" placeholder='search...' value={inputValue} onChange={(e) => handleClear(e) } />
{ 
 inputValue && <ClearIcon onClick={() => setInputValue('')} />
    
}  

  </label>
  )
}

export default SearchInput
