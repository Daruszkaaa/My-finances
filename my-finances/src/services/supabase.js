import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mitfhgvgbixcyddsqaui.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdGZoZ3ZnYml4Y3lkZHNxYXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTE2NjIsImV4cCI6MTk4NTQ2NzY2Mn0.76eyHhEfDnR6i7_2g1_8eJpA3NntH_qpCygBBNcahQQ';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
