const PromoTop = () => {
  return (
    <div className="flex items-center justify-between min-h-10 md:h-12 bg-(--secondary) px-2">
      <div className="flex-1"></div>
      <h1 className="font-extrabold text-center text-text py-2 font-nunito text-xs sm:text-sm leading-snug">
        GET IT FAST!! <br className="sm:hidden" />
        <span className="hidden sm:inline"> </span>
        With free delivery on orders $39+
      </h1>
      <div className="flex-1"></div>
    </div>
  );
};

export default PromoTop;
