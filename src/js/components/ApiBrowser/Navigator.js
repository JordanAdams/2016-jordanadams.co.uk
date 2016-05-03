import React from 'react';

const Navigator = ({
  onSendRequest
}) => {
  let input;

  return (
    <div className="navigator">
      <div className="method">GET</div>
      <div className="base">https://api.jordanadams.co.uk/</div>

      <div className="endpoint">
        <input type="text"
               autofocus
               ref={(node) => {
                 input = node;
               }}
               onKeyPress={(key) => {
                 if (key.key === 'Enter') {
                   onSendRequest(input.value);
                 }
               }}
        />
      </div>

      <button type="button"
              className="send"
              onClick={() => {
                onSendRequest(input.value);
              }}
      >
        Send Request &nbsp;&raquo;
      </button>
    </div>
  );
};

Navigator.displayName = 'Navigator';
Navigator.propTypes = {
  onSendRequest: React.PropTypes.func
};

export default Navigator;
