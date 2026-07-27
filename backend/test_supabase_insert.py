import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv('../.env')
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

try:
    data_to_insert = {
        "email": "test@example.com",
        "date": "2026-06-27",
        "name": "Test User",
        "region": "Indonesia",
        "time": "09:00 AM",
        "phone": "+1234567890",
        "details": "Test details"
    }
    print("Attempting to insert...")
    response = supabase.table('proposals').insert(data_to_insert).execute()
    print("Success:", response)
except Exception as e:
    print("Error inserting into Supabase:", e)
