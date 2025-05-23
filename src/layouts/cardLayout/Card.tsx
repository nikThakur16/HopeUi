
type CardProps = {
  title: string;
  children?: React.ReactNode;
  data: string | number;
};

const Card = ({title,children,data}:CardProps) => {
  return (
    <div className='w-full bg-white rounded-lg md:p-6 p-3'>

      <div  className="flex items-center justify-between md:py-3 py-1">
      <h1 className="text-md font-medium xl:text-2xl">{title}</h1>
      <small className=" text-sm text-gray-500">{data}</small>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card