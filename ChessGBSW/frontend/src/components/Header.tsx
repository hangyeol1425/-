import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { To, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Icons } from "./importImage";

interface NavDetail {
  title: string;
  link: string;
}

interface NavItem {
  title: string;
  icon?: string;
  iconPadding?: string,
  link?: string;
  detail?: NavDetail[];
}

interface IconProps {
  iconPadding?: string;
}

const Header = () => {
  const navigate = useNavigate();
  const [openDetail, setOpenDetail] = useState<string | null>(null);
  const { t } = useTranslation();

  const navItems = useMemo(() => [
    { title: `${t('home')}`, icon: `${Icons.HomeIcon}`, iconPadding: '7px 6px 7px 7px', link: "/" },
    {
      title: `${t('play')}`,
      icon: `${Icons.PlayIcon}`,
      iconPadding: '5.7px 4.7px 5.7px 5.7px',
      detail: [
        { title: `${t('play')}`, link: "/play" },
        { title: `${t('play_with_bot')}`, link: "/play/bot" },
      ],
    },
    {
      title: `${t('puzzle')}`,
      icon: `${Icons.PuzzleIcon}`,
      iconPadding: '5px 3.5px 5px 0px',
      detail: [
        { title: `${t('puzzle')}`, link: "미정" },
        { title: `${t('puzzle_rush')}`, link: "미정" },
      ],
    },
    { title: `${t('setting')}`, icon: `${Icons.SettingIcon}`, iconPadding: '5.8px', link: "/setting" },
  ], []);

  const handleTitleClick = useCallback((item: NavItem) => {
    if (item.detail) {
      setOpenDetail(openDetail === item.title ? null : item.title);
    } else {
      setOpenDetail(null);
      navigate(item.link || '/');
    }
  }, [openDetail, navigate]);

  const handleDetailClick = useCallback((link: To) => {
    setOpenDetail(null);
    navigate(link);
  }, [navigate]);

  return (
    <>
      <HeaderStyleV1>
        <HeaderContainerV1>
          <HeaderLogoV1 onClick={() => navigate('/')}>
            <span>Chess.oline</span>
            <span>C</span>
          </HeaderLogoV1>
          <TitleList>
            {navItems.map((item, index) => (
              <TitleItem key={index} onClick={() => handleTitleClick(item)}>
                <h3>{item.title}</h3>
                {item.detail && openDetail === item.title && (
                  <DetailList>
                    {item.detail.map((detailItem, detailIndex) => (
                      <DetailItem
                        key={detailIndex}
                        onClick={() => handleDetailClick(detailItem.link)}
                      >
                        {detailItem.title}
                      </DetailItem>
                    ))}
                  </DetailList>
                )}
              </TitleItem>
            ))}
          </TitleList>
          <TitleIconList>
            {navItems.map((item, index) => (
              <TitleIconItem>
                <Icon src={item.icon} iconPadding={item.iconPadding}></Icon>
                {item.detail && openDetail === item.title && (
                  <DetaiIconlList>
                    {item.detail.map((detailItem, detailIndex) => (
                      <DetailIconItem
                        key={detailIndex}
                        onClick={() => handleDetailClick(detailItem.link)}
                      >
                        {detailItem.title}
                      </DetailIconItem>
                    ))}
                  </DetaiIconlList>
                )}
              </TitleIconItem>
            ))}
          </TitleIconList>
        </HeaderContainerV1>
      </HeaderStyleV1>

      <ShowWidth960>
        <HeaderStyleV2>
          <HambergerCheckBox type="checkbox" id="hamberger" />
          <Hamberger htmlFor="hamberger">
            <HambergerLine />
            <HambergerLine />
            <HambergerLine />
          </Hamberger>
          <HeaderLogoV2 onClick={() => navigate('/')}>Chess.oline</HeaderLogoV2>
          <Overlay className="nav" htmlFor="hamberger" />
          <NavContainer className="nav">
            <NavTitle>
              <CloseButton htmlFor="hamberger">
                <span />
                <span />
              </CloseButton>
              <TitleList>
                {navItems.map((item, index) => (
                  <TitleItem key={index} onClick={() => handleTitleClick(item)}>
                    <h3>{item.title}</h3>
                    {item.detail && openDetail === item.title && (
                      <DetailList>
                        {item.detail.map((detailItem, detailIndex) => (
                          <DetailItem
                            key={detailIndex}
                            onClick={() => handleDetailClick(detailItem.link)}
                          >
                            {detailItem.title}
                          </DetailItem>
                        ))}
                      </DetailList>
                    )}
                  </TitleItem>
                ))}
              </TitleList>
            </NavTitle>
          </NavContainer>
        </HeaderStyleV2>
      </ShowWidth960>
    </>
  );
};

export default React.memo(Header);

const HeaderStyleV1 = styled.div`
  position: fixed;
  width: 180px;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 1px 3px rgba(0, 0, 0, 0.08);

  @media (max-width: 1249px) {
    width: 50px;
    overflow: hidden;
  }

  @media (max-width: 959px) {
    display: none;
  }
`;

const HeaderContainerV1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 20px;

  @media (max-width: 1249px) {
    align-items: center;
    padding: 10px 0;
  }

  @media (max-width: 959px) {
    display: none;
  }
`;

const HeaderLogoV1 = styled.div`
  cursor: pointer;
  letter-spacing: -0.05rem;
  text-align: center;

  & > span:nth-child(1) {
    font-weight: 800;
    font-size: 1.5rem;
    background: linear-gradient(45deg, #a7c7e7, #d4a5ed, #b2dffc, #e8cfff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & > span:nth-child(2) {
    font-weight: 800;
    font-size: 1.7rem;
    background: linear-gradient(45deg, #a7c7e7, #d4a5ed, #b2dffc, #e8cfff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: none;
  }

  @media (max-width: 1249px) {
    & > span:nth-child(1) {
      display: none;
    }

    & > span:nth-child(2) {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      color: white;
    }

    & > span:nth-child(2):hover {
      cursor: pointer;
      -webkit-background-clip: border-box;
      background-clip: border-box;
      -webkit-text-fill-color: inherit;
    }

    @media (max-width: 959px) {
      display: none;
    }
  }
`;

const ShowWidth960 = styled.div`
  display: none;
  @media (max-width: 959px) {
    display: block;
  }
`;

const HeaderStyleV2 = styled.div`
  position: absolute;
  top:0;
  left:0;
  z-index: 1000;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
  width:100%;
  background: #ffffff;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 1px 3px rgba(0, 0, 0, 0.08);
  height: 40px;
`;

const Hamberger = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const HambergerLine = styled.div`
  width: 24px;
  height: 4px;
  background: #fff;
  border: 1px solid #1f1f1f;
  border-radius: 50px;
`;

const HeaderLogoV2 = styled.div`
  cursor: pointer;
  letter-spacing: -0.05rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 10px;
  background: linear-gradient(45deg, #a7c7e7, #d4a5ed, #b2dffc, #e8cfff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HambergerCheckBox = styled.input`
  display: none;

  &:checked ~ .nav {
    display: block;
  }
`;

const Overlay = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.2);
  display: none;
`

const NavContainer = styled.div`
  display: none;
`;

const CloseButton = styled.label`
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & span {
    border: 1px solid #1f1f1f;
    width: 24px;
    height: 5px;
    border-radius: 50px;
  }

  & span:nth-child(1) {
    position: absolute;
    transform: rotate(45deg);
  }

  & span:nth-child(2) {
    position: absolute;
    transform: rotate(-45deg);
  }
`;

const NavTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  width: 180px;
  height: 100vh;
  background: #fff;
  z-index: 1002;
`;

const TitleList = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  z-index: 1002;
  gap: 5px;

  @media (max-width: 1249px) {
    display: none;
  }

  @media (max-width: 959px) {
    margin-top: 30px;
    display: flex;
  }
`;

const TitleItem = styled.div`
  color: #1f1f1f;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #f6f6f6;
  }
`;

const DetailList = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1001;
`;

const DetailItem = styled.div`
  color: #1f1f1f;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  z-index: 1001;

  &:hover {
    background: #fff;
  }
`;

const TitleIconList = styled.div`
  margin-top: 5px;
  display:none;
  @media (max-width: 1249px) {
    display: block;
  }
`

const TitleIconItem = styled.div`
  display:none;
  @media (max-width: 1249px) {
    display: block;
  }
`

const Icon = styled.img<IconProps>`
  width: 35px;
  height:35px;
  padding: ${(props) => props.iconPadding || '5px'};;
  border-radius: 5px;

  &:hover {
    background: #f6f6f6;
  }
`;

const DetaiIconlList = styled.div`
  
`