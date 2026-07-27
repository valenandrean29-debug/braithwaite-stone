import unittest
from app import app
from datetime import datetime, timedelta, date

class BackendTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True
        
    def test_missing_data(self):
        response = self.app.post('/api/proposal/validate')
        self.assertEqual(response.status_code, 400)
        self.assertIn(b"No data provided", response.data)
        
    def test_invalid_email(self):
        response = self.app.post('/api/proposal/validate', json={
            "email": "invalid-email",
            "date": str(date.today()),
            "name": "John"
        })
        self.assertEqual(response.status_code, 400)
        self.assertIn(b"invalid email", response.data)
        
    def test_past_date(self):
        past_date = (date.today() - timedelta(days=1)).strftime("%Y-%m-%d")
        response = self.app.post('/api/proposal/validate', json={
            "email": "test@example.com",
            "date": past_date,
            "name": "John"
        })
        self.assertEqual(response.status_code, 400)
        self.assertIn(b"user can choose date in present or future", response.data)
        
    def test_valid_submission(self):
        future_date = (date.today() + timedelta(days=1)).strftime("%Y-%m-%d")
        response = self.app.post('/api/proposal/validate', json={
            "email": "test@example.com",
            "date": future_date,
            "name": "John"
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"User details are valid", response.data)

if __name__ == '__main__':
    unittest.main()
