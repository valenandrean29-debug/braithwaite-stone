from flask import Flask, request, jsonify
from flask_cors import CORS
from email_validator import validate_email, EmailNotValidError
from datetime import datetime, date
import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables from ../.env (root of the project)
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

app = Flask(__name__)
CORS(app)



ALLOWED_TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM'
]

@app.route('/api/proposal/validate', methods=['POST'])
def validate_proposal():
    data = request.get_json(silent=True)

    # 0. Guard — data must exist
    if not data:
        return jsonify({"status": "error", "message": "No data provided"}), 400

    phone   = data.get('phone')

    # 1. Validate name
    name = data.get('name')
    if not name or not name.strip():
        return jsonify({"status": "error", "message": "Full name is required"}), 400

    # 2. Validate email
    email = data.get('email')
    if not email:
        return jsonify({"status": "error", "message": "Email is required"}), 400
    try:
        valid = validate_email(email, check_deliverability=False)
        email = valid.normalized
    except EmailNotValidError:
        return jsonify({"status": "error", "message": "Invalid email address"}), 400

    # 3. Validate region
    region = data.get('region')
    if not region or not region.strip():
        return jsonify({"status": "error", "message": "Region / Country is required"}), 400

    # 4. Validate date
    date_str = data.get('date')
    if not date_str:
        return jsonify({"status": "error", "message": "Preferred date is required"}), 400
    try:
        proposal_date = datetime.strptime(date_str, "%Y-%m-%d").date()
        today_date = date.today()
        if proposal_date < today_date:
            return jsonify({"status": "error", "message": "Please choose today or a future date"}), 400
    except ValueError:
        return jsonify({"status": "error", "message": "Invalid date format. Expected YYYY-MM-DD"}), 400

    # 5. Validate time slot
    time_slot = data.get('time')
    if not time_slot or not time_slot.strip():
        return jsonify({"status": "error", "message": "Preferred time slot is required"}), 400
    if time_slot not in ALLOWED_TIME_SLOTS:
        return jsonify({"status": "error", "message": "Invalid time slot selected"}), 400

    # 6. Validate project details (now required)
    details = data.get('details')
    if not details or not details.strip():
        return jsonify({"status": "error", "message": "Project details are required"}), 400

    # 7. Insert into Supabase
    try:
        data_to_insert = {
            "email":          email,
            "proposal_date":  date_str,
            "full_name":      name.strip(),
            "region":         region.strip(),
            "proposal_time":  time_slot,
            "phone_number":   phone,
            "project_details": details.strip()
        }
        supabase.table('proposals').insert(data_to_insert).execute()
    except Exception as e:
        print(f"Error inserting into Supabase: {e}")
        return jsonify({"status": "error", "message": "Failed to save proposal"}), 500

    return jsonify({
        "status":  "success",
        "message": "Proposal submitted successfully",
        "data":    data_to_insert
    }), 200



@app.route('/api/team', methods=['GET'])
def get_team():
    try:
        response = supabase.table('profiles').select('*').order('id').execute()
        return jsonify({
            "status": "success",
            "data": response.data
        }), 200
    except Exception as e:
        print(f"Error fetching team profiles: {e}")
        return jsonify({"status": "error", "message": "Failed to fetch team profiles"}), 500

@app.route('/api/team/<member_id>', methods=['GET'])
def get_team_member(member_id):
    try:
        response = supabase.table('profiles').select('*').eq('id', member_id).execute()
        if not response.data:
            return jsonify({"status": "error", "message": "Team member not found"}), 404
        return jsonify({
            "status": "success",
            "data": response.data[0]
        }), 200
    except Exception as e:
        print(f"Error fetching team member profile: {e}")
        return jsonify({"status": "error", "message": "Failed to fetch team member profile"}), 500

@app.route('/api/repository', methods=['GET'])
def get_repository():
    try:
        response = supabase.table('repository').select('*').order('created_at', desc=False).execute()
        return jsonify({
            "status": "success",
            "data": response.data
        }), 200
    except Exception as e:
        print(f"Error fetching repository: {e}")
        return jsonify({"status": "error", "message": "Failed to fetch repository data"}), 500

@app.route('/api/repository/<repo_id>', methods=['GET'])
def get_repository_item(repo_id):
    try:
        response = supabase.table('repository').select('*').eq('id', repo_id).execute()
        if not response.data:
            return jsonify({"status": "error", "message": "Repository item not found"}), 404
        return jsonify({
            "status": "success",
            "data": response.data[0]
        }), 200
    except Exception as e:
        print(f"Error fetching repository item: {e}")
        return jsonify({"status": "error", "message": "Failed to fetch repository item"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

