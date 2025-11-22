import NLink from './NLink';

export default {
  title: 'Components/NLink',
  component: NLink,
};

export const External = () => (
  <div>
    <NLink
      location="https://example.com"
      text="External Link"
      external={true}
    />
  </div>
);

export const Internal = () => (
  <div>
    {/* Provide a simple nav function to simulate navigation */}
    <NLink location="/test" text="Internal Link" nav={() => undefined} />
  </div>
);
