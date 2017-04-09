import * as React from "react";
import {IPerson} from "../../models";
import "./hello.scss";

interface HelloProps {
    person: IPerson;
}

export default class Hello extends React.Component<HelloProps, void> {
    render() {
        const { person } = this.props;

        return (
            <div className="hello">
                Hello {person.surname} {person.name}
            </div>
        );
    }
}