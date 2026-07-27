import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProposalPage.css';

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
  "Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei",
  "Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada",
  "Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)",
  "Costa Rica","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica",
  "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
  "Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
  "Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan",
  "Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
  "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
  "Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
  "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria",
  "North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama",
  "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
  "Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
  "Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
  "South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
  "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const TIME_SLOTS = [
  '09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '01:00 PM','01:30 PM','02:00 PM','02:30 PM','03:00 PM','03:30 PM',
  '04:00 PM','04:30 PM','05:00 PM'
];

const today = new Date().toISOString().split('T')[0];

const ProposalPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: '',
    date: '',
    time: '',
    details: ''
  });



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const bodyData = {
        ...formData
      };

      const response = await fetch('http://127.0.0.1:5000/api/proposal/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Submission failed. Please check your inputs.');
      }
    } catch (error) {
      console.error('Error submitting proposal:', error);
      setErrorMsg('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg('');
    setFormData({ name: '', email: '', phone: '', region: '', date: '', time: '', details: '' });
  };

  return (
    <div className="app fade-in-on-load">
      <Navbar />

      <main className="proposal-page">
        <section className="proposal-header">
          <div className="container">
            <h3 className="section-subtitle">ADVISORY SERVICES</h3>
            <h1 className="proposal-title">Request a Proposal</h1>
            <p className="proposal-description">
              Book a consultation with our advisors to discuss your cross-border finance and business strategy needs.
            </p>
          </div>
        </section>

        <section className="proposal-form-section">
          <div className="container">

              <div className="proposal-card reveal-on-scroll is-visible">

                {/* Success State */}
                {submitted ? (
                  <div className="step-container success-state slide-in">
                    <div className="success-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <h2 className="step-title">Request Received</h2>
                    <p className="step-desc">
                      Thank you, {formData.name || 'guest'}. Your consultation for <strong>{formData.region}</strong> has been
                      tentatively booked for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                      Our team will reach out to <strong>{formData.email}</strong> shortly to confirm the details.
                    </p>
                    <button className="submit-btn" style={{ marginTop: '30px' }} onClick={handleReset}>
                      Submit Another
                    </button>
                  </div>

                ) : (
                  /* The Single Form */
                  <form onSubmit={handleSubmit} className="details-form" noValidate>
                    <h2 className="step-title">Your Information</h2>
                    <p className="step-desc">Fill in all fields below to request your advisory consultation.</p>

                    {errorMsg && <div className="form-error">{errorMsg}</div>}

                    {/* Full Name */}
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    {/* Region Dropdown */}
                    <div className="form-group">
                      <label>Region / Country</label>
                      <select
                        name="region"
                        required
                        value={formData.region}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select a country...</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date + Time */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>Preferred Date</label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          max="2027-12-31"
                        />
                      </div>
                      <div className="form-group">
                        <label>Preferred Time</label>
                        <select
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select a time slot...</option>
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Details — REQUIRED */}
                    <div className="form-group">
                      <label>Project Details</label>
                      <textarea
                        name="details"
                        rows="5"
                        required
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Briefly describe your advisory needs, business challenges, or goals..."
                      />
                    </div>

                    <div className="form-actions" style={{ textAlign: 'right' }}>
                      <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Request'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProposalPage;
