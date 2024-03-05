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
  const [conditionsHand1, setConditionsHand1] = useState<HandConditions>({
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

  const [conditionsHand2, setConditionsHand2] = useState<HandConditions>({
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

  const [conditionsHand3, setConditionsHand3] = useState<HandConditions>({
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

  const [conditionsHand4, setConditionsHand4] = useState<HandConditions>({
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
  let hand1: Hand = {
    hand: [],
    position: "North"
  };
  let hand2: Hand = {
    hand: [],
    position: "East"
  };
  let hand3: Hand = {
    hand: [],
    position: "South"
  };

  let coloda: Card[] = [...colodaInit]
  let coloda1 = [...coloda];

  useEffect(() => {
    console.clear()
  }, [])

  useEffect(() => {
    console.clear()

    coloda = shuffleColoda(coloda)
    // let hand1 = coloda.slice(0, 13)
    // let hand2 = coloda.slice(13, 26)
    // let hand3 = coloda.slice(26, 39)
    // let hand4 = coloda.slice(39, 52)

    // isValidHand(hand1, conditionsHand1)
    console.log(hand1)

    // console.log(hand2)
    // console.log(hand3)
    // console.log(hand4)
    getHand(coloda)
  }, [conditionsHand1])






  function getRandomIndex(remainingCards: Card[]) {
    let index = Math.floor(Math.random() * remainingCards.length);
    return index;
  }

  function getHand(coloda: Card[]) {
    let honors = coloda.filter((card) => card.points >= 1)
    let noHonors = coloda.filter((card) => card.points === 0)

    function countPoints(handCards: Card[]) {
      return handCards.reduce((totalPoints, card) => totalPoints + card.points, 0);
    }

    function randomInRange(min: number, max: number) {
      max += 1
      return Math.floor(Math.random() * (max - min)) + min
    }

    let hand: Card[] = []
    let points = 0
    let pointsToValid = randomInRange(6, 10)

    for (let i = 0; i < honors.length; i++) {
      if (hand.length === 13) {
        break;
      }
      let card = honors[i]
      points = countPoints(hand) + card.points
      if (points < pointsToValid) {
        hand.push(card)
      }
    }

    while (hand.length !== 13) {
      hand.push(noHonors.shift() || noHonors[0])
    }
    hand = shuffleColoda(hand)
    console.log(hand)
  }

  function getPointsOfHand(selectedHand: Hand) {
    let points = 0;

    selectedHand.hand.forEach((card) => {
      let newPoint = card?.points ?? 0;
      points += newPoint;
    });

    return points;
  }

  function shuffleColoda(coloda: Card[]) {
    const shuffledColoda = [...coloda];
    for (let i = shuffledColoda.length - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [shuffledColoda[i], shuffledColoda[index]] = [shuffledColoda[index], shuffledColoda[i]];
    }
    return shuffledColoda;
  }

  function printHand(selectedHand: Hand) {
    console.log('Hand:', selectedHand);
    console.log('Points:', getPointsOfHand(selectedHand), getAllOfSpades(selectedHand));
    console.log("Spades:", getNumberOfSpades(selectedHand));
    console.log("Hearts:", getNumberOfHearts(selectedHand));
    console.log("Diamonds:", getNumberOfDiamonds(selectedHand));
    console.log("Clubs:", getNumberOfClubs(selectedHand));
    console.log(" ")
  }

  function getAllOfSpades(selectedHand: Hand) {
    let seperatedCard = selectedHand.hand
      .filter(card => card.color === colors[0])
      .sort((a, b) => {
        if (a.points === b.points) {
          const aValue = parseInt(a.card) || 10;
          const bValue = parseInt(b.card) || 10;
          return bValue - aValue;
        } else {
          return b.points - a.points;
        }
      })
      .map(card => card.card)
      .join(", ")

    let text = `${colors[0]}: ${seperatedCard}`;


    return text;
  }

  function generateRandomIndex(selectedCards: Card[]) {
    const randomNumber = Math.floor(Math.random() * selectedCards.length)
    return randomNumber
  }

  function getNumberOfSpades(selectedHand: Hand) {
    let points = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[0]) {
        points += 1;
      }
    });

    return points;
  }

  function getNumberOfHearts(selectedHand: Hand) {
    let points = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[1]) {
        points += 1;
      }
    });

    return points;
  }

  function getNumberOfDiamonds(selectedHand: Hand) {
    let points = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[2]) {
        points += 1;
      }
    });

    return points;
  }

  function getNumberOfClubs(selectedHand: Hand) {
    let points = 0;

    selectedHand.hand.forEach((card) => {
      if (card.color === colors[3]) {
        points += 1;
      }
    });

    return points;
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
              value={conditionsHand1.points.min}
              onChange={(e) => {
                let newVal = e.target.value;

                let newNumbers = { ...conditionsHand1 };
                newNumbers.points.min = newVal;
                setConditionsHand1({
                  ...conditionsHand1,
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
              value={conditionsHand1.points.max}
              onChange={(e) => {
                let newVal = e.target.value;

                let newNumbers = { ...conditionsHand1 };
                newNumbers.points.max = newVal;
                setConditionsHand1({
                  ...conditionsHand1,
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
            value={conditionsHand1.spades.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.spades.min = newVal;
              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.spades.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.spades.max = newVal;
              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.hearts.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.hearts.min = newVal;

              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.hearts.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.hearts.max = newVal;

              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.diamonds.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.diamonds.min = newVal;
              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.diamonds.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.diamonds.max = newVal;
              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.clubs.min}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.clubs.min = newVal;
              setConditionsHand1({
                ...conditionsHand1,
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
            value={conditionsHand1.clubs.max}
            onChange={(e) => {
              let newVal = e.target.value;

              let newNumbers = { ...conditionsHand1 };
              newNumbers.clubs.max = newVal;
              setConditionsHand1({
                ...conditionsHand1,
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
