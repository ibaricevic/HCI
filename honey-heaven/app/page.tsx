import Image from "next/image";

export default function Home() {
  return (
    <div>

      <div className="flex flex-col justify-between gap-2">
        <a href="#first">First Section</a>
        <a href="#second">Second Section</a>
        <a href="#third">Third Section</a>
        <a href="#fourth">Fourth Section</a>
      </div>

      <section id="first" className="min-h-screen">I am first section</section>
      <section id="second" className="min-h-screen">I am second section</section>
      <section id="third" className="min-h-screen">I am third section</section>
      <section id="fourth" className="min-h-screen">I am fourth section</section>
    </div>
  );
}
