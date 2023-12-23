function OrderTable(props) {
  const { order } = props;

  return (
    <div className="max-w-[1000px] w-full mx-auto flex flex-col items-center justify-start gap-2 text-center mb-7">
      <p>{`Ordered On :- ${order.date} ${order.time}`}</p>

      <div className="flex flex-col items-center justify-start">
        {/* head */}
        <div className="w-full px-4 py-2 grid grid-cols-[minmax(0,410px),minmax(0,150px),minmax(0,130px),minmax(0,200px)] gap-1 text-right border-2-[#7064e5] bg-[#7064e5] rounded-tl-[10px] rounded-tr-[10px] text-white">
          <span className="text-left">Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>

        {/* body */}
        <div className="w-full grid grid-cols-1">
          {order.items.map((item) => (
            <div
              className="w-full px-4 py-2 grid grid-cols-[minmax(0,410px),minmax(0,150px),minmax(0,130px),minmax(0,200px)] text-center border-l-2 border-b-2 border-r-2"
              key={item.id}
            >
              <p className=" text-left line-clamp-1 border-r-2">
                {item.title.length <= 45
                  ? item.title
                  : item.title.substring(0, 43) + "..."}
              </p>
              <span className="text-right">${item.price}</span>
              <span className="text-right">{item.quantity}</span>
              <span className="text-right">
                ${Number((item.quantity * item.price).toFixed(2))}
              </span>
            </div>
          ))}
        </div>

        {/* foot */}
        <div className="w-full grid grid-cols-2 px-4 py-2 border-l-2 border-b-2 border-r-2 rounded-bl-[10px] rounded-br-[10px]">
          <span className="text-left font-bold font-mono">Total Price</span>
          <span className="text-right font-bold font-mono" colSpan={4}>
            ${Number(order.total.toFixed(2))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
