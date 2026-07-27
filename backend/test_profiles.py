import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

print("--- Testing specific member fetch with new columns ---")
try:
    insert_res = supabase.table('profiles').insert({
        "name": "Clark Kent",
        "role": "Investigative Journalist",
        "brief_description": "Mild-mannered reporter for the Daily Planet.",
        "linkedin_url": "https://linkedin.com/in/clarkkent",
        "profile_url": "https://upload.wikimedia.org/wikipedia/en/7/77/Superman_Clark_Kent.png",
        "website_url": "https://dailyplanet.com/clark",
        "instagram_url": "https://instagram.com/superclark",
        "school": "Metropolis University",
        "job_desc": "Reports on major events happening around Metropolis. Also secretly saves the world."
    }).execute()
    new_id = insert_res.data[0]['id']
    print(f"Successfully inserted dummy member with ID: {new_id}")

    fetch_res = supabase.table('profiles').select('*').eq('id', new_id).execute()
    print(f"Successfully fetched member data:")
    print(fetch_res.data[0])

    supabase.table('profiles').delete().eq('id', new_id).execute()
    print("Cleaned up dummy data.")

except Exception as e:
    print(f"ERROR: {e}")
