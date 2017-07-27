import { ProyectoAngularPage } from './app.po';

describe('proyecto-angular App', () => {
  let page: ProyectoAngularPage;

  beforeEach(() => {
    page = new ProyectoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
