
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-agro-background py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <rect width="10" height="10" fill="none" />
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agro-dark mb-6">
                  Smart Farming with 
                  <span className="text-agro-primary"> AgroBloom</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Optimize your farming decisions with our AI-powered recommendations for crop selection, yield prediction, and fertilization strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/register">
                    <Button className="bg-agro-primary hover:bg-agro-dark text-lg py-6 px-8">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline" className="border-agro-primary text-agro-primary hover:bg-agro-light/20 text-lg py-6 px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-agro-primary/20 rounded-full blur-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" 
                    alt="Smart Farming" 
                    className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-bold text-3xl lg:text-4xl text-agro-primary">98%</div>
                <p className="text-sm text-gray-600 mt-2">Prediction Accuracy</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl lg:text-4xl text-agro-primary">5000+</div>
                <p className="text-sm text-gray-600 mt-2">Farmers Assisted</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl lg:text-4xl text-agro-primary">20%</div>
                <p className="text-sm text-gray-600 mt-2">Yield Increase</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl lg:text-4xl text-agro-primary">30%</div>
                <p className="text-sm text-gray-600 mt-2">Cost Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-agro-dark mb-4">Our Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AgroBloom provides a comprehensive suite of AI-powered tools to optimize your farming operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-agro-dark mb-3">Crop Recommendation</h3>
                <p className="text-gray-600 mb-4">
                  Get customized crop suggestions based on your soil composition, climate conditions, and location data.
                </p>
                <Link to="/crop-recommendation" className="text-agro-primary font-medium hover:text-agro-dark">Learn more →</Link>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                    <path d="m3 22 1.5-1.5M5.45 17.11l2.62-2.61m.7-9 3.1-3.1c.34-.34.77-.51 1.26-.51.97 0 1.63.71 2.06 1.84l.23.58" />
                    <path d="m18.89 8.1 3.1-3.1m-4.9 4.9-3.33 3.33m-1.94 1.94L8.31 19" />
                    <path d="m2 22 5-5 2-4 4-2 5-5M12.67 13.67l2.83 2.83a2.5 2.5 0 0 0 3.53 0l.71-.71a2.5 2.5 0 0 0 0-3.53l-2.83-2.83" />
                    <path d="M21.5 19.5c.5-1 .5-2.5-.5-3.5s-2.5-1-3.5-.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-agro-dark mb-3">Yield Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Accurately predict your harvest yields using advanced machine learning algorithms and historical data.
                </p>
                <Link to="/yield-prediction" className="text-agro-primary font-medium hover:text-agro-dark">Learn more →</Link>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Z" />
                    <path d="M6 3v10a2 2 0 0 0 2 2h12" />
                    <path d="M5 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
                    <path d="M22 13H10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-agro-dark mb-3">Fertilizer Recommendation</h3>
                <p className="text-gray-600 mb-4">
                  Get precise fertilizer application advice tailored to your specific crop and soil needs.
                </p>
                <Link to="/fertilizer-recommendation" className="text-agro-primary font-medium hover:text-agro-dark">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-agro-dark mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is designed to be simple and effective, providing actionable insights in just a few steps.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Steps */}
              <div className="md:w-1/2 space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-agro-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-agro-dark">Enter Your Farm Data</h3>
                    <p className="text-gray-600 mt-1">
                      Input information about your soil, location, and current farming practices.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-agro-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-agro-dark">Get AI Analysis</h3>
                    <p className="text-gray-600 mt-1">
                      Our AI algorithms analyze your data and compare it against thousands of data points.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-agro-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-agro-dark">Receive Recommendations</h3>
                    <p className="text-gray-600 mt-1">
                      Get personalized recommendations for crops, yield predictions, and fertilizer applications.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-agro-primary text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-agro-dark">Implement and Monitor</h3>
                    <p className="text-gray-600 mt-1">
                      Apply our recommendations and track your results over time to optimize performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1500440853933-5796b0c1974d?q=80&w=600&auto=format&fit=crop" 
                  alt="Farmer using AgroBloom" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-agro-dark mb-4">What Farmers Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from farmers who have transformed their practices using our platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?q=80&w=50&auto=format&fit=crop" 
                      alt="Farmer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Michael Johnson</h4>
                    <p className="text-sm text-gray-600">Rice Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The crop recommendation system helped me switch to a more profitable rice variety that's better suited for my soil. My yields have increased by 25% in just one season."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1591975863137-bd7d26d0a364?q=80&w=50&auto=format&fit=crop" 
                      alt="Farmer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Williams</h4>
                    <p className="text-sm text-gray-600">Wheat Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The fertilizer recommendations saved me money and improved my wheat quality. The step-by-step application schedule made it easy to implement changes."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=50&auto=format&fit=crop" 
                      alt="Farmer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">David Chen</h4>
                    <p className="text-sm text-gray-600">Maize Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The yield prediction was spot on! I was able to plan my storage and sales strategy better, which resulted in getting the best market prices for my maize."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-agro-primary px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Farming?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of farmers who are using data-driven insights to improve their yields and reduce costs.
            </p>
            <Link to="/register">
              <Button className="bg-white text-agro-primary hover:bg-gray-100 text-lg py-6 px-8">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
