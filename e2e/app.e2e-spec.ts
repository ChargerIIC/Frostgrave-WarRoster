import { FrostgraveWarRosterPage } from './app.po';

describe('frostgrave-war-roster App', function() {
  let page: FrostgraveWarRosterPage;

  beforeEach(() => {
    page = new FrostgraveWarRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
