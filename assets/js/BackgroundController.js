export class BackgroundController {
  constructor()
  {
    this.instore = false;
    this.isNight = false;
    this.isRaining = false;

    this.backgrounds = {
      fff: document.querySelector('.bg__vdSun'),
      fft: document.querySelector('.bg__vdSunRain'),
      ftf: document.querySelector('.bg__vdNight'),
      ftt: document.querySelector('.bg__vdNightRain'),
      tff: document.querySelector('.bg__vdInStoreSunNoRain'),
      tft: document.querySelector('.bg__vdInStoreSunRain'),
      ttf: document.querySelector('.bg__vdInStoreNightNoRain'),
      ttt: document.querySelector('.bg__vdInStoreNightRain'),
    }
  }
  showBg() 
  {
    let bg = '';
    if (this.instore) bg += 't'; else bg += 'f';
    if (this.isNight) bg += 't'; else bg += 'f';
    if (this.isRaining) bg += 't'; else bg += 'f';

    for (let prop in this.backgrounds) {
      this.backgrounds[prop].style.zIndex = 1;
    }
    this.backgrounds[bg].style.zIndex = 2;
  }
}