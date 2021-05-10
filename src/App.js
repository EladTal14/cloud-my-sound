import { useState } from 'react';
import './assets/style/main.scss'
import { RecentSearches } from './cmps/recentSearches/RecentSearches';
import { Results } from './cmps/results/Results';
import { Song } from './cmps/song/Song';

function App() {
  const [videoUrl, setVideoUrl] = useState('https://soundcloud.com/anxsound/tiesto-don-diablo-chemicals-anx-progressive-bootleg')
  const [searchDeb, setSearchDeb] = useState('tiesto')
  const [search, setSearch] = useState('')
  const SC = window.SC
  return (
    <div className="App">
      <Results search={search} setSearch={setSearch} searchDeb={searchDeb} setSearchDeb={setSearchDeb} setVideoUrl={setVideoUrl} SC={SC} />
      <Song videoUrl={videoUrl} SC={SC} />
      <RecentSearches setSearch={setSearch} searchDeb={searchDeb} setSearchDeb={setSearchDeb} />
    </div>
  );
}

export default App;
