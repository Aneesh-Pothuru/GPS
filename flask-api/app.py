from flask import Flask, request, jsonify
from flask_cors import CORS
from db import Executer
import uuid
import os

app = Flask(__name__, static_folder='../client-app/build', static_url_path='/')
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/deliver', methods=['POST'])
def insert_order():
    username = request.form["username"]
    product_id = request.form["productName"]
    street_address = request.form["streetAddress"]
    zip_code = request.form["zipCode"]
    country = request.form["country"]
    state = request.form["state"]

    ex = Executer("shipping_db.sqlite")

    location_id = str(uuid.uuid4())

    ex.insert_into("location",
                   (location_id,
                    street_address,
                    zip_code,
                    country,
                    state),
                   columns=("address_id",
                            "address",
                            "zip_code",
                            "country",
                            "state"))

    try:
        ex.insert_into("orders",
                       (username,
                        location_id,
                        product_id),
                       columns=("username",
                                "address_id",
                                "product_id")
                       )

        ret_dict = {"status": 200,
                    "success": True,
                    "error": None}

    except:

        ex.delete_from_table("location",
                             "WHERE address_id = {}".format('"' + location_id + '"'))

        ret_dict = {"status": 500,
                    "success": False,
                    "error": "Username in use"}

    ex.commit()
    ex.close_connection()

    return jsonify(ret_dict)


@app.route('/api/logs', methods=['POST'])
def get_view():
    key = request.form["key"]
    ex = Executer("shipping_db.sqlite")

    if key.upper() == "ADMIN":
        data = ex.fetch_data("ADMIN_VIEW")[-1]
        columns = ["id", "username", "address_id", "product_id", "date_created"]
        data_list = []
        for i in data:
            data_list.append({columns[0]: i[0],
                              columns[1]: i[1],
                              columns[2]: i[2],
                              columns[3]: i[3],
                              columns[4]: i[4]})

    elif key.upper() == "RECIPIENT":
        data = ex.fetch_data("User_View")[-1]
        columns = ["username", "product_id", "date_created"]
        data_list = []
        for i in data:
            data_list.append({columns[0]: i[0],
                              columns[1]: i[1],
                              columns[2]: i[2]})

    else:
        data = ex.fetch_data("Shipper_View")[-1]
        columns = ["address_id", "product_id", "date_created"]
        data_list = []
        for i in data:
            data_list.append({columns[0]: i[0],
                              columns[1]: i[1],
                              columns[2]: i[2]})

    ex.commit()
    ex.close_connection()
    return jsonify(data_list)


@app.route("/api/inventory/add", methods=["POST"])
def insert_product():
    product_id = str(uuid.uuid4())
    product_name = request.form["name"]
    product_weight = request.form["weight"]
    product_width = request.form["width"]
    product_length = request.form["len"]
    product_height = request.form["height"]

    ex = Executer("shipping_db.sqlite")

    ex.insert_into("product",
                   (product_id,
                    product_name,
                    product_weight,
                    product_width,
                    product_length,
                    product_height),
                   columns=None)

    ex.commit()
    ex.close_connection()

    return jsonify({"status": 200,
                    "success": True,
                    "error": None})


@app.route("/api/inventory/products", methods=["GET"])
def get_products():
    ex = Executer("shipping_db.sqlite")

    data = ex.fetch_data("product")

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
