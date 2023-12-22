import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Themeprovider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <Themeprovider>
          <App />
        </Themeprovider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
