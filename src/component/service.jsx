import React from 'react';
import { FcFlowChart, FcSimCardChip, FcOnlineSupport, FcCollaboration } from 'react-icons/fc';
import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ServiceMenu() {
  return (
    <div className='menu'>
      <div className='menu-nav'>
        <div className='menu1'>
          <h3>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/cafe'>
              <FcSimCardChip />
              <p>
                Rekening <br />
                Donasi
              </p>
            </Link>
          </h3>
        </div>

        <div className='menu2'>
          <h3>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/aula'>
              <FcOnlineSupport />
              <p>
                Hubungi <br /> Kami
              </p>
            </Link>
          </h3>
        </div>
        <div className='menu3'>
          <h3>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/resto'>
              <FcCollaboration />
              <p>
                Mari <br /> Kolaborasi
              </p>
            </Link>
          </h3>
        </div>
        <div className='menu4'>
          <h3>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/senam'>
              <FcFlowChart />
              <p>
                Mitra <br /> Kami
              </p>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ServiceMenu;
