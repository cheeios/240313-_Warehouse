import ShowcaseWarehouseThree from '../components/ShowcaseWarehouseThree';
import Navbar from '../components/Header';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
    <>
      <Helmet>
        <title>Facility | Buidling 3</title>
        <meta name="description" content="Building 3 Facilities." />
      </Helmet>

      <Navbar />
      <ShowcaseWarehouseThree />
    </>
  );
}