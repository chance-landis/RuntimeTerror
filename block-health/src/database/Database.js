import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bcgjyskiiurvqkreobxy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZ2p5c2tpaXVydnFrcmVvYnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1ODg4MzcsImV4cCI6MTk2NjE2NDgzN30.5KjUxplg9O0SHsz2Ty0TUcHXfBz1mecMVMMPN-Wx-3Y'
export const supabase = createClient(supabaseUrl, supabaseKey)