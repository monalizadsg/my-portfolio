import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "w1yodt07",
  dataset: "production",
  useCdn: true,
});
