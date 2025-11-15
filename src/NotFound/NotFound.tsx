import Card from '../components/Card/Card';
import './NotFound.css';
import Image from '../components/Image/Image';

const NotFound = () => {
  return (
    <div className="notFound">
      <Card>
        <h2>Nothing to see here!</h2>
        <Image
          src="/error_img.webp"
          alt="Error image, a robot looking apologetic over a spilled can of paint."
          loading="lazy"
          width={600}
          height={600}
        />
      </Card>
    </div>
  );
};

export default NotFound;
