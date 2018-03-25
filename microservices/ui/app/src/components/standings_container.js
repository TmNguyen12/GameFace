import { connect } from 'react-redux'; 
import Video from './Video';


import { receiveGame } from '../actions/game_actions';
import userReducer from '../reducer/user_reducer';
import { receiveUsers, receiveAllUsers }from '../actions/user_actions';
import Standings from './Standings';
import allPlayers from '../reducer/selectors';


const mapStateToProps = state => ({ 
    players: state.users
}); 

const mapDispatchToProps = dispatch => ({ 
    fetchAllUsers: () => dispatch(receiveAllUsers())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Standings);