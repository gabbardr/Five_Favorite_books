import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = 'https://teymsckkkueaiccnmbma.supabase.co apikey'
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleW1zY2tra3VlYWljY25tYm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTg5NDUsImV4cCI6MjAyNjM3NDk0NX0.9b3sxKHSVSztgVP7t7FvX1WGZL-jubdRz_QwQ7JPCZQ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function pullBook() {
    let { data: FiveBooks, error } = await supabase
    .from('FiveBooks')
    .select('*')
  
  for (let book of FiveBooks) {
      let mybookTable = document.getElementById('Five_Books');
      mybookTable.innerHTML += `<li>${book.Title}</li>`;
  }
}

pullBook();
