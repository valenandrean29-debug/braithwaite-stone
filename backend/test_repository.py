import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

print("--- Testing repository table fetch ---")
try:
    insert_res = supabase.table('repository').insert({
        "title": "Test Video Title",
        "description": "This is a test description for the repository video.",
        "youtube_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }).execute()
    new_id = insert_res.data[0]['id']
    print(f"Successfully inserted dummy repository item with ID: {new_id}")

    fetch_res = supabase.table('repository').select('*').eq('id', new_id).execute()
    print(f"Successfully fetched repository data:")
    print(fetch_res.data[0])

    print("Kept dummy data for frontend viewing.")

except Exception as e:
    print(f"ERROR: {e}")
