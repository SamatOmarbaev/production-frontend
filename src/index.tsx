import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Themeprovider } from 'app/providers/ThemeProvider';
import { App } from './app/App';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <Themeprovider>
        <App />
      </Themeprovider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
