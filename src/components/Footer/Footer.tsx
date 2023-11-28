import styles from './Footer.module.scss';
import logo from '/images/logo/logo-blue.svg';

export const Footer = () => {
  return (
    <div className={`h-[220px] bg-[#0b0b19] ${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left column */}
          <div className={styles.column}>
            <h3 className=' text-primary text-center text-[24px] mb-6'>Our Partners</h3>
            <div className='flex items-center justify-center gap-32'>
							<span>
								<img className='w-[700px]' src="/images/partners/1.png" alt="" />
							</span>
							<span>2</span>
							<span>3</span>
						</div>
          </div>

          {/* Center column with logo */}
          <div className={styles.centerColumn}>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>

          {/* Right column */}
          <div className={styles.column}>
            {/* Add content for the right column if needed */}
						<h3 className='text-primary text-center text-[24px] mb-6'>Our sicials</h3>
            <div className='flex items-center justify-center gap-32'>
							<span>1</span>
							<span>2</span>
							<span>3</span>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};
