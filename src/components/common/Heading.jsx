export default function Heading({

    subtitle,

    title,

    center=false

}){

return(

<div className={center?"text-center mb-16":"mb-16"}>

<span className="uppercase tracking-[6px] text-accent font-semibold">

{subtitle}

</span>

<h2 className="mt-4 text-4xl lg:text-6xl font-heading font-bold text-primary leading-tight">

{title}

</h2>

</div>

)

}