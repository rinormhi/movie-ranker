import { Container as MUIContainer } from "@mui/material";
import React from "react";

export function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <MUIContainer className="lg: px-[64px] xs: px-[64px] sm:px-[64px] md: px-[64px] lg: px-[64px] xl: px-[64px]">
      {children}
    </MUIContainer>
  );
}

export default Container;
