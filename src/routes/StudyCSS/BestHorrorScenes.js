import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: $white;
`;

const Header = styled.header`
    position: fixed;
  top: 0;
  left: 0;
  width: 33%;
  height: 100%;
  padding: 190px;
  padding: 10vh 0 72px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $red;
`;

const Title = styled.h1`
box-sizing: border-box;
font-size: 85px;
    width: 50%;
    text-transform: uppercase;
    letter-spacing: 5px;
`;

const Bottom = styled.div``;

const BottomH = styled.h3`
font-size: 30px;
    font-weight: 300;
    margin-bottom: 40px;
    width: 70%;
    line-height: 1.2;
    text-align: justify;
`;

const BottomP = styled.p`
width: 70%;
    line-height: 1.2;
    text-align: justify;
    font-weight: 300;
    font-size: 22px;
    margin-bottom: 40px;
`;

const BottomNav = styled.nav`width: 80%;`;

const BottomUl = styled.ul`
display: flex;
      flex-wrap: wrap;
`;

const BottomLi = styled.li`
cursor: pointer;
        margin-right: 12px;
        font-size: 20px;
        color: black;
        opacity: 0.5;
        padding-bottom: 5px;
        border-bottom: 2px solid rgba(0, 0, 0, 1);
        margin-bottom: 20px;
        &:hover {
          opacity: 1;
        }

`;

const Main = styled.main`
margin-left: 33%;
`;

const Movie = styled.section`
background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 5%,
        transparent,
        transparent,
        transparent,
        transparent
      )
      red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const Wrapper = styled.div`
width: 80%;
      display: flex;
      flex-direction: column;
`;

const MovieHeader = styled.div`
 display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 25px;
`;

const MovieHeaderYear = styled.h4`
font-size: 32px;
          text-transform: uppercase;
`;

const MovieHeaderFrom = styled.h5`
letter-spacing: 2px;
`;

const Poster = styled.img`
 width: 100%;
      box-shadow: 0 80px 80px -80px #000, 0 0 12px rgba(0, 0, 0, 0.06),
        inset 0 0 0 1px rgba(0, 0, 0, 0.2);
`;


const BestHorrorScenes =()=>{
    return(
        <>
            <Helmet>
                <title>Best Horror Scenes</title>
            </Helmet>
            <Container>
                <Header>
                    <Title>Best Horror Scenes</Title>
                    <Bottom>
                        <BottomH>An ever growing collection featuring some of the best scenes in horror.</BottomH>
                        <BottomP>“Best Horror Scenes” is a collection of scenes I feel are some of the
            most affecting in horror. Some may be simple black cat scares, others
            may be more subdued or nuanced. Many come from films that aren't
            necessarily “horror” but have elements or threads of horror, and all
            have the same general effect: unease, dread, fear, shock, disgust.</BottomP>
                        <BottomNav>
                            <BottomUl>
                                <BottomLi>Watch on YouTube</BottomLi>
                                <BottomLi>Suggest a Scene</BottomLi>
                                <BottomLi>Get Episode Notices</BottomLi>
                                <BottomLi>Contact</BottomLi>
                                <BottomLi>RSS</BottomLi>
                            </BottomUl>
                        </BottomNav>
                    </Bottom>
                </Header>
                <Main>
                    <Movie>
                        <Wrapper>
                            <MovieHeader>
                                <MovieHeaderYear>38. Hereditary (2018)</MovieHeaderYear>
                                <MovieHeaderFrom>Directed by Me</MovieHeaderFrom>
                            </MovieHeader>
                            <Poster src="poster.png" alt="" />
                        </Wrapper>
                    </Movie>
                    <Movie>
                        <Wrapper>
                            <MovieHeader>
                                <MovieHeaderYear>38. Hereditary (2018)</MovieHeaderYear>
                                <MovieHeaderFrom>Directed by Me</MovieHeaderFrom>
                            </MovieHeader>
                            <Poster src="poster.png" alt="" />
                        </Wrapper>
                    </Movie>
                    <Movie>
                        <Wrapper>
                            <MovieHeader>
                                <MovieHeaderYear>38. Hereditary (2018)</MovieHeaderYear>
                                <MovieHeaderFrom>Directed by Me</MovieHeaderFrom>
                            </MovieHeader>
                            <Poster src="poster.png" alt="" />
                        </Wrapper>
                    </Movie>
                </Main>
            </Container>
        </>
    );
}

export default BestHorrorScenes;