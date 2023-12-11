import pancakeSwap from '../assets/desktop.png';
import anthrboy from '../assets/anthrboy.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import phone from '../assets/llamada.png'
import apuntomotor from '../assets/apuntomotor.png'

export const projects = [
    {
      name: 'Pancake Swap',
      description:
        'Un clon de Pancake Swap, una plataforma de intercambio de criptomonedas basada en la red Binance Smart Chain.',
      image: pancakeSwap,
      url: 'https://pancake-swap-roan.vercel.app/',
    },
    {
      name: 'Anthrboy',
      description:
        'Un landing page que contiene los enlaces a las distintas plataformas donde poder oir a Anthrboy, un artista y compositor musical.',
      image: anthrboy,
      url: 'https://anthrboy.com/',
    },
    {
      name: 'Apuntomotor',
      description:
        'Pagina web de Taller Mecánico',
      image: apuntomotor,
      url: 'https://apuntomotor.com/',
    },
  ];

  export const socials = [
    {
      name: 'LinkedIn',
      icon: linkedin,
      url: 'https://www.linkedin.com/in/barbara-contardi/',
    },
    {
      name: 'GitHub',
      icon: github,
      url: 'https://github.com/BarbiContardi',
    },
  ];

  export const contact = [
    {
      name: 'Teléfono',
      icon: phone,
      value: '611098870',
    },
    {
      name: 'Email',
      icon: gmail,
      value: 'barbi.contardi@gmail.com',
    },
  ];
