import {createBreakpoint, createMap} from 'styled-components-breakpoint';

const breakpoints = {
    xs: 0,
    sm: 320,
    md: 768,
    lg: 1200,
    xl: 1600
};

const breakpoint = createBreakpoint(breakpoints);
const map = createMap(breakpoints);

export { breakpoint };
export { map };