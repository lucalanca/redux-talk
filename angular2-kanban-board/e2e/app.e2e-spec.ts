import { Angular2KanbanBoardPage } from './app.po';

describe('angular2-kanban-board App', function() {
  let page: Angular2KanbanBoardPage;

  beforeEach(() => {
    page = new Angular2KanbanBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
