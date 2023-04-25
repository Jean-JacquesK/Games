export function Genre() {
  return (
    <div className='mx-2' style={{ width: "9em" }}>
      <h1 className='fs-4 x-2'>Genres</h1>
      <ul className='list-group'>
        <li className='list-group-item list-group-item-action'>Action</li>
        <li className='list-group-item list-group-item-action'>Adventure</li>
        <li className='list-group-item list-group-item-action'>RPG</li>
        <li className='list-group-item list-group-item-action'>Shooter</li>
        <li className='list-group-item list-group-item-action'>Simulation</li>
        <li className='list-group-item list-group-item-action'>Arcade</li>
      </ul>
    </div>
  );
}
