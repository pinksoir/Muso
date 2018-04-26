import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as albumActionCreators from '../actions/loadAlbumsActions'
import * as commentsActionCreators from '../actions/commentsActions'
import * as userAlbumActionCreators from '../actions/userAlbumsActions'
import * as filterAlbumsActionCreators from '../actions/filterAlbumsActions'

import Main from '../components/Main';

function mapStateToProps(state) {
    return {
        albums: state.getAlbums,
        albumComments: state.getComments,
        userAlbums: state.userAlbums,
        filterValue: state.filterValue.filterValue,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadAlbums: bindActionCreators(albumActionCreators, dispatch),
        commentsActions: bindActionCreators(commentsActionCreators, dispatch),
        userActions: bindActionCreators(userAlbumActionCreators, dispatch),
        filterActions: bindActionCreators(filterAlbumsActionCreators, dispatch)
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);