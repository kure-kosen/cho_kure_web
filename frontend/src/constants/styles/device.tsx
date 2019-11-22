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
  mobile: "767px"
};

export default {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  Default,
  ForMobile
};
