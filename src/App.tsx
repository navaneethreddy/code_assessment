import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initCompLoad, selectedUser, deleteUser } from './actions/userDetailsAction';

interface Props {
    usersDetails: {
        getUserData: any[];
        selectedUserDetails: any[];
    },
    initCompLoad: any;
    selectedUser: any;
    deleteUser: any;
}

const App = (props: Props) => {

    const [tableHeaders, settableHeaders] = useState<any>([]);

    useEffect(() => {
        props.initCompLoad();
    }, [])

    useEffect(() => {
        let headersArray = [];
        for (let key in props.usersDetails.getUserData[0]) {
            headersArray.push(key);
        }
        settableHeaders(headersArray);
    }, [props.usersDetails.getUserData])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((header: any) => {
                            return (<td>{header}</td>)
                        })
                        }
                        <td>Enroll</td>
                    </tr>
                </thead>
                <tbody>
                    {props.usersDetails.getUserData.sort((a, b) => a.id - b.id).map((eachObj: any, i: any) => (
                        <tr key={i}>
                            <td>{eachObj.id}</td>
                            <td>{eachObj.email}</td>
                            <td>{eachObj.first_name}</td>
                            <td>{eachObj.last_name}</td>
                            <td><img src={eachObj.avatar}></img></td>
                            <td><button onClick={() => { props.selectedUser(eachObj) }}>enroll</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <h1>Enrolled USER</h1>
            <br>
            </br>
            <table>
                <tbody>
                    {props.usersDetails.selectedUserDetails.map((seletedData: any) => (
                        <tr>
                            <span>{seletedData.id}</span>
                            <span>{seletedData.email}</span>
                            <span>{seletedData.first_name}</span>
                            <span>{seletedData.last_name}</span>
                            <span><img src={seletedData.avatar}></img></span>
                            <span><button onClick={() => { props.deleteUser(seletedData) }}>delete</button></span>
                        </tr>

                    ))}
                </tbody>


            </table>
        </>
    );
}//usersDetails

const mapStateToProps = (state: any) => ({
    usersDetails: state.usersDetails
});

export default connect(mapStateToProps, { initCompLoad, selectedUser, deleteUser })(App);
