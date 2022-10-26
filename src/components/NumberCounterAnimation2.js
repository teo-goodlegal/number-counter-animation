import { useRef, useEffect } from 'react';
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
        // height: "50px",
        // width: "100%",
        // position: "relative",
        // overflow: "hidden",
        // '&::-webkit-scrollbar': {
        //     width: 0,
        //     height: 0
        // }
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

//   const refUnitItemView = useRef([]);
//   const refTensItemView = useRef([]);
//   const hundredsItemView = useRef([]);

//   const unitsContainerRef = useRef();
//   const tensContainerRef = useRef();
//   const hundredsContainerRef = useRef();


//   const addZeroPadding = (number, places) => String(number).padStart(places, '0');
//   const splitNumber = ( number ) => {
//     const noArrayDigitsDecomposition = number.split('');
//     return {
//         units: noArrayDigitsDecomposition[2],
//         tens: noArrayDigitsDecomposition[1],
//         hundreds: noArrayDigitsDecomposition[0]
//     }
//   }

//   useEffect(() => {
    // const {units, tens, hundreds} = splitNumber( addZeroPadding( number, 3 ) )
    
    // unitsContainerRef.current.scrollTo({
    //     behavior: 'smooth', 
    //     top: refUnitItemView.current[units].offsetTop
    // })
    // tensContainerRef.current.scrollTo({
    //     behavior: 'smooth', 
    //     top: refTensItemView.current[tens].offsetTop
    // })
    // hundredsContainerRef.current.scrollTo({
    //     behavior: 'smooth', 
    //     top: hundredsItemView.current[hundreds].offsetTop
    // })

//   }, [number])

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
