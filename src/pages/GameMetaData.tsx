import { Helmet } from "react-helmet";
import { Game } from "../entities/Game";

type Props = {
  data: Game;
};

const GameMetaData = ({ data }: Props) => {
  return (
    <Helmet>
      <title>{data?.name}</title>
      <meta property="og:title" content={data?.name} />
      <meta
        property="og:url"
        content={`${import.meta.env.VITE_APP_URL}/games/${data?.slug}`}
      />
      <meta property="og:image" content={data?.background_image} />
      <meta name="description" content={data?.description_raw} />
    </Helmet>
  );
};

export default GameMetaData;
