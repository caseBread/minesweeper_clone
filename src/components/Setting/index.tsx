import { useMemo } from 'react';
import SettingView from './view';

const Setting = () => {
  const SettingViewProps = useMemo(() => {
    return {
      mineNumber: 10,
      face: '😀',
      timer: 90,
    };
  }, []);

  return <SettingView {...SettingViewProps} />;
};

export default Setting;
