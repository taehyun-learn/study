import MenuIcon from "components/MenuIcon";
import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Container = styled.div``;

const Content = styled.div``;

const Title = styled.div``;

const Menu = styled.div``;

const Item = styled.div``;

const Home =()=>{
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container>
                <Content>
                    <Title>Taehyun's Web Study</Title>
                    <Menu>
                        <Item>
                            <MenuIcon url="bhs" title="Best Horror Scenes"></MenuIcon>
                        </Item>
                    </Menu>
                </Content>
            </Container>
        </>
    );
}

export default Home;