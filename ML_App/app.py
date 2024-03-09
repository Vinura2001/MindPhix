from flask import Flask, request, jsonify
import your_ml_model  # Import your ML model file

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    req = request.get_json(silent=True, force=True)
    query_result = req.get('queryResult')

    # Extract parameters from the query result
    depression_level = query_result.get('parameters').get('depression_level')
    mood_level = query_result.get('parameters').get('mood_level')
    gender = query_result.get('parameters').get('gender')
    age = query_result.get('parameters').get('age')
    category = query_result.get('parameters').get('category')

    # Call your ML model function
    recommendation = your_ml_model.get_recommendation(depression_level, mood_level, gender, age, category)

    # Prepare the response
    response = {
        'fulfillmentText': f'Here is the recommendation: {recommendation}'
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=8000, debug=True)