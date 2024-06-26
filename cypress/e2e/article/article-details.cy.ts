let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`http://localhost:3000/articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('И видит содержимое страницы', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('И видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecomendationsList').should('exist');
  });
  it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('И ставит оценку (пример с стабом на фикстурах)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.getRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
