import WorkoutItem from './WorkoutItem';
import * as moment from 'moment';
import Card from '../../UI/Card';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Workout = (props) => {
  if (props.workoutExercises.length === 0) {
    return (
      <div className='card'>
        <p>No exercises in this workout...</p>
      </div>
    );
  }

  const date = moment(props.workoutDate).format('DD/MM/YYYY');

  return (
    <Card>
      <div className='card-body'>
        <h2 className='card-title'>{props.workoutName}</h2>
        <div>
          <label>Workout date: </label>
          <p>{date}</p>
        </div>
        {props.workoutExercises.map((exercise) => (
          <WorkoutItem
            key={exercise.id}
            exerciseName={exercise.exerciseName}
            weight={exercise.weight}
            repNumber={exercise.repNumber}
            restTime={exercise.restTime}
          />
        ))}
      </div>
    </Card>
  );
};

export default Workout;
