

export default function PrivacyHeader({title,description,Icon,bgColor="green"}:{title:string,description:string,Icon:React.ElementType,bgColor?:string}) {
  return (
    <div className={`flex items-start gap-4 rounded-2xl border border-${bgColor}-200 bg-linear-to-b from-${bgColor}-50 to-${bgColor}-50/40 p-6 my-8 container`}>
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl `}>
        <Icon className={`h-10 w-10 text-black` }/>
      </div>
      <div>
        <h2 className={`text-lg font-bold text-${bgColor}-950`}>{title}</h2>
        <p className={`mt-1 text-sm leading-relaxed text-${bgColor}-900/80`}>{description}</p>
      </div>
    </div>
  );
}