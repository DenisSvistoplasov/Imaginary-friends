import { Route, Routes } from 'react-router-dom';
import styles from './Content.module.scss';
import { Home } from '../Home/Home';
import { Paths } from '../../constants/paths';
import { Settings } from '../Settings/Settings';
import { Friends } from '../Friends/Friends';

interface IContentProps {
}

export function Content({}: IContentProps) {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path={Paths.home} Component={Home} />
        <Route path={Paths.friends} Component={Friends} />
      </Routes>
    </div>
  );
}

// let str = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
// <path d="M18.7069 7.79289C19.0974 8.18342 19.0974 8.81658 18.7069 9.20711L15.914 12L18.7069 14.7929C19.0974 15.1834 19.0974 15.8166 18.7069 16.2071C18.3163 16.5976 17.6832 16.5976 17.2926 16.2071L14.4998 13.4142L11.7069 16.2071C11.3163 16.5976 10.6832 16.5976 10.2926 16.2071C9.90212 15.8166 9.90212 15.1834 10.2926 14.7929L13.0855 12L10.2926 9.20711C9.90212 8.81658 9.90212 8.18342 10.2926 7.79289C10.6832 7.40237 11.3163 7.40237 11.7069 7.79289L14.4998 10.5858L17.2926 7.79289C17.6832 7.40237 18.3163 7.40237 18.7069 7.79289Z" fill="#000000"/>
// </svg>
// `;
// function conv(str: string) {
//   const ds = [...str.matchAll(/d=['"]([^'"]+z?)['"]/gi)].map(d => d[1].replaceAll(/(\d\.\d)\d+/g, '$1'));

//   const res = str.replaceAll(/d=['"]([^'"]+z?)['"]/gi, (_, d: string) => {
//     const dots = d.match(/[a-z][^a-z]+/gi) || [];     // ['M18.7069 7.79289'
//     const mid = (dots.length + 1) / 2 + .5;
//     const half = dots?.slice(1, mid);
//     const rest = dots?.slice(mid);
//     const newDs = half.map((dot, i) => {
//       const ns1 = dot.match(/\d+\.?\d*/g);              // ['18'
//       const ns2 = rest[i]?.match(/\d+\.?\d*/g) || [];   // ['20'
//       const newNs = ns1?.map((n1, j) => +((+n1 + +(ns2[j] || n1)) / 2).toFixed(1)) || [];
//       return newNs.join(' ');                                     // ['19 34'
//     });
//     const newHalf = half.map((d, i) => d[0] + newDs[i]);
//     const res = dots[0] + newHalf.join('') + 'z';
//     return 'd="'+res+'"';
//   });
//     console.log('res: ', res);

// }
// conv(str);