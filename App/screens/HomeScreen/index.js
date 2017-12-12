import { DrawerNavigator } from "react-navigation";
import React from "react";

import routes from "../../config/routes";
import SideBar from "../SideBar/SideBar";

export default DrawerNavigator(routes,
{
  contentComponent: props => <SideBar {...props}/>,
});