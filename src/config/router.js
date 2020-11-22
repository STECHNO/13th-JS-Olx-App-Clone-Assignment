import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sell from '../components/Sell/Sell.jsx';
import Home from '../containers/Home';
import AdsInDetail from '../components/AdsInDetail/AdsInDetail.jsx';
import Chat from '../components/Chat/Chat.jsx';


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/sell' component={Sell} />
                <Route path='/ads' component={AdsInDetail} />
                <Route path='/chat' component={Chat} />
            </Router>
        )
    }
}

export default AppRouter;