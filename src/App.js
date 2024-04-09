import './App.css';
import React from "react";
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import FaceLiveness from './Components/FaceLiveness';
import FaceLiveness from './components/FaceLiveness';
// import ReferenceImage from './Components/ReferenceImage';
import ReferenceImage from './components/ReferenceImage';
import {
  View,
  Flex,
} from '@aws-amplify/ui-react';

import awsexports from './aws-exports';

Amplify.configure(awsexports);

function App() {

  const [faceLivenessAnalysis, setFaceLivenessAnalysis] = React.useState(null)

  const getfaceLivenessAnalysis = (faceLivenessAnalysis) => {
    if (faceLivenessAnalysis !== null) {
      setFaceLivenessAnalysis(faceLivenessAnalysis)
    }
  }

  const tryagain = () =>{
    setFaceLivenessAnalysis(null)
  }


  return (
    <ThemeProvider>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
      >
        <View
          as="div"
          maxHeight="600px"
          height="600px"
          width="740px"
          maxWidth="740px"
        >
          {faceLivenessAnalysis && faceLivenessAnalysis.Confidence ? (
            <ReferenceImage faceLivenessAnalysis={faceLivenessAnalysis} tryagain={tryagain}></ReferenceImage>
          ) :
            (<FaceLiveness faceLivenessAnalysis={getfaceLivenessAnalysis} />)}

        </View>
      </Flex>
    </ThemeProvider>


  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
