import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('template spec', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('http://localhost:3000/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Переход открывает страницу профиля', () => {
      cy.visit('http://localhost:3000/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Переход открывает не существующий маршрут', () => {
      cy.visit('http://localhost:3000/asfaf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Пользователь не авторизован', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Переход открывает страницу профиля', () => {
      cy.visit('http://localhost:3000/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Переход открывает страницу со списком статей', () => {
      cy.visit('http://localhost:3000/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
