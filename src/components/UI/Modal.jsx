import './Modal.css'
function Modal(props) {
	return (
		<div>
			<div onClick={props.onConfirm} className='backdrop' />
			<div className='modal'>
				<header className='header'>
					<h3>Модальное окно</h3>
					{/* props */}
				</header>
				<div className=''>
					<p>Введите значение!!!</p>
					{/* props.message */}
				</div>
				<div className='ok'>
					<button onClick={props.onConfirm}>Okey</button>
				</div>
			</div>
		</div>
	)
}
export default Modal
