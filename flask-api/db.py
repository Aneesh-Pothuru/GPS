import sqlite3


class Executer:

    def __init__(self, file_path):
        self.__conn = sqlite3.connect(file_path)
        self.__cursor = self.__conn.cursor()

    def insert_table(self,
                     table_name: str,
                     *args) -> None:
        execution_string = "CREATE TABLE " + table_name.upper() + "("

        for i in args:
            execution_string += i.upper() + ", "

        execution_string = execution_string[:-2] + ");"

        self.__cursor.execute(execution_string)

    def list_tables(self) -> list:
        command = "SELECT name FROM sqlite_master WHERE type='table';"
        self.__cursor.execute(command)
        return self.__cursor.fetchall()

    def insert_into(self,
                    table_name: str,
                    values: tuple,
                    columns=None):

        base_string = "INSERT INTO " + table_name.upper()

        if columns is not None:
            base_string += str(columns).upper()

        base_string += " VALUES" + " " + str(values).upper() + ";"

        self.__cursor.execute(base_string)

    def fetch_data(self,
                   table: str,
                   *args,
                   select_col= None):

        base_str = "SELECT"
        if select_col is None:
            base_str += " *"
        else:
            base_str += str(select_col)[1: -2]

        base_str += " FROM {}".format(table)

        for i in args:
            base_str += " " + i

        self.__cursor.execute(base_str.upper())

        return self.__cursor.fetchall()

    def close_connection(self):
        self.__conn.close()

    def commit(self):
        self.__conn.commit()


if __name__ == '__main__':


    # command_list = ["location_id INTEGER PRIMARY KEY AUTOINCREMENT",
    #                 "address VARCHAR(50) NOT NULL",
    #                 "zip_code VARCHAR(10) NOT NULL",
    #                 "country VARCHAR(50) NOT NULL",
    #                 "state VARCHAR(2)"]

    executer = Executer("shipping_db.sqlite")

    # executer.insert_into("location",
    #                      ("161 SageMeadow Ct Milpitas", "95035", "United States", "CA"),
    #                      ("address", "zip_code", "country", "state"))
    #
    # executer.commit()

    print(executer.fetch_data("location"))

    #
    # executer.insert_table("LOCATION", *command_list)
    #
    # command_list = ["user_id INTEGER PRIMARY KEY AUTOINCREMENT",
    #                 "location_id Integer not null",
    #                 "username VARCHAR(50) NOT NULL",
    #                 "password VARCHAR(50) NOT NULL",
    #                 "first_name VARCHAR(50) NOT NULL",
    #                 "last_name VARCHAR(50) NOT NULL",
    #                 "FOREIGN KEY(location_id) REFERENCES location(location_id)"]
    #
    # executer.insert_table("user", *command_list)
    #
    # command_list = ["recipient_id INTEGER PRIMARY KEY AUTOINCREMENT",
    #                 "first_name VARCHAR(50) NOT NULL",
    #                 "last_name VARCHAR(50) NOT NULL"]
    #
    # executer.insert_table("RECIPIENT", *command_list)
    #
    # command_list = ["item_id INTEGER PRIMARY KEY AUTOINCREMENT",
    #                 "name VARCHAR(50) NOT NULL",
    #                 "weight INTEGER NOT NULL",
    #                 "width INTEGER NOT NULL",
    #                 "length INTEGER NOT NULL",
    #                 "height INTEGER NOT NULL"]
    #
    # executer.insert_table("item", *command_list)
    #
    # command_list = ["order_id INTEGER PRIMARY KEY AUTOINCREMENT",
    #                 "sender_id INTEGER NOT NULL",
    #                 "recipient_id INTEGER NOT NULL",
    #                 "item_id INTEGER NOT NULL",
    #                 "item_quantity INTEGER NOT NULL",
    #                 "box_quantity INTEGER NOT NULL",
    #                 "box_size INTEGER NOT NULL",
    #                 "FOREIGN KEY (sender_id) REFERENCES user(user_id)",
    #                 "FOREIGN KEY (recipient_id) REFERENCES recipient(recipient_id)",
    #                 "FOREIGN KEY (item_id) REFERENCES item(item_id)"]
    #
    # executer.insert_table("Orders", *command_list)
    #
    # command_list = ["order_book_id INTEGER PRIMARY KEY AUTOINCREMENT",
    #                 "order_id INTEGER NOT NULL",
    #                 "user_id INTEGER NOT NULL",
    #                 "date_created VARCHAR(50) NOT NULL",
    #                 "item_quantity INTEGER NOT NULL",
    #                 "FOREIGN KEY (order_id) REFERENCES Orders(order_id)",
    #                 "FOREIGN KEY (user_id) REFERENCES user(user_id)"]
    #
    # executer.insert_table("order_book ", *command_list)
    #
    # print(executer.list_tables())
    #
    # executer.commit()
    # executer.close_connection()
