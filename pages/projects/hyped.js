import Layout from "components/Layout";
import Link from "next/link";
import Image from "next/image";
import { Masonry } from "masonic";

const Hyped = () => {
  const photos = [
    "hyped-group-photo.jpeg",
    "software-team.jpg",
    "hyped-elon-musk.jpg",
    "isabella-ragnor-working.jpg",
    "spacex-tube-interior.jpg",
    "spacex-falcon.jpg",
    "spacex-tube.jpg",
  ];

  return (
    <Layout>
      <div className="flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-10">
          <div
            style={{ boxShadow: "0px 0px 45px 10px rgba(45, 56, 104, 0.5" }}
            className="rounded-lg w-56 h-84 mr-20 mb-4 relative"
          >
            <Image
              src="/img/projects/hyped/thumbnail.jpeg"
              layout="fill"
              className="rounded-lg"
            ></Image>
          </div>

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

            <div className="flex items-center">
              <Image
                width="40px"
                height="40px"
                className="mr-8"
                src="/img/logos/hyped.png"
              />
              <Image width="170px" height="170px" src="/img/logos/spacex.svg" />
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
            <div className="relative h-64" style={{ width }}>
              <Image
                src={"/img/projects/hyped/" + data.url}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              ></Image>
            </div>
          )}
        ></Masonry>
      </div>
    </Layout>
  );
};

export default Hyped;
