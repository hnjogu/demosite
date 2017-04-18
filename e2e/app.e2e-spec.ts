import { MembersitePage } from './app.po';

describe('membersite App', function() {
  let page: MembersitePage;

  beforeEach(() => {
    page = new MembersitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
