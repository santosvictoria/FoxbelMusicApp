import { FiMoreVertical } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import defaultCover from "./../images/music-default.png";

export default function MusicTrack({id, title, coverMedium, artist, changeCurrentTrack}) {
    return (
        <li className="songs__track track">
            <div className="track__cover">
                <img src={coverMedium || defaultCover} alt="cover"/>
                <button className="track__menu">
                    <FiMoreVertical/>
                </button>
                <button className="track__btn" onClick={() => changeCurrentTrack(id, title, coverMedium)}>
                    <FaPlay style={{ verticalAlign: 'middle', display: 'block'}}/>
                </button>
            </div>
            <div className="track__body">
                <div className="track__title">{title}</div>
                <div className="track__author">{artist.name}</div>
            </div>
        </li>       
    )
}

