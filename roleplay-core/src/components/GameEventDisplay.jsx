import PropTypes from 'prop-types'; // Step 2: Import PropTypes


export default function GameEventDisplay({ title, content, children }) {
  return (
    <div className="event-display bg-gray-100 p-4 rounded-lg shadow">
      <h4 className="text-lg font-bold">{title}</h4>
      <p>{content}</p>
      {/* Render children if any are passed */}
      {children && <div className="event-actions mt-4">{children}</div>}
    </div>
  );
}

GameEventDisplay.propTypes = {
    title: PropTypes.string.isRequired, // title must be a string and is required
    content: PropTypes.string.isRequired, // content must be a string and is required
    children: PropTypes.node, // children can be anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types
  };