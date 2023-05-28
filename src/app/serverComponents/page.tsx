import React, { useState } from 'react';
import os from 'os';

const ServerComponents = () => {
  console.log('server Components');
  console.log(os.hostname());

  // const [state, setState] = useState(); // error

  return <h1>Server Components Page</h1>;
};

export default ServerComponents;
