// import { useState } from 'react';
// import './Form.scss';

// export default function Form() {
//   const [name, setName] = useState('');
//   const [secondName, setSecondname] = useState('');
//   const [licence, setLicence] = useState(false);
//   const [experience, setExperience] = useState('Junior');

//   const handleChange = e => {
//     switch (e.target.name) {
//       case 'name':
//         setName(e.target.value);
//         break;
//       case 'secondName':
//         setSecondname(e.target.value);
//         break;
//       case 'licence':
//         setLicence(e.target.value);
//         break;
//       case 'experience':
//         setExperience(e.target.value);
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Имя{' '}
//         <input type="text" name="name" value={name} onChange={handleChange} />
//       </label>
//       <label>
//         Фамилия
//         <input
//           type="text"
//           name="secondName"
//           value={secondName}
//           onChange={handleChange}
//         />
//       </label>

//       {/* Делаем радио кнопки */}
//       <p>Ваш уровень:</p>
//       <label>
//         <input
//           type="radio"
//           name="experience"
//           value="Junior"
//           onChange={handleChange}
//           checked={experience === 'Junior'}
//         />
//         Junior
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="experience"
//           value="Middle"
//           onChange={handleChange}
//           checked={experience === 'Middle'}
//         />
//         Middle
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="experience"
//           value="Senior"
//           onChange={handleChange}
//           checked={experience === 'Senior'}
//         />
//         Senior
//       </label>
//       <br />

//       {/* делаем чекбокс */}
//       <label>
//         <input
//           type="checkbox"
//           name="licence"
//           checked={licence}
//           onChange={this.handleLicence}
//         />
//         Подтвердить условиe
//       </label>

//       {/* кнопка отправки формы. делаем ее неактивной если чекбокс не выбран через disabled */}
//       <button type="submit" disabled={!licence}>
//         Отправить
//       </button>
//     </form>
//   );
// }
