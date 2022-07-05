import { Link } from 'react-router-dom';

interface THeader {
	isAuthenticated: Boolean;
	onLogout?: any;
}
const Header = ({ isAuthenticated, onLogout }: THeader) => {
	return (
		<header className='px-[24px] md:px-[123px] header_shadow py-[10px] md:py-[15px] bg-white'>
			<div className='flex flex-row-reverse md:flex-row items-center w-full justify-between'>
				<h4 className='text-[16px] md:text-[24px] md:w-ful text-[#0075FF] font-bold'>
					Our Savior <br className='md:hidden' /> International School
				</h4>
				<div>
					<Link to={'/'}>
						<img
							src={'/images/logo.png'}
							className='relative h-[53px] object-contain w-[85px] md:w-[105px]'
							alt='Flip logo'
						/>
					</Link>
				</div>

				{isAuthenticated && (
					<button
						onClick={onLogout}
						className='bg-[#E25C5C] font-bold flex items-center text-white text-center text-[20px] px-[28px] py-[14px] rounded-[8px]'
					>
						<img
							src={'/images/logout_icon.png'}
							alt='logout icon'
							width={29}
							height={25}
						/>
						Log Out
					</button>
				)}
			</div>
		</header>
	);
};

export default Header;
