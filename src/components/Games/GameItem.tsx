import photo from "../../assets/no-image.webp";
import { FaWindows, FaPlaystation, FaXbox, FaAndroid } from "react-icons/fa";

export function GameItem() {
  return (
    <>
      <div className='card m-1' style={{ width: "15em", height: " 18em" }}>
        <img src={photo} alt='game name' className='card-img-top' />
        <div className='card-body'>
          <div>
            <ul className='list-group list-group-horizontal'>
              <li className='list-group-item'>
                <FaAndroid />
              </li>
              <li className='list-group-item'>
                <FaPlaystation />
              </li>
              <li className='list-group-item'>
                <FaXbox />
              </li>
              <li className='list-group-item'>
                <FaWindows />
              </li>
            </ul>
          </div>
          <h2> Game name</h2>
        </div>
      </div>
    </>
  );
}
