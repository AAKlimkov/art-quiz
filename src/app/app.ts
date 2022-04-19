import Control from "../common/control";
import { SettingPage } from "./settingPage";
import { StartPage } from "./startPage";

export class App extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.mainCycle()
  }

  private mainCycle() {
    const startPage = new StartPage(this.node);
    startPage.onSettings = () => {
      startPage.destroy();
      const settingPage = new SettingPage(this.node);
      settingPage.onBack = () => {
        settingPage.destroy();
        this.mainCycle()
      };
      settingPage.onSave = (setting) => {
        console.log(setting);

        settingPage.destroy();
        this.mainCycle()
      };
    };
  }
}
