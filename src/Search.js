import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2 style={{color:'black'}}>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className='card-err'>
          <p style={{color:'red', marginTop:'10px', fontSize: '12px'}}>{isError.show && isError.msg}</p>
        </div>

      </section>
    </>
  )
};

export default Search