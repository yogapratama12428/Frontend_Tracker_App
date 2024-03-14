const CardStatus = () => {
  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <div className="bg-white  dark:bg-gray-800 rounded-xl shadow-xl px-8 py-6 flex items-center">
        <div className="">
            <img 
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                className="border rounded  w-24 h-auto"
            />
        </div>
        <div className="ml-6">
            <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Car</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal  leading-5">4</p>
        </div>
    </div>
  
</div>
  )
}

export default CardStatus