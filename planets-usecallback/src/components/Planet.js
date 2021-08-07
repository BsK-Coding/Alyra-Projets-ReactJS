const Planet = ({ planet }) => {
  const { name, population, climate } = planet;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <article className="bg-warning p-3">
        <h2 className="h5">{name}</h2>
        <p className="mb-0">
          <b>population</b> <br /> {population}
        </p>
        <p className="mb-0">
          <b>climat</b> <br /> {climate}
        </p>
      </article>
    </div>
  );
};

export default Planet;
