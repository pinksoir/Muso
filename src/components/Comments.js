import React from 'react'

export default class Comments extends React.Component { 

    renderComment(comment, index) {
        return(
            <div className="single-page__comments__comment" key={index}>
                <p>
                    <strong>{comment.user}: </strong>
                    {comment.text}
                    {/* <button className="remove"
                        onClick={this.props.removeComment}>
                        &times;
                    </button> */}
                </p>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const { albumId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        const { index } = this.props;
        console.log(index);
        this.props.addComment(index, author, comment);
        this.refs.commentForm.reset();

        this.props.loadAlbums();
        
    }

    render() {

        return(
            <div className="single-page__comments__container">
                {this.props.album.comments ? (
                    this.props.album.comments.map(this.renderComment.bind(this))
                ) : null}
                
                <form className="single-page__comments__form" onSubmit={this.handleSubmit.bind(this)} ref="commentForm">
                    <input className="item" type="Text" ref="author" placeholder="author" required/>
                    <input className="item" type="Text" ref="comment" placeholder="comment" required/>
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }    
}