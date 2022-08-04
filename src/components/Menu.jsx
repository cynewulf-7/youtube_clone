import React from 'react';
import styled from 'styled-components';
import Dynamo from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bg};
    height: 100%;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
      }
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div`
`;

const Button = styled.div`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
                <Img src={Dynamo} />
                CynewolfTube
            </Logo>
        </Link>
            <Item>
                <HomeIcon />
                Home
            </Item>
            <Item>
                <ExploreOutlinedIcon />
                Explore
            </Item>
            <Item>
                <SubscriptionsOutlinedIcon />
                Subscriptions
            </Item>
            <Hr />
            <Item>
                <VideoLibraryOutlinedIcon />
                Library
            </Item>
            <Item>
                <HistoryIcon />
                History
            </Item>
            <Hr />
            <Login>
                Sign-in to like videos, comment and subscribe.
                <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                </Button>
                </Link>
            </Login>
            <Hr />
            <Title>BEST OF CYNEWOLFTUBE</Title>
            <Item>
                <LibraryMusicOutlinedIcon />
                Music
            </Item>
            <Item>
                <SportsBasketballOutlinedIcon />
                Sports
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon />
                Gaming
            </Item>
            <Item>
                <MovieOutlinedIcon />
                Movies
            </Item>
            <Item>
                <ArticleOutlinedIcon />
                News
            </Item>
            <Item>
                <LiveTvOutlinedIcon />
                Live
            </Item>
            <Hr />
            <Item>
                <SettingsOutlinedIcon />
                Settings
            </Item>
            <Item>
                <FlagOutlinedIcon />
                Report
            </Item>
            <Item>
                <HelpOutlineIcon />
                Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon />
                {darkMode ? "Light" : "Dark"} Mode
            </Item>
        </Wrapper>
    </Container>
  );
};

export default Menu;