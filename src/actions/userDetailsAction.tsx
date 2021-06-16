

export function initCompLoad() {
    return function (dispatch: any) {
        fetch(`https://reqres.in/api/users`)
            .then(resp => resp.json())
            .then(response => {
                dispatch({ type: 'GET_USER_DATA', payload: response.data });
            }).catch(err => {
                console.log(err, 'err');
            })
    }
}

export function selectedUser(user: any) {
    return function (dispatch: any, getState: any) {
        const stateData = Object.assign({}, getState().usersDetails);
        const filteredEnrollUSER = stateData.getUserData.filter((data: any) => user.id !== data.id);
        stateData.getUserData = filteredEnrollUSER;
        stateData.selectedUserDetails.push(user);
        dispatch({ type: 'SELECTED_USER', payload: stateData })
    }
}//

export function deleteUser(user: any) {

    return function (dispatch: any, getState: any) {
        const stateDeleteData = Object.assign({}, getState().usersDetails);
        const filteredDeleteData = stateDeleteData.selectedUserDetails.filter((data: any) => user.id !== data.id);
        stateDeleteData.getUserData.push(user);
        stateDeleteData.selectedUserDetails = filteredDeleteData;
        dispatch({ type: 'DELETE_USER', payload: stateDeleteData })
    }
}