import { useContext } from 'react'
import './AddList.css'
import AuthContext from '../../store/auth-context'
function AddList(props) {
	const ctxData = useContext(AuthContext)
	const removeTask = (event) => {
		const remove = ctxData.users.filter(
			(user) => user.id !== event.target.id,
		)
		ctxData.onChange(remove)
	}

	const checkboxHandler = (event) => {
		const checked = ctxData.users.map((el) => {
			if (el.id === event.target.id) {
				el.completed = !el.completed
			}
			return el
		})
		ctxData.onChange(checked)
	}

	return (
		<div>
			{ctxData.users.map((user) => {
				return (
					<div key={user.id} className='map'>
						<div key={user.id} className='addlist'>
							<div
								id={user.id}
								user={user}
								className={`${
									user.completed ? 'checkbox' : 'task'
								}`}
							>
								<span className='span'>
									{user.title} {user.date}
								</span>
							</div>
							<div>
								<input
									type='checkbox'
									id={user.id}
									checked={user.completed}
									onChange={checkboxHandler}
								/>
								<button
									className='delete'
									onClick={removeTask}
									id={user.id}
								>
									delete
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default AddList
