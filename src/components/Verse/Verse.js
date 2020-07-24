import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import './Verse.scss';
// import ChapterIcon from '../Chapters/ChapterIcon';
// import { ReactComponent as Bismillah } from '../../assets/images/bismillah.svg';
import Bismillah from '../../assets/images/bismillah-png-32.jpg';

import {
  Button,
  useToasts,
  useClipboard,
  ButtonGroup,
  Dot,
} from '@zeit-ui/react';
import Bookmark from '@zeit-ui/react-icons/bookmark';
// import { Button as AntdBTN } from 'antd';
import Spinner from '../Spinner/Spinner';
import kaaba from '../../assets/images/kaaba.jpg';

const Verse = () => {
  const [, setToast] = useToasts();
  const { copy } = useClipboard();

  const { pathname } = useLocation();
  const getId = pathname.slice(1);
  const [{ chapters, isTransition, transitionLanguage }] = useStateValue();
  const getVerses = chapters.filter(chapter => chapter.id === getId);
  console.log(transitionLanguage);

  return chapters.length === 0 ? (
    <Spinner />
  ) : (
    <div className='container'>
      {getVerses.map(
        ({
          id,
          revelation,
          name,
          verses_count,
          bismillah,
          translated_name,
          ayah,
        }) => (
          <div key={name} className='mt-5'>
            <div className='top-card'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-md-8'>
                  <div className='row justify-content-between align-items-center'>
                    <div className='col-sm-5 col-ms-6'>
                      <img src={kaaba} alt='' className='img-fluid' />
                    </div>
                    <div className='col-sm-6'>
                      <div className='text-center my-5'>
                        <h2 className='text-dark mb-1 surah-name'>{name}</h2>
                        <p className='mb-3 lead'>{translated_name}</p>
                        <div className='d-flex align-items-center justify-content-center'>
                          <h5 className='text-muted'>{revelation}</h5>
                          <Dot style={{ margin: '0 5px 10px 15px' }} />
                          <h5 className='text-muted'>{verses_count} Verses</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {bismillah && (
                    <div className='text-center mt-n5 mb-2'>
                      {/* <Bismillah width='250px' /> */}
                      <img src={Bismillah} alt='' className='img-fluid' />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {ayah.map(item => (
              <div className='border-bottom card-body my-3' key={item.id}>
                <ButtonGroup>
                  <Button
                    size='small'
                    type='secondary'
                    auto
                    onClick={() => {
                      copy(
                        `${item.text} \n${
                          item?.translated_en && item?.translated_en
                        }`
                      );
                      setToast({
                        text: 'Copied the verse! Alhamdulillah',
                        type: 'success',
                      });
                    }}
                  >
                    Copy
                  </Button>
                  <Button type='warning'>Play</Button>
                  <Button disabled icon={<Bookmark />}></Button>
                </ButtonGroup>

                <div className='d-flex justify-content-between align-items-center py-3'>
                  <span className='verse_key'>{item.verse_key}</span>
                  <div>
                    <h4 className='arabic-font' key={item.id}>
                      {item.text}
                    </h4>
                    {isTransition &&
                      item?.translated_en &&
                      transitionLanguage === 'english' && (
                        <p className='text-right text-en'>
                          {item?.translated_en}
                        </p>
                      )}
                    {isTransition &&
                      item?.translated_bn &&
                      transitionLanguage === 'bangla' && (
                        <p className='text-right text-bn'>
                          {item?.translated_bn}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Verse;
