import { ProjectRoutes } from './routes/ProjectRoutes';
import {Provider} from 'react-redux';
import {store} from './store';

function App() {
  return (
    <>
    <Provider store={store}>
      <ProjectRoutes/>
    </Provider>
    </>
  );
}

export default App;
