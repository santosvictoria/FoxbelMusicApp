import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import logoText from './../images/foxbel-music.png';
import logoSymbol from './../images/foxbel-music-icon.png';

import { React,Component } from "react";
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputSearch: ''
        }
        this.handleInputSearch = this.handleInputSearch.bind(this);
    }
    async handleInputSearch(e){
        const target = e.target;
        if (target.value.length >= 3) {
            await this.props.getMusicListByAlbumName(target.value.trim())
        }
    }
    render(){
        return (
            <header className="header">
                <div className="header__brand">
                    <a href="/">  
                        <h1 className="header__title">
                            <img 
                                className="header__logo" 
                                src={this.props.sidebarMenuIsOpen ? logoText: logoSymbol} 
                                alt="Foxbel Music"/>
                        </h1>
                    </a>
                </div>
                <nav className="navbar">
                        <div className="wrapper navbar__container">
                            <div className="navbar__left">
                                <button className="navbar__toggle" onClick={()=> this.props.handleSidebarMenu()}>
                                    <IoMenuSharp style={{verticalAlign: "middle"}}/>
                                </button>
                                <form className="header__form" onSubmit={(e)=> e.preventDefault()}>
                                    <div className="search">
                                        <BiSearch className="search__icon"/>
                                        <input placeholder="Buscar" type="search" onChange={(e)=> this.setState({inputSearch: e.target.value})} onKeyUp={this.handleInputSearch} className="search__input"/>        
                                        </div>
                                </form>
                            </div>
                            <div className="profile">
                                <FaUserCircle className="profile__icon"/>
                                <p className="profile__user">Francisco M.</p>
                            </div>
                        </div>
                    </nav>
            </header>
        )
    }
    
}