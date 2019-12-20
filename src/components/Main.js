import React, { Component } from 'react'
import PhotoWall from './PhotoWall';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPhoto from './AddPhoto';
import Single from './Single';
import MainNav from './MainNav'
import SignIn from './SignIn'


class Main extends Component {

    state = { loading: true, done: undefined };



    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({ loading: false })
        })
        this.props.startLoadingComments();

    }

    render() {
        return (
                <div>
                    <MainNav />
                            <Route path='/SignIn' render={(history) => (
                                <SignIn {...this.props} onHistory={history} />
                            )} />
                                <Route exact path="/" render={() => (
                                    <div>
                                        <PhotoWall {...this.props} />
                                    </div>
                                )} />

                            <Route path="/AddPhoto" render={({ history }) => (
                                <AddPhoto {...this.props} onHistory={history} />
                            )} />

                            <Route path="/single/:id" render={(params) => (
                                <Single loading={this.state.loading} {...this.props} {...params} />
                            )} />
                </div >
        )
    }
}

export default Main;
