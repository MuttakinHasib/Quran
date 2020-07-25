import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

import { Button, useToasts, useClipboard, ButtonGroup } from '@zeit-ui/react';
import Bookmark from '@zeit-ui/react-icons/bookmark';

import Spinner from '../Spinner/Spinner';
import Transition from '../Transition/Transition';
import VerseInfoCard from '../Cards/VerseInfoCard';
import { Collapse } from 'react-bootstrap';
import './Verse.scss';

const Verse = () => {
  const [, setToast] = useToasts();
  const { copy } = useClipboard();
  const [showTafseer, setShowTafseer] = useState(false);
  const { pathname } = useLocation();
  const getId = pathname.slice(1);
  const [{ chapters, arabicFontSize, selectedTransition }] = useStateValue();

  const getVerses = chapters.filter(chapter => chapter.id === getId);

  return chapters.length === 0 ? (
    <Spinner />
  ) : (
    <div className='container'>
      {getVerses.map(verse => {
        const { name } = verse;
        return (
          <div key={name} className='mt-5'>
            <VerseInfoCard item={verse} />
            {verse?.ayahs.map(ayah => (
              <div className='border-bottom card-body my-3' key={ayah?.id}>
                <div className='d-flex align-items-center'>
                  <ButtonGroup type='default'>
                    <Button
                      size='small'
                      type='secondary'
                      auto
                      onClick={() => {
                        copy(
                          `${name} ${ayah.verse_key}\n
                        ${ayah.text}
                        ${ayah?.translated_en && ayah.translated_en}
                        ${
                          ayah?.transition_bn[selectedTransition] &&
                          ayah.transition_bn[selectedTransition]
                        }
                        `
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
                    <Button disabled icon={<Bookmark />} />
                    {/* ************************ Problem Here************************************* */}
                    <Button
                      key={ayah}
                      type='success'
                      onClick={() => setShowTafseer(prev => !prev)}
                    >
                      See Tafseer
                    </Button>
                    {/* ************************ Problem Here************************************* */}
                  </ButtonGroup>
                </div>
                <div className='d-flex justify-content-between align-items-center py-3'>
                  <span className='verse_key'>{ayah?.verse_key}</span>
                  <div>
                    <h4
                      className='arabic-font'
                      style={{ fontSize: `${arabicFontSize}px` }}
                      key={ayah?.id}
                    >
                      {ayah?.text}
                    </h4>
                    <Transition item={ayah} />
                  </div>
                </div>
                {/* ************************ Problem Here************************************* */}
                <Collapse in={showTafseer}>
                  <div className='mt-3'>
                    <p className='text-bn'>{ayah?.tafseer_bn.ahsanul_bayan}</p>
                  </div>
                </Collapse>
                {/* ************************ Problem Here************************************* */}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Verse;
