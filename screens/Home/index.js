import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as chatActions } from "../../redux/modules/chat";


const mapStateToProps = (state, ownProps) => {
    const { chat: { home } } = state;

    return {
        home
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHome: () => {
            dispatch(chatActions.getHome())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
