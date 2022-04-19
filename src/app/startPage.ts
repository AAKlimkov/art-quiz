import Control from "../common/control";
import { SettingPage } from "./settingPage";

export class StartPage extends Control {
  onSettings: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const settingButton = new Control(this.node, "button", "", "setting");
    settingButton.node.onclick = () => this.onSettings()
  }
}
