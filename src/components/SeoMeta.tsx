import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  name: string;
  type: string;
  img?: string;
  slug?: string;
};

const SeoMeta = ({ title, description, name, type, img, slug }: Props) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}
      {slug && (
        <meta
          property="og:url"
          content={import.meta.env.VITE_APP_URL + "/games/" + slug}
        />
      )}
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {img && <meta property="twitter:image" content={img} />}
      {slug && (
        <meta
          property="twitter:site"
          content={import.meta.env.VITE_APP_URL + "/games/" + slug}
        />
      )}

      {/* End Twitter tags */}
    </Helmet>
  );
};

export default SeoMeta;
