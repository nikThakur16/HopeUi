
type CardProps = {
  title: number;
  children?: React.ReactNode;
  data: string | number;
};

const Card = ({title,children,data}:CardProps) => {
  return (
    <div className='w-full bg-white p-2'>

      <div  className="flex items-center justify-between py-3">
      <h1 className="text-md font-medium ">{title}</h1>
      <small className=" text-sm text-gray-500">{data}</small>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card