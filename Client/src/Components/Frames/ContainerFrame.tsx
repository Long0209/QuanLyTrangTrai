
// export default class extends Component 
// export default class extends Component use ContainerFrameComponent
function ContainerFrame(props: any) {

    return (
        <div className=" text-center items-center w-min flex flex-col">
            <div className="flex justify-center items-center border border-stone-600 shadow p-auto w-20 h-20 rounded-full">
                <div className="flex justify-center items-center text-sky-400">
                    {/* props value */}
                    <span className="text-center items-center w-auto h-auto text-2xl italic font-bold ">
                        {
                            props.value // giá trị hiện thị số
                        }
                    </span>
                    {/* props icon fram */}
                    <span className="text-blue-700 font-bold text-4xl">
                        {
                            props.icons // hiện thi icons components
                        }
                    
                    </span>
                </div>
            </div>
            {/* title name farm  */}
            <div className="w-max font-mono text-md text-purple-700 text-center items-center ">
                    <span className="text-sm font-sans font-bold"> 
                        {
                            props.title // hiện thị tiêu đề thông số, trực quan ..
                        }
            
                    </span>
                </div>
        </div>
    )
}

export default ContainerFrame;