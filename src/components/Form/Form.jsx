import { useState, useEffect } from 'react';
import './Form.scss';

// ======================================================
// делаем отдельный СВОЙ хук который заменяет несколько других:
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    // ниже ленивая инициализация состояния(функция будет рендериться эта  только один раз)
    () => {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    },
  );
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
// ======================================================

export default function Form({ giveMeData }) {
  // используем свой хук
  const [name, setName] = useLocalStorage('name', '');
  const [secondName, setSecondname] = useLocalStorage('secondName', '');

  const [licence, setLicence] = useState(false);
  // const [experience, setExperience] = useState('Junior');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'secondName':
        setSecondname(e.target.value);
        break;
      case 'licence':
        setLicence(e.target.value);
        break;
      // case 'experience':
      //   setExperience(e.target.value);
      //   break;

      default:
        return;
    }
  };

  const handleLicence = e => {
    setLicence({ licence: e.target.checked });
  };

  // для Сабмита формы делаем отдельный метод
  const handleSubmit = e => {
    e.preventDefault();
    // Получаем данные из формы при сабмите
    giveMeData(name, secondName);
    // Вызываем метод reset для очистки формы после сабмита
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя{' '}
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Фамилия
        <input
          type="text"
          name="secondName"
          value={secondName}
          onChange={handleChange}
        />
      </label>

      {/* Делаем радио кнопки
      <p>Ваш уровень:</p>
      <label>
        <input
          type="radio"
          name="experience"
          value="Junior"
          onChange={handleChange}
          checked={experience === 'Junior'}
        />
        Junior
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="Middle"
          onChange={handleChange}
          checked={experience === 'Middle'}
        />
        Middle
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="Senior"
          onChange={handleChange}
          checked={experience === 'Senior'}
        />
        Senior
      </label>
      <br /> */}

      {/* делаем чекбокс */}
      <label>
        <input
          type="checkbox"
          name="licence"
          checked={licence}
          onChange={handleLicence}
        />
        Подтвердить условиe
      </label>

      {/* кнопка отправки формы. делаем ее неактивной если чекбокс не выбран через disabled */}
      <button type="submit" disabled={!licence}>
        Отправить
      </button>
    </form>
  );
}
