import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["", "Become your own personnal barmaid. Easy."],
    typeSpeed: 80,
    loop: false
  });
}

export { loadDynamicBannerText };
