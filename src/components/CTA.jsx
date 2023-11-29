import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
          Есть проект на примете? <br className='sm:block hidden' />
          Давайте создадим что-нибудь вместе!
      </p>
      <Link to='/contact' className='btn'>
        Контакты
      </Link>
    </section>
  );
};

export default CTA;
