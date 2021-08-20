import faker from "faker";
import React from "react";
import ApprovalCard from "./ApprovalCard";

const Comment = (props) => {
  // * we need props to pass data to component
  console.log(props);
  // * all variables are passed to component is saved in props as a JS object
  // console.log(arguments);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.commentText}</div>
    </div>
  );
};

// * <Comment author='sam'/>

// * to show component we can use not this {Comment()} but this <Comment />

const commentsProj = function () {
  // ANCHOR review in React i can do <ApprovalCard /> and i can <ApprovalCard> </ApprovalCard>
  // * this way i but content in the component
  return (
    <div className="container">
      <ApprovalCard>
        {/* NOTE review <!-- and refer it as props--> */}
        {/* NOTE and reference it in as props.children */}
        <div className="ui container comments">
          <Comment
            author="Sam"
            timeAgo="Today 06:00 Am"
            avatar={faker.image.avatar()}
            commentText="Nice blog"
          />
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Alex"
          timeAgo="Today 09:30 pm"
          avatar={faker.image.avatar()}
          commentText="منور"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Jane"
          timeAgo="Yesterday 01:00 Am"
          avatar={faker.image.avatar()}
          commentText="hi there"
        />
      </ApprovalCard>
    </div>
  );
};

export default commentsProj;
