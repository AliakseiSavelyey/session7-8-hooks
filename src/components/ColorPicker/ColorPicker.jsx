import { useState } from 'react';
// Библиотека classNames сейчас используется с scss, усли нужно использовать библиотеку с css-modules то смотреть документацию на сайте(пример: import classNames=require('classnames/bind') дальше по инструкции)
import classNames from 'classnames';
import './ColorPicker.scss';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  // с помощью индекса берем label у активной кнопки и выводим в параграфе(это называется вычисляемое свойство на базе пропов и state) / берем из массива по индексу обьект и из обьект деструктуризируем свойство label
  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    // Добавляем класс по условию с помощью БИБЛИОТЕКИ classNames(первым идет дефолтные стили(сколько угодно штук, потом в обьекте идут те которые нужно добавить, а потом условие при котором нужно добавить))
    return classNames('ColorPicker-option', {
      'ColorPicker-option-active': index === activeOptionIdx,
    });
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker-title">Color Picker</h2>
      <p>Выбрать цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            // Передаем ссылку на функцию в onClick, index доступен через замыкание
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
