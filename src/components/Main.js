import { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setshowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setshowModal("close");
        break;
      case "close":
        setshowModal("open");
        break;
      default:
        setshowModal("close");
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <FirstPost> No articles</FirstPost>
      ) : (
        <Container>
          <NewPost>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} />
              ) : (
                <img src="./images/user.svg" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>

            {/* Photo */}
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  width="24"
                  height="24"
                  focusable="false"
                  fill="#70b5f9"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
                <span>Photo</span>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="#7fc15e"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                </svg>
                <span>Video</span>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="#e7a33e"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                </svg>{" "}
                <span>Event</span>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="#fc9295"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                </svg>
                <span>Write article</span>
              </button>
            </div>
          </NewPost>
          <Content>
            {props.loading && <img src={"./images/spin-loading.gif"} />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                      </svg>
                    </button>
                  </SharedActor>

                  <Description>{article.description}</Description>
                  <SharedImage>
                    <a>
                      {article.sharedImg && !article.video ? (
                        <img src={article.sharedImg} />
                      ) : (
                        <ReactPlayer width={"100%"} url={article.video} />
                      )}
                    </a>
                  </SharedImage>

                  {/* Social Counts */}
                  <SocialCounts>
                    <li>
                      <button>
                        <img src="/images/like.svg" alt="" />
                        <img src="/images/clap.svg" alt="" />
                        <img src="/images/heart.svg" alt="" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>2 comments</a>
                    </li>
                  </SocialCounts>
                  <SocialAction>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                      </svg>
                      <span>Like</span>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                      </svg>
                      <span>Comment</span>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                      </svg>
                      <span>Send</span>
                    </button>
                  </SocialAction>
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const FirstPost = styled.div`
  font-weight: 600;
  border: 2px solid #0a66c2;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
  background-color: #fff;
  position: relative;
  border: none;
  border-radius: 5px;
`;

const NewPost = styled(CommonCard)`
  color: #958b7b;
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  padding: 8px;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px;
        flex-grow: 1;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding-left: 16px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 4px;
      flex-wrap: wrap;

      button {
        svg {
          margin: 0 8px;
        }
        span {
          color: #958b7b;
        }
        &:hover {
          border-radius: 5px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const SharedActor = styled(CommonCard)`
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  padding-right: 40px;
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  border: none;
  box-shadow: none;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-basis: 0;
      flex-grow: 1;
      flex-direction: column;
      margin-left: 8px;
      overflow-y: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 16px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 14px;
          color: rgba(0, 0, 0, 0 6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 8px;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0.9);
  text-align: left;
  font-size: 16px;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  position: relative;
  display: block;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  list-style-type: none;
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 8px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  justify-content: space-between;

  li {
    margin-right: 5px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;
      span {
        padding-left: 2px;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    a:hover {
      text-decoration: underline;
      color: #0a66c2;
      cursor: pointer;
    }
  }
`;

const SocialAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.7);
    border: none;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

// const SocialAction = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   padding: 4px;

//   button {
//     background: transparent;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     color: rgba(0, 0, 0, 0.6);
//     font-weight: bolder;
//     padding: 12px 24px;

//     span {
//       margin-left: 4px;
//     }

//     &:hover {
//       background-color: rgba(0, 0, 0, 0.1);
//       border-radius: 5px;
//       /* padding: 12px; */
//       transition: background-color 500ms;
//     }

//     @media (min-width: );
//   }
// `;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
