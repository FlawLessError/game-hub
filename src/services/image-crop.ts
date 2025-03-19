const imageCrop = (imageLink: string) => {
  if (!imageLink) return null;

  const pos = "media/";
  const target = imageLink.indexOf(pos);
  const img = imageLink.slice(target + pos.length);

  return imageLink.slice(0, target + pos.length) + "crop/600/400/" + img;
};

export default imageCrop;
