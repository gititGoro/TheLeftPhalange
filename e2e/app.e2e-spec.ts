import { TheLeftPhalangePage } from './app.po';

describe('the-left-phalange App', () => {
  let page: TheLeftPhalangePage;

  beforeEach(() => {
    page = new TheLeftPhalangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
