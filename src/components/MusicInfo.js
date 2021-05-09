import coverAdele from "./../images/adele-cover.png";
import { FiMoreHorizontal } from "react-icons/fi";

export default function MusicInfo() {
    return (
        <>
            <div className="music">
                <div className="music__author">
                    <img className="music__image" src={coverAdele} alt="Adele cover"/>
                </div>
                <div className="music__description">
                    <div className="music__info">
                        <h3 className="music__title">Adele 21</h3>
                        <p className="music__caption">Lo mejor de Adele <span className="music__followers">321, 123 seguidores</span></p>
                    </div> 
                    <p className="music__text">
                    Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​ 
                    </p>
                    <div className="music__actions">
                        <button className="btn btn--primary music__button">Reproducir</button>
                        <button className="btn btn--outline music__button">Seguir</button>
                        <button className="btn music__dropdown">
                            <FiMoreHorizontal style={{color: "#ffffff", fontSize:"1.1rem"}}/>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}