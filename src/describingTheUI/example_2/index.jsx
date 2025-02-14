
/* Passing props to a component  */

import PassingProps from "./PassingProps";
import DefaultValue from "./DefaultValue";
import ForwardingProps from "./ForwardingProps";
import Children from "./Children";


export default function Example_2() {
  return (
    <>
      <PassingProps />
      <hr />
      <DefaultValue /> 
      <hr />
      <ForwardingProps />
      <hr />
      <Children />
    </>
  );
}