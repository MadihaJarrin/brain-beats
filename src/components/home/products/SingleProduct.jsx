
export default function SingleProduct() {


    return (
        <div className="card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-2xl mx-auto">
            <figure className="p-4">
                <img
                    src=""
                    alt="Memory Chess"
                    className="rounded-xl w-full h-56 sm:h-64 object-cover"
                />
            </figure>
            <div className="card-body px-4 sm:px-6 md:px-8">
                <h2 className="card-title text-base sm:text-lg md:text-xl font-semibold text-gray-800">Chess</h2>
                <p className="text-sm sm:text-base text-gray-600">An exciting memory-boosting game for kids and adults alike.</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-primary font-bold text-sm sm:text-base">৳ 999</span>
                    <button className="btn btn-primary btn-sm sm:btn-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
}