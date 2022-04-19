import Control from "../common/control";

class CategoriesPage extends Control {
  onBack: () => void;
  onSelect: (index: number) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const backButton = new Control(this.node, "button", "", "back");
    backButton.node.onclick = () => {
      this.onBack();
    };

    const categoriesList = [1, 2, 3, 4, 5, 6];
    const categoryButtons = categoriesList.map((it, index) => {
      const button = new Control(this.node, "button", "", it.toString());
      button.node.onclick = () => {
        this.onSelect(index);
      };
      return button;
    });
  }
}