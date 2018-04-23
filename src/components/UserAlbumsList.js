import React from 'react'
import { Link } from 'react-router-dom'

export default class UserAlbumsList extends React.Component {

    render() {

        return (
            <div className="user-albums__container">
                <h4>Add albums to your list</h4>

                {this.props.userAlbums.map((album, key) => {
                    return (
                        <div key={key} className="user-albums__item">

                            <div className="user-albums__item__image">

                                <Link to={`/view/${album.code}`}>                                            
                                    <img src={album.artwork} alt={album.title + 'by' + album.artist} />
                                </Link>

                            </div>

                            <div className="user-albums__item__artist">
                                <strong>{album.artist}</strong>                           
                            </div>

                            <div className="user-albums__item__title">
                                {album.title} ({album.year})                           
                            </div>

                            <div className="user-albums__item__remove" onClick={() => this.props.removeAlbum(album)}>
                                <span>&times;</span>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}