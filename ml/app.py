from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Next.js se connect karne ke liye zaroori hai

# 1. Model load karein
model = joblib.load('models/health_risk_model.pkl')

# 2. Features ka sahi order (Jo X mein tha)
FEATURES = [
    'age', 'gender', 'bmi', 'avg_steps', 'avg_sleep', 
    'net_calories', 'chronic_diseases', 'on_treatment', 'activity_level'
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Frontend se data lena
        data = request.get_json()
        
        # Data ko sahi order mein list mein convert karna
        input_data = [[data[f] for f in FEATURES]]
        
        # Prediction
        prediction = model.predict(input_data)
        
        # Risk Cluster mapping (Optional: readable banane ke liye)
        risk_map = {0: "High Risk", 1: "Moderate Risk", 2: "Low Risk"}
        
        return jsonify({
            'status': 'success',
            'risk_cluster': int(prediction[0]),
            'risk_label': risk_map.get(int(prediction[0]), "Unknown")
        })
    
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)