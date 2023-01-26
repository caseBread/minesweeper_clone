import Board from './components/Board';
import Setting from './components/Setting';

const App = () => {
  return (
    <div className="transform-center bg-slate-400 rounded-md">
      <Setting />
      <Board />
    </div>
  );
};

export default App;
