import ShowcaseWarehouseOne from '../components/ShowcaseWarehouseOne';
import Navbar from '../components/Header';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
    <>
      <Helmet>
        <title>Facility | Buidling 1</title>
        <meta name="description" content="Building 1 Facilities." />
      </Helmet>
      <Navbar />
      <ShowcaseWarehouseOne />
    </>
  );
}