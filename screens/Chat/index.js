import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as chatActions } from "../../redux/modules/chat";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createChatRoom: () => {
            dispatch(chatActions.createChatRoom())
        }
    };
};

export default connect(null, mapDispatchToProps)(Container);
