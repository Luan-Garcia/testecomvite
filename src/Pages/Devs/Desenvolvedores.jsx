import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Desenvolvedores.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavBar from '../../Components/NavBar/NavBar';

const desenvolvedores = [
  { nome: 'Felipe Paulino', profissao: '', imagem: '/img/Imagem PNG_2.PNG' },
  { nome: 'Guilherme Gomarin', profissao: '', imagem: '/img/Imagem PNG_1.PNG' },
  { nome: 'Luan Garcia', profissao: '', imagem: '/img/Imagem PNG_4.PNG' },
  { nome: 'Kayon Jaime', profissao: '', imagem: '/img/Imagem PNG_3.PNG' },
  { nome: 'Pedro Romeiro', profissao: '', imagem: '/img/Imagem PNG_5.PNG' },
  { nome: 'Paulo Oliver', profissao: '', imagem: '/img/Imagem PNG.PNG' }
];

const Desenvolvedores = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavBar />
      <div className="main-title" data-aos="fade-down">
        <h1>Illusion Developers</h1>
        <p>Conheça nossa equipe de desenvolvedores talentosos</p>
      </div>

      <div id="carousel" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {desenvolvedores.map((dev, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="image">
                    <img src={dev.imagem} alt={dev.nome} />
                  </div>
                  <div className="name-profession">
                    <span className="name">{dev.nome}</span>
                    <span className="profession">{dev.profissao}</span>
                  </div>
                  <div className="media-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="button">
                    <button className="hireme">Contrate-me</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Desenvolvedores;
