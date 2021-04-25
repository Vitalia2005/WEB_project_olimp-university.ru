button_next.onclick = function () {
    let selected = new Map();
    let selected_names = [];
    for (var i = 1; i < all_olymps.length + 1; i++) {
        var a = document.getElementById('check_' + i);
        if (a.checked) {
            selected.set(document.getElementById('name_' + i).textContent,
                [(document.getElementById('stepen_' + i)).value,
                    (document.getElementById('class_' + i)).value]);
            selected_names.push(document.getElementById('name_' + i).textContent);
        }
    }
    let something_text = document.getElementById('something_text');
    let all = document.getElementById('all');
    something_text.style.display = 'none';
    all.style.display = 'none';

    let olymps_math_2level = ['Всесибирская олимпиада по математике',
        'Межрегиональная олимпиада школьников по математике «САММАТ»',
        'Межрегиональная олимпиада школьников им. И.Я. Верченко по математике и криптографии',
        'Турнир Ломоносова',
        'Олимпиада «Росатом» по математике',
        'Олимпиада Юношеской математической школы',
        'Олимпиада Курчатов по математике',
        'Объединенная международная математическая олимпиада «Формула Единства» / «Третье тысячелетие»',
        'Межрегиональная олимпиада школьников на базе ведомственных образовательных организаций (математика)']
    var flag_msu = false;
    var flag_msu_mexmat_fmm = false;
    var flag_msu_vmk_pmi = false;
    var flag_msu_vmk = false;
    var flag_msu_vmk_fiit = false;
    for (let i in all_olymps) {
        // победители олимпиад 1 уровня по математике - бви
        if ((selected_names.indexOf(all_olymps[i][1]) != -1)) { // если олимпиада есть в выбранных
            let olymp_info = selected.get(all_olymps[i][1]); // степень диплома и класс выбранной олимпиады

            // МЕХМАТ

            // победители олимпад по математике 1 уровня - БВИ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'математика') & (olymp_info[0] == '1') &
                (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;">
                            </table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_mexmat_fmm) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                               <th colspan="6" style="font-size: 21px;">МЕХАНИКО-МАТЕМАТИЧЕСКИЙ ФАКУЛЬТЕТ</th>
                            </tr>
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальные математика и механика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Зачисление без вступительных испытаний'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_mexmat_fmm = true;
                flag_msu = true;
            }
            // призеры олимпида 1 уровня по математике - 100 баллов ДВИ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'математика') &
                (olymp_info[0] == '2' ||
                    olymp_info[0] == '3') &
                (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;">
                            </table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_mexmat_fmm) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                               <th colspan="6" style="font-size: 21px;">МЕХАНИКО-МАТЕМАТИЧЕСКИЙ ФАКУЛЬТЕТ</th>
                            </tr>
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальные математика и механика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.style.padding = '10px';
                td3.innerHTML = 'Призёр'
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.style.padding = '10px';
                td4.innerHTML = 'Максимальное количество баллов по дополнительному вступительному испытанию по математике'
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_mexmat_fmm = true;
                flag_msu = true;
            }
            // победители и призеры некоторых олимпиад 2 уровня по математике - 100 баллов дви
            if ((olymps_math_2level.indexOf(all_olymps[i][1]) != -1) &
                (profils[i].toLowerCase() == 'математика') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;">
                            </table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_mexmat_fmm) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                               <th colspan="6" style="font-size: 21px;">МЕХАНИКО-МАТЕМАТИЧЕСКИЙ ФАКУЛЬТЕТ</th>
                            </tr>
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальные математика и механика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.style.padding = '10px';
                td3.innerHTML = 'Победитель, призёр'
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.style.padding = '10px';
                td4.innerHTML = 'Максимальное количество баллов по дополнительному вступительному испытанию по математике'
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_mexmat_fmm = true;
                flag_msu = true;
            }
            // победители и призеры олимпиад по механике и математическому моделированию 3 уровня - 100 баллов дви
            if ((profils[i].toLowerCase() == 'механика и математическое моделирование' ||
                profils[i].toLowerCase() == 'робототехника') &
                (olymp_info[1] == '11') & (all_olymps[i][5] == 3)) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;">
                            </table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_mexmat_fmm) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                               <th colspan="6" style="font-size: 21px;">МЕХАНИКО-МАТЕМАТИЧЕСКИЙ ФАКУЛЬТЕТ</th>
                            </tr>
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальные математика и механика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.style.padding = '10px';
                td3.innerHTML = 'Победитель, призёр'
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.style.padding = '10px';
                td4.innerHTML = 'Максимальное количество баллов по дополнительному вступительному испытанию по математике'
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_mexmat_fmm = true;
                flag_msu = true;
            }
            // победители и призеры олимпиад по нанотехнологиям 1 уровня - 100 баллов ЕГЭ физика
            if ((profils[i].toLowerCase() == 'нанотехнологии') &
                (olymp_info[1] == '11') & (all_olymps[i][5] == 1)) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;">
                            </table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_mexmat_fmm) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                               <th colspan="6" style="font-size: 21px;">МЕХАНИКО-МАТЕМАТИЧЕСКИЙ ФАКУЛЬТЕТ</th>
                            </tr>
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальные математика и механика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.style.padding = '10px';
                td3.innerHTML = 'Победитель, призёр'
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.style.padding = '10px';
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по физике'
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Физика'; // записываем предмет, по которому необходимо подтвердить ЕГЭ
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_mexmat_fmm = true;
                flag_msu = true;
            }
            // победители и призеры олимпиад по физике 1 и 2 уровня - 100 баллов ЕГЭ физика
            if ((profils[i].toLowerCase() == 'физика') &
                (olymp_info[1] == '11') & (all_olymps[i][5] == 1 || all_olymps[i][5] == 2)) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;">
                            </table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_mexmat_fmm) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                               <th colspan="6" style="font-size: 21px;">МЕХАНИКО-МАТЕМАТИЧЕСКИЙ ФАКУЛЬТЕТ</th>
                            </tr>
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальные математика и механика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.style.padding = '10px';
                td3.innerHTML = 'Победитель, призёр'
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.style.padding = '10px';
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по физике'
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Физика'; // записываем предмет, по которому необходимо подтвердить ЕГЭ
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_mexmat_fmm = true;
                flag_msu = true;
            }
        }
    }
    for (let i in all_olymps) {
        // победители олимпиад 1 уровня по математике - бви
        if ((selected_names.indexOf(all_olymps[i][1]) != -1)) { // если олимпиада есть в выбранных
            let olymp_info = selected.get(all_olymps[i][1]); // степень диплома и класс выбранной олимпиады{
            // ВМК

            // победители олимпиад по математике 1 - БВИ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'математика') & (olymp_info[0] == '1') &
                (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Зачисление без вступительных испытаний'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }

            // призеры олимпиад по математике 1 уровня - 100 баллов ДВИ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'математика') & (olymp_info[0] == '2' ||
                    olymp_info[0] == '3') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по дополнительному вступительному испытанию по математике'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }

            // победители и призеры олимпиад по математике 2 уровня - 100 баллов ДВИ
            if ((all_olymps[i][5] == 2) &
                (profils[i].toLowerCase() == 'математика') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель, призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по дополнительному вступительному испытанию по математике'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }


            // победители олимпиад по математике 1 уровень - БВИ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'информатика') & (olymp_info[0] == '1') &
                (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Зачисление без вступительных испытаний'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Информатика и ИКТ'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }

            // призеры олимпиад по информатике 1 уровня - 100 баллов ДВИ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'информатика') & (olymp_info[0] == '2' ||
                    olymp_info[0] == '3') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по информатике и ИКТ'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Информатика и ИКТ'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }

            // победители и призеры олимпиад по информатике 2 и 3 уровня - 100 баллов ДВИ
            if ((all_olymps[i][5] == 2 || all_olymps[i][5] == 3) &
                (profils[i].toLowerCase() == 'математика') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель, призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по информатике и ИКТ'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Информатика и ИКТ'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }

            // победители и призеры олимпиад по физике 1 и 2 уровня - 100 баллов ЕГЭ
            if ((all_olymps[i][5] == 1 || all_olymps[i][5] == 2) &
                (profils[i].toLowerCase() == 'физика') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_pmi) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Прикладная математика и информатика</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель, призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по физике'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Физика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }
        }
    }


    for (let i in all_olymps) {
        if (selected_names.indexOf(all_olymps[i][1]) != -1) { // если олимпиада есть в выбранных
            let olymp_info = selected.get(all_olymps[i][1]); // степень диплома и класс выбранной олимпиады{
            // ВМК

            // победители олимпиад по математике 1, 2 уровень - 100 баллов ДВИ
            if ((all_olymps[i][5] == 1 || all_olymps[i][5] == 2) &
                (profils[i].toLowerCase() == 'математика')  &
                (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_fiit) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальная информатика и информационные технологии</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель, призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по дополнительному вступительному испытанию по математике'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Математика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_fiit = true;
            }

            // призеры и победители олимпиад по информатике 1, 2, 3 уровня - 100 баллов ЕГЭ
            if ((all_olymps[i][5] == 1) &
                (profils[i].toLowerCase() == 'информатика') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_fiit) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальная информатика и информационные технологии</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель, призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по информатике и ИКТ'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Информатика и ИКТ'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_fiit = true;
            }

            // победители и призеры олимпиад по физике 1 и 2 уровня - 100 баллов ЕГЭ
            if ((all_olymps[i][5] == 1 || all_olymps[i][5] == 2) &
                (profils[i].toLowerCase() == 'физика') & (olymp_info[1] == '11')) {
                if (!flag_msu) {
                    var result_html = `
                            <h3 style="margin-left: 40px; margin-top: 30px;">МГУ (Московский Государственный Университет)</h3>
                            <table border="1" id="table_msu" style="margin-top: 10px;"></table>`;
                    $('body').append(result_html);
                }
                let table = document.querySelector('#table_msu');
                if (!flag_msu_vmk) {
                    result_html = `<tr style="vertical-align: middle; text-align: center; height: 80px;">
                                <th colspan="6" style="font-size: 21px;">ФАКУЛЬТЕТ ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ И КИБЕРНЕТИКИ</th>
                            </tr>`
                    $('#table_msu').append(result_html);
                }
                if (!flag_msu_vmk_fiit) {
                    result_html = `
                            <tr style="vertical-align: middle; text-align: center; height: 60px;">
                                 <th colspan="6" style="font-size: 19px;">Фундаментальная информатика и информационные технологии</th>
                            </tr>
                            <tr>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Олимпиада</th>
                            <th style="vertical-align: middle;
                            text-align: center; height: 60px; padding-left: 10px; padding-right:10px;">Класс</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Степень</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Льгота</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Профиль</th>
                            <th style="vertical-align: middle; text-align: center; height: 60px;">Предмет, по которому необходимо получить не менее 75 баллов ЕГЭ</th>
                            </tr>`;
                    $('#table_msu').append(result_html);
                }
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = all_olymps[i][1]; // записываем название олимпиады в ячейку
                td1.style.padding = '10px';
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = '11'
                td2.style.padding = '10px';
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = 'Победитель, призёр'
                td3.style.padding = '10px';
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = 'Максимальное количество баллов по ЕГЭ по физике'
                td4.style.padding = '10px';
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = profils[i].toLowerCase(); // записываем предмет олимпиады в ячейку
                td5.style.padding = '10px';
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = 'Физика'; // записываем предмет олимпиады в ячейку
                td6.style.padding = '10px';
                tr.appendChild(td6);
                table.appendChild(tr);
                flag_msu_vmk = true;
                flag_msu = true;
                flag_msu_vmk_pmi = true;
            }
        }
    }
}