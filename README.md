My App
Платформа, на которой пользователи могут читать, находить и оценивать статьи, загруженные с собственной БД. А также имеют возможность редактировать свой профиль, менять темы, языки и многое другое.

Технологии
Архитектура: Feature-Sliced Design

app (Глобальные стили, обёртки, ErrorBoundary и т.п.)
pages (Страницы)
widgets (Композиционной слой фичей и сущностей)
features (Действия пользователя)
entities (Бизнес-сущности)
shared (Переиспользуемые ресурсы)
Ядро: React, Redux Toolkit, Typescript

Сборщик: Webpack в связке с Babel

Роутинг: React-router-dom

Линтинг: ESLint, Stylelint

Тестирование:

Unit: Jest
Скриншотное: Storybook + Loki
Интеграционное: React-testing-library
E2E: Cypress
Витрина компонентов: Storybook

CI Pipeline: GitHub Actions

Pre commit хуки: Husky

i18n: i18next

Backend: JSON Server
