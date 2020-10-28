const d = document;
const n = navigator;
const ua = n.userAgent;

export const userDeviceInfo = (id) => {
  const $id = d.getElementById(id);

  // verificar que tipo de telefono movil es
  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  // verificar que tipo de sistema operativo es
  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  // verificar que tipo de navegador es
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge() ||
        this.any()
      );
    },
  };

  // console.log(isMobile.any());
  // console.log(isDesktop.any());
  // console.log(isBrowser.any());
  // console.log(ua);
  $id.innerHTML = `
    <ul>
        <li>Plataform: <b>${isDesktop.any()}</b></li>
        <li>Browser: <b>${isBrowser.any()}</b></li>
        <li>mobile: <b>${isMobile.any() ? isMobile.any() : "no mobile"}</b></li>
    </ul>
  
  
  `;
};
