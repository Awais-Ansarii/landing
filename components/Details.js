const Details = ({ title, desc }) => {
  return (
    <div className="flex flex-col lg:flex-col justify-center pt-8 gap-3 lg:gap-5 ">
      <h1 className="font-bold  text-gray-90">{title}</h1>
      <div className="flex flex-col  gap-2 lg:gap-4 text-gray-50">
        <p>{desc.p1}</p>
        <p>{desc.p2}</p>
      </div>
    </div>
  );
};

export default Details;
