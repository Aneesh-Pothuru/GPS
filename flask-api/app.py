from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os
from flaskext.mysql import MySQL

mysql = MySQL()
app = Flask(__name__, static_folder='../client-app/build', static_url_path='/')
cors = CORS(app)
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'flaskpy'
app.config['MYSQL_DATABASE_HOST'] = 'pysql'
mysql.init_app(app)
con = mysql.connect()
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
