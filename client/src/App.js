import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faDumbbell,
  faHouse,
  faIdCard,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Workouts from './components/Workouts/Workouts';
import { useState } from 'react';

library.add(fab, faCheckSquare, faCoffee, faDumbbell, faHouse, faMap);

const INITIAL_WORKOUTS = [
  {
    id: '1',
    name: 'Push Day',
    date: new Date('2022-07-21'),
    exercises: [
      {
        id: '1',
        exerciseName: 'Bench Press',
        weight: 120,
        repNumber: 3,
        restTime: 60,
      },
    ],
  },
  {
    id: '2',
    name: 'Pull Day',
    date: new Date('2022-03-21'),
    exercises: [
      {
        id: '1',
        exerciseName: 'Bench Press',
        weight: 90,
        repNumber: 3,
        restTime: 60,
      },
    ],
  },
  {
    id: '3',
    name: 'Leg Day',
    date: new Date('2022-01-21'),
    exercises: [
      {
        id: '1',
        exerciseName: 'Bench Press',
        weight: 320,
        repNumber: 3,
        restTime: 60,
      },
    ],
  },
];

const App = () => {
  const [workouts, setWorkouts] = useState(INITIAL_WORKOUTS);

  return (
    <div className=''>
      {/* <Sidebar />
      <Footer /> */}
      <Workouts workouts={workouts} />
    </div>
  );
};

export default App;
