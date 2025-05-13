
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Predictive Sales Analytics",
    description:
      "Developed a machine learning model to forecast sales with 92% accuracy, helping a retail client optimize inventory management and increase revenue by 15%.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "TensorFlow", "Time Series", "Pandas"],
    link: "#",
  },
  {
    id: 2,
    title: "Customer Segmentation Engine",
    description:
      "Created a clustering algorithm that identified 5 distinct customer segments, enabling targeted marketing campaigns that improved conversion rates by 23%.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["Scikit-learn", "K-means", "Matplotlib", "SQL"],
    link: "https://github.com/SammyMuraya-DA/web-portfolio",
  },
  {
    id: 3,
    title: "Customer Churn Analysis",
    description:
     " Using simulated telecom data, I built a logistic regression model to classify customer churn. The project involved performing exploratory data analysis (EDA) with visual tools such as box plots, histograms, and correlation heatmaps to uncover patterns and relationships in the dataset. The model achieved solid classification performance, demonstrating strong precision, recall, and accuracy. Additionally, I automated the entire workflow—from data preprocessing to model evaluation—ensuring reproducibility and efficiency in the analysis process.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Seaborn", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter Notebook"],
    link: "https://github.com/SammyMuraya-DA/web-portfolio",
  },
  {
    id: 4,
    title: "Anomaly Detection in Financial Transactions",
    description:
      "Implemented an anomaly detection system that identified fraudulent transactions with 95% precision, saving the client an estimated $2.3M annually.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Isolation Forest", "XGBoost", "Feature Engineering"],
    link: "https://github.com/SammyMuraya-DA/web-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-ds-gray py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button asChild className="w-full">
                  <a href={project.link}>View Project</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
