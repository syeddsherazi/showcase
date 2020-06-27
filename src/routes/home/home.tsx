import React, { useState } from "react";
import { connect } from "react-redux";
import { enterName } from "../../store/actions/global";
import { push } from "connected-react-router";

import "./home.scss";

type PropsType = {
    enterName: any;
    push: any;
    userName: any;
};

const HomePage = ({ userName, push, enterName }: PropsType) => {
    const [name, setName] = useState(userName);

    const submitForm = () => {
        enterName(name);
        push("/main");
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="welcome-box">
                    <h2>Hi there!</h2>
                    <p>Welcome to your education showcase</p>
                    <form
                        className="name"
                        onSubmit={(event) => {
                            event.preventDefault();
                            submitForm();
                        }}>
                        <p>Type your name and click enter to begin!</p>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <button type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapState = ({ global: { userName } }) => {
    return {
        userName,
    };
};

export default connect(mapState, { enterName, push })(HomePage);
