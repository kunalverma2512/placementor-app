// /services/sanityClient.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zltsypm6',  
  dataset: 'production',         
  useCdn: true,                  
  apiVersion: '2022-12-23',      
});

export default client;
