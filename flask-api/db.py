import sqlite3


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

    def fetch_data(self,
                   table: str,
                   *args,
                   select_col=None):

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

        print(base_str)

        self.__cursor.execute(base_str.upper() + ";")

        return self.__cursor.fetchall()

    def close_connection(self):
        self.__conn.close()

    def commit(self):
        self.__conn.commit()


if __name__ == '__main__':
    executer = Executer("shipping_db.sqlite")

    command_list = ["address VARCHAR(50) NOT NULL",
                    "zip_code VARCHAR(10) NOT NULL",
                    "country VARCHAR(50) NOT NULL",
                    "state VARCHAR(2)",
                    "CONSTRAINT location_id PRIMARY KEY (address, zip_code, country, state)"]

    executer.insert_table("LOCATION", *command_list)

    command_list = ["role_id INTEGER PRIMARY KEY AUTOINCREMENT",
                    "description VARCHAR(50) NOT NULL"]

    executer.insert_table("roles", *command_list)

    command_list = ["user_id INTEGER PRIMARY KEY AUTOINCREMENT",
                    "role_id INTEGER NOT NULL",
                    "location_id Integer not null",
                    "first_name VARCHAR(50) NOT NULL",
                    "last_name VARCHAR(50) NOT NULL",
                    "FOREIGN KEY(location_id) REFERENCES location(location_id)",
                    "FOREIGN KEY(role_id) REFERENCES roles(role_id)"]

    executer.insert_table("user", *command_list)

    command_list = ["product_id INTEGER PRIMARY KEY AUTOINCREMENT",
                    "name VARCHAR(50) NOT NULL",
                    "weight INTEGER NOT NULL",
                    "width INTEGER NOT NULL",
                    "length INTEGER NOT NULL",
                    "height INTEGER NOT NULL"]

    executer.insert_table("product", *command_list)

    command_list = ["order_id INTEGER PRIMARY KEY AUTOINCREMENT",
                    "recipient_id INTEGER NOT NULL",
                    "product_id INTEGER NOT NULL",
                    "item_quantity INTEGER NOT NULL",
                    "date_created DATE NOT NULL",
                    "FOREIGN KEY (recipient_id) REFERENCES user(user_id)",
                    "FOREIGN KEY (product_id) REFERENCES product(product_id)"]

    executer.insert_table("orders", *command_list)

    print(executer.list_tables())

    executer.insert_into("location",
                         ("824 Hemmingway Drive", "95032", "United States", "CA"),
                         columns=("address", "zip_code", "country", "state"))

    executer.insert_into("location",
                         ("87 Cromwell Lane", "92374", "United States", "CA"),
                         columns=("address", "zip_code", "country", "state"))

    executer.insert_into("location",
                         ("243 Lincoln Ave", "25304", "United States", "GA"),
                         columns=("address", "zip_code", "country", "state"))

    executer.insert_into("roles",
                         ("admin",),
                         columns=("description",))

    executer.insert_into("roles",
                         ("shipper",),
                         columns=("description",))

    executer.insert_into("roles",
                         ("recipient",),
                         columns=("description",))

    executer.insert_into("user",
                         ("1", "1", "John", "Doe"),
                         columns=("role_id", "location_id", "first_name", "last_name"))

    executer.insert_into("user",
                         ("2", "1", "Mary", "Sue"),
                         columns=("role_id", "location_id", "first_name", "last_name"))

    executer.insert_into("user",
                         ("3", "2", "Nagi", "Ramen"),
                         columns=("role_id", "location_id", "first_name", "last_name"))

    executer.insert_into("user",
                         ("1", "3", "Sriram", "Govindan"),
                         columns=("role_id", "location_id", "first_name", "last_name"))

    print(executer.fetch_data("location", select_col=("address", "zip_code", "country")))

    # executer.commit()
    executer.close_connection()
