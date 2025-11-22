import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = () => (
  <div style={{ width: 520 }}>
    <Card>
      <h3>Card Title</h3>
      <p>This is a card used to hold a short summary or content block.</p>
    </Card>
  </div>
);
