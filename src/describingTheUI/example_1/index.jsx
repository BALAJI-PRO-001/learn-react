/* 
  Exporting and importing a component 
  ===================================
  default, hybrid, named
*/

import DefaultExport from './DefaultExport';
import { NamedExport } from './NamedExport';

import DefaultExportComponent from './HybridExport';
import { NamedExportComponent } from './HybridExport';

export default function Example_1() {
  return (
    <>
      <DefaultExport />
      <NamedExport />
      <DefaultExportComponent />
      <NamedExportComponent />
    </>
  );
}