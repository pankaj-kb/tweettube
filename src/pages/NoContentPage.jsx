// eslint-disable-next-line react/prop-types
function NoContentPage({ text }) {
  return (
    <div className="flex flex-col items-center justify-center p-20 h-screen w-screen">
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
