export const breakpoints: { [index: string]: string } = {
  xs: "0",
  sm: "576",
  md: "768",
  lg: "992",
  xl: "1200",
  xxl: "1440",
  custom1: "1600",
  custom2: "1920",
  newlg: "1024",
};
export const mediaQueryMaxWidth = Object.entries(breakpoints).reduce(
  (prev, [key, breakpoint]) => {
    const prevNew = prev;
    (prevNew as any)[key] = `@media(max-width:${breakpoint})`;
    return prevNew;
  },
  {} as typeof breakpoints
);

export const mediaQuerMinWidth = Object.entries(breakpoints).reduce(
  (prev, [key, breakpoint]) => {
    const prevNew = prev;
    (prevNew as any)[key] = `@media(min-width:${breakpoint})`;
    return prevNew;
  },
  {} as typeof breakpoints
);
