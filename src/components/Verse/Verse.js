import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import './Verse.scss';
// import ChapterIcon from '../Chapters/ChapterIcon';
import { ReactComponent as Bismillah } from '../../assets/images/bismillah.svg';
import {
  Button,
  useToasts,
  useClipboard,
  ButtonGroup,
  Dot,
} from '@zeit-ui/react';
import Bookmark from '@zeit-ui/react-icons/bookmark';
import { Button as AntdBTN } from 'antd';
import Spinner from '../Spinner/Spinner';

const Verse = () => {
  const [toast, setToast] = useToasts();

  const { copy } = useClipboard();

  const { pathname } = useLocation();
  const getId = pathname.slice(1);
  const [{ chapters }] = useStateValue();
  const getVerses = chapters.filter(chapter => chapter.id === getId);

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
          <div key={name}>
            <div className='row justify-content-center flex-column align-items-center my-5'>
              <h2 className='text-dark mb-1'>{name}</h2>
              <h6 className='text-muted mb-1'>{translated_name}</h6>
              <div className='d-flex align-items-center justify-content-center'>
                <h5 className='text-muted text-uppercase'>{revelation}</h5>
                <Dot style={{ margin: '0 15px 10px 15px' }} />
                <h5 className='text-muted text-uppercase'>{verses_count} Verses</h5>
              </div>
              {bismillah && (
                <div>
                  <Bismillah width='250px' />
                </div>
              )}
            </div>

            {ayah.map(item => (
              <div className='border-bottom card-body my-3' key={item.id}>
                <ButtonGroup>
                  <Button
                    size='small'
                    type='secondary'
                    auto
                    onClick={() => {
                      copy(item.text);
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
                  <p className='verse_key'>{item.verse_key}</p>
                  <h4 className='arabic-font' key={item.id}>
                    {item.text}
                  </h4>
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
