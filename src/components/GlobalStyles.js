import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    body{
        padding-top:50px;
    }
`;

export default globalStyles;