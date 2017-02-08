import { Angular2StarterProjectClientPage } from './app.po';

describe('angular2-starter-project-client App', function() {
  let page: Angular2StarterProjectClientPage;

  beforeEach(() => {
    page = new Angular2StarterProjectClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
