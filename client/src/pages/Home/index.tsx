import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

const Home: React.FC = () => {
  const { playerCount } = useContext(AppContext);

  return (
    <div>
      {playerCount && playerCount}
    </div>
  );
}

export default Home;
