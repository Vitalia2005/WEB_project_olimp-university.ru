from requests import request
from bs4 import BeautifulSoup


def get_subject_and_olymp():
    url = "https://olimpiada.ru/article/942#rest"

    html = request(
        method='GET',
        url=url
    ).content.decode('utf-8')

    soup = BeautifulSoup(html, 'html.parser')

    exclusion_words = ["Наименование олимпиады", "№ в перечне", "Предмет", "Уровень", "Профиль"]

    all_subjects = [p.find('strong').text for p in soup.find_all('p')
                    if p.find('strong') and p.find('strong').text not in exclusion_words]

    olymps = []
    ind = 0
    for table in soup.find_all('table')[2:-2:]:
        subject = all_subjects[ind]
        for tr in table.find_all('tr')[1::]:
            all = tr.find_all('p')
            name = tr.a.text
            number = all[1].text
            profil = all[2].text
            if ind != len(all_subjects) - 1:
                level = all[3].text
            else:
                level = all[4].text
            cortege = (name, number, profil, level)

            olymps.append(cortege)
        ind += 1
    return olymps, all_subjects
