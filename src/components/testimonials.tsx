interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    image: "../images/profile-1.jpg",
    quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
  {
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    image: "../images/profile-2.jpg",
    quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
  {
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    image: "../images/profile-3.jpg",
    quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  }
]

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      {
        testimonials.map(({name, image, role, quote}: Testimonial) => (
          <div className="bg-navy-850 rounded-sm p-6 w-[280px]">
            <blockquote className="text-[12px] mb-4">{quote}</blockquote>
            <div className="flex gap-2 items-center">
              <img className="size-6 rounded-full" src={image} alt={name} />
              <div>
                <h3 className="font-bold text-[12px]">{name}</h3>
                <p className="text-[.625rem]"> {role}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
