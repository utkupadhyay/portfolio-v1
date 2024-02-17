import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fugwdppuipartgpmhwlk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1Z3dkcHB1aXBhcnRncG1od2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTczNTksImV4cCI6MjAyMzMzMzM1OX0.Kuqgt1fj3ITZCi8wGDB5cZ7ZbqsNF-xqIPQ_LrK0ufg'
);
export default supabase;
