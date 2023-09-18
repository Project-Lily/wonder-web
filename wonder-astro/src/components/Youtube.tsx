export default function Youtube() {
  return (
    <section className="m-5 max-w-screen-md border-black bg-wonder-purple border-2 border-b-4 border-r-4 p-1 rounded-lg aspect-video">
      <p className=" text-center pb-2 text-white font-bold">
        <i className="fa-solid fa-keyboard"></i> What We Have
      </p>
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/JViAbPYdxp4?si=UnA2XHeCDHyqPzFr"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </section>
  );
}
