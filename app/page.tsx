import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { AddBeanDialog } from "@/components/add-bean-dialog";
import { TweetCard } from "@/components/ui/tweet-card";

// 图片资源常量
const imgFotterImage = "https://www.figma.com/api/mcp/asset/9bd0758c-4c0f-41b4-8923-40684599cac4";
const imgCoffeeImage = "https://www.figma.com/api/mcp/asset/ca49d6b7-039b-4787-8ba4-76eb36026128";
const imgCoffeeBlast = "https://www.figma.com/api/mcp/asset/d5504d35-333a-4310-abbf-229bd63779fb";
const imgStylizedCupCoffeeOutCoffeeBeansFlatLay2 = "https://www.figma.com/api/mcp/asset/079e369f-f91d-4d11-9070-67def02b811f";
const imgRectangle7 = "https://www.figma.com/api/mcp/asset/454ddbf3-cd1f-47cb-bdf3-82ec360b8ccc";
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/4de410cb-5257-42b6-8bf5-744355dd1557";
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/2662172c-0d1f-48ca-a98b-13ac5c9950a9";
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/89f18bb1-1972-4491-84fb-8e6f22aeedc7";
const imgCoffeeBeans1 = "https://www.figma.com/api/mcp/asset/28a003bf-7885-46ac-b095-f95f0d017de6";
const imgBadge1 = "https://www.figma.com/api/mcp/asset/e9056e7f-dfd0-4503-a41e-23e87129a771";
const imgCoffeeCup1 = "https://www.figma.com/api/mcp/asset/9e6cf6f2-aabf-4964-a5e9-3e9eb0dc7837";
const imgBestPrice1 = "https://www.figma.com/api/mcp/asset/38a29a58-872f-41a6-8046-9f615f5db5b1";
const imgRectangle14 = "https://www.figma.com/api/mcp/asset/08ee155c-2908-41b7-a2e9-cf8741255e25";
const imgCoffeeBean = "https://www.figma.com/api/mcp/asset/3e03358b-b698-428b-9449-2c8ba2788a32";
const imgCup = "https://www.figma.com/api/mcp/asset/b078e409-5acb-4043-8bf4-262fa3223969";
const imgPngwing1 = "https://www.figma.com/api/mcp/asset/02b5ea97-d0ed-41fa-a9c3-6d4503fc5a72";
const imgStylizedCupCoffeeOutCoffeeBeansFlatLay1 = "https://www.figma.com/api/mcp/asset/19be2c8d-daf7-4458-9359-30ff14580956";
const imgGroup40 = "https://www.figma.com/api/mcp/asset/61bb929c-3d16-4acb-b9ee-485beb2d06a5";
const imgGroup41 = "https://www.figma.com/api/mcp/asset/9d38f214-0ad6-48b5-8ddb-985b44a4934b";
const imgGroup53 = "https://www.figma.com/api/mcp/asset/f9494270-b0b8-44de-814d-cf28a9db6e25";
const imgGroup50 = "https://www.figma.com/api/mcp/asset/94090870-51a8-47c5-b357-de5b3aff273e";
const imgGroup51 = "https://www.figma.com/api/mcp/asset/3d80bc0f-e843-452b-8c2d-3005eb6645df";
const imgGroup52 = "https://www.figma.com/api/mcp/asset/7a31f140-b4b6-494a-9aa4-60c2f80c8f11";

export default function Home() {
  return (
    <div className="bg-[#fffefc] relative w-full">
      {/* Hero Section */}
      <section className="relative h-[768px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imgCoffeeImage}
            alt="Coffee background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <Navbar variant="hero" />
          
          <div className="flex-1 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-2xl">
                <p className="text-white text-xl md:text-2xl font-playfair font-medium mb-4">
                  We've got your morning covered with
                </p>
                <h1 className="text-[120px] md:text-[220px] leading-none font-clicker text-white mb-8">
                  Coffee
                </h1>
                <div className="text-white text-lg md:text-xl font-playfair leading-[34px] mb-8 space-y-2">
                  <p>It is best to start your day with a cup of coffee. Discover the</p>
                  <p>best flavours coffee you will ever have. We provide the best</p>
                  <p>for our customers.</p>
                </div>
                <button className="bg-[#f9c06a] text-[#1e1e1e] font-playfair font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-30">
          <div className="scale-y-[-1]">
            <Image src={imgCoffeeBlast} alt="" width={498} height={272} className="opacity-50" />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-30 rotate-180">
          <Image src={imgCoffeeBlast} alt="" width={478} height={261} className="opacity-50" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#603809] mb-6">
                Discover the best coffee
              </h2>
              <p className="text-[#707070] text-lg md:text-xl font-playfair leading-[34px] mb-8">
                Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
              </p>
              <button className="bg-[#f9c06a] text-[#1e1e1e] font-playfair font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="relative aspect-square">
                <Image
                  src={imgStylizedCupCoffeeOutCoffeeBeansFlatLay2}
                  alt="Coffee cup"
                  fill
                  className="object-cover object-center mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Products Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#603809] text-center mb-4">
            Enjoy a new blend of coffee style
          </h2>
          <p className="text-[#707070] text-lg md:text-xl font-playfair text-center mb-16 max-w-3xl mx-auto">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cappuccino", img: imgRectangle7, price: "$8.50" },
              { name: "Chai Latte", img: imgRectangle9, price: "$8.50" },
              { name: "Macchiato", img: imgRectangle11, price: "$8.50" },
              { name: "Expresso", img: imgRectangle13, price: "$8.50" },
            ].map((coffee, index) => (
              <div key={index} className="bg-[#fff9f1] border border-[rgba(249,192,106,0.42)] rounded-lg overflow-hidden">
                <div className="relative h-[222px]">
                  <Image src={coffee.img} alt={coffee.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#603809] text-xl font-playfair font-bold mb-2">{coffee.name}</h3>
                  <p className="text-[#1e1e1e] text-base font-playfair mb-2">Coffee 50% | Milk 50%</p>
                  <p className="text-[#603809] text-lg font-playfair font-bold mb-4">{coffee.price}</p>
                  <button className="bg-[#f9c06a] text-[#1e1e1e] font-playfair font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow w-full">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#603809] text-center mb-4">
            Why are we different?
          </h2>
          <p className="text-[#707070] text-lg md:text-xl font-playfair text-center mb-16 max-w-3xl mx-auto">
            We don't just make your coffee, we make your day!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Supreme Beans", 
                description: "Beans that provides\ngreat taste",
                img: imgCoffeeBeans1,
                bg: "bg-[#ffeed8]"
              },
              { 
                title: "High Quality", 
                description: "We provide the\nhighest quality",
                img: imgBadge1,
                bg: "bg-[#fff9f1] border border-[rgba(249,192,106,0.42)]"
              },
              { 
                title: "Extraordinary", 
                description: "Coffee like you have\nnever tasted",
                img: imgCoffeeCup1,
                bg: "bg-[#fff9f1] border border-[rgba(249,192,106,0.42)]"
              },
              { 
                title: "Affordable Price", 
                description: "Our Coffee prices are\neasy to afford",
                img: imgBestPrice1,
                bg: "bg-[#fff9f1] border border-[rgba(249,192,106,0.42)]"
              },
            ].map((feature, index) => (
              <div key={index} className={`${feature.bg} rounded-lg p-8 text-center`}>
                <div className="flex justify-center mb-6">
                  <Image src={feature.img} alt={feature.title} width={88} height={88} />
                </div>
                <h3 className="text-[#603809] text-2xl font-playfair font-bold mb-4">{feature.title}</h3>
                <p className="text-[#707070] text-lg font-playfair whitespace-pre-line">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-[#707070] text-lg md:text-xl font-playfair mb-4">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <p className="text-[#603809] text-3xl font-playfair font-bold mb-8">Get started today.</p>
          <button className="bg-[#f9c06a] text-[#1e1e1e] font-playfair font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            Join Us
          </button>
        </div>
      </section>

      {/* Amazing Morning Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgRectangle14} alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#603809] opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Get a chance to have an<br />Amazing morning
              </h2>
              <p className="text-white text-lg md:text-xl font-playfair leading-[34px] mb-8">
                We are giving you are one time opportunity to<br />experience a better life with coffee.
              </p>
              <button className="bg-[#f9c06a] text-[#1e1e1e] font-playfair font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                Order Now
              </button>
            </div>
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image src={imgCoffeeBean} alt="" fill className="object-contain" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <Image src={imgCup} alt="" fill className="object-contain drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Hot Topics Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#603809] text-center mb-4">
            社区热议
          </h2>
          <p className="text-[#707070] text-lg md:text-xl font-playfair text-center mb-16 max-w-3xl mx-auto">
            看看社区里大家都在讨论什么
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <TweetCard id="1976382199965602022" />
            </div>
            <div className="flex justify-center">
              <TweetCard id="1976437762950824362" />
            </div>
            <div className="flex justify-center">
              <TweetCard id="914134197413072898" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 rotate-180">
          <Image src={imgCoffeeBlast} alt="" width={498} height={272} />
        </div>
        <div className="absolute right-0 bottom-0 opacity-20">
          <Image src={imgCoffeeBlast} alt="" width={414} height={226} />
        </div>
        
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#603809] text-center mb-4">
            Our coffee perfection feedback
          </h2>
          <p className="text-[#707070] text-lg md:text-xl font-playfair text-center mb-16 max-w-3xl mx-auto">
            Our customers has amazing things to say about us
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#fff9f1] border border-[rgba(249,192,106,0.42)] rounded-lg p-12 relative">
              <p className="text-[#603809] text-[120px] md:text-[220px] leading-none font-playfair font-bold absolute -top-8 left-8">"</p>
              <p className="text-[#707070] text-lg font-playfair leading-[36px] relative z-10 pt-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....
              </p>
              <div className="flex justify-between items-center mt-8">
                <button className="bg-[#f9c06a] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <Image src={imgGroup40} alt="Previous" width={24} height={24} />
                </button>
                <button className="bg-[#f9c06a] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow rotate-180 scale-y-[-1]">
                  <Image src={imgGroup41} alt="Next" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgRectangle14} alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#603809] opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white text-center mb-4">
            Subscribe to get the Latest News
          </h2>
          <p className="text-white text-lg md:text-xl font-playfair text-center mb-12 max-w-3xl mx-auto">
            Don't miss out on our latest news, updates, tips and special offers
          </p>
          
          <div className="max-w-2xl mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 bg-[#fff9f1] border border-[rgba(249,192,106,0.42)] rounded px-6 py-4 text-lg text-[rgba(0,0,0,0.34)] focus:outline-none focus:ring-2 focus:ring-[#f9c06a]"
            />
            <button className="bg-[#f9c06a] text-[#603809] font-playfair font-bold px-8 py-4 rounded shadow-lg hover:shadow-xl transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#442808] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgFotterImage} alt="" fill className="object-cover object-center mix-blend-overlay opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white text-4xl font-clicker mb-6">Bean Scene</h3>
              <p className="text-white text-sm font-playfair leading-[22px] mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex gap-4">
                <Image src={imgGroup50} alt="Social" width={24} height={24} />
                <Image src={imgGroup51} alt="Social" width={24} height={24} />
                <Image src={imgGroup52} alt="Social" width={24} height={24} />
                <Image src={imgGroup53} alt="Social" width={24} height={24} />
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-2xl font-playfair font-bold mb-6">About</h4>
              <ul className="space-y-3 text-white text-lg font-playfair">
                <li>Menu</li>
                <li>Features</li>
                <li>News & Blogs</li>
                <li>Help & Supports</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-2xl font-playfair font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-white text-lg font-playfair">
                <li>How we work</li>
                <li>Terms of service</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-2xl font-playfair font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-white text-lg font-playfair">
                <li>Akshya Nagar 1st Block 1st Cross,<br />Rammurthy nagar, Bangalore-560016</li>
                <li>+1 202-918-2132</li>
                <li>beanscene@mail.com</li>
                <li>www.beanscene.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* 添加咖啡豆悬浮按钮 */}
      <AddBeanDialog />
      </div>
  );
}
