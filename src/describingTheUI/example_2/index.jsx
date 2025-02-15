
/* Passing props to a component  */

import PassingProps from "./PassingProps";
import DefaultValue from "./DefaultValue";
import ForwardingProps from "./ForwardingProps";
import Children from "./Children";
import PropsChangingOverTime from "./PropsChangingOverTime";


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
      <hr />
      <PropsChangingOverTime />
    </>
  );
}