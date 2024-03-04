import './App.css';
import ClickCounter from './components/ClickCounter';
import MuiButton from './components/MUI/MuiButton';
import HoverCounter from './components/HoverCounter';
import MuiTypography from './components/MUI/MuiTypography';
import MuiTextFields from './components/MUI/MuiTextFields';
import MuiSelect from './components/MUI/MuiSelect';
import MuiRadio from './components/MUI/MuiRadio';

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
    </div>
  );
}

export default App;
