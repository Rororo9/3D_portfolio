import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Привет, Я
        <span className='font-semibold mx-2 text-white'>Вадим</span>
        👋
        <br />
        Студент веб-разработчик из России
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Занимался разработкой веб-сайтов <br /> и приобрел много навыков на своем пути
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Узнать больше
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
            За годы работы привел к успеху множество проектов. <br /> Вам стало интересно?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Посмотрите на мое портфолио.
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
          Нужен готовый проект или ищете программиста-разработчика? <br/> Я готов вам помочь
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Давайте поговорим
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
