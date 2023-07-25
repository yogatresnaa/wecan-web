import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { IoIosPaper, IoIosHome, IoMdContacts, IoMdDocument } from 'react-icons/io';
import { IoAlertCircleOutline } from 'react-icons/io5';

function Footer() {
  return (
    <div className='footers'>
      <div className='footer-satu'>
        <img src='/images/logo.png' width='70' height='70' className='d-inline-block align-top' alt='' />
        <h6>Wadah Empati dan Cita Anak Negeri</h6>
        <p>Kantor Pusat : Jl. Taman Firdaus RT 06 RW 09 No. 25 Kec. Bojongsari Kel. Curug Telp / Whatsapp : 089653805875</p>
      </div>
      <div className='footer-dua'>
        <ul>
          <li>Rekening Donasi</li>
          <li>Hubungi Kami</li>
          <li>Mari Kolaborasi</li>
          <li>Mitra Kami</li>
        </ul>
      </div>
      <div className='footer-tiga'>
        <h6>Kunjungi Kami di : </h6>
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
          <li>
            <FaTiktok />
          </li>
        </ul>
        <div className='warning'>
          <h3>
            <IoAlertCircleOutline />
          </h3>

          <p>Dana yang didonasikan melalui WeCan bukan bersumber dan bukan untuk tujuan pencucian uang (money laundry), termasuk terorisme maupun tindak kejahatan lainnya.</p>
        </div>
      </div>

      <div className='footer-empat'>
        <ul className='mobile-menu'>
          <li>
            <IoIosHome />
            <p>Beranda</p>
          </li>
          <li>
            <IoIosPaper />
            <p>Program</p>
          </li>

          <li>
            <IoMdContacts />
            <p>Layanan</p>
          </li>

          <li>
            <IoMdDocument />
            <p>Laporan</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
