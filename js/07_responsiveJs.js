const d = document;
const w = window;

export const responsiveMedia = (id, mq, mobileContent, desktopContent) => {
  let breakPoint = w.matchMedia(mq);
  const responsive = (e) => {
    e.matches
      ? (d.getElementById(id).innerHTML = desktopContent)
      : (d.getElementById(id).innerHTML = mobileContent);
  };
  breakPoint.addListener(responsive);
  responsive(breakPoint);
};
