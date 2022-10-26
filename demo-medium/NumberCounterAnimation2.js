import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    numberContainer: {
        display: 'inline-flex'
    },
    digitAnimationContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    digitItem: {
        width: "22px",
        fontSize: "32px",
        margin: "12px 0px",
        fontWeight: "bold",
        textAlign: "right"
    }
});

function NumberCounterAnimation(props) {
  const classes = useStyles();
  const {number} = props;

  const digitsArray = Array.from({length: 10}, (_, i) => i);
  const unitsArray = digitsArray;
  const tensArray = digitsArray;
  const hundredsArray = digitsArray;

  return (
        <div className={classes.numberContainer}>
            <div className={classes.digitAnimationContainer}>
                {hundredsArray.map((digit) =>
                    <div key={digit} className={classes.digitItem}>{digit}</div>
                )}
            </div>
            <div className={classes.digitAnimationContainer}>
                {tensArray.map((digit) =>
                    <div key={digit} className={classes.digitItem}>{digit}</div>
                )}
            </div>
            <div className={classes.digitAnimationContainer}>
                {unitsArray.map((digit) =>
                    <div key={digit} className={classes.digitItem}>{digit}</div>
                )}
            </div>
        </div>
  );
}

export default NumberCounterAnimation;
