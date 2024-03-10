/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
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

interface Table {
  showTable: boolean,
  hand1: Hand
  hand2: Hand
  hand3: Hand
  hand4: Hand
}

function App() {
  const [table1, setTable1] = useState<Table>({
    showTable: false,
    hand1: {
      hand: [], position: "South", handConditions: {
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
    },
    hand2: {
      hand: [], position: "North", handConditions: {
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
    },
    hand3: {
      hand: [], position: "West", handConditions: {
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
    },
    hand4: {
      hand: [], position: "East", handConditions: {
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
    }
  })
  const [tableView, setTableView] = useState(false)
  const [tiger, setTiger] = useState(false)
  const [remainingCards, setRemainingCards] = useState<Card[]>([])
  const [checked, setChecked] = React.useState<Card[]>([]);

  useEffect(() => {
    console.clear()
    setRemainingCards([...colodaInit])
  }, [])

  function refresh() {
    setTiger(!tiger)
  }

  function printHand(hand: Hand) {
    console.log("Hand:", `${hand.position}; Точки: ${getPointsOfHand(hand)}; Пики: ${getNumberOfSpades(hand)}; Купи: ${getNumberOfHearts(hand)}; Кари: ${getNumberOfDiamonds(hand)}; Трефи: ${getNumberOfClubs(hand)}`)
  }

  function getHand(hand: Hand, coloda: Card[], conditions: HandConditions) {
    let miniColoda = [...coloda];

    do {
      hand.hand = [];
      miniColoda = [...coloda];

      for (let i = 0; i < 13; i++) {
        const index = generateRandomIndex(miniColoda);
        const element = miniColoda.splice(index, 1)[0];
        hand.hand.push(element);
      }
    } while (isValid(hand, conditions));

    return { hand, remainingCards: miniColoda };
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

  function handleToggle(value: Card) {
    return function () {
      const currentIndex = checked.indexOf(value);
      const newChecked = currentIndex === -1 ? [...checked, value] : checked.filter(item => item !== value);

      setChecked(newChecked.sort((a, b) => a.id - b.id));
    };
  }

  function getConvertedNameOfHand(name: string) {
    return name[0].toUpperCase() + name.slice(1, -1).toLowerCase() + " " + name.slice(-1).toLowerCase()
  }

  function customList(param: "coloda" | "hand1" | "hand2" | "hand3" | "hand4") {
    function getLabelForHand(hand?: Hand) {
      let foo = getConvertedNameOfHand(param)
      if (hand) {
        return `${foo} ${hand.position}`
      }
      else {
        return `Hand Hidden`
      }
    }

    let colodaToShow: Card[] = []
    let label: string = ""
    if (param === "coloda") {
      label = "Coloda (" + remainingCards.length + ")"
      colodaToShow = remainingCards
    } else if (param === "hand1") {
      label = getLabelForHand(table1.hand1)
      colodaToShow = table1.hand1.hand
    } else if (param === "hand2") {
      label = getLabelForHand(table1.hand2)
      colodaToShow = table1.hand2.hand
    } else if (param === 'hand3') {
      label = getLabelForHand(table1.hand3)
      colodaToShow = table1.hand3.hand
    } else if (param === 'hand4') {
      label = getLabelForHand(table1.hand4)
      colodaToShow = table1.hand4.hand
    }
    colodaToShow = colodaToShow.sort((a, b) => { return a.id - b.id })
    if (param !== "coloda" && table1.showTable === false) {
      colodaToShow = []
      label = getLabelForHand()
    }

    return (
      <div>
        <Paper sx={{ height: 240, width: 170, overflow: 'auto' }}>
          <p style={{ justifyContent: "center", margin: "0px", alignItems: "center", display: "flex" }}>{label}</p>
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
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
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

  const leftChecked = intersection(checked, remainingCards);
  const rightChecked = intersection(checked, table1.hand1.hand);

  const handleCheckedRight = () => {
    let newLeft = not(remainingCards, leftChecked)
    setRemainingCards(newLeft)
    setTable1({ ...table1, hand1: { ...table1.hand1, hand: table1.hand1.hand.concat(leftChecked) } })
    // setHand1({ ...table1.hand1, hand: table1.hand1.hand.concat(leftChecked) })
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setRemainingCards(remainingCards.concat(rightChecked))
    setTable1({ ...table1, hand1: { ...table1.hand1, hand: not(table1.hand1.hand, rightChecked) } })
    // setHand1({ ...hand1, hand:  })
    setChecked(not(checked, rightChecked));
  };

  function genHand(type: "hand1" | "hand2" | "hand3" | "hand4", rem?: Card[]) {
    let hand = table1.hand1
    if (type === "hand1") {
      hand = table1.hand1
    } else if (type === 'hand2') {
      hand = table1.hand2
    } else if (type === "hand3") {
      hand = table1.hand3
    } else if (type === "hand4") {
      hand = table1.hand4
    }
    let generatedHand = getHand(hand, rem ?? remainingCards, hand.handConditions)
    let newRemainingCards = generatedHand.remainingCards

    let newTable1 = table1
    if (type === "hand1") {
      newTable1 = { ...table1, hand1: generatedHand.hand }
      // setHand1(generatedHand.hand)
    } else if (type === 'hand2') {
      newTable1 = { ...table1, hand2: generatedHand.hand }
      // setHand2(generatedHand.hand)
    } else if (type === 'hand3') {
      newTable1 = { ...table1, hand3: generatedHand.hand }
      // setHand3(generatedHand.hand)
    } else if (type === 'hand4') {
      newTable1 = { ...table1, hand4: generatedHand.hand }
      // setHand4(generatedHand.hand)
    }
    setTable1(newTable1)

    setRemainingCards(newRemainingCards)

    if (type === "hand3") {
      genHand("hand4", newRemainingCards)
    }
    let validTable = isValidTable(newTable1)
    if (validTable) {
      newTable1.showTable = true
    }
    else {
      // genNewTable()
    }
    refresh()
  }

  function genNewTable() {
    genHand("hand1")
    genHand("hand2")
    genHand("hand3")
    genHand("hand4")
  }

  function isValidTable(table: Table) {
    const count = table.hand1.hand.length +
      table.hand2.hand.length +
      table.hand3.hand.length +
      table.hand4.hand.length;
    return count === 52;
  }

  function setValueForHand(e: any, hand: Hand, tableName: "hand2" | "hand3" | "hand4") {
    let newVal = e.target.value;
    let type = e.target.name
    let miniType = type
    let foo: HandConditions = hand.handConditions

    if (type === "minPoints") {
      foo.points.min = newVal
    } else if (type === "maxPoints") {
      foo.points.max = newVal
    } else if (type.includes("Max")) {
      miniType = miniType.replace("number", "").replace("Max", "").toLowerCase().toString()
      if (miniType === "spades") {
        foo["spades"].max = newVal
      } else if (miniType === "hearts") {
        foo["hearts"].max = newVal
      } else if (miniType === "diamonds") {
        foo["diamonds"].max = newVal
      } else if (miniType === "clubs") {
        foo["clubs"].max = newVal
      }
    } else if (type.includes("Min")) {
      miniType = miniType.replace("number", "").replace("Min", "").toLowerCase().toString()
      if (miniType === "spades") {
        foo["spades"].min = newVal
      } else if (miniType === "hearts") {
        foo["hearts"].min = newVal
      } else if (miniType === "diamonds") {
        foo["diamonds"].min = newVal
      } else if (miniType === "clubs") {
        foo["clubs"].min = newVal
      }
    }

    let newH2 = { ...hand, handConditions: foo }
    if (tableName === "hand2") {
      setTable1({ ...table1, hand2: newH2 })
    }
    if (tableName === "hand3") {
      setTable1({ ...table1, hand3: newH2 })
    }
    if (tableName === "hand4") {
      setTable1({ ...table1, hand4: newH2 })
    }
    // setHand2(newH2)
    return undefined
  }

  function genTable(tableName: string) {
    if (tableName === "table1") {
      let h1 = table1.hand1
      let h2 = table1.hand2
      let h3 = table1.hand3
      let h4 = table1.hand4

      let miniRemCards: Card[] = []
      if (remainingCards.length !== 0) {
        miniRemCards = [...remainingCards]
      } else {
        h1.hand = []
        h2.hand = []
        h3.hand = []
        h4.hand = []
        miniRemCards = [...colodaInit]
      }

      if (h1.hand.length === 0) {
        let genHand1 = getHand(h1, miniRemCards, h1.handConditions)
        h1 = genHand1.hand
        miniRemCards = genHand1.remainingCards
      }


      if (h2.hand.length === 0) {
        let genHand2 = getHand(h2, miniRemCards, h2.handConditions)
        h2 = genHand2.hand
        miniRemCards = genHand2.remainingCards
      }



      if (h3.hand.length === 0) {
        let genHand3 = getHand(h3, miniRemCards, h3.handConditions)
        h3 = genHand3.hand
        miniRemCards = genHand3.remainingCards
      }


      if (h4.hand.length === 0) {
        let genHand4 = getHand(h4, miniRemCards, h4.handConditions)
        h4 = genHand4.hand
        miniRemCards = genHand4.remainingCards
      }

      setRemainingCards(miniRemCards)

      let newTable: Table = {
        showTable: true,
        hand1: h1,
        hand2: h2,
        hand3: h3,
        hand4: h4,
      }
      setTable1(newTable)
    }
  }

  function getHandConditionSeter(hand: Hand, tableName: "hand2" | "hand3" | "hand4") {
    let tableNameMini = getConvertedNameOfHand(tableName)
    return <div style={{ width: "375px", border: "1px solid black", margin: "10px", padding: "10px" }}>
      <div>
        <p style={{ margin: "0px", padding: "0px" }}>{tableNameMini}</p>
        <span>Points:</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '5px', width: '180px' }}>
            <label htmlFor="minPoints">min:</label>
            <input
              id="minPoints"
              name="minPoints"
              style={{ width: '50px' }}
              value={hand.handConditions.points.min}
              onChange={(e) => { setValueForHand(e, hand, tableName) }}
            />
          </div>
          <div>
            <label htmlFor="minPoints">max: </label>
            <input
              id="maxPoints"
              name="maxPoints"
              style={{ width: '50px' }}
              value={hand.handConditions.points.max}
              onChange={(e) => { setValueForHand(e, hand, tableName) }}
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
            value={hand.handConditions.spades.min}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
          />
        </div>
        <div>
          <label htmlFor="numberSpadesMax">Spades (max): </label>
          <input
            id="numberSpadesMax"
            name="numberSpadesMax"
            style={{ width: '50px' }}
            value={hand.handConditions.spades.max}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
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
            value={hand.handConditions.hearts.min}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
          />
        </div>
        <div>
          <label htmlFor="numberHeartsMax">Hearts (max): </label>
          <input
            id="numberHeartsMax"
            name="numberHeartsMax"
            style={{ width: '50px' }}
            value={hand.handConditions.hearts.max}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
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
            value={hand.handConditions.diamonds.min}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
          />
        </div>
        <div>
          <label htmlFor="numberDiamondsMax">Diamonds (max): </label>
          <input
            id="numberDiamondsMax"
            name="numberDiamondsMax"
            style={{ width: '50px' }}
            value={hand.handConditions.diamonds.max}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
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
            value={hand.handConditions.clubs.min}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
          />
        </div>
        <div>
          <label htmlFor="numberClubsMax">Clubs (max): </label>
          <input
            id="numberClubsMax"
            name="numberClubsMax"
            style={{ width: '50px' }}
            value={hand.handConditions.clubs.max}
            onChange={(e) => { setValueForHand(e, hand, tableName) }}
          />
        </div>
      </div>
    </div>
  }

  function modalAfterClose(foo: string[]): any {
    console.log(foo)
  }

  if (tableView) {
    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Button onClick={() => {
        setTableView(false)
      }}>Table view</Button>
      <div style={{ width: "700px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
          <Grid style={{ padding: "5px" }} item>{customList("hand2")}</Grid>
        </div>
        <div style={{ width: "100%", justifyContent: "space-between", display: "flex" }}>
          <Grid style={{ padding: "5px" }} item>{customList("hand3")}</Grid>
          <Grid style={{ padding: "5px" }} item>{customList("hand4")}</Grid>
        </div>
        <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
          <Grid style={{ padding: "5px" }} item>{customList("hand1")}</Grid>
        </div>
      </div>
    </div >
  }

  return (
    <div className="App">
      <Button onClick={() => {
        setTableView(true)
      }}>Table view</Button>
      <BasicModal
        emails={['username@gmail.com', 'user02@gmail.com']}
        onClose={modalAfterClose}></BasicModal>
      <div style={{ display: "flex" }}>
        <Grid item>{customList("coloda")}</Grid>
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
        <Grid item>{customList("hand1")}</Grid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={() => { genHand("hand2") }}
              aria-label="move selected left"
            >
              Gen hand2
            </Button>
          </div><div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={() => { genTable("table1") }}
              aria-label="move selected left"
            >
              Gen table
            </Button>
          </div>
          <Grid item>{customList("hand2")}</Grid>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={() => { genHand("hand3") }}
              aria-label="move selected left"
            >
              Gen hand3
            </Button>
          </div>
          <Grid item>{customList("hand3")}</Grid>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className='button-div'>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={() => { genHand("hand4") }}
              aria-label="move selected left"
            >
              Gen hand4
            </Button>
          </div>
          <Grid item>{customList("hand4")}</Grid>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {getHandConditionSeter(table1.hand2, "hand2")}
        {getHandConditionSeter(table1.hand3, "hand3")}
        {getHandConditionSeter(table1.hand4, "hand4")}
      </div>
    </div >
  );
}

export default App;
