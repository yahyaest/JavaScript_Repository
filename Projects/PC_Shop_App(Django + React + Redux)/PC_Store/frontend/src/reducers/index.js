import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import merchandises from "./merchandises";
import users from "./users";

export default combineReducers({ merchandises, users, errors, messages, auth });
