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

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'google_api_configured': model is not None})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
