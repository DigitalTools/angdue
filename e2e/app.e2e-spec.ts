import { Hero2Page } from './app.po';

describe('hero2 App', function() {
  let page: Hero2Page;

  beforeEach(() => {
    page = new Hero2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
