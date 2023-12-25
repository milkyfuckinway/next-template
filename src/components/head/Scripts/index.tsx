'use client';

import isDev from '@/shared/utils/isDev';

import DevScripts from './DevScripts';
import GeneralScripts from './GeneralScripts';
import ProdScripts from './ProdScripts';

export default function ScriptsComponent() {
  return (
    <>
      {isDev() && <DevScripts />}
      {!isDev() && <ProdScripts />}
      <GeneralScripts />
    </>
  );
}
