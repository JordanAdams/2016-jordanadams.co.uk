import React from 'react';
import httpStatuses from 'statuses';

const formatJSON = (json) => {
  try {
    return JSON.stringify(JSON.parse(json), null, 2);
  } catch (err) {
    return json;
  }
};

const Response = ({
  status,
  body
}) => {
  const statusMessage = httpStatuses[status] || 'Unknown';

  return (
    <div className="response">
      <pre>
        <code>
          {status} ({statusMessage})
          {'\n\n'}
          {formatJSON(body)}
        </code>
      </pre>
    </div>
  );
};

Response.displayName = 'Response';
Response.propTypes = {
  status: React.PropTypes.number,
  body: React.PropTypes.string
};

export default Response;
