import { React, Component } from "react";
import MusicTrack from "./MusicTrack";

export default class MusicList extends Component{
    render(){
        return (
            <div className="songs">
                <h3 className="songs__title">Resultados</h3>
                <ul className="songs__grid">
                    {
                        this.props.musicList && 
                        this.props.musicList.map(({id, title, cover_small, cover_medium, artist, tracklist}) => 
                            <MusicTrack key={id} 
                                        id={id}
                                        title={title}
                                        coverMedium={cover_medium}
                                        coverSmall={cover_small}
                                        artist={artist}
                                        tracklist={tracklist}
                                        changeCurrentTrack={this.props.changeCurrentTrack}
                            />
                        )
                    }
                </ul>
               
            </div>
        )
    }
}