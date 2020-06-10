import React from "react";
import { hydrate } from "react-dom";

import Login from '../pages/login';

hydrate(<Login />, document.getElementById("root"));
