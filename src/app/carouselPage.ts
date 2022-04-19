import Control from "../common/control";

fetch('src\pets.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

interface IAppSetting {}

export class CarouselPage extends Control {
  onSlide: (index: number) => void;
  onSwitch: (arr?: Array<number>) => void;
  onBack: () => void;
  caruoselTemp: Array<number>;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const swithButton = new Control(this.node, "button", "", "+1");
    const swithminus = new Control(this.node, "button", "", "-1");

    swithButton.node.onclick = () => {
      this.caruoselTemp = this.caruoselTemp.map((el) => {
        return el + 1;
      });
      const caruselButtons = new Control(this.node, "div");
      this.caruoselTemp.map((el, ind) => {
        const button = new Control(
          caruselButtons.node,
          "button",
          "",
          el.toString()
        );
        button.node.onclick = () => {
          this.onSlide(ind);
        };
      });
      this.onSwitch();
    };

    swithminus.node.onclick = () => {
      this.caruoselTemp = this.caruoselTemp.map((el) => {
        return el - 1;
      });
      const caruselButtons = new Control(this.node, "div");
      this.caruoselTemp.map((el, ind) => {
        const button = new Control(
          caruselButtons.node,
          "button",
          "",
          el.toString()
        );
        button.node.onclick = () => {
          this.onSlide(ind);
        };
      });

      this.onSwitch();
    };

    const backButton = new Control(this.node, "button", "", "back");
    backButton.node.onclick = () => {
      this.onBack();
    };

    const carouselFull = [1, 2, 3, 4, 5, 6, 7, 8];
    const carouselStart = [1, 2, 3];
    const caruoselNext1 = [4, 5, 6, 1, 2, 3, 4, 5, 6];
    this.caruoselTemp = [7, 8, 1, 4, 5, 6, 7, 8, 1];
  }
}
