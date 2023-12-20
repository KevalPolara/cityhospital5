import React, { useEffect, useState } from "react";

function Memolist({ passFunction }) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
        setData(passFunction(50));
    },
    [passFunction]
  );

  return (
    <div>
      {data.map(v => {
        return (
          <p>
            {v}
          </p>
        );
      })}
    </div>
  );
}

export default Memolist;
