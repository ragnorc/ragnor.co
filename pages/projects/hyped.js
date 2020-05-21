import Layout from "components/layout";
import Link from "next/link";
import Image from "components/image";
import { Masonry } from "masonic";

export default () => {
  const photos = [
    "hyped/hyped-group-photo.jpeg",
    "hyped/software-team.jpg",
    "hyped/hyped-elon-musk.jpg",
    "hyped/isabella-ragnor-working.jpg",
    "hyped/spacex-tube-interior.jpg",
    "hyped/spacex-falcon.jpg",
    "hyped/spacex-tube.jpg",
  ];

  return (
    <Layout>
      <div className="flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-20">
          <Image
            style={{ boxShadow: "0px 0px 45px 10px rgba(45, 56, 104, 0.5" }}
            path="hyped/thumbnail.jpeg"
            className="rounded-lg w-1/4 mr-20 mb-4 hidden md:block xl:block xxl:block"
          ></Image>

          <div>
            <h1 className="text-5xl font-bold mb-8">Hyped</h1>
            <p>
              <strong>Period:</strong> 2017 - 2018
            </p>
            <p>
              <strong>Collaborators:</strong> Hyped - Edinburgh Hyperloop Team
            </p>
            <p>
              <strong>Location:</strong> Los Angeles, CA & Edinburgh, UK
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                target="_blank"
                className="underline"
                href="https://hyp-ed.com"
              >
                hyp-ed.com
              </a>
            </p>

            <div className="flex mt-10 items-center">
              <Image className="w-1/12 h-auto mr-5" path="logos/hyped.png" />
              <Image className="w-2/5 h-auto" path="logos/spacex.svg" />
            </div>
          </div>
        </div>
        <p>
          Hyperloop is Elon Musk’s concept for the future of mass
          transportation. It offers a new means of transporting people and goods
          quickly, safely, efficiently, and with minimised environmental impact.
        </p>
        <p>
          The Hyperloop uses electric propulsion to accelerate a passenger or
          cargo pod through a low-pressure tube. The autonomous pod employs
          magnetic levitation to eliminate friction. The Hyperloop would allow
          travel times considerably shorter than current rail or air travel
          times. Carbon emissions, noise, delays, journey time, weather concerns
          and pilot error are ultimately eliminated.
        </p>
        <p>
          In 2017, I joined HYPED, a team of over 100+ students across academic
          disciplines at the University of Edinburgh dedicated to accelerating
          the development of Hyperloop. HYPED is advancing both technical and
          commercial development of Hyperloop, having seen success in two
          international competitions.
        </p>
        <p>
          For the SpaceX Competition 2018, we spent a year designing and
          engineering our very own Hyperloop Pod. Our pod made use of passive
          magnetic levitation, Halbach wheel propulsion and highly sophisticated
          software for navigation and control systems.
          <br />
          After months of hard work, we got selected for the finals of the
          SpaceX Competition in Hawthorne, California.
          <br />
          The final week was an extremely challenging but exciting experience.
          Engineers from SpaceX walked us through a variety of hard technical
          tests and challenges that were able to manage very successfully. Due
          to a malfunction of our CAN-BUS tranceiver at the very end, we were
          not able to make it to the last run but we were very happy to have
          reached the 6th place among hundreds of universities.
        </p>

        <Masonry
          className="mt-20"
          columnWidth={300}
          columnGutter={20}
          items={photos.map((url) => {
            return { url };
          })}
          render={({ index, data, width }) => (
            <Image path={data.url} className="rounded-lg"></Image>
          )}
        ></Masonry>
      </div>
    </Layout>
  );
};
