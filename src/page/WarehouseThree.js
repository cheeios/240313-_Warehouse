import ShowcaseWarehouseThree from '../components/ShowcaseWarehouseThree';
import Navbar from '../components/Header';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
    <>
      <Helmet>
        <title>M. Igancio | Buidling 2</title>
        <meta name="description" content="Building 2 Facilities." />
      </Helmet>

      <Navbar />
      <ShowcaseWarehouseThree />
    </>
  );
}