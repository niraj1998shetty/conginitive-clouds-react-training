const images = ({ letter }) => {
  let alpha;
  switch (letter) {
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
    default:
      return 0;
  }
};

export default images;
