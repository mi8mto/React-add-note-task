import { useState } from 'react';
import styles from './MyModule.module.css';
// console.log(1);

export const MyModule = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	let isValueValid = value.length >= 3;

	const onInputButtonClick = (event) => {
		const promptValue = prompt('Введите значение:');
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	// Функция обработки нажатия кнопки "Добавить в список"
	const onAddButtonClick = () => {
		if (isValueValid) {
			// Создаем новый элемент списка
			const newItem = { id: Date.now(), value };
			// Обновляем список, добавляя новый элемент
			setList((prevList) => [...prevList, newItem]);
			// Сбрасываем value и error
			setValue('');
			setError('');
			// console.log(newItem);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button onClick={() => onInputButtonClick()} className={styles['button']}>
					Ввести новое
				</button>
				<button
					onClick={onAddButtonClick}
					className={styles['button']}
					disabled={!isValueValid}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{/* Условный рендеринг списка */}
				{list.length > 0 ? (

					<ul className={styles['list']}>
						{list.map((item) => (
							<li key={item.id} className={styles['list-item']}>
								{item.value}
							</li>
						))}
					</ul>
					
				) : (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
