import { FaSquareGithub } from 'react-icons/fa6';
import {
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiDownload,
  FiFacebook,
  FiFile,
  FiFileMinus,
  FiFilePlus,
  FiFileText,
  FiFolder,
  FiFolderMinus,
  FiFolderPlus,
  FiGithub,
  FiLinkedin,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiRewind,
  FiSettings,
  FiXSquare,
} from 'react-icons/fi';

import CRWizard from '@/public/CRWIZARD_logo.svg';
import CRWizardNoBg from '@/public/CRWIZARD_NO_BG_logo.svg';
import Wand from '@/public/wand.svg';

export const Icons = {
  logo: CRWizard,
  logoNoBg: CRWizardNoBg,
  hamburgerMenu: FiMenu,
  cross: FiXSquare,
  repository: FiDatabase,
  code: FiCode,
  settings: FiSettings,
  history: FiRewind,
  githubLogo: FaSquareGithub,
  github: FiGithub,
  facebook: FiFacebook,
  linkedin: FiLinkedin,
  arrowDown: FiChevronDown,
  logout: FiLogOut,
  login: FiLogIn,
  wand: Wand,
  folder: {
    open: FiFolder,
    minus: FiFolderMinus,
    plus: FiFolderPlus,
  },
  file: {
    open: FiFile,
    minus: FiFileMinus,
    plus: FiFilePlus,
    text: FiFileText,
  },
  download: FiDownload,
};
