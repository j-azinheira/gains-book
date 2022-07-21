import './Card.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      {props.children}
    </div>
  );
};

export default Card;
