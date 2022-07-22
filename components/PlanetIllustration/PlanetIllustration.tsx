import React from "react";

import css from "./PlanetIllustration.module.scss";

const PlanetIllustration = ({ randomPlanet }: { randomPlanet?: number }) => {
  const rotate = randomPlanet ?? Math.floor(Math.random() * 380);
  return (
    <div className={css.root}>
      <div
        className={css.planet}
        style={{ filter: `hue-rotate(${rotate}deg)` }}
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
