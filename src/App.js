import {Component, React} from "react";
import Layout from './components/layout';
import MusicInfo from './components/MusicInfo';
import MusicList from './components/MusicList';
import Player from './components/Player';
import { getMusicListByAlbumName, getTrackListByAlbumId } from './services/DeezerMusicService';
import Header from './components/Header';

export default class App extends Component{
  constructor(props){
      super(props);
      this.state = {
          musicList: [],
          isLoading: true,
          currentTrackList: null,
          currentTrackIndex: 0,
          sidebarMenuIsOpen: true,
      }
      this.changeCurrentTrack = this.changeCurrentTrack.bind(this);
      this.getMusicListByAlbumName = this.getMusicListByAlbumName.bind(this);
      this.handleSidebarMenu = this.handleSidebarMenu.bind(this);
      this.handleNextIndexSong = this.handleNextIndexSong.bind(this);
      this.handlePrevIndexSong = this.handlePrevIndexSong.bind(this);
  }
  
  async changeCurrentTrack(id, title, coverMedium){
    const trackList = await getTrackListByAlbumId(id);
    this.setState({
        currentTrackList: { trackList: [...trackList], album: { title, coverMedium}},
        currentTrackIndex: 0
    });
  }
  async getMusicListByAlbumName(name) {
    this.setState({isLoading: true })
    const musicList = await getMusicListByAlbumName(name);
    this.setState({
        musicList: musicList,
        isLoading: false
    }) 
  }
  handleNextIndexSong(){ 
    const currentTrackIndex = this.state.currentTrackIndex;
    if (currentTrackIndex >= this.state.currentTrackList.trackList.length - 1) {
      this.setState({currentTrackIndex: 0});
    }else{
      this.setState({currentTrackIndex: this.state.currentTrackIndex + 1});
    }
  }
  handlePrevIndexSong(){
    const currentTrackIndex = this.state.currentTrackIndex;
    if (currentTrackIndex > 0) {
      this.setState({currentTrackIndex: this.state.currentTrackIndex - 1})
    }
  }
  handleSidebarMenu(){
    this.setState({
        sidebarMenuIsOpen: !this.state.sidebarMenuIsOpen
    });
  }
  componentDidMount(){
    this.getMusicListByAlbumName();
  }
  componentDidUpdate(_, prevState){      
      if(prevState.sidebarMenuIsOpen !== this.state.sidebarMenuIsOpen){
          document.body.classList.toggle('sidebar__closed')
      }
  }
  render(){
    const currentTrackList = this.state.currentTrackList;
    return (
        <>
            <Header 
                sidebarMenuIsOpen={this.state.sidebarMenuIsOpen}
                getMusicListByAlbumName={this.getMusicListByAlbumName}
                handleSidebarMenu={this.handleSidebarMenu}
            />   
            <Layout>
               <MusicInfo />
                <MusicList musicList={this.state.musicList} changeCurrentTrack={this.changeCurrentTrack}/>
                {this.state.isLoading && <p className="loading">Cargando...</p>}
                { currentTrackList && 
                  <Player
                    currentTrackList={currentTrackList} 
                    currentTrackIndex={this.state.currentTrackIndex}
                    handleNextIndexSong={this.handleNextIndexSong}
                    handlePrevIndexSong={this.handlePrevIndexSong}   />                 
                }        
            </Layout>
        </>
    );
  }
}


