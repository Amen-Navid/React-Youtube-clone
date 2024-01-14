import React from "react";
import { GoHome, GoHistory } from "react-icons/go";
import { SiYoutubeshorts, SiLinkfire, SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import {
  IoCopyOutline,
  IoMusicalNoteOutline,
  IoNewspaper,
  IoTrophyOutline, IoLogoYoutube, IoSettingsOutline
} from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdOutlineOutlinedFlag, MdOutlineHelp, MdOutlineSubscriptions, MdFeedback  } from "react-icons/md";




export const menuItems = [
  { text: 'Home', icon: <GoHome />, path:'/' },
  { text: 'Shorts', icon: <SiYoutubeshorts /> , path:'/shorts' },
  { text: 'Subscriptions', icon: <MdOutlineSubscriptions />, path:'/*' },
  { text: 'You', icon: <IoCopyOutline />, path:'/*' },
  { text: 'History', icon: <GoHistory />, path:'/*' },
  { text: 'Trending', icon: <SiLinkfire />, path:'/*' },
  { text: 'Music', icon: <IoMusicalNoteOutline /> , path:'/*'},
  { text: 'Gaming', icon: <SiYoutubegaming /> , path:'/*'},
  { text: 'News', icon: <IoNewspaper />, path:'/*' },
  { text: 'Sports', icon: <IoTrophyOutline />, path:'/*' },
  { text: 'Browse Channels', icon: <FaPlusCircle /> , path:'/channels'},
  { text: 'YouTube Premium', icon: <IoLogoYoutube />, path:'/*' },
  { text: 'YouTube Music', icon: <SiYoutubemusic /> , path:'/*'},
  { text: 'YouTube Kids', icon: <TbBrandYoutubeKids /> , path:'/*'},
  { text: 'Settings', icon: <IoSettingsOutline />, path:'/*' },
  { text: 'Report history', icon: <MdOutlineOutlinedFlag />, path:'/*' },
  { text: 'Help', icon: <MdOutlineHelp /> , path:'/*'},
  { text: 'Send feedback', icon: <MdFeedback /> , path:'/*'},
];

export const footerItems = [
  'About',
  'Press',
  'Copyright',
  'Contact us',
  'Creators',
  'Advertise',
  'Developers',
];

export const footerItems2 = ['Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features'];

