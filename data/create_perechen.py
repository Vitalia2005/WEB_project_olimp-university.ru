from requests import request
from bs4 import BeautifulSoup
import sqlite3


# функция ниже выполняет парсинг данных с сайта olimpiada.ru
# она собирает все названия профилей олимпиад и доабвляет их в  базу данных
# данная функция не запускается постоянно
# она нужна, чтобы раз в год обновлять данные, когда меняется перечень
def get_subject_and_olymp():
    # Подключение к БД
    con = sqlite3.connect("../db/perechen.db")
    # Создание курсора
    cur = con.cursor()

    url = "https://olimpiada.ru/article/942#rest"  # адрес сайта

    # объект request
    html = request(
        method='GET',
        url=url
    ).content.decode('utf-8')

    soup = BeautifulSoup(html, 'html.parser')  # объект-парсер

    # -- Далее идет заполнение таблицы subjects и парсинг данных профилей олимпиад --

    # слова-исключения (их не стоит искать - это не профили олимпиад)
    exclusion_words = ["Наименование олимпиады", "№ в перечне", "Предмет", "Уровень", "Профиль"]

    # записываем в список все найденные названия профилей
    all_subjects = [p.find('strong').text for p in soup.find_all('p')
                    if p.find('strong') and p.find('strong').text not in exclusion_words]

    # полностью очищаем данные в таблице subjects
    cur.execute("""DELETE from subjects""")

    # Идем по списку названий предметов и добавляем их в базу данных (таблица subjects)
    for ind, el in enumerate(all_subjects):
        cur.execute("""INSERT INTO subjects VALUES(?, ?)""", (ind + 1, el))
    con.commit()

    # -- Далее идет заполнение таблицы olymps и парсинг данных олимпиад --

    # полностью очищаем данные в таблице olymps
    cur.execute("""DELETE from olymps""")

    ind_subject = 0
    ind = 0
    # ищем таблицы на сайте
    for table in soup.find_all('table')[2:-2:]:
        subject = all_subjects[ind_subject] # профиль название
        subject_id = int(cur.execute("""SELECT id from subjects where name=?""",
                                 (subject,)).fetchall()[0][0])
        for tr in table.find_all('tr')[1::]:
            all = tr.find_all('p')
            name = tr.a.text
            number = all[1].text
            profil = all[2].text
            if ind_subject != len(all_subjects) - 1:
                level = all[3].text
            else:
                level = all[4].text

            # Добавляем полученные данные в базу данных (таблица olymps)
            cur.execute("""INSERT INTO olymps VALUES(?, ?, ?, ?, ?, ?)""",
                        (ind + 1, name, subject_id, number, profil, level))
            ind += 1
        ind_subject += 1

    con.commit()  # сохраняем изменения в бд
    con.close()  # закрываем бд


if __name__ == "__main__":
    get_subject_and_olymp()
