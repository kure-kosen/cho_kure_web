import { useMediaQuery } from "react-responsive";

interface Props {
  children: any;
}

const Default = ({ children }: Props) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const ForMobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const breakpoints = {
  mobile: "40.0rem",
  tablet: "80.0rem"
};

export default {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${
    breakpoints.tablet
  })`,
  Default,
  ForMobile
};
