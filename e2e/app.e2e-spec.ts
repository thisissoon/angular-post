import { AppPage } from './app.po';

describe('angular-post App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should render post widgets', () => {
    expect(page.getPostWidgetPresent()).toBeTruthy();
  });

  it('should render post buttons', () => {
    expect(page.getPostButtonsCount()).toBeGreaterThan(0);
  });
});
