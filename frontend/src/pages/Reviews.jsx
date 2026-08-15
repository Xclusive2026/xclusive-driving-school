import { FacebookLogo, Star, Quotes } from "@phosphor-icons/react";
import { BRAND } from "../data";
import { Reveal } from "../components/site/Reveal";
import { BookButton } from "../components/site/Buttons";

export default function Reviews() {
  return (
    <div className="pt-[74px]">
      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <Reveal>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={30} weight="fill" className="text-[#E4141B]" />
              ))}
            </div>
            <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Reviews</span>
            <h1 className="font-head font-extrabold text-4xl md:text-5xl mt-3">Don't just take our word for it</h1>
            <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-5">
              We're proud of the relationships we build with our learners. See what our students have to say about their experience with Xclusive Driving School over on our Facebook page.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative bg-[#FBF7F4] border border-[#ECE6E2] rounded-[28px] p-10 md:p-14 mt-12 text-left">
              <Quotes size={48} weight="fill" className="text-[#E4141B]/20 absolute top-8 right-10" />
              <p className="font-head font-semibold text-xl md:text-2xl leading-relaxed text-[#17171A]">
                Our reviews are shared by real learners on Facebook. Head over to read genuine feedback from people we've helped pass their test across Sheffield &amp; Rotherham.
              </p>
              <div className="mt-8">
                <a
                  href={BRAND.facebookReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="reviews-fb-btn"
                  className="inline-flex items-center gap-3 rounded-full bg-[#1877F2] text-white px-7 py-4 font-head font-semibold hover:brightness-95 transition"
                >
                  <FacebookLogo size={22} weight="fill" /> Read Our Facebook Reviews
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-14">
              <p className="font-body text-[#4B4B52] mb-5">Ready to start your own journey?</p>
              <BookButton className="px-7 py-4 text-base" testid="reviews-book" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
