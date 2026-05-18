import { Navigation } from '@/components/Navigation';
import { MentorsPage } from '@/components/MentorsPage';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Mentors - piecodingschools',
  description: 'Meet our experienced mentors from top tech companies.',
};

export default function MentorsPageRoute() {
  return (
    <>
      <Navigation />
      <MentorsPage />
      <Footer />
    </>
  );
}
