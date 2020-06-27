import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

type PropsType = {
    push: any;
    userName: string;
};

const MainPage = ({ userName, push }: PropsType) => {
    return (
        <React.Fragment>
            <div>Main Page Works {userName}</div>
        </React.Fragment>
    );
};

const mapState = ({ global: { userName } }) => {
    return {
        userName,
    };
};

export default connect(mapState, { push })(MainPage);
