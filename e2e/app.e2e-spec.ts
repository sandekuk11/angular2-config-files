import { Angular2ConfigFilesPage } from './app.po';

describe('angular2-config-files App', function() {
  let page: Angular2ConfigFilesPage;

  beforeEach(() => {
    page = new Angular2ConfigFilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
