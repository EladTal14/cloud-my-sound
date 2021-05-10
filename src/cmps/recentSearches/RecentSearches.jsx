import { useEffect, useState } from "react"
import { loadFromStorage } from "../../services/storage-service"


export function RecentSearches({ searchDeb, setSearchDeb, setSearch }) {
  const [recentSearches, setRecentSearches] = useState([])
  useEffect(() => {
    setRecentSearches(loadFromStorage('recentSearches'))
  }, [searchDeb])
  const instigateSearch = (search) => {
    setSearch('')
    setSearchDeb(search)
  }
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      {recentSearches === null && <span>You Haven't searched yet</span>}
      <div className="container flex column">
        {recentSearches && recentSearches.map(search => <a href="#top" className="recent-search" key={Math.random()}><div onClick={() => instigateSearch(search)} href="#top"  >{search}</div></a>)}
      </div>
    </div>
  )
}
