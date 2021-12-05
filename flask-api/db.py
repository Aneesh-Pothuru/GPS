import sqlite3
import uuid


class Executer:

    def __init__(self, file_path):
        self.__conn = sqlite3.connect(file_path)
        self.__cursor = self.__conn.cursor()

    def insert_table(self,
                     table_name: str,
                     *args) -> None:
        execution_string = "CREATE TABLE IF NOT EXISTS " + table_name + "("

        for i in args:
            execution_string += i + ", "

        execution_string = execution_string[:-2] + ");"

        self.__cursor.execute(execution_string.upper())

    def list_tables(self) -> list:
        command = "SELECT name FROM sqlite_master WHERE type='table';"
        self.__cursor.execute(command)
        return self.__cursor.fetchall()

    def insert_into(self,
                    table_name: str,
                    values: tuple,
                    columns=None):

        base_string = "INSERT INTO " + table_name

        if columns is not None:
            base_string += str(columns)
            if len(columns) == 1:
                base_string = base_string[:-2] + ")"

        if len(values) == 1:
            base_string += " VALUES" + " " + str(values)
            base_string = base_string[:-2] + ");"
        else:
            base_string += " VALUES" + " " + str(values) + ";"

        self.__cursor.execute(base_string.upper())

    def delete_from_table(self,
                          table_name: str,
                          *args):

        query = "DELETE FROM {}".format(table_name)

        for i in args:
            query += " " + i

        self.__cursor.execute(query.upper())

    def fetch_data(self,
                   table: str,
                   *args,
                   select_col=None,
                   ret_str=False):

        base_str = "SELECT"
        if select_col is None:
            base_str += " *"
        else:
            base_str += " "
            for i in select_col:
                base_str += i + ", "
            base_str = base_str[:-2]

        base_str += " FROM {}".format(table)

        for i in args:
            base_str += " " + i

        self.__cursor.execute(base_str.upper() + ";")

        if ret_str:
            return base_str.upper() + ";"
        else:
            return self.__cursor.fetchall(),

    def make_view(self,
                  view_name: str,
                  table: str,
                  *args,
                  select_col=None):

        create_str = "CREATE VIEW {} AS".format(view_name)

        base_str = self.fetch_data(table,
                                   *args,
                                   select_col=select_col,
                                   ret_str=True)

        full_str = create_str + " " + base_str

        self.__cursor.execute(full_str.upper())

    def close_connection(self):
        self.__conn.close()

    def commit(self):
        self.__conn.commit()


if __name__ == '__main__':
    executer = Executer("shipping_db.sqlite")

    command_list = ["address_id VARCHAR(36) PRIMARY KEY",
                    "address VARCHAR(50) NOT NULL",
                    "zip_code VARCHAR(10) NOT NULL",
                    "country VARCHAR(50) NOT NULL",
                    "state VARCHAR(2)",
                    "date_created default current_timestamp"]

    executer.insert_table("LOCATION", *command_list)

    command_list = ["role_key VARCHAR(30) PRIMARY KEY",
                    "description VARCHAR(50) NOT NULL",
                    "role_name VARCHAR(30) NOT NULL"]

    executer.insert_table("roles", *command_list)

    command_list = ["product_id VARCHAR(36)",
                    "name VARCHAR(50) NOT NULL",
                    "weight INTEGER NOT NULL",
                    "width INTEGER NOT NULL",
                    "length INTEGER NOT NULL",
                    "height INTEGER NOT NULL"]

    executer.insert_table("product", *command_list)

    command_list = ["order_id INTEGER PRIMARY KEY AUTOINCREMENT",
                    "username VARCHAR(50) UNIQUE NOT NULL",
                    "address_id VARCHAR(36) NOT NULL",
                    "product_id VARCHAR(36) NOT NULL",
                    "date_created default current_timestamp",
                    "FOREIGN KEY (product_id) REFERENCES product(product_id)",
                    "FOREIGN KEY (address_id) REFERENCES location(address_id)"]

    executer.insert_table("orders", *command_list)

    # ---------------------------------------------------------------------------------------------

    location_1 = str(uuid.uuid4())
    location_2 = str(uuid.uuid4())
    location_3 = str(uuid.uuid4())
    location_4 = str(uuid.uuid4())

    executer.insert_into("location",
                         (location_1,
                          "824 Hemmingway Drive",
                          "95032",
                          "United States",
                          "CA"),
                         columns=("address_id",
                                  "address",
                                  "zip_code",
                                  "country",
                                  "state"))

    executer.insert_into("location",
                         (location_2,
                          "87 Cromwell Lane",
                          "92374",
                          "United States",
                          "CA"),
                         columns=("address_id",
                                  "address",
                                  "zip_code",
                                  "country",
                                  "state"))

    executer.insert_into("location",
                         (location_3,
                          "87 Cromwell Lane",
                          "92374",
                          "United States",
                          "CA"),
                         columns=("address_id",
                                  "address",
                                  "zip_code",
                                  "country",
                                  "state"))

    executer.insert_into("location",
                         (location_4,
                          "243 Lincoln Ave",
                          "25304",
                          "United States",
                          "GA"),
                         columns=("address_id",
                                  "address",
                                  "zip_code",
                                  "country",
                                  "state"))
    # ---------------------------------------------------------------------------------------------
    product_1 = str(uuid.uuid4())
    product_2 = str(uuid.uuid4())
    product_3 = str(uuid.uuid4())

    executer.insert_into("product",
                         (product_1,
                          "iphone",
                          6,
                          2,
                          1,
                          1),
                         columns=None)

    executer.insert_into("product",
                         (product_2,
                          "OnePlus",
                          7,
                          1,
                          1,
                          1),
                         columns=None)

    executer.insert_into("product",
                         (product_3,
                          "Galaxy",
                          5,
                          2,
                          1,
                          1),
                         columns=None)

    # ----------------------------------------------------------------------------------------------

    executer.insert_into("roles",
                         ("Admin", "access to all columns", "admin"),
                         columns=None)

    executer.insert_into("roles",
                         ("Shipper", "access to order and address", "ship"),
                         columns=None)

    executer.insert_into("roles",
                         ("Recipient", "access to order and username", "recipient"),
                         columns=None)

    # ----------------------------------------------------------------------------------------------

    executer.insert_into("orders",
                         ("John Doe",
                          location_1,
                          product_1),
                         columns=("username",
                                  "address_id",
                                  "product_id"))

    executer.insert_into("orders",
                         ("Mary Sue",
                          location_2,
                          product_3),
                         columns=("username",
                                  "address_id",
                                  "product_id"))

    executer.insert_into("orders",
                         ("Ramen Nagi",
                          location_3,
                          product_3),
                         columns=("username",
                                  "address_id",
                                  "product_id"))

    executer.insert_into("orders",
                         ("Sriram Govindan",
                          location_4,
                          product_2),
                         columns=("username",
                                  "address_id",
                                  "product_id"))

    # --------------------------------------------------------------------------------------------------------
    executer.make_view("Admin_View",
                       "orders",
                       select_col=("order_id",
                                   "username",
                                   "address_id",
                                   "product_id",
                                   "date_created"))

    executer.make_view("User_View",
                       "orders",
                       select_col=("username",
                                   "product_id",
                                   "date_created"))

    executer.make_view("Shipper_View",
                       "orders",
                       select_col=("address_id",
                                   "product_id",
                                   "date_created"))

    executer.commit()
    executer.close_connection()
