import Dashbord from '../Components/Sidebar/Images/Dashboard.svg';
import Resources from '../Components/Sidebar/Images/Resources.svg';
import Settings from '../Components/Sidebar/Images/Settings.svg';
import DocsLogo from '../Components/ResourceModules/Image/DocsLogo.svg';
import PDFsLogo from '../Components/ResourceModules/Image/PDFsLogo.svg';
import SheetsLogo from '../Components/ResourceModules/Image/XlsLogo.svg';
import AudioLogo from '../Components/ResourceModules/Image/AudiosLogo.svg';
import VideoLogo from '../Components/ResourceModules/Image/VideosLogo.svg';

export const Json = [
  { Image: Dashbord, Title: 'Dashboard' },
  { Image: Resources, Title: 'Resources' },
  { Image: Settings, Title: 'Settings' },
];
export const Userdata = [{ UserName: 'Alex Daubert', Member: 'Team Member' }];
export const ResourcesData = [
  { Image: DocsLogo, ResourcesType: 'Docs', TotalAvilable: '12' },
  { Image: SheetsLogo, ResourcesType: 'Sheets', TotalAvilable: '34' },
  { Image: PDFsLogo, ResourcesType: 'PDFs', TotalAvilable: '18' },
  { Image: AudioLogo, ResourcesType: 'Audios', TotalAvilable: '09' },
  { Image: VideoLogo, ResourcesType: 'Videos', TotalAvilable: '7' },
];
