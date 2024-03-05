/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './App.css';
import BasicModal from './BasicModal';

type Position = "South" | "West" | "North" | "East" | "";

interface Hand {
  hand: Card[];
  position: Position;
  handConditions: HandConditions;
}

type Color = '♠' | '♥' | '♦' | '♣';

interface Card {
  color: Color;
  card: string;
  points: number;
  id: number;
}

const colors: Color[] = ['♠', '♥', '♦', '♣'];

const colodaInit: Card[] = [
  { color: colors[0], card: 'A', points: 4, id: 0 },
  { color: colors[0], card: 'K', points: 3, id: 1 },
  { color: colors[0], card: 'Q', points: 2, id: 2 },
  { color: colors[0], card: 'J', points: 1, id: 3 },
  { color: colors[0], card: 'T', points: 0, id: 4 },
  { color: colors[0], card: '9', points: 0, id: 5 },
  { color: colors[0], card: '8', points: 0, id: 6 },
  { color: colors[0], card: '7', points: 0, id: 7 },
  { color: colors[0], card: '6', points: 0, id: 8 },
  { color: colors[0], card: '5', points: 0, id: 9 },
  { color: colors[0], card: '4', points: 0, id: 10 },
  { color: colors[0], card: '3', points: 0, id: 11 },
  { color: colors[0], card: '2', points: 0, id: 12 },

  { color: colors[1], card: 'A', points: 4, id: 13 },
  { color: colors[1], card: 'K', points: 3, id: 14 },
  { color: colors[1], card: 'Q', points: 2, id: 15 },
  { color: colors[1], card: 'J', points: 1, id: 16 },
  { color: colors[1], card: 'T', points: 0, id: 17 },
  { color: colors[1], card: '9', points: 0, id: 18 },
  { color: colors[1], card: '8', points: 0, id: 19 },
  { color: colors[1], card: '7', points: 0, id: 20 },
  { color: colors[1], card: '6', points: 0, id: 21 },
  { color: colors[1], card: '5', points: 0, id: 22 },
  { color: colors[1], card: '4', points: 0, id: 23 },
  { color: colors[1], card: '3', points: 0, id: 24 },
  { color: colors[1], card: '2', points: 0, id: 25 },

  { color: colors[2], card: 'A', points: 4, id: 26 },
  { color: colors[2], card: 'K', points: 3, id: 27 },
  { color: colors[2], card: 'Q', points: 2, id: 28 },
  { color: colors[2], card: 'J', points: 1, id: 29 },
  { color: colors[2], card: 'T', points: 0, id: 30 },
  { color: colors[2], card: '9', points: 0, id: 31 },
  { color: colors[2], card: '8', points: 0, id: 32 },
  { color: colors[2], card: '7', points: 0, id: 33 },
  { color: colors[2], card: '6', points: 0, id: 34 },
  { color: colors[2], card: '5', points: 0, id: 35 },
  { color: colors[2], card: '4', points: 0, id: 36 },
  { color: colors[2], card: '3', points: 0, id: 37 },
  { color: colors[2], card: '2', points: 0, id: 38 },

  { color: colors[3], card: 'A', points: 4, id: 39 },
  { color: colors[3], card: 'K', points: 3, id: 40 },
  { color: colors[3], card: 'Q', points: 2, id: 41 },
  { color: colors[3], card: 'J', points: 1, id: 42 },
  { color: colors[3], card: 'T', points: 0, id: 43 },
  { color: colors[3], card: '9', points: 0, id: 44 },
  { color: colors[3], card: '8', points: 0, id: 45 },
  { color: colors[3], card: '7', points: 0, id: 46 },
  { color: colors[3], card: '6', points: 0, id: 47 },
  { color: colors[3], card: '5', points: 0, id: 48 },
  { color: colors[3], card: '4', points: 0, id: 49 },
  { color: colors[3], card: '3', points: 0, id: 50 },
  { color: colors[3], card: '2', points: 0, id: 51 },
];

interface HandConditions {
  points: Value;
  spades: Value;
  hearts: Value;
  diamonds: Value;
  clubs: Value;
}

interface Value {
  min: string;
  max: string;
}

const unlimitedHand = {
  points: {
    min: "",
    max: "",
  },
  spades: {
    min: "",
    max: "",
  },
  hearts: {
    min: "",
    max: "",
  },
  diamonds: {
    min: "",
    max: "",
  },
  clubs: {
    min: "",
    max: "",
  }
}

function App() {
  const [hand1, setHand1] = useState<Hand>({ hand: [], position: "East", handConditions: { ...unlimitedHand } })
  const [tiger, setTiger] = useState(false)
  // const [handsArr, setHandsArr] = useState<Hand[]>([{ hand: [], position: "East", handConditions: { ...unlimitedHand } }])
  // const [handConditionsH1, setHandConditionsH1] = useState<HandConditions>({
  //   points: {
  //     min: "",
  //     max: "",
  //   },
  //   spades: {
  //     min: "",
  //     max: "",
  //   },
  //   hearts: {
  //     min: "",
  //     max: "",
  //   },
  //   diamonds: {
  //     min: "",
  //     max: "",
  //   },
  //   clubs: {
  //     min: "",
  //     max: "",
  //   }
  // })

  // let hand: Hand = {
  //   hand: [],
  //   position: "East"
  // };

  let remainingCards: Card[] = [...colodaInit]

  useEffect(() => {
    console.clear()
    // setInterval(() => {
    //   let newHand1 = { ...hand1 }
    //   let newVal = newHand1.handConditions.points.min
    //   newVal = (Number(newVal) + 1).toString()
    //   newHand1.handConditions.points.min = newVal
    //   setHand1(newHand1)
    // }, 1000)
  }, [])

  function refresh() {
    setTiger(!tiger)
  }

  // useEffect(() => {
  //   console.clear()

  //   let genaratedHand = getHand({ ...hand }, [...remainingCards], handConditionsH1)
  //   let hand1 = genaratedHand.hand
  //   let coloda1 = genaratedHand.remainingCards
  //   printHand(hand1)
  // }, [handConditionsH1])

  function printHand(hand: Hand) {
    console.log("Hand:", `${hand.position}; Точки: ${getPointsOfHand(hand)}; Пики: ${getNumberOfSpades(hand)}; Купи: ${getNumberOfHearts(hand)}; Кари: ${getNumberOfDiamonds(hand)}; Трефи: ${getNumberOfClubs(hand)}`)
  }

  function getHand(hand: Hand, coloda: Card[], conditions: HandConditions) {
    do {
      hand.hand = [];
      remainingCards = [...coloda]
      for (let i = 0; i < 13; i++) {
        let index = generateRandomIndex(remainingCards);
        let element = remainingCards[index];
        hand.hand.push(element);
        remainingCards = remainingCards.filter((cardInRemainingCards) => cardInRemainingCards !== element);
      }
    } while (isValid(hand, conditions));

    return { hand: hand, remainingCards: remainingCards }
  }

  function isValid(hand: Hand, conditions: HandConditions) {
    let Pmin = conditions.points.min
    let Pmax = conditions.points.max

    let Spmin = conditions.spades.min
    let Spmax = conditions.spades.max

    let Hemin = conditions.hearts.min
    let Hemax = conditions.hearts.max

    let Dimin = conditions.diamonds.min
    let Dimax = conditions.diamonds.max

    let Clmin = conditions.clubs.min
    let Clmax = conditions.clubs.max

    let P = getPointsOfHand(hand)
    let Sp = getNumberOfSpades(hand)
    let He = getNumberOfHearts(hand)
    let Di = getNumberOfDiamonds(hand)
    let Cl = getNumberOfClubs(hand)

    let isValid = false

    if (Pmin !== "") {
      if (P < Number(Pmin)) {
        isValid = true
        return isValid
      }
    }
    if (Pmax !== "") {
      if (P > Number(Pmax)) {
        isValid = true
        return isValid
      }
    }
    if (Spmin !== "") {
      if (Sp < Number(Spmin)) {
        isValid = true
        return isValid
      }
    }
    if (Spmax !== "") {
      if (Sp > Number(Spmax)) {
        isValid = true
        return isValid
      }
    }
    if (Hemin !== "") {
      if (He < Number(Hemin)) {
        isValid = true
        return isValid
      }
    }
    if (Hemax !== "") {
      if (He > Number(Hemax)) {
        isValid = true
        return isValid
      }
    }
    if (Dimin !== "") {
      if (Di < Number(Dimin)) {
        isValid = true
        return isValid
      }
    }
    if (Dimax !== "") {
      if (Di > Number(Dimax)) {
        isValid = true
        return isValid
      }
    }
    if (Clmin !== "") {
      if (Cl < Number(Clmin)) {
        isValid = true
        return isValid
      }
    }
    if (Clmax !== "") {
      if (Cl > Number(Clmax)) {
        isValid = true
        return isValid
      }
    }
    if (Pmax !== "") {
      if (P > Number(Pmax)) {
        isValid = true
        return isValid
      }
    }
    if (Spmin !== "") {
      if (Sp < Number(Spmin)) {
        isValid = true
        return isValid
      }
    }
    if (Spmax !== "") {
      if (Sp > Number(Spmax)) {
        isValid = true
        return isValid
      }
    }
    if (Hemin !== "") {
      if (He < Number(Hemin)) {
        isValid = true
        return isValid
      }
    }
    if (Hemax !== "") {
      if (He > Number(Hemax)) {
        isValid = true
        return isValid
      }
    }
    if (Dimin !== "") {
      if (Di < Number(Dimin)) {
        isValid = true
        return isValid
      }
    }
    if (Dimax !== "") {
      if (Di > Number(Dimax)) {
        isValid = true
        return isValid
      }
    }
    if (Clmin !== "") {
      if (Cl < Number(Clmin)) {
        isValid = true
        return isValid
      }
    }
    if (Clmax !== "") {
      if (Cl > Number(Clmax)) {
        isValid = true
        return isValid
      }
    }

    return isValid
  }

  function getPointsOfHand(selectedHand: Hand) {
    let points = 0;

    selectedHand.hand.forEach((card) => {
      let newPoint = card?.points ?? 0;
      points += newPoint;
    });

    return points;
  }

  function generateRandomIndex(selectedCards: Card[]) {
    const randomNumber = Math.floor(Math.random() * selectedCards.length)
    return randomNumber
  }

  function getNumberOfSpades(selectedHand: Hand) {
    let numberOfSpades = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[0]) {
        numberOfSpades += 1;
      }
    });

    return numberOfSpades;
  }

  function getNumberOfHearts(selectedHand: Hand) {
    let numberOfHearts = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[1]) {
        numberOfHearts += 1;
      }
    });

    return numberOfHearts;
  }

  function getNumberOfDiamonds(selectedHand: Hand) {
    let numberOfDiamonds = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[2]) {
        numberOfDiamonds += 1;
      }
    });

    return numberOfDiamonds;
  }

  function getNumberOfClubs(selectedHand: Hand) {
    let numberOfClubs = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[3]) {
        numberOfClubs += 1;
      }
    });

    return numberOfClubs;
  }

  const [checked, setChecked] = React.useState<Card[]>([]);
  const [left, setLeft] = React.useState<Card[]>([...colodaInit]);
  const [right, setRight] = React.useState<Card[]>([]);
  const [hand2, setHand2] = React.useState<Card[]>([]);

  useEffect(() => {
    let newHand: Hand = { hand: [...right], position: "North", handConditions: { ...unlimitedHand } }
    printHand(newHand)
  }, [right])

  const handleToggle = (value: Card) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked.sort((a, b) => { return a.id - b.id }));
  };

  const customList = (param: "left" | "right" | "hand2") => {
    let colodaToShow: Card[] = []
    let label: string = ""
    if (param === "left") {
      label = "Coloda (" + left.length + ")"
      colodaToShow = left
    }
    if (param === "right") {
      label = "Hand (" + right.length + ")"
      colodaToShow = right
    }

    if (param === "hand2") {
      label = "Hand (" + hand2.length + ")"
      colodaToShow = hand2
    }
    colodaToShow = colodaToShow.sort((a, b) => { return a.id - b.id })

    return (
      <div>
        <Paper sx={{ height: 240, width: 150, overflow: 'auto' }}>
          <span>{label}</span>
          <List dense component="div" role="list">
            {colodaToShow.map((value: Card) => {
              const labelId = `transfer-list-item-${value.id}-label`;

              return (
                <ListItemButton
                  key={value.id}
                  role="listitem"
                  onClick={handleToggle(value)}
                  className="rame"
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value.color} ${value.card} (${value.points})`} />
                </ListItemButton>
              );
            })}
          </List>
        </Paper>
      </div>
    )
  };

  function not(a: Card[], b: Card[]) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a: Card[], b: Card[]) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  function genHand(hand?: Hand) {
    if (hand) {
      let foo = getHand(hand, remainingCards, hand.handConditions)
      setHand2(foo.hand.hand)
      remainingCards = foo.remainingCards
      setLeft(remainingCards)
    }
  }

  function setValueForHand(type: string, e: any) {
    let miniHand1 = hand1
    let newVal = e.target.value;
    let miniType = type
    if (type === "minPoints") {
      miniHand1.handConditions.points.min = newVal
    } else if (type === "maxPoints") {
      miniHand1.handConditions.points.max = newVal
    } else if (type.includes("Max")) {
      miniType = miniType.replace("number", "").replace("Max", "").toLowerCase().toString()
      if (miniType === "spades") {
        miniHand1.handConditions["spades"].max = newVal
      } else if (miniType === "hearts") {
        miniHand1.handConditions["hearts"].max = newVal
      } else if (miniType === "diamonds") {
        miniHand1.handConditions["diamonds"].max = newVal
      } else if (miniType === "clubs") {
        miniHand1.handConditions["clubs"].max = newVal
      }
    } else if (type.includes("Min")) {
      miniType = miniType.replace("number", "").replace("Min", "").toLowerCase().toString()
      if (miniType === "spades") {
        miniHand1.handConditions["spades"].min = newVal
      } else if (miniType === "hearts") {
        miniHand1.handConditions["hearts"].min = newVal
      } else if (miniType === "diamonds") {
        miniHand1.handConditions["diamonds"].min = newVal
      } else if (miniType === "clubs") {
        miniHand1.handConditions["clubs"].min = newVal
      }
    }
    setHand1(miniHand1)
    refresh()
    return undefined
  }

  function modalAfterClose(foo: string[]): any {
    console.log(foo)
  }

  return (
    <div className="App">
      <BasicModal
        emails={['username@gmail.com', 'user02@gmail.com']}
        onClose={modalAfterClose}></BasicModal>
      <div style={{ display: "flex" }}>
        <Grid item>{customList("left")}</Grid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </div>
          <div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
          </div>
        </div>
        <Grid item>{customList("right")}</Grid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={() => { genHand(hand1) }}
              // disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              Gen hand
            </Button>
          </div>
          <Grid item>{customList("hand2")}</Grid>
        </div>
      </div>
      <div>
        <span>Points:</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '5px', width: '180px' }}>
            <label htmlFor="minPoints">min:</label>
            <input
              id="minPoints"
              name="minPoints"
              style={{ width: '50px' }}
              value={hand1.handConditions.points.min}
              onChange={(event) => setValueForHand("minPoints", event)}
            />
          </div>
          <div>
            <label htmlFor="minPoints">max: </label>
            <input
              id="maxPoints"
              name="maxPoints"
              style={{ width: '50px' }}
              value={hand1.handConditions.points.max}
              onChange={(event) => setValueForHand("maxPoints", event)}
            />
          </div>
        </div>
      </div>
      <span>Numbers:</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberSpadesMin">Spades (min): </label>
          <input
            id="numberSpadesMin"
            name="numberSpadesMin"
            style={{ width: '50px' }}
            value={hand1.handConditions.spades.min}
            onChange={(event) => setValueForHand("numberSpadesMin", event)}
          />
        </div>
        <div>
          <label htmlFor="numberSpadesMax">Spades (max): </label>
          <input
            id="numberSpadesMax"
            name="numberSpadesMax"
            style={{ width: '50px' }}
            value={hand1.handConditions.spades.max}
            onChange={(event) => setValueForHand("numberSpadesMax", event)}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberHeartsMin">Hearts (min): </label>
          <input
            id="numberHeartsMin"
            name="numberHeartsMin"
            style={{ width: '50px' }}
            value={hand1.handConditions.hearts.min}
            onChange={(event) => setValueForHand("numberHeartsMin", event)}
          />
        </div>
        <div>
          <label htmlFor="numberHeartsMax">Hearts (max): </label>
          <input
            id="numberHeartsMax"
            name="numberHeartsMax"
            style={{ width: '50px' }}
            value={hand1.handConditions.hearts.max}
            onChange={(event) => setValueForHand("numberHeartsMax", event)}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberDiamondsMin">Diamonds (min): </label>
          <input
            id="numberDiamondsMin"
            name="numberDiamondsMin"
            style={{ width: '50px' }}
            value={hand1.handConditions.diamonds.min}
            onChange={(event) => setValueForHand("numberDiamondsMin", event)}
          />
        </div>
        <div>
          <label htmlFor="numberDiamondsMax">Diamonds (max): </label>
          <input
            id="numberDiamondsMax"
            name="numberDiamondsMax"
            style={{ width: '50px' }}
            value={hand1.handConditions.diamonds.max}
            onChange={(event) => setValueForHand("numberDiamondsMax", event)}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberClubsMin">Clubs (min): </label>
          <input
            id="numberClubsMin"
            name="numberClubsMin"
            style={{ width: '50px' }}
            value={hand1.handConditions.clubs.min}
            onChange={(event) => setValueForHand("numberClubsMin", event)}
          />
        </div>
        <div>
          <label htmlFor="numberClubsMax">Clubs (max): </label>
          <input
            id="numberClubsMax"
            name="numberClubsMax"
            style={{ width: '50px' }}
            value={hand1.handConditions.clubs.max}
            onChange={(event) => setValueForHand("numberClubsMax", event)}
          />
        </div>
      </div>
    </div >
  );
}

export default App;
