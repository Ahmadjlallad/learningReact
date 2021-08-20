import React from "react";
const approvalCard = function (props) {
  console.log(props);
  return (
    <div className="ui card">
      {/* NOTE and reference it in as props.children */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};
export default approvalCard;
