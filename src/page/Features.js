import Navbar from '../components/Header';
import WarehouseImages from '../components/WarehouseImages';
import { Helmet } from 'react-helmet';

export default function Features() {
    return (
    <>
      <Helmet>
        <title>Features</title>
        <meta name="description" content="Features of M. Ignacio Warehouse" />
      </Helmet>
      <Navbar />
      <WarehouseImages />
    </>
  );
}