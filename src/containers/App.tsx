import * as React from "react";
import {connect} from "react-redux";
import Hello from "../hello/components/hello/hello";
import {IStateImmutable, IPerson} from "../hello/models";
import {Dispatch} from "redux";

interface AppProps {
    person: IPerson;
    dispatch: Dispatch<any>;
}

class App extends React.Component<AppProps, void> {
    render() {
        const { person } = this.props;

        return <Hello person={person} />;
    }
}

const mapStateToProps = (state: IStateImmutable) => {
    return {
        person: state.get("person").toJS()
    };
};

export default connect(mapStateToProps)(App);