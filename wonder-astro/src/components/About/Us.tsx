import group from '../../assets/group.webp';

export default function Us() {
  return (
    <section className="m-5 flex flex-col justify-center items-center border-black max-w-screen-md bg-white border-2 border-b-4 border-r-4 p-1 rounded-lg ">
      <p className="text-center py-2 text-xl text-wonder-purple font-bold">
        <i className="fa-solid fa-person-snowboarding"></i> About Us
      </p>
      <img alt={"(Left to right)Jason Jeremy, Aric Hernando (on the screen), Philipus Adriel, Jason Hailianto"} src={group} className="w-3/4 object-cover rounded-lg border-1"></img>
      <p className="text-center text-black py-2">
        We are 4 young Indonesian engineers creating solutions to help visually impaired and deafblind individuals. Through the use of assistive
        technologies, we aim to create change through inclusivity.
      </p>
    </section>
  );
}
