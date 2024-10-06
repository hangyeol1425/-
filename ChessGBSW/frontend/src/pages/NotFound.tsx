import styled from "styled-components";
import Message404Png from '../assets/image/404.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NotFoundContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 300px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 1px 3px rgba(0, 0, 0, 0.08);
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Message404 = styled.h3`
  width: 250px;
  padding: 20px 20px;
`

const NotFoundMessage = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
  color: #1f1f1f;
`

const ReturnHome = styled.div`
  margin-top: 10px;
  color: #1f1f1f;
  padding: 5px 10px;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  z-index: 12012;
`

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <>
            <NotFoundContainer>
                <Message404><img width={'100%'} height={'auto'} src={Message404Png} /></Message404>
                <NotFoundMessage>{t('404')}</NotFoundMessage>
                <Link to={'/'}>
                    <ReturnHome>Return Home</ReturnHome>
                </Link>
            </NotFoundContainer>
        </>
    )
}

export default NotFound;