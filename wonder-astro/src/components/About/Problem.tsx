import stats from '../../assets/stats.png';

export default function Problem() {
  return (
    <section className="m-5 border-black  max-w-screen-md bg-white border-2 border-b-4 border-r-4 p-1 rounded-lg">
      <p className="text-center py-2 text-xl text-wonder-purple font-bold">
        <i className="fa-solid fa-circle-question"></i> Problem
      </p>
      <img src={stats} alt="Visually Impaired Statistics in the World. 21.7% of the world is visually impaired" />
      <p className="text-center text-black pt-4">
        To add on to this, Indonesia's Ministry of Health states that up to 1.5% of Indonesians are visually impaired (around 4
        million people!)
      </p>
      <br></br>
      <p className="text-center text-black pb-2">
        Furthermore, braille tools for education are incredibly expensive and hard to find locally
      </p>
    </section>
  );
}
