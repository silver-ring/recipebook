import { RecipeBookPage } from './app.po';

describe('recipe-book App', () => {
  let page: RecipeBookPage;

  beforeEach(() => {
    page = new RecipeBookPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to rb!!'))
      .then(done, done.fail);
  });
});
