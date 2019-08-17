import React from "react";

import RootStore from "@/stores/RootStore";

const RootContext = React.createContext({} as RootStore);

export const { Provider } = RootContext;
export default RootContext;
