import Container from './Container';
// import SubscribeInput from './SubscribeInput';

const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

export default function HeroHeader() {
  return (
    <div className="py-24 text-center bg-gray-100">
      <Container>
          <img
            src="/logo.svg"
            className="w-24 h-24 mx-auto rounded-full"
            alt="profile"
          />
        <div className="mt-4 text-3xl font-extrabold text-gray-900">
        Analytics Roundtable
        </div>
        <div className="max-w-2xl mx-auto mt-2 text-xl text-gray-500">
          Open Data Community
        </div>
      </Container>
    </div>
  );
}
