import Landing from '../components/Landing';
import Navbar from '../components/Header';
import ShowcaseWarehouseOne from '../components/ShowcaseWarehouseOne';
import ShowcaseWarehouseTwo from '../components/ShowcaseWarehouseTwo';
import ShowcaseWarehouseThree from '../components/ShowcaseWarehouseThree';
import WarehouseImages from '../components/WarehouseImages';
import Map from '../components/Map';
import Form from '../components/Form';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Come and Check M. Ignacio Warehouse" />
      </Helmet>

      <Navbar />
      <Landing />
      <ShowcaseWarehouseOne />
      <ShowcaseWarehouseTwo />
      <ShowcaseWarehouseThree />
      <Map />
      <WarehouseImages />
      <Form />

    </>
  );
}