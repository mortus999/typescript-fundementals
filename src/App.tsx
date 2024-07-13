import TypeScriptTypes from "./components/TypeScriptTypes";
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

const App: React.FC = () => {
  
  return (
    <>   
  <TypeScriptTypes/>
      <ColorList />
      <EvenNumbers />
      <UserList />
    </>
  )
}

export default App