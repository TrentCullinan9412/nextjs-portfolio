import { auth, useAuth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const makeSupabaseClient = async (accessToken: string) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  if (!supabaseUrl) {
    throw new Error("Missing Supabase url");
  }
  if (!supabaseKey) {
    throw new Error("Missing Supabase key");
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });

  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export const useSupabase = () => {
  const { getToken } = useAuth();

  const getClient = async () => {
    const accessToken = await getToken({ template: "supabase" });

    if (!accessToken) {
      throw new Error("Failed to get Supabase token");
    }

    const client = makeSupabaseClient(accessToken);

    return client;
  };

  return {
    getClient,
  };
};

export const supabaseClient = async () => {
  const { getToken } = auth();

  const accessToken = await getToken({ template: "supabase" });

  if (!accessToken) {
    throw new Error("Failed to get Supabase token");
  }

  const client = makeSupabaseClient(accessToken);

  return client;
};
