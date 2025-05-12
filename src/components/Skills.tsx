
import { Progress } from "@/components/ui/progress";

const technicalSkills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "Data Visualization", level: 85 },
  { name: "SQL", level: 88 },
  { name: "TensorFlow / PyTorch", level: 82 },
  { name: "Deep Learning", level: 80 },
  { name: "R", level: 75 },
  { name: "Big Data (Spark)", level: 78 },
];

const tools = [
  "Jupyter Notebook",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Tableau",
  "Power BI",
  "Docker",
  "Git",
  "AWS",
  "Google Cloud",
  "Kubernetes",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/70">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-ds-gray rounded-full text-foreground/80 border border-border transition-colors hover:bg-accent/5"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-6 mt-10">Education & Certifications</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h4 className="font-medium">B.S. in Business Information Systems</h4>
                  <p className="text-foreground/70">Jaramogi Oginga Odinga University Of Science and Technology  | 2018 - 2017</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h4 className="font-medium">Google Professional Data Analytics</h4>
                  <p className="text-foreground/70">Google Data analysis | 2025</p>
                </div>
                <div>
                  <h4 className="font-medium">Certificate in Cloud and Network Security</h4>
                  <p className="text-foreground/70">Cybershujaa USIU program | 2024 Jan - 2024 Aug</p>
                </div>
              </div>              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h4 className="font-medium">Project Management</h4>
                  <p className="text-foreground/70">Coursera | 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
