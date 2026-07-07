import Section from "../common/Section";
import Heading from "../common/Heading";
import GlassCard from "../common/GlassCard";

export default function About() {
  return (
    <Section id="about">
      <Heading
        subtitle="WHO WE ARE"
        title="Building Trust Through Quality, Security & Excellence"
      />

      <GlassCard className="mt-10">
        <div className="space-y-6 text-gray-300 leading-8 text-lg">
          <p>
            Kgoto Solutions Group has been delivering premium security,
            construction, automation, and technology solutions since 2019.
            We are committed to providing innovative, reliable, and
            cost-effective services that empower businesses, organizations,
            and communities.
          </p>

          <p>
            Our experienced team combines industry expertise with modern
            technology to deliver solutions tailored to each client's needs.
            Whether it's security systems, software development, networking,
            automation, or infrastructure projects, we focus on quality,
            professionalism, and customer satisfaction.
          </p>

          <p>
            At Kgoto Solutions Group, our mission is to build lasting
            partnerships by delivering excellence, maintaining integrity,
            and exceeding expectations on every project.
          </p>
        </div>
      </GlassCard>
    </Section>
  );
}