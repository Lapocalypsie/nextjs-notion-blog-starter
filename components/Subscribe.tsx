import Container from 'components/base/Container';
import SubscribeInput from './SubscribeInput';

export default function Subscribe() {
  return (
    <div className="py-24 text-center bg-gray-100">
      <Container>
        <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Subscribe to the newsletter
        </div>
        <div className="max-w-2xl mx-auto my-4 text-lg text-gray-500">
          Get emails from me about web development, tech, and early access to new
          articles.
        </div>
        <SubscribeInput />
      </Container>
    </div>
  );
}
