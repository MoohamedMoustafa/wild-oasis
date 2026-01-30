import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://frlmxqosmqclnukyvuup.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZybG14cW9zbXFjbG51a3l2dXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3OTIxNTMsImV4cCI6MjA4NTM2ODE1M30.Kvt6igzDrMlsACba_SNGecLQkn2WKpFdY2xV-5VUSPo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
