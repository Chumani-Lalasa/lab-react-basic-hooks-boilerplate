import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [effect, setEffect] = useState(false)
    useEffect(() => {
        if(effect) alert('Content Button Clicked')
    },[effect]);
  return (
    <div>
        {effect ? (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus pariatur laudantium ab accusantium, harum, deleniti error veniam mollitia distinctio eveniet voluptates quod, neque nesciunt quo vel id incidunt dolorem.</p>
            ):null}
        <button onClick={() => setEffect(!effect)}>Content</button>
    </div>
  );
}

export default UseEffect;
