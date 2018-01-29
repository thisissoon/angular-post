import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.get('/');
    return browser.wait(() => this.getPostWidgetPresent());
  }

  getPostWidget() {
    return element(by.css('sn-root .pw-widget'));
  }

  getPostWidgetPresent() {
    return this.getPostWidget().isPresent();
  }

  getPostButtons() {
    return element.all(by.css('sn-root .pw-button'));
  }

  getPostButton(i: number) {
    return this.getPostButtons().get(i);
  }

  getPostButtonsCount() {
    return this.getPostButtons().count();
  }
}
