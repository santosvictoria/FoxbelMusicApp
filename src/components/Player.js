import { React, Component } from "react";
import {IoPlaySkipBack, IoPlaySkipForward, IoPlay, IoPause} from "react-icons/io5";
import {BsFillVolumeMuteFill, BsVolumeDownFill} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import defaultCover from "./../images/music-default.png";

export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            isPlaying: false,
            volume: 50,
            isVolumeOff: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
    componentDidUpdate(prevProps, prevState){
        if (prevState.isPlaying !== this.state.isPlaying ||
            prevProps.currentTrackList !== this.props.currentTrackList ||
            prevProps.currentTrackIndex !== this.props.currentTrackIndex
            ) {
            if (this.state.isPlaying) {
                this.audioRef.play();
            }else{
                this.audioRef.pause();
            }
        }
        if (prevState.isVolumeOff !== this.state.isVolumeOff) {
            if (this.state.isVolumeOff) {
                this.audioRef.volume = 0;
                this.setState({ volume: 0})
            }else{
                this.audioRef.volume = 1;
                this.setState({ volume: 50})
            }
        }
        
    }
    
    handleChange(e){
        this.setState({
            volume: e.target.value
        })
        this.audioRef.volume = this.state.volume / 100;
    }
    render(){
        const {
            artist,
            title,
            preview
        } = this.props.currentTrackList.trackList[this.props.currentTrackIndex];
        const {title: titleAlbum, coverMedium : coverAlbum} = this.props.currentTrackList.album;
        return (
            
             <div className="player">
                    <div className="player__item player__detail">
                        <img className="player__cover" src={coverAlbum || defaultCover} alt="cover"/>
                        <div className="player__info">
                            <h4 className="player__song">{title}</h4>
                            <p className="player__artist">{artist.name}-{titleAlbum}</p>
                        </div>
                    </div>
                    <div className="player__item player__controls">
                        <IconContext.Provider value={{size: "1.5rem", color: "#ffffff"}}>
                            <button className="player__btn player__btn--back" onClick={()=> this.props.handlePrevIndexSong()}>
                                <IoPlaySkipBack/>                   
                            </button>     
                            <button className="player__btn player__btn--play" onClick={() => this.setState({isPlaying: !this.state.isPlaying})}>
                                {
                                    this.state.isPlaying ?  <IoPause/> : <IoPlay/>
                                }                   
                            </button>     
                            <button className="player__btn player__btn--forward" onClick={()=> this.props.handleNextIndexSong()}>
                                <IoPlaySkipForward />                   
                            </button>     
                        </IconContext.Provider>
                    </div>
                    <div className="player__item player__volume">
                        <input className="player__input" type="range" value={this.state.volume} onChange={this.handleChange}/>
                       <button className="player__btn player__btn--volume" onClick={()=> this.setState({isVolumeOff: !this.state.isVolumeOff})}>
                           {    
                               this.state.isVolumeOff ? 
                               <BsFillVolumeMuteFill style={{verticalAlign: "middle", display:"block"}}/> :
                               <BsVolumeDownFill style={{verticalAlign: "middle", display:"block"}}/>
                           }
                       </button>
                    </div>
                <audio src={preview} onEnded={() => this.setState({isPlaying: false})} ref={ref => this.audioRef = ref}/>
            </div>
        )
    }
}
