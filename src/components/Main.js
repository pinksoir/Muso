import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Header'
import UserAlbumsList from './UserAlbumsList'
import MasterAlbumsList from './MasterAlbumsList'
import Filter from './Filter'
import Single from './Single'

export default class Main extends React.Component {    

    componentDidMount() {
        this.props.loadAlbums.fetchAlbumsThunk();
        // this.props.commentsActions.fetchCommentsThunk();
    }

    render() {    

        return (
            <div className="site-wrapper">
                <Header />

                <div className="page-body">
                    <Switch>
                        <Route 
                            exact path='/' 
                            render={(routeProps, props) => (
                                
                                <div className="main">
                                    <Filter 
                                        filterAlbums={this.props.filterActions.filterAlbums}
                                        filterValue={this.props.filterValue}
                                    />

                                    <MasterAlbumsList 
                                        albums={this.props.albums}
                                        addAlbum={this.props.userActions.addAlbum}
                                        filterValue={this.props.filterValue}
                                    />
                                    
                                </div>
                            )}
                        />

                        <Route 
                            path='/view/:albumId' 
                            render={(routeProps, props) => (
                                <Single {...props} {...routeProps}
                                albums={this.props.albums}
                                albumComments={this.props.albumComments}
                                addComment={this.props.commentsActions.addComment}
                                loadAlbums={this.props.loadAlbums.fetchAlbumsThunk}
                                addAlbum={this.props.userActions.addAlbum}

                                loadComments={this.props.commentsActions.fetchCommentsThunk}
                                />
                            )} 
                        />

                    </Switch>

                    <UserAlbumsList 
                        userAlbums={this.props.userAlbums}
                        removeAlbum={this.props.userActions.removeAlbum}
                    />
                </div>
            </div>
        )
    }
}