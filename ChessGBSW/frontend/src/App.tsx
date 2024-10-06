import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const PlayLoad = styled.div`
  width: 100%;
  height: 100%;

  & .inner {
    margin-left: 180px;
    width: calc(100% - 180px);
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  @media (max-width: 1249px) {
    & .inner {
      margin-left: 50px;
      width: calc(100% - 50px);
    }
  }

  @media (max-width: 959px) {
    & .inner {
      margin-left: 0;
      width: 100%;
    }
  }
`

const App = () => {
  return (
    <>
      <Header />
      <PlayLoad>
        <div className='inner'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </PlayLoad>
    </>
  );
}

export default App;
