// export default function MyDiv3(props) {
export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="flex felx-col p-5 m-10
                    w-3/4 h-3/4
                    bg-lime-500 text-white">
        {/* {`${props.d1} > ${props.d2} > ${props.d3}`} */}
        {`${d1} > ${d2} > ${d3}`}
    </div>
  )
}
