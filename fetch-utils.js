const SUPABASE_URL = 'https://lhgrvdplrdquocvtuqid.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZ3J2ZHBscmRxdW9jdnR1cWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODcsImV4cCI6MTk1OTkxNzQ4N30.YL07XOjiKwuejJXfhxE0yqRWv0PG7Qnk_XDLuQA-S-E';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    const resp = await client.from('postcards').select('*');
    return checkError(resp);
}


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}