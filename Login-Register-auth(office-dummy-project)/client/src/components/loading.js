import React from "react";
const loadingImg = ("https://cdn.impression.co.uk/2021/03/loading1.gif");

class Loading extends React.Component {
  render() {
    return (
      <div className="spinner">
        {/* <img src={loadingImg} alt="Loading..." /> */}
      </div>
    );
  }
}

export default Loading;
