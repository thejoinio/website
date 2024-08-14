export const renderDescription = (
  description = "No description",
  boldParts = ["No bold part"],
) => {
  return description.split(" ").map((word, index) => {
    if (boldParts.includes(word)) {
      return (
        <span key={index} className="font-bold -mt-[1px]">
          {word}&nbsp;
        </span>
      );
    }
    return (
      <span key={index} className="font-normal">
        {word}&nbsp;
      </span>
    );
  });
};
