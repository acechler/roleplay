
import PropTypes from 'prop-types'; // Step 2: Import PropTypes


const GameWindow = ({ children }) => {
    return (
      <section className="bg-gray-200 p-4 w-full min-h-[500px] max-h-[80vh] overflow-y-auto">
        {children}
      </section>
    );
  };

GameWindow.displayName = 'GameWindow';

GameWindow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameWindow;
  