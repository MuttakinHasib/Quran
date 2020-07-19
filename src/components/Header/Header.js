import React from 'react';
import { Select } from 'antd';
import logo from '../../assets/images/quran.png';
import SelectMode from '../Theme/SelectMode';
import './Header.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
const { Option } = Select;
const Header = ({ data }) => {
  const [{ chapters }] = useStateValue();
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
              loading='lazy'
            />
            <span className='font-weight-bold'>&nbsp;Al Quran</span>
          </Link>
          <div className='navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Select
                  defaultValue={pathname === '/' ? '/' : '/'}
                  autoFocus={true}
                  showSearch
                  style={{ width: 200 }}
                  placeholder='Search surah...'
                  optionFilterProp='children'
                  onChange={val => history.push(val)}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value='/'>Home</Option>

                  {chapters.map(({ id, name }) => (
                    <Option key={name} value={`/${id}`}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </li>
              <li className='nav-item ml-sm-2 mt-2 mt-sm-0'>
                <SelectMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
