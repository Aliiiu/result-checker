import React, { useState } from 'react';
import './App.css';
import CheckerPage from './component/CheckerPage';
import Header from './component/Header';
import Login from './component/Login';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	const loginHandler = (studentId: string, studentPin: string) => {
		if (
			studentId.toUpperCase() === 'ABC/2022/108' &&
			studentPin.toUpperCase() === '12345'
		) {
			setIsLoggedIn(true);
		}
	};
	return (
		<div>
			<div className='container'>
				<Header onLogout={logoutHandler} isAuthenticated={isLoggedIn} />
			</div>
			<main>
				<div className='mainBg'>
					<div className='container'>
						{!isLoggedIn && <Login onLogin={loginHandler} />}
					</div>
				</div>
				<div>{isLoggedIn && <CheckerPage />}</div>
			</main>
		</div>
	);
}

export default App;
