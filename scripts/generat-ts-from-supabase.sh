# !/bin/sh

source .env

echo $SUPABASE_PROJECT_ID

npx supabase gen types typescript --project-id "$SUPABASE_PROJECT_ID" --schema public > ./src/@types/supabase.ts