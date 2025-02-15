import { useState } from "react";

function StopWatch({ time }) {
  return (
    <h2>Second: {time}</h2>
  );
}



export default function PropsChangingOverTime() {
  const [time, setTime] = useState(0);

  setInterval(() => {
    setTime(time + 1);
  }, 600);

  return (
    <>
      <StopWatch time={time} />
    </>
  );
}