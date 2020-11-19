import { run } from "./app/app";
//import "./main.css";
import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";

const alertService = new AlertService();
const componentService = new ComponentService();
console.log("Hash md5!!");
run(alertService, componentService);
