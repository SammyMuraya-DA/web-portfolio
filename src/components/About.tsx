
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-foreground/80">
            Hi, I’m Sammy Muraya—a Data Engineer and Analyst with over 2 years of experience turning raw data into actionable insights.
            I hold a Bachelor of Science in Business Information Systems from Jaramogi Oginga Odinga University of Science and Technology.
            I’ve worked across industries, building data pipelines, uncovering trends, and helping teams make data-driven decisions.
            My technical toolkit includes Python, SQL, Pandas, Airflow, Power BI, and AWS, among others.
            </p>
            <p className="text-lg mb-6 text-foreground/80">
            As an intermediate data professional, I’ve contributed to projects across diverse industries,
             applying data-driven approaches to support business decision-making and solve real-world challenges
            </p>
            <p className="text-lg text-foreground/80">
              When I'm not coding or analyzing data, you can find me hiking in the mountains, 
              reading about the latest advancements in AI, or contributing to open-source projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Card className="border-t-4 border-t-accent">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <svg className="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Data Analysis</h3>
                <p className="text-center text-foreground/70">
                  Expert in extracting insights from complex datasets using statistical methods
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-ds-light-blue">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-ds-light-blue/10 rounded-full">
                    <svg className="w-8 h-8 text-ds-light-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Machine Learning</h3>
                <p className="text-center text-foreground/70">
                  Building and deploying powerful ML models that deliver results
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-ds-dark-blue">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-ds-dark-blue/10 rounded-full">
                    <svg className="w-8 h-8 text-ds-dark-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Data Visualization</h3>
                <p className="text-center text-foreground/70">
                  Creating clear, impactful visualizations that tell compelling stories
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-ds-purple">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-ds-purple/10 rounded-full">
                    <svg className="w-8 h-8 text-ds-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Big Data</h3>
                <p className="text-center text-foreground/70">
                  Processing and analyzing large-scale datasets efficiently
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
