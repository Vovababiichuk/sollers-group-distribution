import { Button } from '../Button/Button';
import style from './About.module.scss';

export const About = () => {
  return (
    <div id='about' className="text-black py-50">
      <div className={style.container}>
				<div className='flex items-center'>
					<div>
						<span>sjdhbvsdvjsdvj</span>
						<span>smdbvskdbvsdb</span>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi alias molestias, ad eaque temporibus nulla laborum recusandae ab qui? Perferendis veniam, nisi iste unde eaque similique eos pariatur tenetur!</p>
						<Button name='Contact' blackBtn={true} />
					</div>
					<div>
						<img src="/images/undraw_security.svg" alt="logo" />
					</div>
				</div>
			</div>
    </div>
  );
};
