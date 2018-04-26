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
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        const { commentsIndex } = this.props;

        
        this.props.addComment(commentsIndex, author, comment);
        this.refs.commentForm.reset();
        
    }

    render() {

        return(
            <div className="single-page__comments__container">

                {this.props.currComments.comments ? (
                    this.props.currComments.comments.map(this.renderComment.bind(this))
                ) : <div>No comments yet. Add one!</div>}
                
                <form className="single-page__comments__form" onSubmit={this.handleSubmit.bind(this)} ref="commentForm">
                    <input className="item" type="Text" ref="author" placeholder="author" required/>
                    <input className="item" type="Text" ref="comment" placeholder="comment" required/>
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }    
}