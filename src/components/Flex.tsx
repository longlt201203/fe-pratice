import styled from "styled-components";

export interface FlexContainerProps {
    direction?: "column" | "row" | "column-reverse" | "row-reverse";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between";
    alignContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "stretch";
    alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
    width?: number;
    height?: number;
}

const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-content: ${props => props.alignContent || "flex-start"};
    align-items: ${props => props.alignItems || "flex-start"};
    ${props => props.width && `width: ${props.width}%;`}
    ${props => props.height && `width: ${props.height}%;`}
`

export interface FlexItemProps {
    order?: number;
    grow?: number;
    width?: number;
    height?: number;
}

const FlexItem = styled.div<FlexItemProps>`
    ${props => props.order && `order: ${props.order};`}
    ${props => props.grow && `flex-grow: ${props.grow};`}
    ${props => props.width && `width: ${props.width}%;`}
    ${props => props.height && `width: ${props.height}%;`}
`

const Flex = {
    Container: FlexContainer,
    Item: FlexItem
}

export default Flex;