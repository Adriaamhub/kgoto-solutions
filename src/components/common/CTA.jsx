import Button from "./Button";

export default function CTA(){

return(

<section className="py-24 bg-primary text-white">

<div className="container-custom">

<div className="rounded-[40px] bg-gradient-to-r from-primary to-secondary p-16">

<div className="grid lg:grid-cols-2 items-center gap-10">

<div>

<h2 className="text-5xl font-bold">

Need Professional Security

or Construction Services?

</h2>

<p className="mt-6 opacity-90">

Let's discuss your project and receive a free quotation today.

</p>

</div>

<div className="flex lg:justify-end">

<Button

text="Request Quote"

link="/contact"

/>

</div>

</div>

</div>

</div>

</section>

)

}