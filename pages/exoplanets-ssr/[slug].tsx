import Head from "next/head";
import content from "../../data/exoplanets.json";
import { exoplanet } from "../../models/exoplanet";
import { convertToSlug } from "../../utils/slug";
import css from "./exoplanet.module.scss";
import PlanetDetails from "../../components/PlanetDetails/PlanetDetails";
import PlanetIllustration from "../../components/PlanetIllustration/PlanetIllustration";

export default function Page({
  page,
  nextPage,
  randomPlanet
}: {
  page?: exoplanet;
  nextPage?: string;
  randomPlanet?: number;
}) {
  return (
    <>
      <Head>
        <title>{page?.pl_name}</title>
      </Head>
      <div className={css.root}>
        {page?.pl_name && (
          <div className={css.container}>
            <PlanetIllustration />
            <div className={css.detailsContainer}>
              <PlanetDetails
                planet={page}
                nextPlanetLink={`/exoplanets/${nextPage}`}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const page = ((content as any).pages as exoplanet[]).find(
    (page) => convertToSlug(page.pl_name) == params.slug
  ) || {
    notfound: true
  };
  const nextPageIndex =
    ((content as any).pages as exoplanet[]).findIndex(
      (page) => convertToSlug(page.pl_name) == params.slug
    ) + 1;
  let nextPage = "";
  if (
    nextPageIndex &&
    nextPageIndex < ((content as any).pages as exoplanet[]).length
  ) {
    nextPage = convertToSlug(
      ((content as any).pages as exoplanet[])[nextPageIndex].pl_name
    );
  }
  const randomPlanet = Math.floor(Math.random() * 380);
  return { props: { page, nextPage, randomPlanet } };
}
