import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div``;

const Image = styled.div``;

const Title = styled.div``;


const MenuIcon = ({url, title})=>(
    <Link to={`/studycss/${url}`}>
        <Container>
            <Title>{title}</Title>
        </Container>
    </Link>
);

export default MenuIcon;