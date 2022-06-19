import styled from "styled-components";
import { connect } from "react-redux";

const Leftside = (props) => {
  return (
    <Container>
      <InfoCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <WelcomeText>
              Welcome, {props.user ? props.user.displayName : "there"}!
            </WelcomeText>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <Network>
            <a>
              <div>
                <span>Connections</span>
                <span>Grow your network</span>
              </div>
              <img src="/images/widget-icon.svg" alt="" />
            </a>
          </Network>
          <ViewedProfile>
            <a>
              <div>Who viewed your profile</div>
            </a>
          </ViewedProfile>
        </Widget>

        <Items>
          <img src="/images/item-icon.svg" alt="" />
          <div>My Items</div>
        </Items>
      </InfoCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>

        {/* Plus sign */}
        <a>
          <span>
            Events
            <img src="images/plus-icon.svg" alt="" />
          </span>
        </a>

        {/* Follow hashtags text */}
        <a>
          <span>Follow hashtags</span>
        </a>

        {/* Discover more text */}
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const InfoCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  overflow: hidden;
  margin-bottom: 8px;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid #d6cec2;
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;

  & > a:hover {
    text-decoration: underline #0a66c2;
  }
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 2px;
`;

const Photo = styled.div`
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-shadow: none;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  margin: -38px auto 12px;
  background-size: 60%;
`;

const WelcomeText = styled.div`
  line-height: 1.5;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  line-height: 1.33;
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
`;
const Network = styled.div`
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: black;
          font-weight: 600;
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;
const ViewedProfile = styled.div`
  padding: 4px 16px;
  & > a {
    div {
      text-align: left;
      font-size: 12px;
      line-height: 1.5;
      margin-top: 4px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const Items = styled.div`
  padding: 12px 16px;
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  display: flex;
  align-items: center;
  & > div {
    padding: 0px 8px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

// Community Card
const CommunityCard = styled(InfoCard)`
  padding: 8px 0 0;
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    color: #0a66c2;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
    span:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Leftside);
