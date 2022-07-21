import Workout from './Workout/Workout';
import WorkoutChart from './Workout/WorkoutChart';
import './Workouts.css';

const Workouts = (props) => {
  console.log('ASDSA: ' + props.workouts);
  return (
    <div className=''>
      <h1>My workouts</h1>
      <WorkoutChart workouts={props.workouts} />
      <div>
        {props.workouts.map((workout) => (
          <Workout
            key={workout.id}
            workoutName={workout.name}
            workoutDate={workout.date}
            workoutExercises={workout.exercises}
          />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
