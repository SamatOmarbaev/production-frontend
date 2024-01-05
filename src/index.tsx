import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Themeprovider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <Themeprovider>
          <App />
        </Themeprovider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
