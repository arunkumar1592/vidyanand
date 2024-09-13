import React from "react";
// import x from '../ConditionalRender/mla.j'
import a from './mla.webp'


function Child1(props) {
  var [x, setX] = props.data;
  return (
    <div>
      <p>
        <img src={a} width="200px"/>
        Kukatpally MLA M Krishna Rao and Qutbullahpur MLA K P Vivekanand Goud
        have also been placed under house arrest as police in Hyderabad,
        Cyberabad and Rachakonda commissionrates went on alert to prevent any
        violence in retaliation to Thursday’s attack on the residence of BRS MLA
        Padi Kaushik Reddy by the supporters of Gandhi. Police personnel were
        deployed in large numbers outside Gandhi’s residence to prevent any
        untoward incident. Kaushik Reddy, in retaliation for the attack on his
        house, announced that the party would hold a meeting at Gandhi’s
        residence.
      </p>
      <button onClick={() => setX(false)}>Okay</button>
    </div>
  );
}

export default Child1;
