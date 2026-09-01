import { createClient, SanityClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID!;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";

// Explicitly assert that projectId will always exist
const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export default client;
