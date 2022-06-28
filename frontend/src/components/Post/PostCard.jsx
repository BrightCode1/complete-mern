import React from "react";
import moment from "moment";
import { BsThreeDotsVertical } from "react-icons/bs";

import { PostCardContainer } from "../../pages/Posts/postStyles";

moment.locale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "seconds",
    ss: "%s ago",
    m: "a minute",
    mm: "%dm ago",
    h: "an hour",
    hh: "%dh ago",
    d: "a day",
    dd: "%dd ago",
    M: "a month",
    MM: "%dM ago",
    y: "a year",
    yy: "%dy ago",
  },
});

const PostCard = ({ post }) => {
  const myDate = parseInt(post.createdAt);
  const dateTime = moment(myDate).fromNow(true);
  return (
    <PostCardContainer>
      <div className="topPostInfo">
        <div className="postUser">
          <div className="postUserImg">
            <img src={post.userImg} width={30} height={30} alt={post.name} />
          </div>
          <div className="postUserInfo">
            <div className="postNameDate">
              {post.name} <span>{dateTime}</span>
            </div>
            <p className="schoolName">{post.school}</p>
          </div>
        </div>
        <BsThreeDotsVertical
          className="threeDots"
          style={{ fontSize: "22px" }}
        />
      </div>
      <div className="postContent">
        <p>{post.desc}</p>
      </div>
    </PostCardContainer>
  );
};

export default PostCard;
