import styled from "styled-components";
import { ThemeColorProps } from "../utils/theme";

interface ButtonProps {
    variant?: keyof ThemeColorProps;
}

const Button = styled.button<ButtonProps>`
    background: ${props => props.theme[props.variant || "primary"]};
    color: ${props => props.variant ? (props.theme[props.variant+"Text"] ? props.theme[props.variant+"Text"] : props.theme[props.variant]) : "inherit"};
    border: none;
    border-radius: 25px;
    padding: 10px;
    transition: .3s linear;

    &:hover {
        cursor: pointer;
        ${props => (props.variant && props.theme[props.variant+"TextHover"]) && `color: ${props.theme[props.variant+"TextHover"]};`}
        background: ${props => props.variant ? (props.theme[props.variant+"Hover"] ? props.theme[props.variant+"Hover"] : props.theme[props.variant]) : props.theme.primary};
    }
`

export default Button;