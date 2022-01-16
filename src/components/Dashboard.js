import React from "react";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Dashboard section</h2>

        <form>
          <input
            placeholder="create a new post"
            aria-label="New post section"
          />
        </form>
      </div>
    );
  }
}
