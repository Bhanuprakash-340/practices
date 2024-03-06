import './App.css';
import ClickCounter from './components/ClickCounter';
import MuiButton from './components/MUI/MuiButton';
import HoverCounter from './components/HoverCounter';
import MuiTypography from './components/MUI/MuiTypography';
import MuiTextFields from './components/MUI/MuiTextFields';
import MuiSelect from './components/MUI/MuiSelect';
import MuiRadio from './components/MUI/MuiRadio';
import FormRedux from './components/FormRedux';
import Todo from './components/Todo/todo'
import '../src/Redux/store'
import ReduxTable from './components/ReduxTable';

function App() {
  return (
    <div className="App">
      <ClickCounter name={'react developer '}/>
      <HoverCounter/>
      <MuiTypography/>
      <MuiButton/>
      <MuiTextFields/>
      <MuiSelect/>
      <MuiRadio/>
      <FormRedux/>
      <ReduxTable/>
      <Todo/>
    </div>
  );
}

export default App;
