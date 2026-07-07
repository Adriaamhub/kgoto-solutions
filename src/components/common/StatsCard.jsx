import CountUp from "react-countup";

export default function StatsCard({

number,

suffix,

title

}){

return(

<div className="text-center">

<h2 className="text-5xl font-bold text-primary font-number">

<CountUp

end={number}

duration={3}

/>

{suffix}

</h2>

<p className="mt-3 text-grayText">

{title}

</p>

</div>

)

}