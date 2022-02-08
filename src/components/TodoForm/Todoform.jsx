import { useContext, useReducer } from 'react'
import Modal from '../UI/Modal'
import './TodoForm.css'
import AuthContext from '../../store/auth-context'
const titleReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.val,
			isValid: '',
		}
	}
	if (action.type === 'INPUT_BLUR') {
		return {
			value: '',
			isValid: {},
		}
	}
	if (action.type === 'INPUT_OK') {
		return {
			value: '',
			isValid: null,
		}
	}

	return {
		value: '',
		isValid: null,
	}
}

const dateReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.val,
			isValid: '',
		}
	}
	if (action.type === 'INPUT_BLUR') {
		return {
			value: '',
			isValid: {},
		}
	}
	if (action.type === 'INPUT_OK') {
		return {
			value: '',
			isValid: null,
		}
	}
	return {
		value: '',
		isValid: null,
	}
}
///------------
function Todoform(props) {
	const ctxData = useContext(AuthContext)
	const [titleState, dispatchTitle] = useReducer(titleReducer, {
		value: '',
		isValid: null,
	})

	const [dateState, dispatchDate] = useReducer(dateReducer, {
		value: '',
		isValid: false,
	})

	const titleHandler = (event) => {
		dispatchTitle({ type: 'USER_INPUT', val: event.target.value })
	}

	const dateHandler = (event) => {
		dispatchDate({ type: 'USER_INPUT', val: event.target.value })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (titleState.value.trim() === '') {
			dispatchTitle({ type: 'INPUT_BLUR' })
			return
		}
		if (dateState.value.trim() === '') {
			dispatchTitle({ type: 'INPUT_BLUR' })
			return
		}
		ctxData.addUserNandler(titleState.value, dateState.value)
	}
	const ErrorHandler = () => {
		dispatchTitle({ type: 'INPUT_OK' })
		dispatchDate({ type: 'INPUT_OK' })
	}
	return (
		<div className='container'>
			<h1 className='todo'>
				Todo...{' '}
				<img
					src='https://orig13.deviantart.net/a372/f/2015/230/7/0/jake_dancing_gif_by_blue_staple_studios-d953i0n.gif'
					alt=''
				/>
			</h1>

			{titleState.isValid && <Modal onConfirm={ErrorHandler} />}
			<form className='frm' onSubmit={submitHandler}>
				<input
					className='titleCl'
					type='text'
					placeholder='Введите значение...'
					value={titleState.value}
					onChange={titleHandler}
				/>
				<input
					className='dateCl'
					type='date'
					value={dateState.value}
					onChange={dateHandler}
				/>
				<div>
					<button className='button' type='submit'>
						Add <span></span>
					</button>
				</div>
			</form>
		</div>
	)
}
export default Todoform
