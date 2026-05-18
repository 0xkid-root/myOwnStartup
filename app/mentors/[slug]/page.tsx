import { Navigation } from '@/components/Navigation';
import { MentorProfile } from '@/components/MentorProfile';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Mentor Profile - piecodingschools',
  description: 'Meet one of our experienced mentors.',
};

export default async function MentorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <Navigation />
      <MentorProfile slug={slug} />
      <Footer />
    </>
  );
}
