export default function NFTPreviewCard() {
  return (
    <div className="max-w-[350px] bg-[#15263F] rounded-[15px] shadow-[0_25px_50px_rgba(0,0,0,0.0952917)] p-6">
      <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer mb-6">
        <div className="hidden group-hover:grid absolute top-0 left-0 right-0 bottom-0 place-content-center bg-[#00FFF8] bg-opacity-50">
          <svg 
            width="48" 
            height="48" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h48v48H0z"/>
              <path 
                d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" 
                fill="#FFF" 
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>
        <img
          src="image-equilibrium.jpg" 
          alt="" 
        />
      </div>
      <div>
        <h4 className="inline-block text-white hover:text-[#00FFF8] font-semibold text-[22px] leading-7 cursor-pointer">
          <a href="#">Equilibrium <span>&#35;3429</span>
          </a>
        </h4>
        <p className="text-[#8BACD9] font-light text-[18px] leading-[26px] mt-3 lg:mt-4">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex items-center justify-between my-4 lg:my-6">
          <p className="flex items-center gap-x-1 text-[#00FFF8] font-semibold text-[16px] leading-5">
            <svg 
              width="11" 
              height="18" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" 
                fill="#00FFF8"
              />
            </svg>
            0.041 ETH
          </p>
          <p className="flex items-center gap-x-1 text-[#8BACD9] text-[16px] leading-5">
            <svg 
              width="17" 
              height="17" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" 
                fill="#8BACD9"
              />
            </svg>
            3 days left</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4 border-t border-[#2E405A] pt-4 lg:pb-2">
        <img 
          className="w-[33px] aspect-square"
          src="image-avatar.png" 
          alt="" 
        />
        <p className="text-[#8BACD9] text-[16px] leading-5">
          Creation of <a className="text-white hover:text-[#00FFF8] cursor-pointer" href="#">Jules Wyvern</a>
        </p>
      </div>
    </div>
  )
}