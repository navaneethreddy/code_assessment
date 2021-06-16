
interface initState {
    getUserData: any[];
    selectedUserDetails: any[]
}

const initialState = {
    getUserData: [],
    selectedUserDetails: [],
};

export default function (state: initState = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case 'GET_USER_DATA':
            return {
                ...state,
                getUserData: action.payload
            }
        case 'SELECTED_USER':
            return {
                ...state,
                getUserData: action.payload.getUserData,
                selectedUserDetails: action.payload.selectedUserDetails
            }
        case 'DELETE_USER':
            return {
                ...state,
                getUserData: action.payload.getUserData,
                selectedUserDetails: action.payload.selectedUserDetails
            }
        default:
            return state;
    }
}