import React from 'react';
import { Drawer, Collapse, Switch } from 'antd';
import { useStateValue } from '../../context/StateProvider';
import {
  OPEN_DRAWER,
  TRANSITION_MODE,
  TRANSITION_LANGUAGE,
} from '../../context/types';
import { ReadOutlined } from '@ant-design/icons';
import './Settings.scss';
import { Select } from '@zeit-ui/react';
const { Panel } = Collapse;
const Settings = () => {
  const [{ isDrawerOpen, isTransition }, dispatch] = useStateValue();
  const onClose = () => {
    dispatch({
      type: OPEN_DRAWER,
      drawer: false,
    });
  };

  const transitionMode = value => {
    dispatch({
      type: TRANSITION_MODE,
      toggleTransition: value,
    });
  };

  const handleLanguage = value => {
    dispatch({
      type: TRANSITION_LANGUAGE,
      selectTransitionLanguage: value,
    });
  };
  return (
    <Drawer
      placement='right'
      closable={false}
      onClose={onClose}
      visible={isDrawerOpen}
      width='380px'
      // getContainer={false}
      // style={{ paddingTop:'50px' }}
    >
      <div className='pt-5 mt-3'>
        <Collapse
          ghost
          accordion
          bordered={false}
          defaultActiveKey={['1']}
          // expandIcon={({ isActive }) => (
          //   <CaretRightOutlined rotate={isActive ? 90 : 0} />
          // )}
          // expandIconPosition='right'
          className='site-collapse-custom-collapse'
        >
          <Panel
            extra={
              <ReadOutlined style={{ color: '#4EB862', fontSize: '25px' }} />
            }
            header='Reading Settings'
            key='1'
            className='site-collapse-custom-panel'
          >
            <div className='d-flex align-items-center ml-4 mb-3'>
              <h5 className='mr-4 mb-0'>Translation Mode</h5>
              <Switch defaultChecked onChange={transitionMode} />
            </div>
            <div className='d-flex align-items-center ml-4 mb-3'>
              <Select
                placeholder='Select Language'
                initialValue='english'
                disabled={!isTransition}
                onChange={handleLanguage}
                style={{ fontSize: '15px' }}
              >
                <Select.Option style={{ fontSize: '15px' }} value='english'>
                  English
                </Select.Option>
                <Select.Option style={{ fontSize: '15px' }} value='bangla'>
                  Bangla
                </Select.Option>
              </Select>
            </div>
            {/* <div className='ml-4 mb-3'>
              <h5 className='mr-4 mb-3'>Select Translation</h5>
              <Select
                placeholder='Select Language'
                initialValue='english'
                disabled={!isTransition}
                style={{ fontSize: '15px' }}
              >
                <Select.Option style={{ fontSize: '15px' }} value='english'>
                  English
                </Select.Option>
                <Select.Option style={{ fontSize: '15px' }} value='bangla'>
                  Bangla
                </Select.Option>
              </Select>
            </div> */}
          </Panel>
          <Panel
            header='Reading Settings'
            key='2'
            className='site-collapse-custom-panel'
          >
            hi
          </Panel>
        </Collapse>
      </div>
    </Drawer>
  );
};

export default Settings;
