import { motion } from "framer-motion";

export default function GlassCard({

children

}){

return(

<motion.div

whileHover={{

y:-10,

}}

className="

rounded-3xl

bg-white/70

backdrop-blur-xl

border

border-white/40

shadow-card

p-8

transition

duration-300

"

>

{children}

</motion.div>

)

}