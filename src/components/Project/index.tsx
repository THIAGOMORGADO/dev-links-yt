interface Props {
  image: string;
  name: string;
}

export function Project({ image, name }: Props) {
  return (
    <button className="w-[70px] transition-all 500 hover:scale-105 items-center ">
      <img src={image} />
      <p className="overflow-hidden py-1 text-[11px] whitespace-nowrap text-ellipsis">
        {name}
      </p>
    </button>
  );
}
