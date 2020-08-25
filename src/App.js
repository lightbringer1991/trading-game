import compact from 'lodash/fp/compact';
import takeRight from 'lodash/takeRight';
import times from 'lodash/times';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

/**
 * coin toss to see who will give the other money
 *
 * @param {number} balance1
 * @param {number} balance2
 * @return {number[]}
 */
const makeTrade = (balance1, balance2) => {
  if (Math.random() >= 0.5) return [balance1 + 1, balance2 - 1];

  return [balance1 - 1, balance2 + 1];
};

const getPlayer = (playerCount) => Math.floor(Math.random() * playerCount);

const play = async (playerCount, initialBalance, logger) => {
  const balances = [];
  times(playerCount, () => balances.push(initialBalance));

  let iterations = 0;

  while (compact(balances).length > 1) {
    iterations +=1;
    let player1Index = getPlayer(playerCount);
    while (balances[player1Index] === 0) {
      player1Index = getPlayer(playerCount);
    }

    let player2Index = player1Index;
    while ((player1Index === player2Index) || (balances[player2Index] === 0)) {
      player2Index = getPlayer(playerCount);
    }
    const [newP1Balance, newP2Balance] = makeTrade(balances[player1Index], balances[player2Index]);
    balances[player1Index] = newP1Balance;
    balances[player2Index] = newP2Balance;

    logger(balances.join(', '));
  }

  logger(`Game ends after ${iterations} turns.`);
};


const App = () => {
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(10);
  const [startingBalance, setStartingBalance] = React.useState(10);
  const [logs, setLogs] = React.useState([]);
  const [isRunning, setIsRunning] = React.useState(false);

  const logger = (logStr) => setLogs((prevLogs) => takeRight([...prevLogs, logStr], 10));

  const handleNumberOfPlayersChange = (event) => {
    const { value } = event.target;
    setNumberOfPlayers(+value);
  };

  const startGame = async () => {
    setIsRunning(true);
    setLogs([]);
    await play(numberOfPlayers, startingBalance, logger);
    setIsRunning(false);
  };

  const handleStartingBalanceChange = (event) => {
    const { value } = event.target;
    setStartingBalance(+value);
  };

  return (
    <Container className="app">
      <Row>
        <Col md={6} xs={12}>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Number of Players</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={numberOfPlayers} onChange={handleNumberOfPlayersChange} />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Starting Balance</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={startingBalance} onChange={handleStartingBalanceChange} />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="pull-right">
              <Button disabled={isRunning} onClick={startGame}>Start</Button>
            </Col>
          </Row>
        </Col>

        <Col md={6} xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Game Description</Card.Title>
              <ul>
                <li>Given {numberOfPlayers} players, each player has ${startingBalance} initially.</li>
                <li>Each turn, select 2 random players with balance more than 0.</li>
                <li>Flip a coin, tail will give head $1.</li>
                <li>Game ends when all money are converged into a player.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Game Progress</Card.Title>
              <div className="progress-log">
                {logs.map((log, id) => <div key={id}>{log}</div>)}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
