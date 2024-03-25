import styled, { css } from "styled-components";
import Flex, { FlexContainerProps, FlexItemProps } from "./Flex";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const NavContainer = styled(Flex.Container)`
`

const NavLinkContainer = styled(Flex.Item)`
`

const NavLinkTagCss = css`
    text-align: center;
    text-decoration: none;
    padding: 15px 0;
    width: 100%;
    color: ${props => props.theme.primaryText};
    display: inline-block;
    transistion: .3s linear;

    &:hover {
        background-color: ${props => props.theme.primaryHover}
    }
`

const NavLinkATag = styled.a`
    ${NavLinkTagCss}
`

const NavLinkLinkTag = styled(Link)`
    ${NavLinkTagCss}
`

function NavComponent<T>(props: PropsWithChildren<FlexContainerProps & T>) {
    return (
        <NavContainer {...props}>{props.children}</NavContainer>
    );
}

interface NavLinkComponentProps {
    aTagLink?: boolean;
    to: string;
}

function NavLinkComponent<T>(props: PropsWithChildren<FlexItemProps & NavLinkComponentProps & T>) {
    return (
        <NavLinkContainer {...props} width={100}>
            {props.aTagLink ? <NavLinkATag href={props.to}>{props.children}</NavLinkATag> : <NavLinkLinkTag to={props.to}>{props.children}</NavLinkLinkTag>}
        </NavLinkContainer>
    );
}

const Nav = {
    Nav: NavComponent,
    Link: NavLinkComponent
}

export default Nav;