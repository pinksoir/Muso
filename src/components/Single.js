import React from 'react'

import Comments from './Comments'

export default class Single extends React.Component {

    componentWillMount() {
        this.props.loadComments();
    }

    render() {

        const { albumId } = this.props.match.params;
        const index = this.props.albums.findIndex((album) => album.code === albumId);
        const album = this.props.albums[index];
        

        const commentsIndex = this.props.albumComments.findIndex((comment) => comment.code === albumId);
        const currComments = this.props.albumComments[commentsIndex];
        console.log(currComments);

        return(
            <div className="single-page">
                <div className="single-page__details">
                    <div className="single-page__details__left">                        
                        <img src={album.artwork} alt={album.title + 'by' + album.artist} /> 

                        <button className="single-page__details__left__button" onClick={() => this.props.addAlbum(album)}>+</button>             
                    </div>

                    <div className="single-page__details__right">
                        <h2>{album.artist} - {album.title}</h2>
                        <h3>{album.year}</h3>

                        <h4>Label: {album.label}</h4>

                        <p>{album.description}</p>
                    </div>
                </div>

                <div className="single-page__comments">
                    <h2>Join the conversation</h2>
                    <Comments 
                        album={album}
                        params={this.props.match.params}
                        addComment={this.props.addComment}
                        index={index}
                        // loadAlbums={this.props.loadAlbums}
                        commentsIndex={commentsIndex}
                        currComments={currComments}
                        loadComments={this.props.loadComments}
                    />
                </div>
            </div>
        )
    }
}