export function UsedSpaceWidget(){
    return(
        <>
        <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-0.5">
            <span className="text-sm/5 font-medium  text-violet-800"> Used Space</span>
            <p className="text-sm/5 text-violet-500">Your team has used 25% of your space. Need more?</p>

        </div>
    </div>
    <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-1/4 rounded-full bg-violet-600 "></div>
    </div>

    <div className="space-x-3">
        <button type="button" className="text-sm/5 text-violet-500 hover:text-violet-800">Dismiss</button>
        <button type="button"  className="text-sm/5 text-violet-700 hover:text-violet-900">Updgrade plan</button>

    </div>
    </>
    )
}