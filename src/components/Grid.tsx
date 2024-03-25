import styled from "styled-components";

interface GridContainerProps {
    inline?: boolean;
    cols?: number;
}

const GridContainer = styled.div<GridContainerProps>`
    display: ${props => props.inline ? "inline-grid" : "grid"};
    grid-template-columns: ${props => Array.from({ length: props.cols || 12 }, _ => `auto`).join(" ")};
`

const Grid = {
    Container: GridContainer
}

export default Grid;