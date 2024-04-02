import { useContext, useState } from 'react'
import LOGO from '../img/Rectangle.svg'
import { Link , NavLink , useNavigate } from 'react-router-dom'
import { LanguageContext } from '../context'




function Header(){

  

  const {mode,setMode} = useContext(LanguageContext)

  const changeTheme = () => {
    setMode(!mode)
    localStorage.setItem('mode' , JSON.stringify(!mode))
  }

   const {language,setLanguage} = useContext(LanguageContext)

   const [value,setValue] = useState("")

   const navigate = useNavigate()

   const handleChange = (e) => setValue(e.target.value)

   const searchToResult = () => {
      navigate(`/movies/search-result/${value}`)
      setValue("");
   }

    return (
        <div id='header'>
      <div className='container'>
        <div className='header'>
       <Link to={'/'}> <img src={LOGO} alt="" /></Link>
      <div className='nav'>
        <NavLink to={'/'}>Home</NavLink>
        {/* <NavLink to={'recipes'}>Recipes</NavLink> */}
        <NavLink to={'popular'}>Popular</NavLink>
        <NavLink to={'toprated'}>Top Rated</NavLink>
        {/* <a href='#'>Home</a>
        <a href='#'>Recipes</a>
        <a href='#'>Meat</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a
        <a href='#'>Support</a> */}
        
      </div>

      <div className='search-movies'>
        <input value={value} onChange={handleChange} type="text" />
        <button onClick={searchToResult} >search</button>
      </div>
      
      <div className='header-end'>
        <select onChange={(e)=> setLanguage(e.target.value)} name='' id=''>
          <option value='en-US'>english</option>
          <option value='ru-RU'>russian</option>
          <option value='tr-TR'>turkce</option>
          <option value='fr-FR'>france</option>
        </select>
        
    <button onClick={changeTheme} className='mode'>
          {mode ? 'light' : 'mode'}
          </button>
      </div>
        </div>
      </div>
    </div>
    )
}

export default Header 