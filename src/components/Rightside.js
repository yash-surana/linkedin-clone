import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>

          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>

          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Picture</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" />
        </Recommendation>
      </FollowCard>

      <BannerCard>
        <img src="/images/jobs-ad.jpg" alt="" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: "rightside";
`;

const FollowCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  position: relative;
  padding: 12px;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Title = styled.div`
  display: inline-flex;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FeedList = styled.ul`
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    margin: 12px 0px;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      padding: 16px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      font-weight: 600;
      text-align: center;
      display: inline-flex;
      align-items: center;
      max-height: 32px;
      max-width: 480px;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("/images/rightside.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;

  img {
    margin-left: 4px;
    padding: 6px;
  }

  &:hover {
    text-decoration: underline;
    img {
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 50%;
    }
  }
`;
const BannerCard = styled(FollowCard)`
  /* padding: 8px; */
  img {
    width: 280px;
    object-fit: cover;
  }
`;

export default Rightside;
