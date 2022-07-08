import CommonLayout from '@components/layouts/CommonLayout';
import HistoryScene from '@scenes/History';
import { ReactNode } from 'react';

const HistoryPage = () => <HistoryScene />;

HistoryPage.getLayout = (page: ReactNode) => {
  return <CommonLayout>{page}</CommonLayout>;
};

export default HistoryPage;
