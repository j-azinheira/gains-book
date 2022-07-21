const WorkoutItem = (props) => {
  return (
    <div>
      <div>
        <label>Exercise:</label>
        <p>{props.exerciseName}</p>
      </div>
      <div>
        <label>Repetitions: </label>
        <p>{props.repNumber}</p>
      </div>
      <div>
        <label>Weight: </label>
        <p>{props.weight} kg</p>
      </div>
      <div>
        <label>Rest time:</label>
        <p>{props.restTime} seconds</p>
      </div>
    </div>
  );
};

export default WorkoutItem;
