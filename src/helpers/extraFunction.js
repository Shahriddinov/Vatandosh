export const paginationCount = (data, count) => {
  return Math.ceil(((data * 1) / count) * 1);
};

export const htmlElement = (html) => {
  var doc = new DOMParser().parseFromString(html, "text/xml");
  const imgSrc = doc.querySelector("img")?.getAttribute("src");
  const imgAlt = doc.querySelector("img")?.getAttribute("alt");
  const text = html.replace(/<[^>]+>/g, "$");
  const filteredText = text?.split("$").filter((str) => str.length > 2);

  return { imgSrc, imgAlt, filteredText };
};

export const timer = ({ time, setDays, setHours, setMinutes }) => {
  const targetDate = new Date(time);
  let day = null;
  let hours = null;
  let minutes = null;

  const updateCountdown = () => {
    const currentTime = new Date().getTime();
    const remainingTime = targetDate - currentTime;

    if (remainingTime > 0) {
      const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDays(formatTime(remainingDays));
      setHours(formatTime(remainingHours));
      setMinutes(formatTime(remainingMinutes));
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const fadeOutIn = () => {
    const elements = document.getElementsByClassName("headertime-box");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-out");
    }

    setTimeout(() => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("fade-out");
      }
    }, 500);

    setTimeout(fadeOutIn, 1000);
  };

  updateCountdown();
  fadeOutIn();
};
