import "./hero.css";
import hero_pic from "../../../assets/png-clipart-the-dating-playbook-for-men-a-proven-7-step-system-to-go-from-single-to-the-woman-of-your-dreams-amazon-com-woman-text-people-removebg-preview.png";
export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="my-6 w-11/12 md:w-10/12  mx-auto rounded-xl flex flex-col-reverse items-center    py-10 md:flex-row   md:justify-between"
      >
        <div className=" md:pl-20 flex flex-col gap-5 items-center md:items-start">
          <h1 className=" font-playfair text-3xl text-center md:text-left md:text-5xl font-bold ">
            Books to freshen up your bookshelf
          </h1>
          <div>
            <button className="btn  bg-primary text-white">
              View The List
            </button>
          </div>
        </div>
        <figure>
          <img className="object-cover" src={hero_pic} alt="" />
        </figure>
      </section>
    </>
  );
}
