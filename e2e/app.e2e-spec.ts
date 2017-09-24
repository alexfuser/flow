import { FlowPage } from './app.po';

describe('flow App', () => {
  let page: FlowPage;

  beforeEach(() => {
    page = new FlowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
