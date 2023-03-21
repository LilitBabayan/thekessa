import {withRouter} from "react-router-dom";
import Header from "./Header";

function Dashboard(props) {
    return (
        <div>
            <Header/>
        </div>
    )
}

export default withRouter(Dashboard)
