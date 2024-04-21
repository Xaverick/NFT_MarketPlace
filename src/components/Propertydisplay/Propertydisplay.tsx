import { useParams } from 'react-router-dom'
import { STATS_TABLE } from '../../consts';
import './Propertydisplay.css';

const Propertydisplay = () => {
  const { property } = useParams();

  const singlenft = STATS_TABLE.find(item => item.id === property);

  return (
    <div className='propertydisplaysection'>
      <div className="image">
        <img src={`/carousel/${singlenft?.image}`} alt="" />
      </div>
      <div className="content">
        <div className="title">{singlenft?.name}</div>
        <div className="box">
          <div>Sale ends April 22,2024 at 11:00 AM</div>
          <div className="bottom">
            <div className="price">current price</div>
            <div className="rate">{singlenft?.volume} ETH</div>
            <div className="button">
              <button>BUY NOW</button>
              <button>MAKE OFFER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propertydisplay;
