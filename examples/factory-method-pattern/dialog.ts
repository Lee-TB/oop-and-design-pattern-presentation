interface Button {
  render(): void;
  onClick(): void;
}

abstract class Dialog {
  abstract createButton(): Button;
  render(): void {
    const button: Button = this.createButton();
    button.onClick();
    button.render();
  }
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

class WindowsButton implements Button {
  render() {
    console.log('render window button');
  }
  onClick() {
    console.log('click Window button');
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}

class HTMLButton implements Button {
  render() {
    console.log('render html button');
  }
  onClick() {
    console.log('click html button');
  }
}

const dialog = new WindowsDialog();
console.log(dialog.render());
const dialog2 = new WebDialog();
console.log(dialog2.render());
