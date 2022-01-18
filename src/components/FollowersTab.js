import React, { Component } from 'react'
import FollowerUserData from './FollowerUserData'
export default class FollowersTab extends React.Component {
    render() {
        return (
            <div className="App">
                <h2 className="PageTitle">List of followers</h2>

                <aside className=" row">
                    <span className=" FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>

                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧔 follower name</p>
                        <p>
                            <span className="">Bio: Someting about X</span>
                        </p>
                    </span>
                </aside>
                {/* <React.Fragment>
                     {FollowerUserData.followerUserData.map((item, id) => (
                <li key={id} >
                    <p>{item.username}</p>
                    <p>{item.bio}</p>
                ))} 
                </li>
                </React.Fragment> */}
            </div>
        )
    }
}
