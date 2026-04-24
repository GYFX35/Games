import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Google Generative AI
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if GOOGLE_API_KEY:
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-pro')
else:
    model = None

@app.route('/api/ai-strategist', methods=['POST'])
def ai_strategist():
    data = request.json
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    if not model:
        # Mock response if API key is not configured
        return jsonify({
            'response': f"Mock Gemini Response: Analyzing '{prompt}'... Please configure GOOGLE_API_KEY to get real insights."
        })

    try:
        response = model.generate_content(prompt)
        return jsonify({'response': response.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/telecom/status', methods=['GET'])
def telecom_status():
    return jsonify({
        'network_load': '74%',
        '5g_nodes': 14209,
        '6g_status': 'Active',
        'global_latency': '24ms'
    })

@app.route('/api/astro/telemetry', methods=['GET'])
def astro_telemetry():
    return jsonify({
        'orbital_objects': 18492,
        'data_downlink': '4.2 TB/s',
        'active_arrays': 128,
        'constellation_sync': '100%'
    })

@app.route('/api/med/diagnostics', methods=['POST'])
def med_diagnostics():
    data = request.json
    analysis_type = data.get('type', 'general')

    if analysis_type == 'x-ray':
        return jsonify({
            'status': 'Analysis Complete',
            'findings': 'No significant abnormalities detected in the pulmonary fields.',
            'confidence': '98.4%',
            'ai_insights': 'Early stage screening shows healthy lung density.'
        })

    return jsonify({
        'status': 'Diagnostic Active',
        'active_scans': 12,
        'global_database_sync': '99.9%',
        'accuracy_index': '97.8%'
    })

@app.route('/api/med/development', methods=['GET'])
def med_development():
    return jsonify({
        'active_compounds': 452,
        'clinical_trials': 18,
        'molecular_simulations': '1.2M/s',
        'fda_pipeline_status': 'Stage 3'
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'google_api_configured': model is not None})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
