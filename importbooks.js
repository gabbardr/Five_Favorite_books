import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://teymsckkkueaiccnmbma.supabase.co'
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleW1zY2tra3VlYWljY25tYm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTg5NDUsImV4cCI6MjAyNjM3NDk0NX0.9b3sxKHSVSztgVP7t7FvX1WGZL-jubdRz_QwQ7JPCZQ'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: Five_Books, error } = await supabase
  .from('Five_Books')
  .select('*')

for (let My_Books of Five_Books) {
    let mybookTable = document.getElementById('Five_Books_Title');
    mybookTable.innerHTML += '<li>${My_Books.Title}</li>';
}