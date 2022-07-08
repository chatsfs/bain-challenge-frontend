import CommonLayout from '@components/layouts/CommonLayout';
import HomeScene from '@scenes/Home';
import { ReactNode } from 'react';

const IndexPage = () => {
  return <HomeScene />;
};

IndexPage.getLayout = (page: ReactNode) => {
  return <CommonLayout>{page}</CommonLayout>;
};

export default IndexPage;
