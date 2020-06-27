const initialState = {
    userName: "",
};

const Global = (state = initialState, action) => {
    switch (action.type) {
        case "ENTER_NAME":
            return { ...state, userName: action.payload };
        default:
            return { ...state };
    }
};

export default Global;
