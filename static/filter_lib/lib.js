class Filter_Library {
    constructor() {
        this.data = []; // [[title, values, [w, h, left, top], [true, false, ...], title-end] ...]
        this.container = undefined; // container of all filters
        this.open_filter = undefined; // index of open filter now
        this.values_container = undefined; // container, where values
        this.func = undefined; // result func of user
        this.profils = ['Астрономия', 'Биология', 'География', 'Геология', 'Гуманитарные и социальные науки', 'Естественные науки', 'Журналистика', 'Инженерные науки', 'Иностранный язык', 'Информатика', 'История', 'Лингвистика', 'Литература', 'Математика', 'Обществознание', 'Политология', 'Право', 'Программирование', 'Психология', 'Рисунок', 'Робототехника', 'Русский язык', 'Социология', 'Теория и история музыки', 'Техника и технологии', 'Физика', 'Филология', 'Философия', 'Финансовая грамотность', 'Химия', 'Экономика', 'Остальные']
        // event by click
        $(document).on('click', function (event) {
            // проверка при скрытии окна фильтров
            if (FL.open_filter != undefined) {
                var input = FL.container_input;
                var container_values = FL.values_container;
                if (event.target != container_values[0] && container_values.has(event.target).length == 0 && input.has(event.target).length == 0 && event.target != input[0]) {
                    container_values.remove();

                    FL.container.find(`#fl_item_${FL.open_filter}`).find('.fl-item-select_arrow').css({'transform': 'rotate(0deg)'});
                    FL.open_filter = undefined;
                }
            }
        });
    }

    // создать массив одинаковых значений
    create_array_true(n, value = true) {
        var array = [];
        for (var i = 0; i < n; i++) {
            array.push(value);
        }
        return array;
    }

    // подсчитать количество true
    count(array, from = 0, n = true) {
        var quantity = 0;
        for (var i = from; i < array.length; i++) {
            if (array[i] == n) {
                quantity++;
            }
        }
        return quantity;
    }

    // сократить заголовок
    shorten_title(text, limit = 10) {
        if (text.length - limit > 1) {
            var text = text.substring(0, limit) + '...';
        }
        return text;
    }



    // create filters
    insert_filters(id_element, data, func = x => x) {
        // set data
        FL.data = data;
        FL.container = $(`#${id_element}`);
        FL.func = func;
        // create elements
        var result = '';
        FL.data.forEach(function (values, i) {
            var [title, values, [w, h, left, top], t_f_array, title_end] = values;
            result += `
        <div class='fl-item' id='fl_item_${i}' style='width: ${w}px; height: ${h}px; margin-left: ${left}px; margin-top: ${top}px;'>
          <div class='fl-item-title'>${title}</div>
          <div class='fl-item-open_select_button_div' onclick='FL.show_or_hide_filter_values(${i});'>
            <button class='fl-item-open_select_button'>${values[0]}</button>
            <img class='fl-item-select_arrow' src='/static/filter_lib/img/arrow.png' ondragstart="return false;">
          </div>
        </div>`;
        });
        // put elements in container
        FL.container.html(result);
        FL.container_input = FL.container.find('.fl-item-open_select_button_div');
    }

    // put checks in checkboxes by array
    tick_off_filters(array) {
        //
        var container = $('.fl-item-filters_container');
        array.forEach(function (bool, i) {
            var color = '#EFEFEF' ? (bool) : 'white';
            var el = container.find(`#fl_check_container_${i}`);
            el.find('input').prop('checked', bool);
            el.find('button').css({'background': color});
        });
    }

    // показать или скрыть фильтры
    show_or_hide_filter_values(index) {
        // проверка по открытому сейчас фильтру
        if (FL.open_filter == index) {
            FL.values_container.remove();
            FL.open_filter = undefined;
            FL.container.find(`#fl_item_${index}`).find('.fl-item-select_arrow').css({'transform': 'rotate(0deg)'});
            return false;
        } else if (FL.open_filter != undefined) {
            FL.values_container.remove();
            FL.container.find(`#fl_item_${FL.open_filter}`).find('.fl-item-select_arrow').css({'transform': 'rotate(0deg)'});
        }
        // обновляем индекс
        FL.open_filter = index;
        // находим контейнер и поворачиваем стрелочку
        var container = FL.container.find(`#fl_item_${index}`);
        container.find('img').css({'transform': 'rotate(180deg)'});
        // создаём текст элементов
        var values = FL.data[index][1];
        var [w, h, left, top] = FL.data[index][2];
        var line_header = `<div class='fl-item-filters_container' id='fl_values_container_${index}' style='width: ${w + 4}px; height: ${Math.min(250, values.length * 30 + 1)}px; margin-left: ${left}px; margin-top: ${top + h + 33}px;'>`;
        var line_in = '';
        values.forEach(function (value, i) {
            var line_border = 'border-bottom: 1px var(--black_main) dashed;' ? (i == 0) : '';
            var color = '#EFEFEF' ? (FL.data[index][3][i] == true) : 'white';
            var checked = 'checked' ? (FL.data[index][3][i] == true) : '';
            line_in += `
        <div id='fl_check_container_${i}' style='margin-top: ${i * 30 + Math.min(i, 1)}px; ${line_border}'>
          <input type='checkbox' ${checked}>
          <button style='background: ${color};'>${value}</button>
        </div>
      `;
        });
        // добавляем текст в контейнер
        FL.container.append(line_header + line_in + '</div>');
        FL.values_container = FL.container.find('.fl-item-filters_container');
        FL.tick_off_filters(FL.data[index][3]);
        //Data_vars.sector2_filter_checked = [true * values.length];
        // event by chenge state of checkbox
        FL.values_container.find('input').on('change', function () {
                var el = $(this);
                var check_container = el.parent();
                var i = Number(check_container.attr('id').split('fl_check_container_')[1]);
                var index = Number(check_container.parent().attr('id').split('fl_values_container_')[1]);
                // проверяем состояние
                if (this.checked) {
                    if (i == 0) {
                        FL.data[index][3] = FL.create_array_true(FL.data[index][1].length, true);
                    } else {
                        FL.data[index][3][i] = true;
                        if (!FL.data[index][3].includes(false, 1)) {
                            FL.data[index][3][0] = true;
                        }
                    }
                } else {
                    if (i == 0) {
                        FL.data[index][3] = FL.create_array_true(FL.data[index][1].length, false);
                    } else {
                        FL.data[index][3][i] = false;
                        FL.data[index][3][0] = false;
                    }
                }
                // делаем все галочки по списку
                FL.tick_off_filters(FL.data[index][3]);
                // вставляем текст в превью
                var button = $(`#fl_item_${index}`).find('.fl-item-open_select_button');
                var quantity_true = FL.count(FL.data[index][3], 1, true);
                if (quantity_true == 1) {
                    var button_text = FL.shorten_title(FL.data[index][1][FL.data[index][3].indexOf(true)], 11);
                } else if (quantity_true < FL.data[index][1].length - 1) {
                    var button_text = `${quantity_true} из ${FL.data[index][1].length - 1} ${FL.data[index][4]}`;
                } else {
                    var button_text = FL.data[index][1][0];
                }
                button.html(button_text);
                // обновляем
                FL.func(index, FL.data[index][3]);
                // ... напишите тут ваш код (если что-то хотите дополнить)
            }
        );
    }

}

// initialize
const FL = new Filter_Library();


// ----------------------- применение

// функция изменения таблицы html при выборе галочек
function change_html() {
    let trs = document.querySelectorAll('#table .tr');
    var a = FL.data[1][3];
    var b = new Map();
    var i = 0;
    var el = '';
    for (el of FL.data[0][3].slice(1)) {
        b.set(this.profils[i], el); // заменить значение по ключу
        i++
    }
    i = -1;
    for (let tr of trs) {
        i++
        if (!(a[levels[i]])) {
            tr.style.display = 'none';
        } else if (!(b.get(subjects[i]))) {
            tr.style.display = 'none';
        } else {
            tr.style.display = 'table-row';
        }
    }
}

var data = [['Выбрать предметы', ['Все предметы', 'Астрономия', 'Биология', 'География', 'Геология',
    'Гуманитарные и социальные науки', 'Естественные науки', 'Журналистика', 'Инженерные науки',
    'Иностранный язык', 'Информатика', 'История', 'Лингвистика', 'Литература', 'Математика',
    'Обществознание', 'Политология', 'Право', 'Программирование', 'Психология', 'Рисунок',
    'Робототехника', 'Русский язык', 'Социология', 'Теория и история музыки', 'Техника и технологии',
    'Физика', 'Филология', 'Философия', 'Финансовая грамотность', 'Химия', 'Экономика', 'Остальные'],
    [238, 50, 300, 20], [true, true, true, true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true, true], 'предметов'],
    ['Выбрать уровни', ['Все уровни', '1', '2', '3'], [238, 50, 10, 20], [true, true, true, true], 'уровней']];

FL.insert_filters('container', data, change_html);
// end.
