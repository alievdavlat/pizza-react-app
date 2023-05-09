import React from 'react'
import './SearchInput.css'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import debounce from 'lodash.debounce';


function SearchInput({loading,inputValue, setInputValue}) {

const input = React.useRef()
const [clearChanged, setClearChanged] = React.useState(false)

const handleClear = (e) => {
  setInputValue(e.target.value)
}

const onClear = () => {
  setInputValue('')
  input.current.focus()
}

const debounceTest = React.useCallback(() => {
  debounce(() => {

  }, 1000)
}, []) 


  return (
    <label className='searchInput'>
    <SearchIcon style={{opacity:'0.5', fontSize:'28px'}}/>
    <input  ref={input} type="text" placeholder='search...' value={inputValue} onChange={(e) => handleClear(e) } />
{ 
 inputValue && <ClearIcon onClick={() => onClear()} />
    
}  

  </label>
  )
}

export default SearchInput
