import React from "react";

import css from "./PlanetIllustration.module.scss";

const PlanetIllustration = () => {
  const randomPlanet = Math.floor(Math.random() * 380);
  return (
    <div className={css.root}>
      <div
        className={css.planet}
        style={{ filter: `hue-rotate(${randomPlanet}deg)` }}
      >
        <div className={css.wrap}>
          <div className={css.background} />
          <div className={css.clouds} />
        </div>
        <div className={css.mask} />
      </div>
    </div>
  );
};

export default PlanetIllustration;
