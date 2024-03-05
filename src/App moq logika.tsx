/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';


interface Hand {
  hand: Card[];
  position: "South" | "West" | "North" | "East" | "";
}

type Color = '♠' | '♥' | '♦' | '♣';

interface Card {
  color: Color;
  card: string;
  points: number;
}

const colors: Color[] = ['♠', '♥', '♦', '♣'];

const colodaInit: Card[] = [
  { color: colors[0], card: 'A', points: 4 },
  { color: colors[0], card: 'K', points: 3 },
  { color: colors[0], card: 'Q', points: 2 },
  { color: colors[0], card: 'J', points: 1 },
  { color: colors[0], card: 'T', points: 0 },
  { color: colors[0], card: '9', points: 0 },
  { color: colors[0], card: '8', points: 0 },
  { color: colors[0], card: '7', points: 0 },
  { color: colors[0], card: '6', points: 0 },
  { color: colors[0], card: '5', points: 0 },
  { color: colors[0], card: '4', points: 0 },
  { color: colors[0], card: '3', points: 0 },
  { color: colors[0], card: '2', points: 0 },

  { color: colors[1], card: 'A', points: 4 },
  { color: colors[1], card: 'K', points: 3 },
  { color: colors[1], card: 'Q', points: 2 },
  { color: colors[1], card: 'J', points: 1 },
  { color: colors[1], card: 'T', points: 0 },
  { color: colors[1], card: '9', points: 0 },
  { color: colors[1], card: '8', points: 0 },
  { color: colors[1], card: '7', points: 0 },
  { color: colors[1], card: '6', points: 0 },
  { color: colors[1], card: '5', points: 0 },
  { color: colors[1], card: '4', points: 0 },
  { color: colors[1], card: '3', points: 0 },
  { color: colors[1], card: '2', points: 0 },

  { color: colors[2], card: 'A', points: 4 },
  { color: colors[2], card: 'K', points: 3 },
  { color: colors[2], card: 'Q', points: 2 },
  { color: colors[2], card: 'J', points: 1 },
  { color: colors[2], card: 'T', points: 0 },
  { color: colors[2], card: '9', points: 0 },
  { color: colors[2], card: '8', points: 0 },
  { color: colors[2], card: '7', points: 0 },
  { color: colors[2], card: '6', points: 0 },
  { color: colors[2], card: '5', points: 0 },
  { color: colors[2], card: '4', points: 0 },
  { color: colors[2], card: '3', points: 0 },
  { color: colors[2], card: '2', points: 0 },

  { color: colors[3], card: 'A', points: 4 },
  { color: colors[3], card: 'K', points: 3 },
  { color: colors[3], card: 'Q', points: 2 },
  { color: colors[3], card: 'J', points: 1 },
  { color: colors[3], card: 'T', points: 0 },
  { color: colors[3], card: '9', points: 0 },
  { color: colors[3], card: '8', points: 0 },
  { color: colors[3], card: '7', points: 0 },
  { color: colors[3], card: '6', points: 0 },
  { color: colors[3], card: '5', points: 0 },
  { color: colors[3], card: '4', points: 0 },
  { color: colors[3], card: '3', points: 0 },
  { color: colors[3], card: '2', points: 0 },
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

function App() {
  const [handConditionsH1, setHandConditionsH1] = useState<HandConditions>({
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
  })

  let hand: Hand = {
    hand: [],
    position: ""
  };

  let remainingCards: Card[] = [...colodaInit]

  useEffect(() => {
    console.clear()
  }, [])

  useEffect(() => {
    console.clear()

    let genaratedHand = getHand({ ...hand }, [...remainingCards], handConditionsH1)
    let hand1 = genaratedHand.hand
    let coloda1 = genaratedHand.remainingCards

    console.log("Hand1:", "Точки:", getPointsOfHand(hand1),
      "Пики", getNumberOfSpades(hand1),
      "Купи", getNumberOfHearts(hand1),
      "Кари", getNumberOfDiamonds(hand1),
      "Трефи", getNumberOfClubs(hand1))
  }, [handConditionsH1])

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
    console.log("Проверка")
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

  return (
    <div className="App">
      <div>
        <span>Points:</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '5px', width: '180px' }}>
            <label htmlFor="minPoints">min:</label>
            <input
              type="number"
              id="minPoints"
              name="minPoints"
              style={{ width: '50px' }}
              value={handConditionsH1.points.min}
              onChange={(e) => {
                let newVal = e.target.value;

                let newNumbers = { ...handConditionsH1 };
                newNumbers.points.min = newVal;
                setHandConditionsH1({
                  ...handConditionsH1,
                  ...newNumbers,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="minPoints">max: </label>
            <input
              type="number"
              id="maxPoints"
              name="maxPoints"
              style={{ width: '50px' }}
              value={handConditionsH1.points.max}
              onChange={(e) => {
                let newVal = e.target.value;

                let newNumbers = { ...handConditionsH1 };
                newNumbers.points.max = newVal;
                setHandConditionsH1({
                  ...handConditionsH1,
                  ...newNumbers,
                });
              }}
            />
          </div>
        </div>
      </div>
      <span>Numbers:</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberSpadesMin">Spades (min): </label>
          <input
            type="number"
            id="numberSpadesMin"
            name="numberSpadesMin"
            style={{ width: '50px' }}
            value={handConditionsH1.spades.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.spades.min = newVal;
              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="numberSpadesMax">Spades (max): </label>
          <input
            type="number"
            id="numberSpadesMax"
            name="numberSpadesMax"
            style={{ width: '50px' }}
            value={handConditionsH1.spades.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.spades.max = newVal;
              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberHeartsMin">Hearts (min): </label>
          <input
            type="number"
            id="numberHeartsMin"
            name="numberHeartsMin"
            style={{ width: '50px' }}
            value={handConditionsH1.hearts.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.hearts.min = newVal;

              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="numberHeartsMax">Hearts (max): </label>
          <input
            type="number"
            id="numberHeartsMax"
            name="numberHeartsMax"
            style={{ width: '50px' }}
            value={handConditionsH1.hearts.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.hearts.max = newVal;

              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberDiamondsMin">Diamonds (min): </label>
          <input
            type="number"
            id="numberDiamondsMin"
            name="numberDiamondsMin"
            style={{ width: '50px' }}
            value={handConditionsH1.diamonds.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.diamonds.min = newVal;
              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="numberDiamondsMax">Diamonds (max): </label>
          <input
            type="number"
            id="numberDiamondsMax"
            name="numberDiamondsMax"
            style={{ width: '50px' }}
            value={handConditionsH1.diamonds.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.diamonds.max = newVal;
              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '180px' }}>
          <label htmlFor="numberClubsMin">Clubs (min): </label>
          <input
            type="number"
            id="numberClubsMin"
            name="numberClubsMin"
            style={{ width: '50px' }}
            value={handConditionsH1.clubs.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.clubs.min = newVal;
              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="numberClubsMax">Clubs (max): </label>
          <input
            type="number"
            id="numberClubsMax"
            name="numberClubsMax"
            style={{ width: '50px' }}
            value={handConditionsH1.clubs.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...handConditionsH1 };
              newNumbers.clubs.max = newVal;
              setHandConditionsH1({
                ...handConditionsH1,
                ...newNumbers,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
