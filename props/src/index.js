import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Abby"
          timeAgo="Today at 4:00PM"
          avatar={faker.image.image()}
          commentText="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ben"
          timeAgo="Today at 6:30PM"
          avatar={faker.image.image()}
          commentText="God job!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Cindy"
          timeAgo="Today at 6:00PM"
          avatar={faker.image.image()}
          commentText="How are you!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
