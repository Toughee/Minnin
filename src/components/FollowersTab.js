import React from 'react'
// import FollowerUserData from './FollowerUserData'
export default class FollowersTab extends React.Component {
    render() {
        return (
            <div className="App">
                <h2 className="PageTitle">List of followers</h2>

                <aside className=" row">
                    <span className=" FollowerTabStyle col">
                        <p className="FollowerId">👨 Thinlin</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Something about dogs
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧙‍♀️ Sqush2</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about cats
                            </span>
                        </p>
                    </span>

                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">👨‍🌾 Orthy</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about forests
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧑‍🦲 morT12</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about planes
                            </span>
                        </p>
                    </span>

                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">👨‍💻 Pio57</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about coding
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🙍 yuli90</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about bikes
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🙇 rivers3</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about trees
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">🧑‍🦰 scotfee</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about newspapers
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">👨‍🚀 1oy1</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about React
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">👩 ErlinBo</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about purses
                            </span>
                        </p>
                    </span>
                    <span className="FollowerTabStyle col">
                        <p className="FollowerId">👨‍⚖️ Urkan2</p>
                        <p>
                            <span className="BioStyle">
                                Bio: Someting about books
                            </span>
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
