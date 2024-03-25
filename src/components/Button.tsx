import styled from "styled-components";
import { ThemeColorProps } from "../utils/theme";
import { PropsWithChildren } from "react";

interface ButtonProps {
    variant?: keyof ThemeColorProps;
    disabled?: boolean;
}

const BaseButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 25px;
    padding: 10px;
`

const DisabledButton = styled(BaseButton)`
    background-color: gray;
`

const MyButton = styled(BaseButton)`
    background: ${props => props.theme[props.variant || "primary"]};
    color: ${props => props.variant ? (props.theme[props.variant+"Text"] ? props.theme[props.variant+"Text"] : props.theme[props.variant]) : "inherit"};
    transition: .3s linear;

    &:hover {
        cursor: pointer;
        ${props => (props.variant && props.theme[props.variant+"TextHover"]) && `color: ${props.theme[props.variant+"TextHover"]};`}
        background: ${props => props.variant ? (props.theme[props.variant+"Hover"] ? props.theme[props.variant+"Hover"] : props.theme[props.variant]) : props.theme.primary};
    }
`

function Button(props: PropsWithChildren<ButtonProps>) {
    return (
        <>
            {props.disabled ? <DisabledButton {...props} /> : <MyButton {...props} />}
        </>
    );
}

export default Button;