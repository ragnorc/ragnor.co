import Layout from "../../components/layout";
import Link from "next/link";
import Gallery from "react-photo-gallery";
import Masonry from "react-masonry-css";

export default () => {
  const photos = [
    {
      src: "/img/projects/hyped/spacex-falcon.jpg",
    },
    {
      src: "/img/projects/hyped/hyped-group-photo.jpeg",
    },

    {
      src: "/img/projects/hyped/hyped-elon-musk.jpg",
    },
    {
      src: "/img/projects/hyped/spacex-tube.jpg",
    },
    {
      src: "/img/projects/hyped/software-team.jpg",
    },
    {
      src: "/img/projects/hyped/isabella-ragnor-working.jpg",
    },
    {
      src: "/img/projects/hyped/spacex-tube-interior.jpg",
    },
    {
      src: "/img/projects/hyped/spacex-tube.jpg",
    },
  ];

  return (
    <Layout>
      <div class="flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div class="flex mb-20">
          <img
            style={{ boxShadow: "0px 0px 45px 10px rgba(45, 56, 104, 0.5" }}
            class="rounded-lg w-1/4 mr-20 h-auto hidden md:block xl:block xxl:block"
            src="/img/projects/hyped/thumbnail.jpeg"
          />

          <div>
            <h1 class="text-5xl font-bold mb-8">Hyped</h1>
            <p>
              <strong>Period:</strong> 2017 - 2018
            </p>
            <p>
              <strong>Collaborators:</strong> Hyped - Edinburgh Hyperloop Team
            </p>
            <p>
              <strong>Location:</strong> Los Angeles, CA & Edinburgh, UK
            </p>
            <div class="flex mt-10 items-center">
              <img class="w-1/12 h-auto mr-5" src="/img/logos/hyped.png" />
              <img class="w-2/5 h-auto" src="/img/logos/spacex.svg" />
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
          className="w-auto flex mt-20"
          columnClassName="px-2"
          breakpointCols={{
            default: 3,
            1000: 2,
            700: 1,
            400: 1,
          }}
        >
          {photos.map((photo) => {
            return <img className="rounded-lg mb-4" src={photo.src}></img>;
          })}
        </Masonry>
      </div>
    </Layout>
  );
};
