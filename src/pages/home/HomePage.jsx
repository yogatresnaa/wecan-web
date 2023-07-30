import React from 'react';
import HeroImage from '../../component/heroImage';
import ServiceMenu from '../../component/service';
import ProgramCard from '../../component/MultiCarousleComponent/ListPilarProgram';
import { CardPilarProgram, BeritaProgram } from '../../utils/dataPilarProgram';
import Galey from '../../component/DokumentasiProgram';
import ItemBeritaProgram from '../../component/ComponentBeritaProgram/ItemBeritaProgram';
// import ListBeritaProgram from '../../component/BeritaProgram/ListItemBeritaProgram';

function HomePage() {
  const [pilarProgram] = React.useState(() => CardPilarProgram());
  const [beritaProgram] = React.useState(() => BeritaProgram());
  return (
    <>
      <div>
        <HeroImage />
      </div>
      <div>
        <ServiceMenu />
      </div>

      <div className='pilar'>
        <h3>Program Kami</h3>
        <h4>Melalui berbagai program berbagi kebaikan, wecan berusaha menghadirkan kebahagiaan kepada seluruh masyarakat</h4>
        <ProgramCard pilarProgram={pilarProgram} />
      </div>

      <div className='Info'>
        <h1>Sekilas Info Program</h1>
        <ItemBeritaProgram />
      </div>

      <div className='program-wecan'>
        <h2>Dokumentasi Program</h2>
        <Galey />
      </div>
    </>
  );
}

export default HomePage;
