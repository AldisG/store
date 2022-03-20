export const convertedDescription = (text) => {
  return text.replace(/<[^>]+>/g, "").slice(0, 200) + "...";
};

export default {};
