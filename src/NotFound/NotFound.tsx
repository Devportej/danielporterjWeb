import Card from '../components/Card/Card';
import './NotFound.css';

const NotFound = () => {
    return (
      <div className="notFound">
        <Card>
          <h2>Nothing to see here!</h2>
          <img
            src="/error_img.webp"
            alt="Error image, a robot looking apologetic over a spilled can of paint."
            loading="lazy"
            fetchPriority="low"
            height={"1024px"}
          />
        </Card>
      </div>
    );
}

export default NotFound;