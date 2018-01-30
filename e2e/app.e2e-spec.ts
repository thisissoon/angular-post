import { AppPage } from './app.po';

describe('angular-post App', () => {
  const page = new AppPage();

  beforeAll(() => {
    page.navigateTo();
  });

  it('should render post widgets', () => {
    expect(page.getPostWidgetPresent()).toBeTruthy();
    expect(page.getPostButtonsCount()).toBeGreaterThan(0);
  });

  it('should render post widget and buttons on another page', () => {
    page.clickNavLink(1);
    expect(page.getPostWidgetPresent()).toBeTruthy();
    expect(page.getPostButtonsCount()).toBeGreaterThan(0);
  });
});
