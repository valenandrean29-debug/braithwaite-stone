import os
import requests
from dotenv import load_dotenv

load_dotenv('../.env')
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

headers = {
    "apikey": key,
    "Authorization": f"Bearer {key}"
}

res = requests.get(f"{url}/rest/v1/proposals?limit=1", headers=headers)
if res.status_code == 200:
    data = res.json()
    if data:
        print("Columns in 'proposals':", list(data[0].keys()))
    else:
        print("Table 'proposals' is empty, fetching schema via OpenAPI...")
        # Get OpenAPI spec
        spec_res = requests.get(f"{url}/rest/v1/", headers=headers)
        if spec_res.status_code == 200:
            spec = spec_res.json()
            props = spec.get('definitions', {}).get('proposals', {}).get('properties', {})
            print("Columns in 'proposals' (from spec):", list(props.keys()))
else:
    print("Failed to fetch proposals:", res.status_code, res.text)
