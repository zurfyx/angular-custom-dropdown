import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Angular Custom Dropdown"', () => {
    expect(page.getTitleText()).toContain('Angular Custom Dropdown');
  });
});
