import axios from 'axios'
import { useEffect, useState } from "react";
import { useDebounce } from '../../services/custom-hooks'
import { Result } from "./result/Result";
import { loadFromStorage, saveToStorage } from "../../services/storage-service";
import { limitAndPushArray } from "../../services/utils";

export function Results({ setVideoUrl, searchDeb, setSearchDeb, SC, search, setSearch }) {
  const [songs, setSongs] = useState([])
  const [formationTile, setFormationTile] = useState(false)
  const [nextSongs, setNextSongs] = useState('')
  const debouncedSave = useDebounce((nextValue) => setSearchDeb(nextValue), 1000);

  const chooseFormation = (userChoice) => {
    saveToStorage('formation', userChoice)
    setFormationTile(userChoice)
  }
  useEffect(() => {
    let userChoice = loadFromStorage('formation')
    if (userChoice) setFormationTile(userChoice)
  }, [])

  useEffect(() => {
    if (!searchDeb) return
    let lastSearches = loadFromStorage('recentSearches')
    if (lastSearches) {
      lastSearches = limitAndPushArray(5, lastSearches, searchDeb)
      saveToStorage('recentSearches', lastSearches)
    } else {
      saveToStorage('recentSearches', [searchDeb])
    }
  }, [searchDeb])

  useEffect(() => {
    SC.get('/tracks', {
      q: searchDeb, license: 'cc-by-sa', limit: 6, linked_partitioning: true
    }).then(function (tracks) {
      setSongs(tracks.collection)
      setNextSongs(tracks.next_href)
    });
  }, [SC, searchDeb])

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setSearch(nextValue);
    debouncedSave(nextValue)
  };
  const getNewResults = async () => {
    const res = await axios.get(nextSongs)
    const newResults = res.data
    if (newResults.collection) setSongs(newResults.collection)
    if (newResults.next_href) setNextSongs(newResults.next_href)
  }
  return (
    <div className="results" id="top">
      <input type="text" value={search} placeholder="Search Songs..." className="search" onChange={handleChange} />
      <div className={formationTile ? 'tile' : ''}>
        {songs.length === 0 && <div>Couldn't find songs</div>}
        {songs.map(song => <Result setVideoUrl={setVideoUrl} embedUrl={song.permalink_url} formationTile={formationTile} key={song.id} picture={song.artwork_url} title={song.title} />)}
      </div>
      <div className="actions flex space-between">
        <button className="next" disabled={!nextSongs} onClick={getNewResults}><img src={require('../../assets/img/next.svg').default} style={{ width: 40 }} alt="next results" /></button>
        <button className="list" onClick={() => chooseFormation(false)}><img src={require('../../assets/img/list.svg').default} style={{ width: 40 }} alt="list results" /></button>
        <button className="tile" onClick={() => chooseFormation(true)}><img src={require('../../assets/img/tile.svg').default} style={{ width: 40 }} alt="tile results" /></button>
      </div>
    </div>
  )
}
