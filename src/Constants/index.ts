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
export const ResourcesFiles = [
  {
    No: '01',
    FileName: 'Best practices in leading remote teams',
    UplodedDate: '22/7/2023',
    Size: '100 KB',
    AccessType: 'View',
    DocType: PDFsLogo,
  },
  {
    No: '01',
    FileName: 'Result access email templates',
    UplodedDate: '02/5/2023',
    Size: '2.00 MB',
    AccessType: 'View',
    DocType: PDFsLogo,
  },
  {
    No: '02',
    FileName: 'Time sheet format',
    UplodedDate: '22/7/2023',
    Size: '100 KB',
    AccessType: 'View',
    DocType: SheetsLogo,
  },
  {
    No: '02',
    FileName: 'Company Policies',
    UplodedDate: '22/7/2023',
    Size: '100 KB',
    AccessType: 'View',
    DocType: DocsLogo,
  },
  {
    No: '03',
    FileName: 'HR Policy',
    UplodedDate: '22/7/2023',
    Size: '100 KB',
    AccessType: 'View',
    DocType: VideoLogo,
  },
];
