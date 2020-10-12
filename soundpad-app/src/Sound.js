import React from 'react';

function Sound1(props) {
  let audio = new Audio(props.audio)

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <div onClick={start} className="sound1"></div>
    </div >
  );
}

export default Sound1;