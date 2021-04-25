import sqlite3
from data import db_session
from api import olymps_api
from flask import Flask, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = 'olympvita-university-Wqn7RC8}vysS'
app.config['JSON_AS_ASCII'] = False


# главная страница
@app.route('/')
def main():
    return render_template('main.html')


# страница "Узнать свои льготы"
@app.route('/privileges/')
def privileges():
    # Подключение к БД
    con = sqlite3.connect("db/perechen.db")
    # Создание курсора
    cur = con.cursor()

    # получаем из бд список предметов олимпиад (которые отражаются в выпадающем списке)
    data = cur.execute("""SELECT name from subjects""").fetchall()
    # получаем из бд список всех олимпиад и данных о них
    all_olymps = cur.execute("""SELECT * from olymps""").fetchall()
    levels = [el[0] for el in cur.execute("""SELECT level from olymps""").fetchall()]
    aa = cur.execute("""SELECT subject_id, profil from olymps""").fetchall()
    subjects = [cur.execute("""SELECT name from subjects WHERE id=?""", (el[0],)).fetchall()[0][0] for el in aa]

    profils = []
    for el in aa:
        if el[0] != 32:
            profils.append(cur.execute("""SELECT name from subjects WHERE id=?""", (el[0],)).fetchall()[0][0])
        else:
            profils.append(el[1])
    con.close()
    return render_template('privileges.html', data=data, all_olymps=all_olymps, levels=levels,
                           subjects=subjects, profils=profils)


if __name__ == '__main__':
    db_session.global_init("db/perechen.db")
    app.register_blueprint(olymps_api.blueprint)
    app.run(port=8080, host='127.0.0.1')
