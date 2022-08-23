import styled from "styled-components";
import { signInAPI } from "../actions";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate replace to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <LoginNav>
          <Join>Join Now</Join>
          <SignIn onClick={() => props.signIn()}>Sign In</SignIn>
        </LoginNav>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
  margin: 0px;
`;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  padding: 12px 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
      /* width: 50px; */
    }
  }
`;

const LoginNav = styled(Nav)`
  /* @media (max-width:768px){
    display: flex;
    justify-content
  } */
`;

const Join = styled.div`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  display: inline-block;
  font-weight: 600;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.89);
    border-radius: 5px;
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  color: #0a66c2;
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  padding: 10px 24px;
  transition-duration: 167ms;
  font-weight: 600;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(121, 181, 249, 0.15);
    box-shadow: inset 0 0 0 2px #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  position: relative;
  margin: auto;
  padding: 60px 0;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    font-weight: 400;
    font-size: 56px;
    color: #8f5849;
    padding-bottom: 0px;
    width: 55%;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    z-index: 1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: 100px;
    right: -150px;
    /* max-width: 100%; */
    @media (max-width: 768px) {
      /* top: 230px; */
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  padding: 10px 24px;
  border-radius: 28px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 7.5);
  }

  img {
    padding: 0px 20px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
