import { star } from "../assets/icons"

const ReviewCard = ({ customerName, img, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img draggable={false} src={img} alt='customer' className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gaap-2">
            <img draggable={false} src={star} width={24} height={24} className="object-contain m-0"/>
            <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin font-bold text-3xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard