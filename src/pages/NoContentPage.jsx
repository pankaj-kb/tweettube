// eslint-disable-next-line react/prop-types
function NoContentPage({ text }) {
  return (
    <div className="flex flex-col items-center p-20">
      {text ? (
        <h1 className="text-accentwhite font-bold text-[50px]">{text}</h1>
      ) : (
        <h1 className="text-accentwhite font-bold text-[50px]">
          Nothing here Yet....
        </h1>
      )}
    </div>
  );
}

export default NoContentPage;
