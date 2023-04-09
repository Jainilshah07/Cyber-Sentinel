from flask import Flask, request
from flask_cors import CORS
from whatsapp import get_details_whatsapp
from insta import get_details_instagram
from truecaller import get_details_truecaller
app = Flask(__name__)

CORS(app)


@app.route('/')
def index():
    return 'Hello, World!'


@app.route('/api/whatsapp', methods=['POST'])
def whatsapp_api():
    mobile = request.form['mobile']
    return get_details_whatsapp(mobile)


@app.route('/api/instagram', methods=['POST'])
def instagram_api():
    email = request.json['email']
    return get_details_instagram(email)


@app.route('/api/truecaller', methods=['POST'])
def truecaller_api():
    email = request.json['email']
    return get_details_truecaller(email)


if __name__ == '__main__':
    app.run(debug=False)
