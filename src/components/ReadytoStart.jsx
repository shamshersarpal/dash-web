export default function ReadytoStart() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto w-full px-4 pb-20">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16 readto-start-bg"
           
        >
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Start Here?
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Join thousands of creators who are already transforming their <br></br>
              digital presence with DASH
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto mt-8">
              <input
                type="email"
                className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 h-12 sm:h-14 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus-visible:ring-white/50 focus-visible:border-white/50 backdrop-blur-sm rounded-xl"
                placeholder="Enter you Email"
                defaultValue=""
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 h-12 sm:h-14 px-8 sm:px-10 font-semibold text-base rounded-xl shadow-lg hover:shadow-xl bg-white cursor-pointer"
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
