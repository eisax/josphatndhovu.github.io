import { FeedbackCard } from "@/components/cards/FeedbackCard";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { SectionTitle } from "@/components/primitives/SectionTitle";
import { testimonials, type TestimonialItem } from "@/data/testimonials";

export function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div>
      <SectionLabel num="07" />
      <SectionTitle>OUR CLIENTS FEEDBACK.</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item: TestimonialItem) => (
          <FeedbackCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
