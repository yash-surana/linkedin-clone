import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Content>
        <Section>
          <h5>
            <a href="https://www.sicsr.ac.in/">
              Want to have both a management and an IT degree?{" "}
            </a>
          </h5>
          <p>Apply today for a BBA-IT degree at Symbiosis!</p>
        </Section>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 26px;
  max-width: 100%;
  overflow: hidden;
  height: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  min-height: 26px;
  text-align: center;
  display: flex;
  justify-content: center;
  text-decoration: underline;
  box-sizing: content-box;
  padding: 16px 0px;
  font-size: 16px;

  h5 {
    padding: 0px 8px;
    a {
      color: #0a66c2;
      font-weight: 700;
    }
  }
  p {
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    line-height: 1.5;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns:
    minmax(0, 5fr)
    minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
