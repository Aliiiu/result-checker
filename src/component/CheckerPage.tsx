import { useEffect } from 'react';
import { TbDownload } from 'react-icons/tb';
import AcademicTable from './AcademicTable';
import Behaviour from './Behaviour';
import Skills from './Skills';

const CheckerPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='px-[210px] mt-[120px] mb-[380px]'>
			<div className='flex justify-between items-center w-full'>
				<img src={'/images/schoolLogo.png'} alt='school Logo' width={'170px'} />
				<div className='flex flex-col gap-y-[10px] items-center'>
					<h2 className='uppercase text-[24px] font-bold'>
						INTRAPAIR INTERNATIONAL school, ABEOKUTA
					</h2>
					<p className='capitalize'>No 1, Address, street Name, City, State</p>
					<p>JUNIOR/SECONDARY REPORT SHEET</p>
					<p>1st term, session 2022/23</p>
				</div>
				<img
					src='/images/profileIcon.png'
					alt='student avatar'
					width={'170px'}
				/>
			</div>
			<div className='flex justify-between mt-[50px] w-full'>
				<div className='flex flex-col gap-y-[20px]'>
					<p className='uppercase'>
						<span>NAME: </span> adekunle johnson emeka{' '}
					</p>
					<p className='uppercase'>
						<span>class: </span> ss2{' '}
					</p>
					<p className='uppercase'>
						<span>NO of times school opened:: </span> _ _ _ _ _ _ _
					</p>
					<p className='uppercase'>
						<span>PERcentage: </span> 85%{' '}
					</p>
				</div>
				<div className='flex flex-col gap-y-[20px]'>
					<p className='uppercase'>
						<span>sex: </span> male{' '}
					</p>
					<p className='uppercase'>
						<span>no in class: </span> 200{' '}
					</p>
					<p className='uppercase'>
						<span>NO of times present: </span> _ _ _ _ _ _ _
					</p>
					<p className='uppercase'>
						<span>cummulative PERcentage: </span> 95%{' '}
					</p>
				</div>
			</div>
			<div className='mt-[55px]'>
				<AcademicTable />
			</div>
			<div className='flex justify-between gap-x-[20px] w-full'>
				<Skills />
				<Behaviour />
			</div>
			<div className='mt-[24px]'>
				<div className='mt-[24px] flex flex-col gap-y-[10px]'>
					<p>
						<span>CLASS TEACHER’S REMARK:</span> is a conscientious,
						hard-working student.
					</p>
					<p>
						<span>PRINCIPAL’S REMARK:</span> Excellent Result, keep it up.
					</p>
					<p>
						<span>TO BE PROMOTED TO:</span> SS 3
					</p>
					<p>
						<span>NEXT TERM BEGINS:</span> 11th Aug 2022
					</p>
				</div>
				<div className='flex justify-center mt-[67px]'>
					<button className='bg-[#0075FF] flex items-center text-white py-[14px] px-[28px] rounded-[8px]'>
						<TbDownload className='mr-2' /> Print Result
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckerPage;
