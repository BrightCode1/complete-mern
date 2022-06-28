import styled from "styled-components";

export const PostsContainer = styled.div``;

export const PostCardContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  padding: 10px;

  .topPostInfo {
    display: flex;
    align-items: center;
    padding: 5px 0;

    .postUser {
      flex: 4;
      display: flex;

      .postUserInfo {
        width: 100%;
      }

      .postUserImg img {
        border-radius: 50%;
        margin-right: 10px;
      }

      .postUserInfo .postNameDate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        font-size: 15px;

        span {
          font-size: 12px;
          font-weight: 300;
          color: #8c8c8c;
          text-align: right;
        }
      }

      .postUserInfo .schoolName {
        font-size: 12px;
        font-weight: 400;
        color: #888;
      }
    }

    svg {
      flex: 1;
    }
  }
`;
