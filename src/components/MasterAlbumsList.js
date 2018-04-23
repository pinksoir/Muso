import React from 'react'
import { Link } from 'react-router-dom'

export default class MasterAlbumsList extends React.Component {    

    render() {

        return (
            <div className="master-albums__container">                

                <ul className="master-albums__master-list">
                    {this.props.albums.map((album, key) => {

                        if( (album.title.toUpperCase().includes(this.props.filterValue.toUpperCase())) || (album.artist.toUpperCase().includes(this.props.filterValue.toUpperCase())) ) {
                            return (
                                <div key={key} index={key} className="master-albums__master-list__item">
                                
                                    <div className="master-albums__master-list__item__image">
                                        <img src={album.artwork} alt={album.title + 'by' + album.artist}/>
                                    </div>

                                    <div className="master-albums__master-list__item__inner">
                                        <h3>{album.artist}</h3>
                                        <h4>{album.title} ({album.year})</h4>
                                        {album.tags.map((tag, key) => {
                                            return (
                                                <span key={key}>{tag} </span>
                                            )
                                        })}
                                    </div>

                                    <div className="master-albums__master-list__item__buttons">
                                        <button className="button" onClick={() => this.props.addAlbum(album)}>+</button>
                                        <Link to={`/view/${album.code}`} className="button">
                                            <p>...</p>
                                        </Link>
                                    </div>

                                </div>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}