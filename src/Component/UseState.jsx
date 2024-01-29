import React, { useState } from 'react';

function UseState() {
    const [like,setLike] = useState(0)
  return (
    <div>
      <p>{like}</p>
      <button onClick={() => setLike(like+1)}>Like</button>
    </div>
  );
}

export default UseState;
