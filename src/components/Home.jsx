import React from "react";

function Home(){
    return(
        <section className="min-h-max">
            <div>
                <img src="./assets/image9.jpg" alt="home" className="w-full h-[40rem] bg-blend-multiply bg-black-900"/>
                <div className="container flex font-bold  flex-col mx-auto max-w-7xl left-0 right-0 items-center justify-center p-5 absolute top-[40%] ">
                    <h1 className="text-white text-4xl/tight sm:text-5xl/tight lg:text-5xl/tight xl:text-6xl/tight ">
                    Welcome to Pine Grove Lodge
                    </h1>
                    <h4 className= "text-white sm:text-md/tight lg:text-2xl/tight xl:text-4xl/tight pt-5">
                    Experience Nature's Tranquility
                    </h4>    
                </div>
                
            </div>
            <div className="container text-center mx-auto flex flex-col my-10 max-w-5xl">
                <p className="text-md text-[rgb(26,22,18)]">Nestled amidst the lush greenery of Nairobi, Pine Grove Lodge offers a serene retreat from the vibrant city life. Our charming lodge blends rustic elegance with modern comforts to ensure a memorable stay. Whether you're seeking a romantic getaway, a family vacation, or a solo retreat, Pine Grove Lodge promises a rejuvenating experience amidst the tranquility of nature right in the heart of Nairobi!
                </p>
            </div>
            <div className="container flex flex-col">
                <div className="text-center">
                    <h6 className="text-xl">Unparalleled Luxury & Comfort</h6>
                    <div>

                    </div>
                </div>
                
            </div>
           
        </section>
    )
}

export default Home;