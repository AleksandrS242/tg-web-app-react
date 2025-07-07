import { useEffect, useTransition } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';



function App() {  
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
      tg.ready();
    })

  return (
    <div className="App">
      Work
        <button onClick={onToggleButton}>toggle111</button>
    </div>
  );
}

export default App;
