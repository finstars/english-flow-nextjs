import { createClient } from "@supabase/supabase-js";

const supabaseUrl = `https://sujivvlajjatemfgpkzd.supabase.co`;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1aml2dmxhamphdGVtZmdwa3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2OTM3MzUsImV4cCI6MjAzNjI2OTczNX0.9OKOimiuCukVDxo1ulGIPyjd56i3CuQda7HuN0PDel0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase