import { useState } from 'react';
import {createUseStyles} from 'react-jss';

import NumberCounterAnimation2 from './components/NumberCounterAnimation2';
import NumberCounterAnimation from './components/NumberCounterAnimation';

const useStyles = createUseStyles({
    appContainer: {
      backgroundColor: "#EAE9ED",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
});

function App() {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState(1);

  const MAX_PERCENTAGE = 100;

  return (
    <div className={classes.appContainer}>
        <NumberCounterAnimation number={activeItem} />
        <input
            type="range"
            min="1"
            max={MAX_PERCENTAGE}
            step="1"
            value={activeItem}
            onChange={({target}) => setActiveItem(Number(target.value))}
        />
    </div>
  );
}

export default App;
