import React from 'react';

// importing Components
import Navbar from '../Components/Layout/dashboard/Navbar';
import Search from '../Components/Layout/dashboard/Search';

import Styled from 'styled-components';

const SearchPage = () => {
  return (
    <div className=''>
      <Navbar />
      <SearchContainer>
        <Search />
      </SearchContainer>
    </div>
  );
};
const SearchContainer = Styled.div`
margin: auto;
width: 90%;
display: flex;
justify-content:center;

`;
export default SearchPage;
