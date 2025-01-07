// /services/sanityClient.ts
import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "zltsypm6",
    dataset:"production",
    useCdn:true,
    apiVersion:"2022-12-23",
  });

export default client;
