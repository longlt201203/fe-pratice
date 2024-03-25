import { PropsWithChildren } from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Flex from "./Flex";
import Heading from "./Heading";
import Nav from "./Nav";

const Layout = styled(Grid.Container)`
    min-height: 100vh;
`

const MainContainer = styled(Flex.Container)`
    grid-column: 2 / span 4;
    padding: 20px 10px;
`

const SidebarContainer = styled(Flex.Container)`
    padding: 20px 10px;
    background-color: ${props => props.theme.primary};
    ${props => props.theme.primaryGradient && `background: ${props.theme.primaryGradient};`}
    color: ${props => props.theme.primaryText || "inherit"};
`

function SidebarNav() {
    return (
        <Nav.Nav>
            <Nav.Link to="/" aTagLink>Hello 1</Nav.Link>
            <Nav.Link to="/" aTagLink>Hello 2</Nav.Link>
            <Nav.Link to="/" aTagLink>Hello 3</Nav.Link>
            <Nav.Link to="/" aTagLink>Hello 4</Nav.Link>
        </Nav.Nav>
    );
}

function Sidebar() {
    return (
        <SidebarContainer alignItems="center">
            <Flex.Item style={{ marginBottom: "20px" }}>
                <Heading.H1>Drogon</Heading.H1>
            </Flex.Item>
            <Flex.Item width={100}>
                <SidebarNav />
            </Flex.Item>
        </SidebarContainer>
    )
}

interface AdminLayoutProps {
    title?: string;
}

function AdminMainLayout(props: PropsWithChildren<AdminLayoutProps>) {
    return (
        <Layout cols={5}>
            <Sidebar />
            <MainContainer>
                <Flex.Item width={100} style={{ marginBottom: "20px" }}>
                    <Heading.Title style={{ textAlign: "center" }}>{props.title}</Heading.Title>
                </Flex.Item>
                <Flex.Item>
                    {props.children}
                </Flex.Item>
            </MainContainer>
        </Layout>
    );
}

export default AdminMainLayout;