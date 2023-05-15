import React from 'react';

const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


const dateFormat = new Intl.DateTimeFormat('en-US', { 
  weekday: 'short',
  month:'short',
  day:'2-digit', 
  year:'numeric',
  timeZone: 'America/Chicago' 
});

function App() {
  const WINNING_NUMBERS = {
    megam: {
      name: 'Mega Millions',
      logo: '/megam.png',
      balls: [1, 2, 23, 40, 45, 15],
      multiplier: 3,
      jackpot: 99000000,
      cash: 52900000,
      drawdate: '2023-05-12',
      nextDraw: {
        drawdate: '2023-05-16',
        jackpot: 113000000,
        cash: 60300000
      }
    },
    powerb: {
      name: 'Powerball',
      logo: '/powerb.png',
      balls: [3, 15, 20, 23, 46, 11],
      multiplier: 2,
      jackpot: 126100000,
      cash: 67600000,
      drawdate: '2023-05-13',
      nextDraw: {
        drawdate: '2023-05-15',
        jackpot: 135000000,
        cash: 72300000
      }
    },
    lotto: {
      name: 'Lotto',
      logo: '/lotto.png',
      balls: [6, 10, 13, 16, 34, 41],
      jackpot: 525000,
      drawdate: '2023-05-13',
      nextDraw: {
        drawdate: '2023-05-17',
        jackpot: 550000
      }
    },
    easy5: {
      name: 'Easy 5',
      logo: '/easy5.png',
      balls: [2, 6, 8, 14, 37],
      jackpot: 200000,
      drawdate: '2023-05-13',
      nextDraw: {
        drawdate: '2023-05-17',
        jackpot: 210000
      }
    },
    pick5: {
      name: 'Pick 5',
      logo: '/pick5.png',
      balls: [4, 1, 0, 5, 1],
      drawdate: '2023-05-14',
      nextDraw: {
        drawdate: '2023-05-15',
      }
    },
    pick4: {
      name: 'Pick 4',
      logo: '/pick4.png',
      balls: [1, 0, 0, 0],
      drawdate: '2023-05-14',
      nextDraw: {
        drawdate: '2023-05-15',
      }
    },
    pick3: {
      name: 'Pick 3',
      logo: '/pick3.png',
      balls: [9, 0, 9],
      drawdate: '2023-05-14',
      nextDraw: {
        drawdate: '2023-05-15',
      }
    },
  }
  return <div className="container">
    <header>
      <img src="/logo.png" alt="lottery logo" width={200} />
    </header>
      <div className="winning-numbers">
        {Object.keys(WINNING_NUMBERS).map((k, i)=>{
          const game = WINNING_NUMBERS[k];
          return (<div key={k+i} className={"game-row " + k}>
            <div className="game-info">
            <div className="name">
              <img src={game.logo} alt={game.name} width={130} className="game-logo" />
              </div>
            <div className="balls">
              {
                game.balls.map((v, n)=>{
                  return <div key={'ball'+n} className="ball">{v}</div>
                })
              }
            </div>
            </div>
            <div className="draw-info">
              {game.jackpot && <div className="jackpot">Current Jackpot: {currencyFormat.format(game.jackpot)}</div>}
              {game.cash && <div className="jackpot">Cash Value: {currencyFormat.format(game.cash)}</div>}
              <div className="date">Draw Date: {dateFormat.format(new Date(game.drawdate))}</div>
              {game.multiplier && <div className="multiplier">Multiplier: &times;{game.multiplier}</div>}
              <div className="next-draw">
                {game.nextDraw.drawdate && <div className="date">Next Draw: {dateFormat.format(new Date(game.nextDraw.drawdate))}</div>}
                {game.nextDraw.jackpot && <div className="date">Next Jackpot: {currencyFormat.format(game.nextDraw.jackpot)}</div>}
                {game.nextDraw.cash && <div className="date">Next Cash Value: {currencyFormat.format(game.nextDraw.cash)}</div>}
              </div>
              </div>
            </div>)
        })}
      </div>
      <footer>Copyright © {(new Date()).getFullYear()}</footer>
    </div>;
}

export default App;
