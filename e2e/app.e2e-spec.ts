import { CamChatPage } from './app.po';

describe('cam-chat App', () => {
  let page: CamChatPage;

  beforeEach(() => {
    page = new CamChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
